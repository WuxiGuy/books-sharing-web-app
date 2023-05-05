import React, { useEffect, useState } from "react";
import BooksInServer from "../hooks/Books";
import UserProfile from "../hooks/User";
import AllComments from "../hooks/Comments";
import { useAuthToken } from "../AuthTokenContext";
import "../style/book.css";

export default function Book() {
	// get book id from url
	const bookId = parseInt(window.location.pathname.split("/")[2]);
	const [ books ] = BooksInServer(bookId);
	const { accessToken } = useAuthToken();
	const [newComment, setNewComment] = useState("");
	const [comments, setComments] = AllComments();
	const [ userProfile ] = UserProfile();

	async function postComment(content) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/comments/${bookId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({
				content: content,
			}),
		});
		if (data.ok) {
			const getData = await newComment.json();
			await setComments(getData);
		}
	}

	const submitComment = async (e) => {
		e.preventDefault();

		console.log(newComment);

		if (!newComment) return;

		const newComment = await postComment(newComment);
		if (newComment) {
			setNewComment("");
		}
	};

	async function deleteComment(id) {
		const commentsData = await fetch(`${process.env.REACT_APP_API_URL}/comments/${bookId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({
				commentId: id,
			}),
		});

		if (commentsData.ok) {
			const commentsList = await commentsData.json();
			setComments(commentsList);
		}
	};
	
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
				<h3>Comments</h3>
				<div className="comments">
					<form
						className="add-comment-form"
						onSubmit={(e) => submitComment(e)}
						autoComplete="off"
					>
						<input
							className="add-comment-input"
							type="text"
							name="comment"
							placeholder="Add a comment..."
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
						/>
						<button className="add-comment-button" type="submit">
							Post
						</button>
					</form>
					<hr/>

					<div className="comments-list">
						{ (comments.length !== 0) && comments.map((comment) => {
							if (comment.bookId === parseInt(bookId)) {
								return (
									<li key={comment.id} className="single-comment">
										<div className="comment-user">{comment.userName}
										</div>
										<div className="comment-content">{comment.comment}</div>
										{ comment.userId === userProfile.id && (
											<button className="delete-comment-button" onClick={() => deleteComment(comment.id)}>
												Delete
											</button>
										)}
									</li>
								);
							};
						}
						)}
					</div>
				</div>
		</div>
	);
}