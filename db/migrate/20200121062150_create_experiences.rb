class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :company
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
