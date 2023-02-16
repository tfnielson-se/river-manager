////////////////////////////////////////////[<0>]///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////  TO DO //////////////////////////////////////////////
// [get - DONE]
// USER: New Employee - [post - DONE]
// COMPLETEDJOB: New Job Entry - [post - DONE]
// USER: Edit Employee - [patch - DONE]
// USER: Delete Employee - [delete - DONE]
// 
// 
//////////////////////////////////////////  TO DO //////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import JobLog from "./components/JobLog";
import NewUserForm from "./components/NewUserForm";
import EditEmployee from "./components/EditEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import "./App.css";

function App() {
	const [users, setUsers] = useState("");
	const [currentUser, setCurrentUser] = useState("");

	useEffect(() => {
		fetch("http://127.0.0.1:3000/users")
			.then((r) => r.json())
			.then((userData) => {
				setUsers(userData);
				setCurrentUser(userData[0]);
			});
	}, []);

	const initialRender =
		users === "" ? (
			<h1> Loading... </h1>
		) : (
			<UserList
				users={users}
				onSetNewCurrentUser={setCurrentUser}
				currentUser={currentUser}
			/>
		);

        // LogOut
	const logOut = () => {
		setCurrentUser("");
	};
    
    // COMPLETE POST
    // update Users with NEW USER w/o fetching
	const addNewEmployee = (newEmployee) => setUsers([...users, newEmployee]);

    // COMPLETE PATCH
    // update Users with EDITED USER w/o fetching
	const updateEditedUser = (editedUser) => {
		const updatedUsersList = users.map((user) =>
			user.id == editedUser.id ? editedUser : user
		);
		setUsers(updatedUsersList);
	};
    
    // COMPLETE DELETE
    // filter out DELETED USER w/o fetching
	const updateDeletedUsers = (deletedUser) => {
		const filterDeleterUser = users.filter((user) =>
			user.id === deletedUser.id ? null : user
		);
		setUsers(filterDeleterUser);
	};

	return (
		<div>
			<NavBar currentUser={currentUser} logOut={logOut} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/employees" element={initialRender} />
				<Route
					path="/employees/new"
					element={<NewUserForm onAddNewEmployee={addNewEmployee} />}
				/>
				<Route
					path="/employees/:id"
					element={<UserDetails currentUser={currentUser} />}
				/>
				<Route path="/employees/:id/joblog" element={<JobLog />} />
				<Route
					path="/employees/list"
					element={
						<EmployeeDetails
							users={users}
							onUpdateDeletedUsers={updateDeletedUsers}
						/>
					}
				/>
				<Route
					path="/employees/list/:id/edit"
					element={
						<EditEmployee
							users={users}
							onUpdateEditedUser={updateEditedUser}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
