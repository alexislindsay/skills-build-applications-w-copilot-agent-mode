import React from 'react';

const WorkoutHistory = ({ workouts = [] }) => {
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