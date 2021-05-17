class Organisation < ApplicationRecord
    has_many :shifts
    has_many :users, through: :OrganisationUser
end
