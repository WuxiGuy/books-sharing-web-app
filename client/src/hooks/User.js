import { useState, useEffect } from "react";
import { useAuthToken } from "../AuthTokenContext";

export default function UserProfile() {
    const [ userProfile, setUserProfile] = useState([]);
    const { accessToken } = useAuthToken();

    useEffect(() => {
        async function getUserProfileFromApi() {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/me`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const savedUserProfile = await data.json();

            setUserProfile(savedUserProfile);
        }

        if (accessToken) {
            getUserProfileFromApi();
        }
    }, [accessToken]);

    return [userProfile, setUserProfile];
}
