# User Management System

## 📌 Project Overview

The User Management System is a RESTful web application built using Node.js, Express.js, MongoDB, and Mongoose. It allows users to perform CRUD (Create, Read, Update, Delete) operations on user records through secure API endpoints.

This project demonstrates backend development concepts such as REST APIs, database integration, middleware implementation, authentication, and error handling.

---

## 🚀 Features

* Create a new user
* View all users
* View a user by ID
* Update user details
* Delete a user
* MongoDB database integration
* Basic Authentication for protected routes
* Error handling and validation
* RESTful API architecture

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* Basic Auth
* Nodemon

---

## 📂 Project Structure

User-Management-System/

├── models/

│ └── User.js

├── routes/

│ └── userRoutes.js

├── middleware/

│ └── auth.js

├── .env

├── server.js

├── package.json

└── README.md

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/satyakavisetti/Syntecxhub_User_Management_System.git
cd User-Management-System
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
ADMIN_USER=admin
ADMIN_PASS=admin123
```

### Start Application

```bash
npm run dev
```

Server will run on:

```text
http://localhost:5000
```

---

## 📡 API Endpoints

### Get All Users

```http
GET /api/users
```

### Get User By ID

```http
GET /api/users/:id
```

### Create User

```http
POST /api/users
```

Request Body:

```json
{
  "name": "Satya",
  "email": "satya@example.com",
  "age": 20
}
```

### Update User

```http
PUT /api/users/:id
```

### Delete User

```http
DELETE /api/users/:id
```

---

## 🔒 Authentication

Protected routes use Basic Authentication.

Example:

Username:

```text
admin
```

Password:

```text
admin123
```

---

## 🧪 Testing

API testing can be performed using:

* Postman
* Thunder Client
* Insomnia

---

## 📈 Future Enhancements

* JWT Authentication
* User Login & Registration
* Role-Based Access Control
* Frontend Dashboard
* Search & Pagination
* Docker Deployment

---

