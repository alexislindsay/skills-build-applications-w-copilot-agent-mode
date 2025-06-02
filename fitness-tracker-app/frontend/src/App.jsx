import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkoutForm from './components/WorkoutForm';
import WorkoutHistory from './components/WorkoutHistory';
import ProgressChart from './components/ProgressChart';
import ResetDataButton from './components/ResetDataButton';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Fitness Tracker</h1>
                <Switch>
                    <Route path="/" exact component={WorkoutForm} />
                    <Route path="/history" component={WorkoutHistory} />
                    <Route path="/progress" component={ProgressChart} />
                    <Route path="/reset" component={ResetDataButton} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;