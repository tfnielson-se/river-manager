import { Link } from "react-router-dom";

const EmployeeMenu = ({ currentUser }) => {
	console.log("EmployeeMenu.jsx");
	return (
		<>
			<Link to={`/employees/${currentUser.id}`} className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">My Profile</Link>
			<Link to={`/employees/${currentUser.id}/joblog`} className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
				New Job Entry
			</Link>
		</>
	);
};

export default EmployeeMenu;
