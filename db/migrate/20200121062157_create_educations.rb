class CreateEducations < ActiveRecord::Migration[6.0]
  def change
    create_table :educations do |t|
      t.string :school
      t.string :degree
      t.integer :start
      t.integer :end
      t.boolean :is_ok
      t.integer :user_id
      t.string :description
      t.string :feedback
      t.timestamps
    end
  end
end
