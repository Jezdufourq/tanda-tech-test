class OrganisationUser < ApplicationRecord
  validates :organisation, uniqueness: true

  belongs_to :user
  belongs_to :organisation
end
