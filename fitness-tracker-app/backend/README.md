# Fitness Tracker App - Backend

This is the backend part of the Fitness Tracker application. It is built using Express and connects to a database to manage workout data.

## Features

- Log workouts with type, duration, and intensity.
- Retrieve workout history.
- Track progress over time.
- Reset or clear workout data.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/fitness-tracker-app.git
   ```

2. Navigate to the backend directory:
   ```
   cd fitness-tracker-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the backend server, run:
```
npm start
```

The server will run on `http://localhost:5000` by default.

### API Endpoints

- `POST /api/workouts`: Log a new workout.
- `GET /api/workouts`: Retrieve workout history.
- `GET /api/progress`: Track progress over time.
- `DELETE /api/workouts`: Reset or clear workout data.

## Folder Structure

- `src/app.js`: Entry point of the backend application.
- `src/controllers/workoutsController.js`: Contains logic for handling workout-related operations.
- `src/models/workout.js`: Defines the Workout model.
- `src/routes/workouts.js`: Sets up API routes for workouts.

## License

This project is licensed under the MIT License.