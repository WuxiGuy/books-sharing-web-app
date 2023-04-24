import React from "react";
import BooksInServer from "../hooks/Books";
import "../style/book.css"

export default function Book() {
	// get book id from url
	const bookId = window.location.pathname.split("/")[2];

	const [ books ] = BooksInServer(bookId);

	console.log(books)
	
	return (
		<div>
				<h2>Book Details</h2>
				<div className="single-book" role="list">
						{books.map((item) => {
							if (item.id === parseInt(bookId)) {
								return (
									<li key={item.id} className="single-book">
										<img className="single-book-cover" src={item.cover} alt={item.title} aria-label={item.title} />
										<div className="single-book-title">Title: {item.title}</div>
										<div className="single-book-author">Author: {item.author}</div>
										<div className="single-book-year">Year: {item.year}</div>
										<div className="single-book-publisher">Publisher: {item.publisher}</div>
										<div className="single-book-category">Category: {item.category}</div>
										<div className="single-book-summary">Introduction: {item.summary}</div>
									</li>
								);
							}
							return null;
						})}
				</div>
		</div>
	)
}