It looks like you're requesting an update to your README to reflect the full **MEAN stack**, not just the backend API. Right now, the README only focuses on the **backend (MongoDB, Express.js, Node.js)** portion and doesn’t mention the **Angular frontend**, which is a critical part of the MEAN stack.

Here’s an updated version of your introduction and table of contents to reflect that the repository includes or supports both frontend and backend (assuming you either have the frontend code in a subfolder or intend to link it):

---

# E-Commerce Application (MEAN Stack)

This repository contains the backend API for a modern e-commerce application built with the **MEAN stack (MongoDB, Express.js, Angular, Node.js)**. It provides RESTful endpoints for user management (authentication, authorization), product catalog, order processing, and more.

A separate Angular frontend client is included in this project or is intended to be used alongside this backend to provide a full-stack e-commerce solution.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)

  * [Backend Installation](#backend-installation)
  * [Frontend Installation](#frontend-installation)
  * [Environment Variables](#environment-variables)
  * [Running the Application](#running-the-application)
* [API Endpoints](#api-endpoints)
* [Database Schema](#database-schema)
* [Authentication & Authorization](#authentication--authorization)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [License](#license)

## Features

* **User Authentication**: Register, Login, and get authenticated user details using JSON Web Tokens (JWT).
* **User Roles**: Differentiate between regular users and administrators.
* **Product Management**: CRUD operations for products (Create, Read, Update, Delete) - Admin-only for CUD.
* **Category Management**: CRUD operations for product categories.
* **Order Management**: Handle order creation, viewing, and status updates.
* **Database Integration**: MongoDB with Mongoose for robust data modeling.
* **Frontend Interface**: Angular frontend for seamless user interaction and admin management.
* **Scalable API**: Built with Express.js for a flexible and performant backend.

## Technologies Used

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Backend framework for Node.js.
* **MongoDB**: NoSQL database for data storage.
* **Mongoose**: MongoDB object modeling.
* **JWT (jsonwebtoken)**: Secure token-based authentication.
* **Bcrypt.js**: Password hashing.
* **CORS**: Middleware for Cross-Origin Resource Sharing.
* **Dotenv**: Managing environment variables.
* **Angular**: Frontend SPA framework using TypeScript.
* **RxJS**: Reactive programming for frontend data streams.
* **Angular Material or Bootstrap** *(if used)*: UI components and styling.

## Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (LTS version)
* **npm** (Node Package Manager)
* **Angular CLI**
* **MongoDB** (locally or MongoDB Atlas)
* A code editor like **VS Code**

---

If your Angular frontend is located in a subdirectory (e.g., `/frontend`), you can add a section under **Getting Started** like:

### Frontend Installation

```bash
cd frontend
npm install
ng serve
```

Let me know if you’d like the full README updated with those sections or if you want to link the frontend and backend repos together cleanly in one document.
