# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :applicant do
    email ""
    name "MyString"
    slug "MyString"
    phone_number 1
    comment "MyText"
  end
end
