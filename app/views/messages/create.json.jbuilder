  json.text  @message.text
  json.user_id  @message.user.id
  json.name  @message.user.name
  json.image  @message.image.url
  json.date  @message.created_at.in_time_zone("Asia/Tokyo").strftime("%Y年/%m月/%d日 %H時:%M分")
  json.id   @message.id

