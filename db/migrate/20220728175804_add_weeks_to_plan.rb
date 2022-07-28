class AddWeeksToPlan < ActiveRecord::Migration[7.0]
  def change
    add_column :plans, :weeks, :integer
  end
end
