import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "Lee Curtis",
			image:
				"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-874158.jpg&fm=jpg",
			places: 3,
		},
	];

	return <UsersList items={USERS} />;
};
export default Users;
