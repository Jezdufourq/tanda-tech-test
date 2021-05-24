
class Api::V1::User::OrganisationUserController < ApplicationController
    before_action :authorized

    # GET all of the organisations for the current user
    def index
        @user = current_user()
        @organisation = OrganisationUser.where("user_id = ?", @user.id).includes(:organisation).collect(&:organisation).flatten

        render json: @organisation, status: 200
    end

    # POST Sign up to an organisation
    def create
        @organisation = Organisation.find(organisation_user_params[:organisation_id])
        @user = User.find(organisation_user_params[:user_id])
        @organisation_user = OrganisationUser.new(user: @user, organisation: @organisation)
        if @organisation_user.valid?
            @organisation_user.save
            @organisation_user = OrganisationUser.where("user_id = ?", @user.id).includes(:organisation).collect(&:organisation).flatten
            render json: @organisation_user, status: 200
        else
            render json: { error: 'failed to sign up to organisation' }, status: :not_acceptable
        end
    end


    # DELETE Leave an organisation
    def destroy
        @organisation_user = OrganisationUser.find(params[:id])
        @organisation_user.destroy
    end

    private
    def organisation_user_params
        params.permit(:user_id, :organisation_id)
    end
end