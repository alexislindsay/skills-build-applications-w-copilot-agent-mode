import React, { useState } from 'react';

const WorkoutForm = ({ onLogWorkout }) => {
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [intensity, setIntensity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type && duration && intensity) {
            onLogWorkout({ type, duration, intensity });
            setType('');
            setDuration('');
            setIntensity('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="workout-form">
            <h2>Log Your Workout</h2>
            <div>
                <label>Type:</label>
                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Duration (minutes):</label>
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Intensity:</label>
                <select
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value)}
                    required
                >
                    <option value="">Select Intensity</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <button type="submit">Log Workout</button>
        </form>
    );
};

export default WorkoutForm;