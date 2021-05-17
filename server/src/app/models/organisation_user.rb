class OrganisationUser < ApplicationRecord
  validates :user, uniqueness: true
  validates :organisation, uniqueness: true

  belongs_to :user
  belongs_to :organisation
end
