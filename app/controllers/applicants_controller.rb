class ApplicantsController < ApplicationController
  before_action :set_applicant, only: [:show, :edit, :update, :destroy]

  # GET /applicants
  # GET /applicants.json
  def index
    @applicants = Applicant.all
  end

  # GET /applicants/1
  # GET /applicants/1.json
  def show
  end

  # GET /applicants/new
  def new
    @applicant = Applicant.new
  end

  # GET /applicants/1/edit
  def edit
  end

  def create_charge

    
  end

  # POST /applicants
  # POST /applicants.json
  def create
    @amount = if !!(params["course_id"]["r-class"] && params["course_id"]["python-class"])
        params["course_id"]["r-class"] + params["course_id"]["python-class"]
      elsif !!(params["course_id"]["r-class"] && !params["course_id"]["python-class"])
        params["applicant_course"]["r_class_payment"]
      else
        params["applicant_course"]["python_class_payment"]
      end

    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :card  => params[:stripeToken]
    )
    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'Rails Stripe customer',
      :currency    => 'usd'
    )
    rescue Stripe::CardError => e
      flash[:error] = e.message
      redirect_to action: 'index'
    else
      @applicant = Applicant.create(name: params['applicant']['name'], phone_number: params['applicant']["phone_number"], email: params[:stripeEmail] )
      if !!(params["course_id"]["r-class"] && params["course_id"]["python-class"])
        @applicant_course = ApplicantCourse.create(course_id: 1, r_class_payment: params["applicant_course"]["r_class_payment"], comment: params["applicant_course"]["comment"], applicant_id: @applicant.id)
        @applicant_course = ApplicantCourse.create(course_id: 2, python_class_payment: params["applicant_course"]["python_class_payment"], comment: params["applicant_course"]["comment"], applicant_id: @applicant.id)
      elsif !!(params["course_id"]["r-class"] && !params["course_id"]["python-class"])
        @applicant_course = ApplicantCourse.create(course_id: 1, r_class_payment: params["applicant_course"]["r_class_payment"], comment: params["applicant_course"]["comment"], applicant_id: @applicant.id)
      else
        @applicant_course = ApplicantCourse.create(course_id: 2, python_class_payment: params["applicant_course"]["python_class_payment"], comment: params["applicant_course"]["comment"], applicant_id: @applicant.id)
      end
      redirect_to action: 'index'
  end

  # PATCH/PUT /applicants/1
  # PATCH/PUT /applicants/1.json
  def update
    respond_to do |format|
      if @applicant.update(applicant_params)
        format.html { redirect_to @applicant, notice: 'Applicant was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @applicant.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /applicants/1
  # DELETE /applicants/1.json
  def destroy
    @applicant.destroy
    respond_to do |format|
      format.html { redirect_to applicants_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_applicant
      @applicant = Applicant.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def applicant_params 
      params.require(:applicant).permit(:name, :slug, :phone_number)
    end

    def applicant_course_params
      params.require(:applicant_course).permit(:comment,:r_class_payment, :python_class_payment)
    end
end
