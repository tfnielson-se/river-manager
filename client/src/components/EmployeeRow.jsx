import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EmployeeRow = ({ user, onUpdateDeletedUsers }) => {
    const [earnigns, setEarnigns] = useState("")
	const { id, first_name, last_name, is_admin, is_employee } = user;
    const navigation = useNavigate()

	const handleDeleteUser = () => {
        console.log(id)
		// DELETE
		fetch(`http://127.0.0.1:3000/users/${id}`, {
			method: "DELETE",
		});
        onUpdateDeletedUsers(user)
	};

    useEffect(()=>{
        fetch(`http://127.0.0.1:3000/users/${id}/total_earnings`)
        .then(r => r.json())
        .then(data => setEarnigns(data))
    },[])

	return (
		<tr>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
				<div className="inline-flex items-center gap-x-3">
					<span>{id}</span>
				</div>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				Jan 6, 2022
			</td>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
					<h2 className="text-sm font-normal capitalize">
							{is_admin ? "admin" : "guide"}
						</h2>
				</div>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				<div className="flex items-center gap-x-2">
					<div>
						<h2 className="text-sm font-medium text-gray-800 dark:text-white ">
							{first_name} {last_name}
						</h2>
						
					</div>
				</div>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				${earnigns}
			</td>
			<td className="px-4 py-4 text-sm whitespace-nowrap">
				<div className="flex items-center gap-x-6">
					<Link to={`/employees/list/${id}/edit`}>
						<button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
							Edit
						</button>
					</Link>

					<button
						onClick={handleDeleteUser}
						className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
					>
						Delete
					</button>
				</div>
			</td>
		</tr>
	);
};

export default EmployeeRow;
