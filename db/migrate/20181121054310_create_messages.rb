class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.references :user ,  null: false , foreign_key: true
      t.references :group ,  null: false , foreign_key: true
      t.text :image
      t.text :text
      t.timestamps
    end
  end
end
