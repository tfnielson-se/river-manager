class Job < ApplicationRecord
    has_many :completed_jobs
    has_many :users, through: :completed_jobs
end
