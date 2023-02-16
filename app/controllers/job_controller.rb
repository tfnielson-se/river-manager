class JobController < ApplicationController
    before_action :select_job_by_id, only: [:show, :destroy, :update]

    def index
        jobs = Job.all
        render json: jobs
    end

    def show
        # job  = job.select_job_by_id
        render json: @job
    end

    def create
        job = job.create!(job_params)
        render json: job, status: :created
    end

    def update
        @job.update!(job_params)
        render json: @job
    end

    def destroy
        job = Job.find(params[:id])
        job.destroy
    end

    private

    def select_job_by_id
        @job = Job.find(params[:id])
    end

    def job_params
        params.permit(:name, :pay_rate)
    end
end

