* Database initialization

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|text|text|null: false|
|image|text|null: false|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|


### Association
  has_many :members
- has_many :users, through: :members
- has_many :messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
  has_many :members
- has_many :groups, through: :members
- has_many :messages

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
