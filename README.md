# RealTrust Platform – Full Stack Web Application

## Project Overview

RealTrust Platform is a full-stack real estate web application that includes a landing page and an admin panel.
Users can view projects and submit contact details, while the admin can manage data through the backend.

The project is built as part of an assignment to demonstrate frontend design, backend APIs, database integration, and deployment.

---

## Approach

I followed a full-stack approach to build this project:

1. Designed the frontend UI based on the reference design.
2. Created REST APIs using Node.js and Express.
3. Connected the backend with MongoDB Atlas for data storage.
4. Integrated frontend with backend APIs.
5. Deployed backend on Render and frontend on Vercel.
6. Tested all features to ensure proper functionality.

The main focus was on clean design, working features, and smooth integration between frontend and backend.

---

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Backend: Render
* Frontend: Vercel
* Version Control: Git & GitHub

---

## Features Implemented

### Landing Page

* Responsive UI design
* Project listing from database
* Contact form connected to backend
* Client and subscriber data handling

### Backend APIs

* Projects API
* Clients API
* Contacts API
* Subscribers API
* Image upload support

### Database

* Data stored in MongoDB Atlas
* Real-time data fetching from backend

---

## Steps to Run the Project Locally

### 1. Clone the Repository

```bash
git clone <your-github-repo-link>
cd realtrust-platform
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start backend server:

```bash
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 3. Run Frontend

Open `frontend/index.html` in a browser
(or use Live Server in VS Code).

---

## Live Deployment Links

Frontend (Vercel):
👉 [https://realtrust-platform.vercel.app](https://realtrust-platform.vercel.app)


---

## Notes

* The application is fully functional and connected to a live database.
* Backend APIs are deployed and accessible.
* Frontend fetches data dynamically from the backend.
* Code is organized into frontend and backend folders for clarity.

---

## Conclusion

This project demonstrates a complete full-stack workflow including UI design, API development, database integration, and cloud deployment.
It was built with focus on functionality, clean code, and usability.


