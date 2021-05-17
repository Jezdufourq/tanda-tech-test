class Api::V1::OrganisationsController < ApplicationController

    before_action :authorized

    # GET all orgs
    def index
        orgs = Organisation.all
        render json: orgs, status: 200
    end

    def show
        org = Organisation.find_by(id: :id)
        if org.valid?
            render json: org, status: 200
        else
            render json: { error: 'Could not find org with that id' }, status: 400
        end
    end

    # POST
    def create
    end

    # UPDATE
    def update
    end

    # DELETE
    def destroy
    end



end
