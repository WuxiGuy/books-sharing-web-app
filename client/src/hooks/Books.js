import { useState, useEffect } from "react";

export default function BooksInServer () {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        async function getBooksFromApi() {
            const data = await fetch("https://cs5610-yh.wl.r.appspot.com");
            const books = await data.json();

            setBooks(books);
        }

        getBooksFromApi();
    }, []);

    return [books, setBooks];
}