import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import WorkoutForm from './components/WorkoutForm';
import WorkoutHistory from './components/WorkoutHistory';
import ProgressChart from './components/ProgressChart';
import ResetDataButton from './components/ResetDataButton';
import './styles/App.css';

const API_URL = 'http://localhost:5000/api/workouts';

function App() {
    const [workouts, setWorkouts] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        fetchWorkouts();
    }, [refreshKey]);

    const fetchWorkouts = async () => {
        try {
            const response = await axios.get(`${API_URL}/history`);
            setWorkouts(response.data);
        } catch (error) {
            console.error('Error fetching workouts:', error);
        }
    };

    const handleLogWorkout = async (workoutData) => {
        try {
            await axios.post(`${API_URL}/log`, workoutData);
            setRefreshKey(prev => prev + 1);
            alert('Workout logged successfully!');
        } catch (error) {
            console.error('Error logging workout:', error);
            alert('Failed to log workout');
        }
    };

    const handleResetData = async () => {
        try {
            await axios.delete(`${API_URL}/reset`);
            setRefreshKey(prev => prev + 1);
            alert('All data has been reset');
        } catch (error) {
            console.error('Error resetting data:', error);
            alert('Failed to reset data');
        }
    };

    return (
        <Router>
            <div className="App">
                <h1>Fitness Tracker</h1>
                <nav className="navigation">
                    <Link to="/">Log Workout</Link>
                    <Link to="/history">History</Link>
                    <Link to="/progress">Progress</Link>
                    <Link to="/reset">Reset Data</Link>
                </nav>
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <WorkoutForm onLogWorkout={handleLogWorkout} />
                        </Route>
                        <Route path="/history">
                            <WorkoutHistory workouts={workouts} />
                        </Route>
                        <Route path="/progress">
                            <ProgressChart workoutData={workouts} />
                        </Route>
                        <Route path="/reset">
                            <ResetDataButton onReset={handleResetData} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;