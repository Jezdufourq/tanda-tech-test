class Api::V1::UsersController < ApplicationController
    #  This means that you can create a user before you are authenticated
    skip_before_action :authorized, only: [:create]

    # GET /user - gets a single user
    def profile
        @user = User.find(params[:id])
        render json: {user: current_user}
    end

    # GET /users - Gets all users
    def index
        users = User.all
        render json: users
    end

    # Create a new user
    def create
        @user = User.new(user_params)
        if @user.valid?
            @user.save
            @token = encode_token(@user)
            render json: { user: @user, jwt: @token }
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
      end

    #  private method for user permitted params
    def user_params
        params.permit(:email, :name, :password)
    end
end