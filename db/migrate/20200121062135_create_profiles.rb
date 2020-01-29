class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :photo
      t.string :about
      t.string :job_title
      t.boolean :is_ok
      t.integer :user_id
      t.timestamps
    end
  end
end
