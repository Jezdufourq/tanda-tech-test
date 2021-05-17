class User < ApplicationRecord
    has_secure_password

    has_many :shifts
    has_many :organisations, through: :OrganisationUser

    validates :email, :password, presence: true
    validates :email, uniqueness: true

    validate :real_email
    def real_email
        if !(self.email =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i)
            errors.add(:email, "is not a valid email")
        end
    end
end
