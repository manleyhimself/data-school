# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :applicant_course, :class => 'ApplicantCourses' do
    course nil
    applicant nil
    r_class_payment 1
    python_class_payment 1
    r_session false
    python_session false
  end
end
