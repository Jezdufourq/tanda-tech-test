class ShiftSerializer < ActiveModel::Serializer
    attributes :start_time, :end_time, :break_length, :user_id, :organisation_id
end