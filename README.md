# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|name|string|null: false|

### Association
- belongs_to :groups
- belongs_to :user
- belongs_to :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|members_id|integer|null: false, foreign_key: true|
|text|text|null: false|
|image|text|null: false|

### Association
- belongs_to :user
- belongs_to :members
- has_many :groups, through: members

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|members_id|integer|null: false, foreign_key: true|
|title|string|null: false|


### Association
- has_many :users, through: members
- has_many :members
- has_many :messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false, foreign_key: true|
|encrypted_password|string|null: false, foreign_key: true|
|reset_password_token|string|null: false, foreign_key: true|
|reset_password_sent_at|datetime|null: false, foreign_key: true|
|remember_created_at|datetime|null: false, foreign_key: true|
|name|string|null: false|

### Association
- has_many :groups, through: members
- has_many :members
- has_many :messages

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
