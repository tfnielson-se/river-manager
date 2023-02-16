class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.boolean :is_admin
      t.boolean :is_employee

      t.timestamps
    end
  end
end
