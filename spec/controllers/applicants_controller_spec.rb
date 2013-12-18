require 'spec_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator.  If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails.  There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.
#
# Compared to earlier versions of this generator, there is very limited use of
# stubs and message expectations in this spec.  Stubs are only used when there
# is no simpler way to get a handle on the object needed for the example.
# Message expectations are only used when there is no simpler way to specify
# that an instance is receiving a specific message.

describe ApplicantsController do

  # This should return the minimal set of attributes required to create a valid
  # Applicant. As you add validations to Applicant, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) { { "email" => "" } }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # ApplicantsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET index" do
    it "assigns all applicants as @applicants" do
      applicant = Applicant.create! valid_attributes
      get :index, {}, valid_session
      assigns(:applicants).should eq([applicant])
    end
  end

  describe "GET show" do
    it "assigns the requested applicant as @applicant" do
      applicant = Applicant.create! valid_attributes
      get :show, {:id => applicant.to_param}, valid_session
      assigns(:applicant).should eq(applicant)
    end
  end

  describe "GET new" do
    it "assigns a new applicant as @applicant" do
      get :new, {}, valid_session
      assigns(:applicant).should be_a_new(Applicant)
    end
  end

  describe "GET edit" do
    it "assigns the requested applicant as @applicant" do
      applicant = Applicant.create! valid_attributes
      get :edit, {:id => applicant.to_param}, valid_session
      assigns(:applicant).should eq(applicant)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "creates a new Applicant" do
        expect {
          post :create, {:applicant => valid_attributes}, valid_session
        }.to change(Applicant, :count).by(1)
      end

      it "assigns a newly created applicant as @applicant" do
        post :create, {:applicant => valid_attributes}, valid_session
        assigns(:applicant).should be_a(Applicant)
        assigns(:applicant).should be_persisted
      end

      it "redirects to the created applicant" do
        post :create, {:applicant => valid_attributes}, valid_session
        response.should redirect_to(Applicant.last)
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved applicant as @applicant" do
        # Trigger the behavior that occurs when invalid params are submitted
        Applicant.any_instance.stub(:save).and_return(false)
        post :create, {:applicant => { "email" => "invalid value" }}, valid_session
        assigns(:applicant).should be_a_new(Applicant)
      end

      it "re-renders the 'new' template" do
        # Trigger the behavior that occurs when invalid params are submitted
        Applicant.any_instance.stub(:save).and_return(false)
        post :create, {:applicant => { "email" => "invalid value" }}, valid_session
        response.should render_template("new")
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested applicant" do
        applicant = Applicant.create! valid_attributes
        # Assuming there are no other applicants in the database, this
        # specifies that the Applicant created on the previous line
        # receives the :update_attributes message with whatever params are
        # submitted in the request.
        Applicant.any_instance.should_receive(:update).with({ "email" => "" })
        put :update, {:id => applicant.to_param, :applicant => { "email" => "" }}, valid_session
      end

      it "assigns the requested applicant as @applicant" do
        applicant = Applicant.create! valid_attributes
        put :update, {:id => applicant.to_param, :applicant => valid_attributes}, valid_session
        assigns(:applicant).should eq(applicant)
      end

      it "redirects to the applicant" do
        applicant = Applicant.create! valid_attributes
        put :update, {:id => applicant.to_param, :applicant => valid_attributes}, valid_session
        response.should redirect_to(applicant)
      end
    end

    describe "with invalid params" do
      it "assigns the applicant as @applicant" do
        applicant = Applicant.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        Applicant.any_instance.stub(:save).and_return(false)
        put :update, {:id => applicant.to_param, :applicant => { "email" => "invalid value" }}, valid_session
        assigns(:applicant).should eq(applicant)
      end

      it "re-renders the 'edit' template" do
        applicant = Applicant.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        Applicant.any_instance.stub(:save).and_return(false)
        put :update, {:id => applicant.to_param, :applicant => { "email" => "invalid value" }}, valid_session
        response.should render_template("edit")
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested applicant" do
      applicant = Applicant.create! valid_attributes
      expect {
        delete :destroy, {:id => applicant.to_param}, valid_session
      }.to change(Applicant, :count).by(-1)
    end

    it "redirects to the applicants list" do
      applicant = Applicant.create! valid_attributes
      delete :destroy, {:id => applicant.to_param}, valid_session
      response.should redirect_to(applicants_url)
    end
  end

end
