class AddColumntsToApplicantCourses < ActiveRecord::Migration
  def change
    add_column :applicant_courses, :paid, :integer
    add_column :applicant_courses, :payment_confirmed, :boolean
  end
end
