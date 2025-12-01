import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ProgressChart = ({ workoutData = [] }) => {
    const intensityToNumber = (intensity) => {
        const map = { low: 1, medium: 2, high: 3 };
        return map[intensity?.toLowerCase()] || 0;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    if (workoutData.length === 0) {
        return (
            <div>
                <h2>Progress Over Time</h2>
                <p>No workout data available to display chart.</p>
            </div>
        );
    }

    const data = {
        labels: workoutData.map(workout => formatDate(workout.date)),
        datasets: [
            {
                label: 'Workout Duration (minutes)',
                data: workoutData.map(workout => workout.duration),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
            {
                label: 'Workout Intensity (Low=1, Medium=2, High=3)',
                data: workoutData.map(workout => intensityToNumber(workout.intensity)),
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
        <div className="chart-container">
            <h2>Progress Over Time</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default ProgressChart;