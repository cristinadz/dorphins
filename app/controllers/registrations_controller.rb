class RegistrationsController < ApplicationController
    def create 
        reg = Registration.create!(reg_params)
        render json: reg, status: :created
    end

    private 

    def reg_params
        params.permit(:user_id, :event_id, :paid_fee)
    end
end
