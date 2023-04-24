import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from "./AuthButton";
import NewsTicker from "./NewsAPI";
import "../style/applayout.css";

export default function AppLayout() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

  return (
		<div className="app">
			<div className="title">
				<h1>Reading Club</h1>
			</div>
			<div className="News">
				<NewsTicker />
			</div>
			<header className="header">
				<nav role="navigation" className="menu">
					<ul className="menu-list">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="profile">Profile</Link>
						</li>
						<li>
							<Link to="saved-books">Saved</Link>
						</li>
						<li>
							<Link to="news">News</Link>
						</li>
						<li>
							<AuthButton />
						</li>
					</ul>
				</nav>
			</header>
			<main className="content">
				<Outlet />
			</main>
			{/* <a href="#main-content" className="skip-link">Skip to main content</a> */}
		</div>
);
}
            