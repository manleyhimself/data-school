class AddColumnsToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :session_cost, :integer
    add_column :courses, :class_cost, :integer
  end
end
