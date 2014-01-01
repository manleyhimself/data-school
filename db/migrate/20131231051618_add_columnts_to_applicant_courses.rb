class AddColumntsToApplicantCourses < ActiveRecord::Migration
  def change
    add_column :applicant_courses, :payment_confirmed, :boolean
  end
end
