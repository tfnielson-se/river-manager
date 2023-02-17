import { useState } from "react";
import EmployeeRow from "./EmployeeRow";

const EmployeeDetails = ({ users, onUpdateDeletedUsers }) => {
	// const [password, setPassword] = useState(id)

	console.log(users);

	const renderEmployeesDetails = users
		? users.map((user) =>
				user.is_employee ? (
					<EmployeeRow key={user.id} user={user} onUpdateDeletedUsers={onUpdateDeletedUsers} />
				) : null
		  )
		: null;

	return (
		<section class="container px-4 mx-auto mt-5">
			<div class="flex flex-col">
				<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
							<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead class="bg-gray-50 dark:bg-gray-800">
									<tr>
										<th
											scope="col"
											class="py-3.5 px-4 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>

													<span>ID #</span>

										</th>

										<th
											scope="col"
											class="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Date
										</th>

										<th
											scope="col"
											class="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Status
										</th>

										<th
											scope="col"
											class="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Employee
										</th>

										<th
											scope="col"
											class="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
											Season Total Income
										</th>

										<th
											scope="col"
											class="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
										>
										Actions
										</th>
									</tr>
								</thead>
								<tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
									{renderEmployeesDetails}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmployeeDetails;
