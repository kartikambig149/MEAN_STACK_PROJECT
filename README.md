# E-Commerce Backend API (MEAN Stack)

This repository contains the backend API for a modern e-commerce application built with the MEAN stack (MongoDB, Express.js, Node.js). It provides RESTful endpoints for user management (authentication, authorization), product catalog, order processing, and more.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication & Authorization](#authentication--authorization)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

-   **User Authentication**: Register, Login, and get authenticated user details using JSON Web Tokens (JWT).
-   **User Roles**: Differentiate between regular users and administrators.
-   **Product Management**: CRUD operations for products (Create, Read, Update, Delete) - Admin-only for CUD.
-   **Category Management**: CRUD operations for product categories.
-   **Order Management**: Handle order creation, viewing, and status updates.
-   **Database Integration**: MongoDB with Mongoose for robust data modeling.
-   **Scalable API**: Built with Express.js for a flexible and performant API.

## Technologies Used

-   **Node.js**: JavaScript runtime environment.
-   **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
-   **MongoDB**: NoSQL database for storing application data.
-   **Mongoose**: MongoDB object modeling for Node.js.
-   **JWT (jsonwebtoken)**: For secure user authentication.
-   **Bcrypt.js**: For hashing passwords securely.
-   **CORS**: Middleware to enable Cross-Origin Resource Sharing.
-   **Dotenv**: To manage environment variables.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Node.js (LTS version recommended)
-   npm (Node Package Manager)
-   MongoDB installed locally and running, or access to a MongoDB Atlas cluster.
-   Git

## Getting Started

Follow these steps to get the backend up and running on your local machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/kartikambig149/ecommerce-backend.git](https://github.com/kartikambig149/ecommerce-backend.git)
    # Or, if it's part of a larger monorepo structure, adjust accordingly
    # git clone [https://github.com/kartikambig149/MEAN_STACK_PROJECT.git](https://github.com/kartikambig149/MEAN_STACK_PROJECT.git)
    ```
2.  **Navigate to the backend directory:**
    ```bash
    cd ecommerce-backend # Or the appropriate path if cloned as part of a monorepo
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the root of the `ecommerce-backend` directory and add the following variables:

```dotenv
MONGO_URI=mongodb://localhost:27017/ecommerce_db
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
