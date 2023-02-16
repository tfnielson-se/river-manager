import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import AdminMenu from "./AdminMenu";
import EmployeeMenu from "./EmployeeMenu";

const NavBar = ({ currentUser, logOut }) => {
	console.log("NavBar.jsx");

	useEffect(() => {
		themeChange(false);
		// 👆 false parameter is required for react project
	}, []);

	const menuToggle = currentUser.is_admin ? (
		<>
			<AdminMenu currentUser={currentUser} />
			<EmployeeMenu currentUser={currentUser} />
		</>
	) : currentUser.is_employee ? (
		<EmployeeMenu currentUser={currentUser} />
	) : (
		<Link
			to="/employees"
			className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
		>
			Employees
		</Link>
	);

	return (
		<nav className="bg-white shadow dark:bg-gray-800">
			<Link to="/">
				<h2 className="text-2xl pt-2">River Manager</h2>
			</Link>
			<div className="container flex items-center justify-center p-3 mx-auto text-gray-600 capitalize dark:text-gray-300">
				<>{menuToggle}</>
				{/* <p>
					Current User: {currentUser.first_name}{" "}
					{currentUser.last_name}
				</p> */}
				<Link
					to="/"
					onClick={logOut}
					className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
				>
					LogOut
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
