class ApplicantsController < ApplicationController
  before_action :set_applicant, only: [:show, :edit, :update, :destroy]
  before_action :set_course, only: [:index]


  # GET /applicants
  # GET /applicants.json
  def index
    @applicants = Applicant.all 
    (session[:applicant] = nil if (Time.now - session[:applicant].created_at > 50)) if session[:applicant]
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
    session[:applicant].update(email: params[:stripeEmail].strip)
    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :card  => params[:stripeToken]
    )
    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => session[:amount],
      :description => 'Rails Stripe customer',
      :currency    => 'usd'
    )
    rescue Stripe::CardError => e
      session[:applicant].destroy
      session[:applicant_courses].map(&:destroy)
      session[:applicant] = nil
      session[:applicant_courses] = nil
      flash[:error] = e.message
      redirect_to action: 'index'
    else
      session[:amount] = nil
      session[:applicant_courses] = nil
      flash[:notice] = 'You have sucessfully signed up!'
      redirect_to action: 'index', :flash => { :success => 'You have sucessfully signed up!'
      }
  end

  # POST /applicants
  # POST /applicants.json
  def create
   
    session[:applicant] = Applicant.create(name: params['applicant']['name'].strip, phone_number: params['applicant']["phone_number"].gsub(/\D/, ''), comment: params['applicant']['comment'])


    session[:applicant_courses] = []

    (session[:applicant_courses]<< ApplicantCourse.create(course_id: 1, applicant_id: session[:applicant].id)) if params["course_id"]["r-class"]
    (session[:applicant_courses]<< ApplicantCourse.create(course_id: 2, applicant_id: session[:applicant].id)) if params["course_id"]["r-begin-mar"]
    (session[:applicant_courses]<< ApplicantCourse.create(course_id: 3, applicant_id: session[:applicant].id)) if params["course_id"]["D3-begin-mar-class"]
    (session[:applicant_courses]<< ApplicantCourse.create(course_id: 4, applicant_id: session[:applicant].id)) if params["course_id"]["Hadoop-begin-apr"]
    (session[:applicant_courses]<< ApplicantCourse.create(course_id: 5, applicant_id: session[:applicant].id)) if params["course_id"]["Kaggle-adv-apr"]
    (session[:applicant_courses]<< ApplicantCourse.create(course_id: 6, applicant_id: session[:applicant].id)) if params["course_id"]["Tableau-begin-may"]
    (session[:applicant_courses]<< ApplicantCourse.create(course_id: 7, applicant_id: session[:applicant].id)) if params["course_id"]["r-inter-may-class"]
    (session[:applicant_courses]<< ApplicantCourse.create(course_id: 8, applicant_id: session[:applicant].id)) if params["course_id"]["r-inter-june-class"]
    (session[:applicant_courses]<< ApplicantCourse.create(course_id: 9, applicant_id: session[:applicant].id)) if params["course_id"]["processing-begin-june-class"]

    session[:amount] = session[:applicant_courses].map do |applicant_course|
      applicant_course.course.cost * 100
    end.inject(:+)

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

    def set_course
      @course = Course.find(1)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def applicant_params 
      params.require(:applicant).permit(:name, :slug, :phone_number)
    end

    def applicant_course_params
      params.require(:applicant_course).permit(:comment,:r_class_payment, :python_class_payment)
    end
end
