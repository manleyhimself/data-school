# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :applicant_course, :class => 'ApplicantCourses' do
    course_id 1
    applicant_id 1
  end
end
