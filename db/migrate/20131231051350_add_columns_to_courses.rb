class AddColumnsToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :cost, :integer
  end
end
