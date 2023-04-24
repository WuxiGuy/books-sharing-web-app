import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuthToken } from "../AuthTokenContext";
import UserProfile from "../hooks/User";

export default function Profile() {
	const [newNameText, setNewNameText] = useState('');
	const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
	const { user } = useAuth0();
	const [ userProfile, setUserProfile ] = UserProfile();
	const { accessToken } = useAuthToken();

	if (!isLoading && !isAuthenticated) {
			loginWithRedirect();
	}

	async function updateName(newName) {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/me`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ name: newName }),
		});
		if (response.ok) {
			const data = await response.json();
			setUserProfile(data);
		} else {
			console.log('Error updating name');
		}
	}
	
	const changeName = async (e) => {
		e.preventDefault();

		if (!newNameText) return;

		const newName = await updateName(newNameText);
		if (newName) {
			setNewNameText('');
		}
	}

	return (
		<div>
			<div>
				<h2>Hello! {userProfile.name}</h2>
			</div>
			<div>
				<p>Email: {user.email}</p>
			</div>
			<div>
				<p>Auth0Id: {user.sub}</p>
			</div>
			<div>
				<form onSubmit={(e) => changeName(e)}
					className="nameChangeForm"
					autoComplete="off">
					<label htmlFor="NameChange">New Name:</label>
					<input type="text" name="Change Name" id="NameChange"
						value={newNameText} onChange={e => setNewNameText(e.target.value)} />
					<button type="submit">Change Name</button>
				</form>
			</div>
		</div>
	);
}