class CreateApplicantCourses < ActiveRecord::Migration
  def change
    create_table :applicant_courses do |t|
      t.references :course, index: true
      t.references :applicant, index: true
      t.integer :r_class_payment
      t.integer :python_class_payment
      t.boolean :r_session
      t.boolean :python_session
      t.text :comment

      t.timestamps
    end
  end
end
