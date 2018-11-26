$(function(){
  $function buildHTML(comment){
    var html = `.message-header-user-name
    = message.user_name
    .message-header-date
      = message.created_at
  .message-body
    - if message.text.present?
      %p.message-body-content
        = message.text
  = image_tag message.image.url, class: 'lower-message__image' if message.image.present?
`
    return html;
  }


  $('#new_message').on('submit', function(e){
    // e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")
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
  $(".form__message").append(html)
  $(".message").val("")
    })
.fail(function(){
      alert('error');
    })
  })
});
