class Api::V1::ShiftsController < ApplicationController
    before_action :authorized

    def index
        @organisation = Organisation.find_by(id: params[:organisation_id])
        shifts = Shift.where('organisation_id = ?', @organisation.id)
        render json: shifts, status: 200
    end

    def create
        @shift = Shift.new(new_shift_params)
        if @shift.valid?
            @shift.save
            render json: @shift, status: 200
        else
            render json: { error: 'failed to create the shift' }, status: :not_acceptable
        end
    end

    private
    def new_shift_params
        params.permit(:start_time, :end_time, :break_length, :user_id, :organisation_id)
    end

end