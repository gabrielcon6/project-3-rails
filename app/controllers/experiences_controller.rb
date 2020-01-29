class ExperiencesController < ApplicationController
  before_action :set_experience, only: [:show, :update, :destroy]

  # GET /experiences
  def index
    @experiences = Experience.all

    render json: @experiences
  end

  # GET /experiences/1
  def show
    render json: @experience
  end

  # POST /experiences
  def create
    @experience = Experience.new(experience_params)

    if @experience.save
      render json: @experience, status: :created, location: @experience
    else
      render json: @experience.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /experiences/1
  def update
    if @experience.update(experience_params)
      render json: @experience
    else
      render json: @experience.errors, status: :unprocessable_entity
    end
  end

  # DELETE /experiences/1
  def destroy
    @experience.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_experience
      @experience = Experience.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def experience_params
      params.fetch(:experience, {})
    end
end
