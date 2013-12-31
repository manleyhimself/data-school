class CreateApplicantCourses < ActiveRecord::Migration
  def change
    create_table :applicant_courses do |t|
      t.references :course, index: true
      t.references :applicant, index: true
      

      t.timestamps
    end
  end
end
