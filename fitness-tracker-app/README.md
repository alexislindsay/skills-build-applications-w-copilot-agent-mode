# Fitness Tracker App

## Project Description
The Fitness Tracker App is a full-stack web application designed for students to log their workouts, track their progress over time, view workout history, and reset or clear their data. The application is built using React for the frontend and Express for the backend, with a simple database for storing workout information.

## Features
- Log workouts with details such as type, duration, and intensity.
- Track progress over time with visualizations.
- View a history of logged workouts.
- Reset or clear workout data easily.

## Tech Stack
- **Frontend**: React 17, React Router, Axios, Chart.js
- **Backend**: Express, Mongoose
- **Database**: MongoDB

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd fitness-tracker-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure MongoDB is running on your system:
   ```bash
   # On Linux/macOS
   sudo service mongod start
   # Or using Docker
   docker run -d -p 27017:27017 mongo
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd fitness-tracker-app/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`

## Usage
- Access the application in your browser at `http://localhost:3000`
- Use the navigation menu to:
  - **Log Workout**: Add new workouts with type, duration, and intensity
  - **History**: View all logged workouts in a table format
  - **Progress**: Visualize your workout data over time with interactive charts
  - **Reset Data**: Clear all workout data from the database

## API Endpoints
- `POST /api/workouts/log` - Log a new workout
- `GET /api/workouts/history` - Retrieve all workouts
- `GET /api/workouts/progress` - Get progress data
- `DELETE /api/workouts/reset` - Delete all workouts

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add. 

## License
This project is open-source and available under the MIT License.