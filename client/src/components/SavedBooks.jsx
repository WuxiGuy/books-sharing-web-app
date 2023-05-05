import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuthToken } from "../AuthTokenContext";
import UserSavedBooks from "../hooks/UserSavedBooks";
import "../style/home.css";


export default function SavedBooks() {
	const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
	const [ savedBooks, setSavedBooks] = UserSavedBooks();
	const { accessToken } = useAuthToken();

	if (!isLoading && !isAuthenticated) {
			loginWithRedirect();
	}

	const deleteSavedBook = async (e) => {
		const element = e.target.value;
		const newSavedBooks = await fetch(`${process.env.REACT_APP_API_URL}/saved`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({
				id: element,
				}),
			});
			if (newSavedBooks.ok) {
					const data = await newSavedBooks.json();
					setSavedBooks(data);
			}
		// refresh page
		window.location.reload();
	}

	return (
		<section>
			<h2>Saved Books</h2>
			{savedBooks.length !== 0 && (
				<ul className="bookshelf">
					{savedBooks.map((item) => (
						<li key={item.id} className="book">
							<img className="book-cover" src={item.cover} alt={item.title} />
							<div className="book-info">
								<h3 className="book-title">{item.title}</h3>
								<p className="book-author">{item.author}</p>
								<p className="book-year">{item.year}</p>
							</div>
							<button
								className="home-book-save"
								value={item.id}
								onClick={deleteSavedBook}
							>
								Remove
							</button>
							<button className="home-book-detail">
								<a href={`/books/${item.id}`} aria-label={`View details for ${item.title}`}>Details</a>
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
  )
}