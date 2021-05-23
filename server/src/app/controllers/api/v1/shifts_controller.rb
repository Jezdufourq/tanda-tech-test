class Api::V1::ShiftsController < ApplicationController
    before_action :authorized

    def create
        @shift = Shift.new(new_shift_params)
        if @shift.valid?
            @shift.save
            render json: @shift, status: 200
        else
            render json: { error: 'failed to create the shift' }, status: :not_acceptable
        end
    end

    def update
        @shift = Shift.find(params[:id])
        @shift.update(
            start_time: new_shift_params[:start_time],
            end_time: new_shift_params[:end_time],
            break_length: new_shift_params[:break_length])
        render json: shift, status: 200
    end

    #  caveat
    #  At the moment any user can delete any of the shifts in the organisation
    #  Need to make sure that the user who is logged in can only delete their own
    #  shifts
    def destroy
        @shift = Shift.find(params[:id])
        @shift.destroy
    end

    private
    def new_shift_params
        params.permit(:start_time, :end_time, :break_length, :user_id, :organisation_id)
    end

end