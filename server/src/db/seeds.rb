# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

# Seeding organisations
org1 = Organisation.create("organisation1", 20)
org2 = Organisation.create("organisation2", 40)

# Seeding users
userAlice = User.create(name: "Alice", email: "alice@gmail.com", password: "test123")







