import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const JobLog = () => {
	console.log("JobLog.jsx");
	const { id } = useParams();
	const [jobs, setJobs] = useState("");

	let initialValues = {
		date: "",
		job_id: "",
		user_id: id,
	};
	const [formData, setFormData] = useState(initialValues);
	const { date, job, user_id = id } = formData;
	const navigate = useNavigate();

	useEffect(() => {
		fetch("http://127.0.0.1:3000/jobs")
			.then((r) => r.json())
			.then((data) => setJobs(data));
	}, []);
	// console.log(jobs)

	const submitNewJob = (e) => {
		e.preventDefault();
		console.log(formData);
		fetch("http://127.0.0.1:3000/completed_jobs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((newItem) => console.log(newItem));
		navigate("/employees/:id");
	};

	const renderJobOptions = jobs ? (
		jobs.map((job) => (
			<option key={job.name} value={job.id}>
				{job.name}
			</option>
		))
	) : (
		<h1>Loading...</h1>
	);

	return (
		<div>
			<section className="max-w-xl px-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-5">
				<div className="items-center px-6 py-3 bg-gray-900 rounded-b-lg">
					<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
						Log Completed Trip
					</h2>
				</div>
				<form onSubmit={submitNewJob}>
					<div className="text-gray-700 dark:text-gray-200 py-2">
						<label>Date: </label>
						<input
							type="date"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							name="first_name"
							value={date}
							onChange={(e) => {
								setFormData({
									...formData,
									date: e.target.value,
								});
							}}
						/>
					</div>
					<div className="text-gray-700 dark:text-gray-200 py-2">
						<label>Select Completed Trip: </label>
						<select
							onChange={(e) => {
								setFormData({
									...formData,
									job_id: e.target.value,
								});
							}}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
						>
							<option value={job}>Choose a job</option>
							{renderJobOptions}
						</select>
					</div>
					<div className="items-center px-6 py-2.5 mt-2 bg-gray-900 rounded-t-lg">
						<input
							className="px-6 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
							type="submit"
						/>
					</div>
				</form>
			</section>
		</div>

		// <div>
		//     <p> Job Log </p>
		//     <div>
		//         <form onSubmit={submitNewJob}>
		//             <div>
		//             <label>Date:</label>
		//             <input type="date" name="name" value={date} onChange={(e) => {setFormData({...formData, date: e.target.value})}} />
		//             </div>
		//             <br></br>
		//             <div>
		//             <label>Trip:</label>
		//             <select onChange={(e) => {setFormData({...formData, job_id: e.target.value})}}>
		//                 <option value={job}>Choose a job</option>
		//                 {renderJobOptions}
		//             </select>
		//             </div>
		//             <br />
		//             <input type="submit"/>
		//         </form>
		//     </div>
		// </div>
	);
};
export default JobLog;
