class AddIndexToScores < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
    t.string :name,               null: false, unique: true
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
  end
end

end
