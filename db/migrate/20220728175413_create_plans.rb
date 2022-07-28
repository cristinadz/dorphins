class CreatePlans < ActiveRecord::Migration[7.0]
  def change
    create_table :plans do |t|
      t.string :name
      t.integer :number_of_runs
      t.string :category
      t.text :description

      t.timestamps
    end
  end
end
