import { useState, useEffect } from "react";

export default function AllComments () {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        async function getCommentsFromApi() {
            const data = await fetch("http://localhost:8080/comments");
            const allComments = await data.json();

            setComments(allComments);
        }

        getCommentsFromApi();
    }, []);

    return [comments, setComments];
}