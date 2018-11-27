$(function(){
  function buildHTML(message){
    var message_image = ''
    if (message.image){
    message_image = `<img src="${message.image}" class="lower-message__image" >`
    }

    var html =
    `<div class="message">
        <div class = "message-header-user-name">
            ${message.user_name}
        </div>
          <div class = "message-header-date">
            ${message.created_at}
          </div>

        <div class = "message-body">
          <p class ="message-body-content">${message.text}</p>
        </div>
        ${message_image}
      </div>`
    return html;
    }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")
    console.log();
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
      })
    .fail(function(){
          alert('error');
     $('input').prop('disabled', false);
      })
      return false;
      })
    });
