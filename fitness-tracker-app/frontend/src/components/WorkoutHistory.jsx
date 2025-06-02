import React, { useEffect, useState } from 'react';

const WorkoutHistory = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkoutHistory = async () => {
            try {
                const response = await fetch('/api/workouts');
                const data = await response.json();
                setWorkouts(data);
            } catch (error) {
                console.error('Error fetching workout history:', error);
            }
        };

        fetchWorkoutHistory();
    }, []);

    return (
        <div className="workout-history">
            <h2>Workout History</h2>
            {workouts.length === 0 ? (
                <p>No workouts logged yet.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Duration (minutes)</th>
                            <th>Intensity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workouts.map((workout, index) => (
                            <tr key={index}>
                                <td>{workout.type}</td>
                                <td>{workout.duration}</td>
                                <td>{workout.intensity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default WorkoutHistory;