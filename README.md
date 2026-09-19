# 🌤️ Weather App

A full-stack weather application built with **React, Node.js, Express, MongoDB, and Open-Meteo API**.

## ✨ Features

* 🔍 Search weather by city
* 🌡️ Current weather information
* 💨 Wind speed and humidity
* 🌧️ Rain probability and precipitation
* 🌅 Sunrise and sunset
* ⏰ 24-hour forecast
* 📅 7-day forecast
* 🌙 Day/night interface
* 🔄 Refresh weather
* 🕘 Search history
* ⭐ Favorite cities
* 📱 Responsive design

## 🛠️ Technologies

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas
* Mongoose

### API

* Open-Meteo

## 📁 Project Structure

```text
weather-app/
├── client/
│   └── React + Vite frontend
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── .gitignore
└── README.md
```

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/PrabinPoudel55/weather-app.git
cd weather-app
```

### 2. Start Backend

```bash
cd server
npm install
npm run dev
```

Backend:

```text
http://localhost:5000
```

### 3. Start Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

> Never upload your `.env` file or MongoDB credentials to GitHub.

## 🔌 API Endpoints

```text
GET    /api/weather?city=Kathmandu
GET    /api/history
DELETE /api/history/:id
DELETE /api/history
GET    /api/favorites
POST   /api/favorites
DELETE /api/favorites/:id
```

## 🚀 Deployment

Frontend: **Vercel** 

Backend: **Render** 

Database: **MongoDB Atlas**

## 👨‍💻 Author

**Prabin Poudel**

GitHub:
https://github.com/PrabinPoudel55

````

