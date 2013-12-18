require 'spec_helper'

describe "applicants/edit" do
  before(:each) do
    @applicant = assign(:applicant, stub_model(Applicant,
      :email => "",
      :name => "MyString",
      :slug => "MyString",
      :phone_number => 1,
      :comment => "MyText"
    ))
  end

  it "renders the edit applicant form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", applicant_path(@applicant), "post" do
      assert_select "input#applicant_email[name=?]", "applicant[email]"
      assert_select "input#applicant_name[name=?]", "applicant[name]"
      assert_select "input#applicant_slug[name=?]", "applicant[slug]"
      assert_select "input#applicant_phone_number[name=?]", "applicant[phone_number]"
      assert_select "textarea#applicant_comment[name=?]", "applicant[comment]"
    end
  end
end
