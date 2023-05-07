# Book Review App
This is a web application that allows users to view information about books and leave comments.
Users can also save books to their profile and edit their profile information. 
The application uses Auth0 for authentication and authorization.

## Table of Contents
- [Getting Started](#getting-started)
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