class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, include: 'registration.event'
    end
 
    def update 
        @current_user.update!(user_params)
        render json: @current_user, status: :accepted
    end

private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :profile_img, :email, :plan_id)
    end

end
