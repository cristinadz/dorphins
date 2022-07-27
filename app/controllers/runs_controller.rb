class RunsController < ApplicationController
    wrap_parameters false
    def create 
        run = Run.create!(run_params)
        render json: run, status: :created
    end

    def index 
        render json: Run.all
    end

    private 

    def run_params
        params.permit(:miles, :total_time, :date, :plan_id, :user_id)
    end 
end
