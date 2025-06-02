const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let workouts = [];

app.get('/workouts', (req, res) => {
  res.json(workouts);
});

app.post('/workouts', (req, res) => {
  const workout = req.body;
  workouts.push(workout);
  res.status(201).json({ message: 'Workout added!', workout });
});

app.delete('/workouts', (req, res) => {
  workouts = [];
  res.json({ message: 'All workouts cleared.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
