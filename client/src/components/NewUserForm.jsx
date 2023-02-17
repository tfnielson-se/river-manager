import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewUserForm = ({ onAddNewEmployee }) => {
	console.log("NewUserForm.jsx");

	let initialState = {
		first_name: "",
		last_name: "",
		is_admin: false,
		is_employee: true,
	};
	const [formData, setFormData] = useState(initialState);
	const { first_name, last_name, is_admin, is_employee } = formData;
	const navigate = useNavigate();

	const addNewUser = (e) => {
		e.preventDefault();

		//  POST
		fetch("http://127.0.0.1:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((newItem) => onAddNewEmployee(newItem));

		navigate("/employees");
	};

	return (
		<div>
			<section className="max-w-xl px-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-5">
				<div className="items-center px-6 py-3 bg-gray-900 rounded-b-lg">
					<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
						Add New Employee
					</h2>
				</div>
				<form onSubmit={addNewUser}>
					<div className="text-gray-700 dark:text-gray-200 py-2">
						<label>First Name: </label>
						<input
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							name="first_name"
							value={first_name}
							onChange={(e) => {
								setFormData({
									...formData,
									first_name: e.target.value,
								});
							}}
						/>
					</div>
					<div className="text-gray-700 dark:text-gray-200">
						<label>Last Name: </label>
						<input
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							name="first_name"
							value={last_name}
							onChange={(e) => {
								setFormData({
									...formData,
									last_name: e.target.value,
								});
							}}
						/>
					</div>
					<div className="py-3">
						<span className="text-gray-700 dark:text-gray-200 px-3">
							<label>Employee: </label>
							<input
								type="checkbox"
								name="is_admin"
								value={is_employee}
								onChange={() => {
									setFormData({
										...formData,
										is_admin: !is_employee,
									});
								}}
							/>
						</span>
						<span className="text-gray-700 dark:text-gray-200 px-3">
							<label>Admin: </label>
							<input
								type="checkbox"
								name="is_admin"
								value={is_admin}
								onChange={() => {
									setFormData({
										...formData,
										is_admin: !is_admin,
									});
								}}
							/>
						</span>
					</div>
					<div className="items-center px-6 py-2.5 bg-gray-900 rounded-t-lg">
						<input
							className="px-6 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
							type="submit"
						/>
					</div>
				</form>
			</section>
		</div>
	);
};

export default NewUserForm;
