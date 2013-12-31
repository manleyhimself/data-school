class CreateApplicants < ActiveRecord::Migration
  def change
    create_table :applicants do |t|
      t.string :email
      t.string :name
      t.string :slug
      t.column :phone_number, :bigint
      t.text :comment

      t.timestamps
    end
  end
end
