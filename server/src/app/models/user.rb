class User < ApplicationRecord
    has_secure_password

    has_many :shift
    has_many :organisation, through: :OrganisationUser

    validates :email, :password, presence: true
    validates :email, :password, uniqueness: true
end
