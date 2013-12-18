require 'spec_helper'

describe "applicants/show" do
  before(:each) do
    @applicant = assign(:applicant, stub_model(Applicant,
      :email => "",
      :name => "Name",
      :slug => "Slug",
      :phone_number => 1,
      :comment => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(//)
    rendered.should match(/Name/)
    rendered.should match(/Slug/)
    rendered.should match(/1/)
    rendered.should match(/MyText/)
  end
end
