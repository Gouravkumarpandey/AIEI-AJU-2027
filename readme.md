# IEEE AJU Conference Platform

A full-stack web application for managing the IEEE AJU conference, including registration, paper submission, schedule, speakers, and contact forms.

## Project Structure

```
client/         # React Vite frontend
server/         # Node.js Express backend
```

### Client (Frontend)
- Built with React and Vite
- Organized into components, pages, layouts, routes, services, and assets
- Handles user interface for registration, paper submission, schedule, speakers, and contact

### Server (Backend)
- Built with Node.js, Express, and MongoDB (via Mongoose)
- Organized into controllers, models, routes, middleware, and utilities
- Handles API endpoints for registration, contact, and paper submission

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (local or cloud)

### Setup

#### 1. Clone the repository
```sh
git clone https://github.com/Gouravkumarpandey/IEEE-AJU.git
cd IEEE-AJU
```

#### 2. Install dependencies
```sh
cd client
npm install
cd ../server
npm install
```

#### 3. Configure environment variables
- Edit `server/.env` for MongoDB connection and server port
- Edit `client/.env` for API URL if needed

#### 4. Run the development servers
- **Frontend:**
  ```sh
  cd client
  npm run dev
  ```
- **Backend:**
  ```sh
  cd server
  npm run dev
  ```

## Usage
- Access the frontend at `http://localhost:5173`
- Backend API runs at `http://localhost:5000` (default)

## Features
- User registration
- Paper submission
- View schedule and speakers
- Contact form

