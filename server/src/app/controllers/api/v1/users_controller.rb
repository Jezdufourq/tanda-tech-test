module Api
    module V1
        class UsersController < ApplicationController
            # GET /users - Gets all users
            def index
                users = User.all
                render json: users
            end

            # GET /user - gets a single user
            def show
                user = User.find()
            end

            # Create a new user
            def create
                user = User.new(user_params)
                if user.save
                    token = issue_token(user)
                    render json: {valid: "true", user: {id: user.id, name: user.name}, token: token}
                else
                    render json: { valid: "false", errorMessages: user.errors.messages }
                end
            end

            #  private method for user permitted params
            def user_params
                params.permite(:email, :name, :password)
            end
        end
    end
end