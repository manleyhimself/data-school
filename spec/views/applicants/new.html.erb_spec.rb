require 'spec_helper'

describe "applicants/new" do
  before(:each) do
    assign(:applicant, stub_model(Applicant,
      :email => "",
      :name => "MyString",
      :slug => "MyString",
      :phone_number => 1,
      :comment => "MyText"
    ).as_new_record)
  end

  it "renders new applicant form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", applicants_path, "post" do
      assert_select "input#applicant_email[name=?]", "applicant[email]"
      assert_select "input#applicant_name[name=?]", "applicant[name]"
      assert_select "input#applicant_slug[name=?]", "applicant[slug]"
      assert_select "input#applicant_phone_number[name=?]", "applicant[phone_number]"
      assert_select "textarea#applicant_comment[name=?]", "applicant[comment]"
    end
  end
end
