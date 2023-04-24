import { useState, useEffect } from "react";
import { useAuthToken } from "../AuthTokenContext";

export default function UserSavedBooks() {
    const [savedBooks, setSavedBooks] = useState([]);
    const { accessToken } = useAuthToken();

    useEffect(() => {
        async function getSavedBooksFromApi() {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/saved`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const savedbooks = await data.json();

            setSavedBooks(savedbooks);
        }

        if (accessToken) {
            getSavedBooksFromApi();
        }
    }, [accessToken]);

    return [savedBooks, setSavedBooks];
}
