import React from 'react';

const ResetDataButton = ({ onReset }) => {
    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset all data? This action cannot be undone.")) {
            onReset();
        }
    };

    return (
        <button onClick={handleReset} className="reset-data-button">
            Reset Data
        </button>
    );
};

export default ResetDataButton;