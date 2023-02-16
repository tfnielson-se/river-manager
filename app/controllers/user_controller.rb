class UserController < ApplicationController
    before_action :select_user_by_id, only: [:show, :destroy, :update, :total_earnings]
    
    def index
        users = User.all.order(:id)
        render json: users
    end

    def show
        # user  = User.select_user_by_id
        render json: @user
    end

    def total_earnings
        total_earnings = @user.jobs.map{|job| job.pay_rate}.sum
        render json: total_earnings
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        @user.update!(user_params)
        render json: @user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    private

    def select_user_by_id
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :is_admin, :is_employee)
    end
end
