import React from 'react';
import { Line } from 'react-chartjs-2';

const ProgressChart = ({ workoutData }) => {
    const data = {
        labels: workoutData.map(workout => workout.date),
        datasets: [
            {
                label: 'Workout Duration (minutes)',
                data: workoutData.map(workout => workout.duration),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
            {
                label: 'Workout Intensity',
                data: workoutData.map(workout => workout.intensity),
                fill: false,
                backgroundColor: 'rgba(255,99,132,0.4)',
                borderColor: 'rgba(255,99,132,1)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Progress Over Time</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default ProgressChart;