class Shift < ApplicationRecord
    belongs_to :user
    belongs_to :organisation

    before_create :hours_worked_calc, :shift_cost_cal
    def hours_worked_calc
        shift_length = (self.end_time.to_datetime - self.start_time.to_datetime).to_f * 24.0
        self.hours_worked = shift_length - (self.break_length/60.0)
    end

    def shift_cost_cal
        self.shift_cost = self.hours_worked * self.organisation.hourly_rate
    end
end
