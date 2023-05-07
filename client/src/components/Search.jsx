import React from "react";
import { useState } from 'react';
import SearchBar from './SearchBar';
import booksInServer from "../hooks/Books";

function Search() {
	const [books] = booksInServer();
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h2>Book List</h2>
      <SearchBar handleSearch={handleSearch} />
      <div className="bookshelf">
				{ (filteredBooks.length !== 0) && (
					filteredBooks.map((book) => {
						return (
							<li key={book.id} className="book">
								<img className="book-cover" src={book.cover} alt={book.title} />
								<div className="book-title">{book.title}</div>
								<div className="book-author">{book.author}</div>
								<div className="book-year">{book.year}</div>
								<button className="home-book-detail">
									<a href={`/books/${book.id}`} aria-label={`View details for ${book.title}`}>Details</a>
								</button>
							</li>
						);
					})
				)}
      </div>
    </div>
  );
}

export default Search;
