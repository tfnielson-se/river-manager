import { Link } from "react-router-dom";
import boss from "../img/boss.png";
import employee from "../img/employee.png";

const UserCard = ({ user, onSetNewCurrentUser, currentUser }) => {
	console.log("UserCard.jsx");
	const { id, first_name, last_name, is_admin, is_employee } = user;

	//  sets current user logged in
	const selectEmployee = () => {
		onSetNewCurrentUser(user);
	};

	const avatarDisplay = user.is_admin ? boss : employee;

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
						<Link
							to={`/employees/${user.id}`}
							href="#"
							class="block text-xl font-bold text-gray-800 dark:text-black"
							tabindex="0"
							role="link"
							onClick={selectEmployee}
						>
							<button className="text-sm font-medium text-gray-800 dark:text-white ">
								{first_name} {last_name}
							</button>
						</Link>
					</div>
				</div>
			</td>
		</tr>
		// <div class="w-half max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-2 mx-2">
		// 	<img
		// 		class="object-cover w-full h-56"
		// 		src={avatarDisplay}
		// 		alt="avatar"
		// 	/>

		// 	<div class="py-5 text-center">
		// 		<Link
		// 			to={`/employees/${user.id}`}
		// 			href="#"
		// 			class="block text-xl font-bold text-gray-800 dark:text-black"
		// 			tabindex="0"
		// 			role="link"
		// 			onClick={selectEmployee}
		// 		>
		// 			{first_name} {last_name}
		// 		</Link>
		// 		<span className="badge badge-lg bg-slate-400 text-black capitalize">
		// 			{is_admin ? "admin" : "guide"}
		// 		</span>
		// 	</div>
		// </div>
	);
};

export default UserCard;
