class RunsController < ApplicationController
    wrap_parameters false

    def index 
        render json: Run.all
    end

    def show 
        run = Run.find(params[:id])
        render json: run
    end

    def create 
        run = Run.create!(run_params)
        render json: run, status: :created
    end

    def destroy 
        run = Run.find(params[:id])
        run.destroy
        head :no_content
    end

    private 

    def run_params
        params.permit(:miles, :total_time, :date, :plan_id, :user_id)
    end 
end
