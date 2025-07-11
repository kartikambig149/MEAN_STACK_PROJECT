~AUTHER : KARTIK UMESH AMBIG
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
* **Angular**: Frontend SPA framework using TypeScript.
* **Angular Material: UI components and styling.

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
