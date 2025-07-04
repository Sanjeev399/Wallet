# 💳 Wallet App

A cross-platform digital wallet application built using **React Native** and **Expo**, integrated with a fast and scalable backend using **Neon PostgreSQL**, **Redis**, and REST APIs deployed via **Render**. The app uses **Clerk** for secure, modern authentication and user management. It allows users to manage expenses, view transaction history, and handle digital payments in a seamless and secure environment.

---

## 📱 Features

- Create and manage wallet accounts
- Sign up and login using **Clerk authentication**
- Secure JWT-based API access
- Track income and expenses in real-time
- Transaction history with filtering and sorting
- Persistent storage using Neon PostgreSQL
- Fast in-memory caching with Redis
- Optimized backend deployment using Render

---

## 🛠 Tech Stack

### Frontend
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Clerk](https://clerk.dev/) (Authentication)
- React Navigation
- AsyncStorage

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Neon PostgreSQL](https://neon.tech/)
- [Redis](https://redis.io/)
- [Render](https://render.com/)

---

## 🔐 Authentication

This project uses **Clerk** for:

- User sign-up, login, and session management
- Secure JWT token generation
- Easy integration with React Native (using Clerk's Expo SDK)
- Role-based access (optional for future expansion)

To use Clerk:

1. Create an account at [Clerk.dev](https://clerk.dev/)
2. Create a new application
3. Copy your `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
4. Add them to your `.env` files in both frontend and backend

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16.x
- Expo CLI (`npm install -g expo-cli`)
- Clerk account and app keys
- Neon DB credentials
- Redis server or URL
- Render account
  
### 1. Clone the Repository  

```bash
git clone https://github.com/Sanjeev399/Wallet.git
cd wallet
```
### 2. Setup the Frontend
```bash
cd Mobile
npm install
expo start
```
Create a .env file in Mobile/:
```bash
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```
Create a constants/api.js file in Mobile/:
```bash
API_URL=https://your-backend-url.onrender.com
```
### 3. Setup the Backend

```bash
cd Backend
npm install
```
Create a .env file in Backend/:
```bash
PORT=5001
DATABASE_URL=your_neon_postgres_url
REDIS_URL=your_redis_url
JWT_SECRET=your_jwt_secret
CLERK_SECRET_KEY=your_clerk_secret_key
```
Start server locally:
```bash
npm start
```

### 4. Deployment (Render)
- Push backend code to GitHub
- Connect repo to Render
- Set Build Command: npm install
- Set Start Command: npm start
- Add environment variables
- Deploy and use the API URL in the frontend

### 📂 Project Structure
```bash
Wallet/
├── Backend/           # Node.js + Express backend with Clerk verification
│   ├──src
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── routes/
│       └── server.js
├── Mobile/            # React Native + Expo + Clerk frontend
```
### 📱 Building for Production
 ### Android
 - [EAS for Android](https://docs.expo.dev/build/setup/)
 ```bash
  eas build --platform android 
 ```
 ### iOS
 - [EAS for iOS](https://docs.expo.dev/tutorial/eas/ios-production-build/)
 ```bash
  eas build --platform ios
 ```
 
### 🙌 Contributing
Contributions, issues, and feature requests are welcome!
- Fork the repo
- Create a new branch (git checkout -b feature/xyz)
- Commit your changes
- Push to the branch
- Open a Pull Request
