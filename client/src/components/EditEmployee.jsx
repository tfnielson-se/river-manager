import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditEmployee = ({users, onUpdateEditedUser}) => {
	console.log("EditEmployee.jsx");
    const {id} = useParams()

	let initialState = {
		first_name: "",
		last_name: "",
		is_admin: false,
		is_employee: false,
	};
	const [formData, setFormData] = useState(initialState);
	const { first_name, last_name, is_admin, is_employee } = formData;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
          .then((res) => res.json())
          .then((editedUser) => setFormData(editedUser));
      }, []);

    const handleEditEmployee = (e) => {
        e.preventDefault();
        // console.log(formData)
        fetch(`http://127.0.0.1:3000/users/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },

            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((editedData) => {
                onUpdateEditedUser(editedData);
            });
            navigate("/employees/list")
    }

	return (
		<div>
			<section class="max-w-xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
				<h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
					Edit Employee
				</h2>
				<form onSubmit={handleEditEmployee}>
					<div class="text-gray-700 dark:text-gray-200">
						<label>First Name: </label>
						<input
							type="text"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
					<div class="text-gray-700 dark:text-gray-200">
						<label>Last Name: </label>
						<input
							type="text"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
					<div class="text-gray-700 dark:text-gray-200">
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
					</div>
					<div class="text-gray-700 dark:text-gray-200">
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
					</div>
					<div>
						<input className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" type="submit" />
					</div>
				</form>
			</section>
		</div>
	);
};

export default EditEmployee;
