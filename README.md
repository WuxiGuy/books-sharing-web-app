# Book Review App
The Book Review web application is a simple book review platform that allows users to browse and view information about books, save books to their profile, and leave comments on books. The application also has user authentication and authorization features to ensure that only registered users can access certain parts of the application.

The front-end of the application is built using the React library, while the back-end is built using Node.js and the Prisma ORM to interact with a MySQL database. The application also utilizes the Auth0 service for user authentication and authorization.

## Table of Contents
- [Getting Started](#getting-started)
- [Usage](#Usage)
- [Tech Stack](#tech-stack)
- [Security](#Security)
- [Features](#features)
- [Demo](#demo)

## Getting_Started
### Prerequisites
- Node.js (v14 or higher)
- MySQL

### Installation
1. Navigate to the backend directory create Json file and install dependencies:
```bash
npm init
npm install express
npm install
```

2. Initialize the Prisma database:

```bash
npx prisma init
```

3. Push or update database:

```bash
npx prisma db push 
```
or
```bash
npx migrate dev --name init
```

4. Monitor and start backend server or database:

```bash
npx nodemon index.js
```
or
```bash
npx prisma studio
```

5. In a new terminal window, navigate to the frontend directory and install dependencies:

```bash
npm install
```

6. Start the frontend server:
```bash
npm start
```

## Usage
Once the application is up and running, you can access it by opening your web browser and navigating to ```http://localhost:3000```. From there, you can browse the list of available books, view information about each book, save books to your profile, and leave comments on books.

To save a book, you must first log in or sign up for an account. After logging in or signing up, you can click the "Save" button on the book details page to save the book to your profile.

To leave a comment on a book, you must also be logged in or signed up for an account. After logging in or signing up, you can enter your comment in the input field and click the "Post" button to leave your comment.

You can also edit your profile information by clicking on the "Profile" link in the navigation bar and entering your updated information in the input fields.

## Tech Stack
### Frontend
- React
- Node.js

### Backend
- Node.js
- Prisma database
- MySQL

## Security
This application uses Auth0 for authentication and authorization. Auth0 provides a secure, easy-to-use platform for managing user authentication and authorization.

## Features

### Basic features:
- Browser books and comments
- Search for books

### Advanced features(after loging in or signing up)
- Save or unsave books
- Leave or delete comments
- Edit personal information

## Demo
![Demo](https://github.com/WuxiGuy/books-sharing-web-app/blob/main/materials/homepage.gif?raw=true)

![Demo](https://github.com/WuxiGuy/books-sharing-web-app/blob/main/materials/book-details-comments.gif?raw=true)

![Demo](https://github.com/WuxiGuy/books-sharing-web-app/blob/main/materials/profile-savedbook.gif?raw=true)

![Demo](https://github.com/WuxiGuy/books-sharing-web-app/blob/main/materials/searchbook.gif?raw=true)