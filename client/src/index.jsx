import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import VerifyUser from "./components/VerifyUser";
import AuthDebugger from "./components/AuthDebugger";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SavedBooks from "./components/SavedBooks";
import Book from "./components/Book";
import NotFound from "./components/NotFound";
import NewsList from "./components/News";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthTokenProvider } from "./AuthTokenContext";
import Search from "./components/Search";

const container = document.getElementById("root");

const requestedScopes = [
  "profile",
  "email",
  "read:bookitem",
  "read:user",
  "edit:bookitem",
  "edit:user",
  "delete:bookitem",
  "delete:user",
  "write:user",
  "write:bookitem",
];

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
      redirect_uri: `${window.location.origin}/verify-user`,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: requestedScopes.join(" "),
      }}
    >
    <AuthTokenProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" 
              element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="saved-books" element={<SavedBooks />} />
              <Route path="books/:bookId" element={<Book />} />
              <Route path="search/" element={<Search />} />
              <Route path="search/:searchTerm" element={<Search />} />
              <Route path="debugger" element={<AuthDebugger />} />
            </Route>
            <Route path="/verify-user" element={<VerifyUser />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </AuthTokenProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();