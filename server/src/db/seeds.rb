# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

# Seeding organisations
org1 = Organisation.create(name: "organisation1", hourly_rate: 20)
org2 = Organisation.create(name: "organisation2", hourly_rate: 40)

# Seeding users
userAlice = User.create(name: "Alice", email: "alice@gmail.com", password: "test123", password_reset_answer: "davidson")

# # Sign up alice to org1 and org2
OrganisationUser.create(user: userAlice, organisation: org1)
OrganisationUser.create(user: userAlice, organisation: org2)

# Create seed shifts for Alice
shift1 = Shift.create(start_time: Time.now, end_time: 1.hour.ago, break_length: 10, organisation: org1, user: userAlice)
shift2 = Shift.create(start_time: Time.now, end_time: 1.hour.ago, break_length: 20, organisation: org2, user: userAlice)