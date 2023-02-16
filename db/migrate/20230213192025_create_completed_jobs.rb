class CreateCompletedJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :completed_jobs do |t|
      t.datetime :date
      t.belongs_to :job, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
