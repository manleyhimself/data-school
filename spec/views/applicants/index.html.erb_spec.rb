require 'spec_helper'

describe "applicants/index" do
  before(:each) do
    assign(:applicants, [
      stub_model(Applicant,
        :email => "",
        :name => "Name",
        :slug => "Slug",
        :phone_number => 1,
        :comment => "MyText"
      ),
      stub_model(Applicant,
        :email => "",
        :name => "Name",
        :slug => "Slug",
        :phone_number => 1,
        :comment => "MyText"
      )
    ])
  end

  it "renders a list of applicants" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Slug".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
