$(function(){
  function buildHTML(message){
    var message_image = ''
    if (message.image){
    message_image = `<img src="${message.image}" class="lower-message__image" >`
    }

    var html =
    `<div class="message" data-message-id = ${message.id} >
        <div class = "message-header-user-name">${message.name}</div>
        <div class = "message-header-date">${message.date}</div>
        <div class = "message-body">
        <p class ="message-body-content">${message.text}</p>
        ${message_image}
        </div>
      </div>`

    return html;
    }

  $('#new_message').on('submit', function(e){
    // e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")
    $('form__submit').removeAttr('data-disable-with');

    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".content").append(html);
      $(".form__message").val("")
      $('.content').animate({scrollTop: $(".content")[0].scrollHeight}, 1500);
      $('input').prop('disabled', false);
      $("#new_message")[0].reset();
    })
    .fail(function(){
          alert('error');
      $('input').prop('disabled', false);
    })
      return false;
    })

    var interval = setInterval(function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
        $.ajax({
          type: "GET",
          url: location.href,
          dataType: "json"
        })
        .done(function(json_new_messages) {
          var id = $('.message').last().data('message-id')
          var insertHTML = '';
          json_new_messages.messages.forEach(function(message) {
            if (message.id > id ) {
              insertHTML += buildHTML(message);
            }
          });
          $('.content').append(insertHTML);
        })
        .fail(function(json_new_messages) {
          console.log('自動更新に失敗しました');
        });
      } else {
        clearInterval(interval);
      }
    }, 5000 );
});

