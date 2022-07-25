class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :profile_img
      t.string :password_digest
      t.boolean :newsletter
      t.integer :total_miles
      t.string :experience
      t.text :bio
      t.integer :plan_id

      t.timestamps
    end
  end
end
