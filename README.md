# 🍔 Campus Bites

### Smart Campus Canteen Ordering System

Campus Bites is a **full-stack web application** designed to simplify food ordering inside college campuses.
Students can browse canteens, choose dishes, book pickup time slots, and place orders without waiting in queues.

The system introduces **time-slot based pickup**, secure authentication, and personalized order tracking.

---

# 🚀 Features

### 👤 User Authentication

* Signup with **OTP verification**
* Login using **password or OTP**
* Secure user identification using **Local Storage**

### 🍽 Smart Menu System

* Browse multiple campus canteens
* View dishes with prices and images
* Interactive menu cards

### ⏱ Intelligent Time Slot Booking

* 15-minute pickup intervals
* Past slots automatically hidden
* Minimum **20-minute buffer before booking**
* Prevents invalid slot selection

### 📦 Order Management

* Orders stored in **MongoDB**
* Each order linked to **user email**
* Users can view **My Orders**

### 🎨 Clean User Interface

* Responsive layout
* Interactive food cards
* Profile dropdown
* Night mode toggle

---

# 🛠 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript (Vanilla)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Tools

* Git
* GitHub
* REST APIs

---
# 📂 Project Structure

```
campus-bites
│
├── node_modules/        # Installed dependencies
│
├── public/              # Frontend files
│   ├── index.html       # Dashboard page
│   ├── login.html       # Login page
│   ├── signup.html      # Signup page
│   ├── login.js         # Login logic
│   ├── signup.js        # Signup logic
│   ├── style.css        # UI styles
│   ├── assets/          # Images and UI assets
│
├── server.js            # Express backend server
│
├── package.json         # Project dependencies
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ⚙️ Running the Project Locally

Follow these steps to run the project on your PC.

---

## 1️⃣ Clone the Repository

```
git clone https://github.com/emirald2202/campus-bites.git
```

```
cd campus-bites
```

---

## 2️⃣ Install Dependencies

Make sure **Node.js is installed**.

Then run:

```
npm install
```

---

## 3️⃣ Start MongoDB

Ensure MongoDB is running locally.

Example connection string used:

```
mongodb://localhost:27017/campus-bites
```

---

## 4️⃣ Start Backend Server

Run:

```
node server.js
```

or if using nodemon:

```
nodemon server.js
```

Server will run on:

```
http://localhost:3000
```

---

## 5️⃣ Open the Frontend

Open the main page:

```
index.html
```

or run it using **VS Code Live Server**.

---

# 🔄 Application Flow

### 1️⃣ User visits dashboard

Users can explore canteens without logging in.

### 2️⃣ Select food

User selects dish and pickup time.

### 3️⃣ Confirm order

If user is not logged in → redirected to login page.

### 4️⃣ Authentication

User logs in using:

* Password
* OTP

### 5️⃣ Order stored

Order is saved in MongoDB with the user’s email.

### 6️⃣ My Orders

Users can view their previous orders.

---



---

# 🔮 Future Improvements

* Admin dashboard for kitchen staff
* Real-time order preparation status
* Payment gateway integration
* Mobile responsive improvements
* Notifications when order is ready

---

# 🎯 Learning Outcomes

This project demonstrates:

* Full-stack development
* REST API design
* Authentication flows
* Database integration
* Real-world system design

It simulates a **campus food ordering platform with scheduling constraints**.

---

# 👨‍💻 Author

**Makarand Kulkarni**
Computer Science Engineering Student

GitHub:
https://github.com/emirald2202

---

# ⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork it
🛠 Contribute improvements
