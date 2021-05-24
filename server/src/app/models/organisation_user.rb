class OrganisationUser < ApplicationRecord
  validates :organisation, uniqueness: {scope: :user, message: 'User can sign up to organisation only once'}

  belongs_to :user
  belongs_to :organisation
end
