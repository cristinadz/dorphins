class AddImgToPlan < ActiveRecord::Migration[7.0]
  def change
    add_column :plans, :img, :string
  end
end
