class Api::V1::OrganisationsController < ApplicationController

    before_action :authorized

    # GET all orgs
    def index
        orgs = Organisation.all
        render json: orgs, status: 200
    end

    def show
        org = Organisation.find_by(id: organisation_params[:id])
        if org.valid?
            render json: org, status: 200
        else
            render json: { error: 'Could not find org with that id' }, status: 400
        end
    end

    # POST
    def create
        @organisation = Organisation.new(new_organisation_params)
        if @organisation.valid?
            @organisation.save
            render json: organisation, status: 200
        else
            render json: { error: 'failed to create the organisation' }, status: :not_acceptable
        end
    end

    # UPDATE
    def update
        organisation = Organisation.find_by(id: organisation_params[:id])
        organisation.hourly_rate = new_organisation_params[:hourly_rate]
        organisation.name = new_organisation_params[:name]
        organisation.save
        render json: organisation, status: 200
    end

    # DELETE
    def destroy
    end

    private
    def new_organisation_params
        params.permit(:hourly_rate, :name)
    end

    private
    def organisation_params
        params.permit(:id, :hourly_rate, :name)

    end


end
