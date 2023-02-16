class CompletedJobsController < ApplicationController
    before_action :select_completed_job_by_id, only: [:show, :destroy, :update]

    def index
        completed_jobs = CompletedJob.all
        render json: completed_jobs
    end

    def show
        # completed_job  = completed_job.select_completed_job_by_id
        render json: @completed_job
    end

    def create
        completed_job = CompletedJob.create!(completed_job_params)
        render json: completed_job, status: :created
    end

    def update
        @completed_job.update!(completed_job_params)
        render json: @completed_job
    end

    def destroy
        completed_job = CompletedJob.find(params[:id])
        completed_job.destroy
    end

    private

    def select_completed_job_by_id
        @completed_job = CompletedJob.where(user: params[:id]).map{|job| job.job}
    end

    def completed_job_params
        params.permit(:date, :job_id, :user_id)
    end
end
