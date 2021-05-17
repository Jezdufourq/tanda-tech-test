
class Api::V1::OrganisationUserController < ApplicationController
    before_action :authorized

    # GET all of the organisations for the current user
    def index
        @user = current_user()
        @organisation_user = OrganisationUser.where("user_id = ?", @user.id)
        render json: @organisation_user, status: 200
    end

    # POST Sign up to an organisation
    def create
        organisation = Organisation.find_by(id: organisation_user_params[:organisation_id])
        user = User.find_by(id: organisation_user_params[:user_id])
        @organisation_user = OrganisationUser.new(user: user, organisation: organisation)
        if @organisation_user.valid?
            @organisation_user.save
            render json: @organisation_user, status: 200
        else
            render json: { error: 'failed to sign up to organisation' }, status: :not_acceptable
        end
    end

    # DELETE Remove an organisation
    def destroy
        @organisation_user = OrganisationUser.find(params[:id])
        @organisation_user.destroy
    end

    private
    def organisation_user_params
        params.permit(:user_id, :organisation_id)
    end
end