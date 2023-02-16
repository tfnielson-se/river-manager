class User < ApplicationRecord
    has_many :completed_jobs
    has_many :jobs, through: :completed_jobs

## ADMIN CONTROL ##
## ADMIN CONTROL ##

    def admin_control action, employee = nil
        if self.is_admin
            case action
            when "terminate"
                employee.is_employee = false

                employee.save

                !employee.is_employee ? "#{employee.first_name} #{employee.last_name} successfully terminated" : nil

            when "add employee"
                new_user = User.create(new_employee)

                new_user.is ? "New Employee Added" : "Something Went Wrong..."

            when "add new job"
                Job.create(name: job_name, pay_rate: pay_rate)
            end

        end
    end

## FILTERS ##
## FILTERS ##

end
