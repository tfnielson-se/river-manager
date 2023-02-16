import EmployeeMenu from "./EmployeeMenu";
import { NavLink } from "react-router-dom";

const AdminMenu = ({ currentUser }) => {
	console.log("AdminMenu.jsx");
	return (
		<>
			<NavLink to="/employees/new" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">New Employee Form</NavLink>
			<NavLink to="/employees/list" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Employee List</NavLink>
		</>
	);
};

export default AdminMenu;
