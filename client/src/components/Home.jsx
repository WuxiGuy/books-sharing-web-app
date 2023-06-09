import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuthToken } from "../AuthTokenContext";
import UserSavedBooks from "../hooks/UserSavedBooks";
import booksInServer from "../hooks/Books";
import "../style/home.css"

export default function Home() {
  const { isAuthenticated } = useAuth0();
  const [ SavedBooks, setSavedBooks ] = UserSavedBooks();
  const [ books ] = booksInServer();
  const { accessToken } = useAuthToken();

  var arr = Object.values(SavedBooks);
  console.log(arr);

  async function isBookSaved(id) {
    for (let i = 0; i < SavedBooks.length; i++) {
			if (SavedBooks[i].id === parseInt(id)) {
				return true;
			}
    }
    return false;
  }
  
  const handleClick = async (e) => {
    e.preventDefault();
    const element = e.target.value;

    const saved = await isBookSaved(element);
    if (!saved) {
      const newSavedBooks = await fetch(`${process.env.REACT_APP_API_URL}/saved`, {
        method: "POST",
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
            await setSavedBooks(data);
            arr = await Object.values(SavedBooks);
        }
    }
    else {
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
            await setSavedBooks(data);
            arr = await Object.values(SavedBooks);
        }
        }
    }

  return (
		<div className="home">
			<h2>BookShelf</h2>
      <div className="bookshelf">
        { (books.length !== 0) && (
          books.map((item) => {
            return (
              <li key={item.id} className="book">
                <img className="book-cover" src={item.cover} alt={item.title} />
                <div className="book-title">{item.title}</div>
                <div className="book-author">{item.author}</div>
                <div className="book-year">{item.year}</div>
                {isAuthenticated && (
                  <button className="home-book-save" value={item.id} onClick={handleClick}>
                    { arr.some((savedBook) => savedBook.id === item.id) ? "Remove" : "Save"}
                  </button>
                )}
                <button className="home-book-detail">
                  <a href={`/books/${item.id}`} aria-label={`View details for ${item.title}`}>Details</a>
                </button>
              </li>
            );
          })
        )}
      </div>
		</div>
	);
}