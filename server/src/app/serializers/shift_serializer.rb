class ShiftSerializer < ActiveModel::Serializer
    attributes :id, :start_time, :end_time, :break_length, :user_id, :organisation_id, :hours_worked, :shift_cost
end