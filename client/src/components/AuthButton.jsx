import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function AuthButton() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    
    const handleClick = () => {
        if (isAuthenticated) {
            logout({ returnTo: window.location.origin });
        } else {
            loginWithRedirect();
        }
    };

    return (
        <button className="identify" onClick={handleClick}>
            {isAuthenticated ? "Log Out" : "Log In/Sign Up"}
        </button>
    );
}