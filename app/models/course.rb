class Course < ActiveRecord::Base
  has_many :applicant_courses
  has_many :applicants, through: :applicant_courses
end
