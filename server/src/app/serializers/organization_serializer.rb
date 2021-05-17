class OrganizationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :hourly_rate
end
