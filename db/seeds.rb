require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding... 🌱"

puts "Jobs... 💩"
j1 = Job.create(name: "Drive", pay_rate: 25)
j2 = Job.create(name: "Numbers", pay_rate: 50)
j3 = Job.create(name: "Browns Canyon", pay_rate: 40)
j4 = Job.create(name: "Numbers Full Day", pay_rate: 100)
j5 = Job.create(name: "Browns Canyon Full Day", pay_rate:80)
j6 = Job.create(name: "Pine Creek Full Day", pay_rate:120)

puts "Users... 🕺🏽"
u0 = User.create(first_name: "River", last_name: "Manager", is_admin: false, is_employee: false)
u1 = User.create(first_name: "Tom", last_name: "H", is_admin: false, is_employee: true)
u2 = User.create(first_name: "Justin", last_name: "M", is_admin: false, is_employee: true)
u3 = User.create(first_name: "Jeremy", last_name: "S", is_admin: false, is_employee: true)
u4 = User.create(first_name: "Byron", last_name: "B", is_admin: true, is_employee: true)

puts "Cooking the books... 👨🏽‍🍳"

100.times do
    CompletedJob.create(date: Faker::Date.between(from: '2022-04-30', to: '2022-09-15'), job_id: Job.ids.sample, user_id: User.ids.sample)
end

puts "seeding done 🌴"
