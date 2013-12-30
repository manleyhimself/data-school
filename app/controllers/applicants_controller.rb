class ApplicantsController < ApplicationController
  before_action :set_applicant, only: [:show, :edit, :update, :destroy]
  before_action :set_course, only: [:index]


  # GET /applicants
  # GET /applicants.json
  def index
    @applicants = Applicant.all 
    (session[:applicant] = nil if (Time.now - session[:applicant].created_at > 50)) if session[:applicant]
    (session[:booboo] = nil if (Time.now - session[:booboo].created_at > 50)) if session[:booboo]
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
      (session[:applicant_course_1].destroy) if session[:applicant_course_1]
      (session[:applicant_course_2].destroy) if session[:applicant_course_2]
      session[:booboo] = true
      flash[:error] = e.message
      redirect_to action: 'index'
    else
      session[:amount] = nil
      session[:applicant_course_1] = nil
      session[:applicant_course_2] = nil
      flash[:notice] = 'You have sucessfully signed up!'
      redirect_to action: 'index', :flash => { :success => 'You have sucessfully signed up!'
 }
  end

  # POST /applicants
  # POST /applicants.json
  def create
    session[:amount] = if !!(params["course_id"]["r-class"] && params["course_id"]["python-class"])
       (params["applicant_course"]["r_class_payment"].to_i + params["applicant_course"]["python_class_payment"].to_i) * 100
      elsif !!(params["course_id"]["r-class"] && !params["course_id"]["python-class"])
        params["applicant_course"]["r_class_payment"].to_i * 100
      else
        params["applicant_course"]["python_class_payment"].to_i * 100
      end
    session[:applicant] = Applicant.create(name: params['applicant']['name'].strip, phone_number: params['applicant']["phone_number"].gsub(/\D/, ''))

    if !!(params["course_id"]["r-class"] && params["course_id"]["python-class"])
     session[:applicant_course_1] = @applicant_course = ApplicantCourse.create(course_id: 1, r_class_payment: params["applicant_course"]["r_class_payment"], comment: params["applicant_course"]["comment"], applicant_id: session[:applicant].id)
     session[:applicant_course_2]= @applicant_course = ApplicantCourse.create(course_id: 2, python_class_payment: params["applicant_course"]["python_class_payment"], comment: params["applicant_course"]["comment"], applicant_id: session[:applicant].id)
    elsif !!(params["course_id"]["r-class"] && !params["course_id"]["python-class"])
     session[:applicant_course_1] = @applicant_course = ApplicantCourse.create(course_id: 1, r_class_payment: params["applicant_course"]["r_class_payment"], comment: params["applicant_course"]["comment"], applicant_id: session[:applicant].id)
    else
     session[:applicant_course_2] = @applicant_course = ApplicantCourse.create(course_id: 2, python_class_payment: params["applicant_course"]["python_class_payment"], comment: params["applicant_course"]["comment"], applicant_id: session[:applicant].id)
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
