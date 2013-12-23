class Applicant < ActiveRecord::Base
  has_many :applicant_courses
  has_many :courses, through: :applicant_courses
end
