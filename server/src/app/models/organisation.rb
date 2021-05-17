class Organisation < ApplicationRecord
    has_many :shift
    has_many :user, through: :OrganisationUser
end
