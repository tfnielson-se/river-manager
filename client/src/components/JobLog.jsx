import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const JobLog = () => {
    console.log("JobLog.jsx")
    const {id} = useParams()
    const [jobs, setJobs] = useState("")

    let initialValues = {
        date: "",
        job_id: "",
        user_id: id
    }
    const [formData, setFormData] = useState(initialValues)
    const {date, job, user_id = id} = formData;
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://127.0.0.1:3000/jobs")
        .then(r => r.json())
        .then(data => setJobs(data))
    },[])
    // console.log(jobs)

    const submitNewJob = (e) => {
        e.preventDefault();
        console.log(formData)
        fetch("http://127.0.0.1:3000/completed_jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((newItem) => console.log(newItem));
            navigate("/employees/list")
    }

    const renderJobOptions = jobs ? jobs.map(job => <option key ={job.name} value={job.id}>{job.name}</option>) : <h1>Loading...</h1>

    return (
        <div>
            <p> Job Log </p>
            <div>
                <form onSubmit={submitNewJob}>
                    <div>
                    <label>Date:</label>
                    <input type="date" name="name" value={date} onChange={(e) => {setFormData({...formData, date: e.target.value})}} />
                    </div>
                    <br></br>
                    <div>
                    <label>Trip:</label>
                    <select onChange={(e) => {setFormData({...formData, job_id: e.target.value})}}>
                        <option value={job}>Choose a job</option>
                        {renderJobOptions}
                    </select>
                    </div>
                    <br />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}
export default JobLog;