
class Api::V1::OrganisationsUsersController < ApplicationController
    before_action :authorized
    # POST Sign up to an organisation
    def create
        @organisation_user = OrganisationsUsers.new(organisation_user_params)
        if @organisation_user.valid?
            @organisation_user.save
            render json: @organisation_user, status: 200
        else
            render json: { error: 'failed to sign up to organisation' }, status: :not_acceptable
        end
    end

    # DELETE Remove an organisation
    def destroy
    end

    private
    def organisation_user_params
        params.require(:user, :organisation)
    end
end