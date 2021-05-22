class Api::V1::UsersController < ApplicationController
    #  This means that you can create a user before you are authenticated
    skip_before_action :authorized, only: [:create], raise: false

    # GET /user - gets a single user
    def show
        @user = User.find(params[:id])
        render json: {user: current_user}
    end

    # GET /users - Gets all users
    def index
        users = User.all
        render json: users
    end

    # POST /sign-up
    # Create a new user
    def create
        @user = User.new(user_params)
        if @user.valid?
            @user.save
            render json: @user
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    private
    def user_params
        params.permit(:email, :name, :password, :password_reset_answer)
    end
end