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
	console.log(idList);

	const savedBooks = await prisma.books.findMany({
		where: {
			id: {
				in: idList,
			},
		},
	});

	console.log("here")
	console.log(savedBooks);

	res.json(savedBooks);
});

// save a book to authenticated user
app.post("/saved", requireAuth, async (req, res) => {
	const auth0Id = req.auth.payload.sub;
	var { id } = req.body;

	console.log(id);
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
  
const PORT = parseInt(process.env.PORT) || 8000;

app.listen(8000, () => {
	console.log(`Server running on http://localhost:${PORT} 🎉 🚀`);
});