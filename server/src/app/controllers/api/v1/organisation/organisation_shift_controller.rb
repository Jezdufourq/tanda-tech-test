class Api::V1::Organisation::OrganisationShiftController < ApplicationController
    before_action :authorized

    def index
        @organisation = Organisation.find_by(id: params[:id])
        shifts = Shift.where('organisation_id = ?', @organisation.id)
        render json: shifts, status: 200
    end

end