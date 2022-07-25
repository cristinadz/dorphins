class CreateRuns < ActiveRecord::Migration[7.0]
  def change
    create_table :runs do |t|
      t.integer :miles
      t.integer :total_time
      t.datetime :date
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :plan_id

      t.timestamps
    end
  end
end
