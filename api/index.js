import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import pkg from "@prisma/client";
import morgan from "morgan";
import cors from "cors";
import { auth } from  'express-oauth2-jwt-bearer'

const requireAuth = auth({
	audience: process.env.AUTH0_AUDIENCE,
	issuerBaseURL: process.env.AUTH0_ISSUER,
	tokenSigningAlg: 'RS256'
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// randomly get ten books from our database to show in home page
app.get("/", async (req, res) => {
	const books = await prisma.books.findMany({
		take: 10,
		orderBy: {
			id: "desc",
		},
	});

	res.json(books);
});

// get a book by id
app.get("/books/:id", async (req, res) => {
	const { id } = req.params;
	const book = await prisma.books.findUnique({
		where: {
			id: parseInt(id),
		},
	});

	res.json(book);
});

// get saved books of authenticated user
app.get("/saved", requireAuth, async (req, res) => {
	const auth0Id = req.auth.payload.sub;

	const user = await prisma.user.findUnique({
		where: {
			auth0Id,
		},
	});

	const savedBooksRelates = await prisma.SavedBooks.findMany({
		where: {
			userId: user.id,
		},
	});

	const idList = savedBooksRelates.map((savedBook) => savedBook.bookId);

	const savedBooks = await prisma.books.findMany({
		where: {
			id: {
				in: idList,
			},
		},
	});

	res.json(savedBooks);
});

// save a book to authenticated user
app.post("/saved", requireAuth, async (req, res) => {
	const auth0Id = req.auth.payload.sub;
	var { id } = req.body;

	id = parseInt(id);
	const newSavedBook = await prisma.savedBooks.create({
		data: {
			user: { connect: { auth0Id } },
			book: { connect: { id } },
		},
	});

	const savedBooksRelates = await prisma.SavedBooks.findMany({ });

	const idList = savedBooksRelates.map((book) => book.bookId); 

	const savedBooks = await prisma.books.findMany({
		where: {
			id: {
				in: idList,
			},
		},
	});

	res.json(savedBooks);
});

// remove a book from authenticated user
app.delete("/saved", requireAuth, async (req, res) => {
	const { id } = req.body;
	const auth0Id = req.auth.payload.sub;

	const user = await prisma.user.findUnique({
		where: {
			auth0Id,
		},
	});

	const book = await prisma.books.findUnique({
		where: {
			id: parseInt(id),
		},
	});

	const records = await prisma.savedBooks.findMany({ });

	const record = records.find((record) => record.userId === user.id && record.bookId === book.id);

	if (!record) {
		res.status(404).json({ message: "Record not found" });
		return;
	}

	const deletedSavedBook = await prisma.savedBooks.delete({
		where: {
			id: record.id,
		},
	});

	res.json(deletedSavedBook);
});

// get all comments
app.get("/comments", async (req, res) => {
	const comments = await prisma.comments.findMany();
	res.json(comments);
});

// get comments of a book
app.get("/comments/:id", async (req, res) => {
	const { id } = req.params;
	if (!id) {
		res.status(400).json({ message: "Book id is required" });
		return;
	}
	const comments = await prisma.comments.findMany({
		where: {
			bookId: parseInt(id),
		},
	});

	res.json(comments);
});

// add a comment to a book
app.post("/comments/:id", requireAuth, async (req, res) => {
	const { id } = req.params;
	const { content } = req.body;
	if (!content) {
		res.status(400).json({ message: "Comment content is required" });
		return;
	}
	const auth0Id = req.auth.payload.sub;

	const user = await prisma.user.findUnique({
		where: {
			auth0Id,
		},
	});

	await prisma.comments.create({
		data: {
			comment: content,
			userName: user.name,
			user: { connect: { id: user.id } },
			book: { connect: { id: parseInt(id) } },
		},
	});

	const comments = await prisma.comments.findMany({
		where: {
			bookId: parseInt(id),
		},
	});

	res.json(comments);
});

// delete a comment of a book
app.delete("/comments/:id", requireAuth, async (req, res) => {
	const { id } = req.params;
	const { commentId } = req.body;
	if (!commentId) {
		res.status(400).json({ message: "Comment id is required" });
		return;
	}
	const auth0Id = req.auth.payload.sub;

	const user = await prisma.user.findUnique({
		where: {
			auth0Id,
		},
	});

	const comment = await prisma.comments.findUnique({
		where: {
			id: parseInt(commentId),
		},
	});

	if (comment.userId !== user.id) {
		res.status(401).json({ message: "Unauthorized" });
		return;
	}

	await prisma.comments.delete({
		where: {
			id: parseInt(commentId),
		},
	});

	const comments = await prisma.comments.findMany({
		where: {
			bookId: parseInt(id),
		},
	});

	res.json(comments);
});

// get Profile information of authenticated user
app.get("/me", requireAuth, async (req, res) => {
	const auth0Id = req.auth.payload.sub;

	const user = await prisma.user.findUnique({
		where: {
			auth0Id,
		},
	});

	res.json(user);
});

// change user name of authenticated user
app.put("/me", requireAuth, async (req, res) => {
	const auth0Id = req.auth.payload.sub;
	const { name } = req.body;

	console.log(name);

	const user = await prisma.user.update({
		where: {
			auth0Id,
		},
		data: {
			name,
		},
	});

	res.json(user);
});

// verify user status, if not registered in our database we will create it
app.post("/verify-user", requireAuth, async (req, res) => {
	const auth0Id = req.auth.payload.sub;
	const email = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/email`];
	const name = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/name`];

	const user = await prisma.user.findUnique({
		where: {
			auth0Id,
		},
	});

	if (user) {
		res.json(user);
	} else {
		const newUser = await prisma.user.create({
			data: {
				email,
				auth0Id,
				name,
			},
		});

		res.json(newUser);
	}
});
  
const PORT = parseInt(process.env.PORT) || 8080;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT} 🎉 🚀`);
});