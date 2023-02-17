import { Link } from "react-router-dom";

const UserCard = ({ user, onSetNewCurrentUser, currentUser }) => {
	console.log("UserCard.jsx");
	const { id, first_name, last_name, is_admin, is_employee } = user;

	//  sets current user logged in
	const selectEmployee = () => {
		onSetNewCurrentUser(user);
	};

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
				<Link
					to={`/employees/${user.id}`}
					href="#"

					tabindex="0"
					role="link"
					onClick={selectEmployee}
				>
					<button className="inline-flex items-center px-3 py-1 rounded-md gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal capitalize">
						{first_name} {last_name}
					</button>
				</Link>
			</td>
		</tr>
	);
};

export default UserCard;
