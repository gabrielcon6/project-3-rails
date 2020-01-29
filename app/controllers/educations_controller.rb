class EducationsController < ApplicationController
  before_action :set_education, only: [:show, :update, :destroy]

  # GET /educations
  def index
    @educations = Education.all

    render json: @educations
  end

  # GET /educations/1
  def show
    render json: @education
  end

  # POST /educations
  def create
    @education = Education.new(education_params)

    if @education.save
      render json: @education, status: :created, location: @education
    else
      render json: @education.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /educations/1
  def update
    if @education.update(education_params)
      render json: @education
    else
      render json: @education.errors, status: :unprocessable_entity
    end
  end

  # DELETE /educations/1
  def destroy
    @education.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education
      @education = Education.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def education_params
      params.fetch(:education, {})
    end
end
