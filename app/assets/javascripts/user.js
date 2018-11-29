$(function(){

    var search_list = $("#user-search-result");

    function appendUser(user){
      var html =
      `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">
          ${user.name}
        </p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>
        追加
        </a>
      </div>`
      return html;
    };

    function buildHTML(id, name) {
    var html = `
                <div class="chat-group-user clearfix" id=chat-group-user-${id}>
                  <input type="hidden" name="group[user_ids][]" value="${id}">
                  <p class="chat-group-user__name">
                  ${name}
                  </p>
                  <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove" data-user-id="${id}">
                  削除
                  </a>
                </div>`
    return html
  }


  $("#user-search-field").on("keyup",function(e){
    var write = $("#user-search-field").val();
    $.ajax({
    type:        "GET",
    url:         "/users",
    data:        {name: write},
    dataType:    "json"
  })
    .done(function(users){
      $("#user-search-result").empty();
     if (write.length != 0 && users.length != 0 ) {
      users.forEach(function(user){
        var html = appendUser(user)
        search_list.append(html);
    });
   }
     else {
      alert('ユーザー検索に失敗しました');
      }
    })
  });


 $(document).on('click','.user-search-add', function() {
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
    var insertHTML = buildHTML(id, name);
    $('.chat-group-user').append(insertHTML);
    $(this).parent('.chat-group-user').remove();
  });

   $(document).on('click', '.user-search-remove', function() {
    var id = $(this).data('user-id');
    $(`#chat-group-user-${id}`).remove();
  });
  });





