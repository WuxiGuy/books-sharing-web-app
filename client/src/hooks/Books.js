import { useState, useEffect } from "react";

export default function BooksInServer () {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        async function getBooksFromApi() {
            const data = await fetch("http://localhost:8000/");
            const books = await data.json();

            setBooks(books);
        }

        getBooksFromApi();
    }, []);

    return [books, setBooks];
}