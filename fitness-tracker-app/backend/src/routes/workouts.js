const express = require('express');
const WorkoutsController = require('../controllers/workoutsController');
const Workout = require('../models/workout');

const router = express.Router();
const workoutsController = new WorkoutsController(Workout);

router.post('/log', workoutsController.logWorkout.bind(workoutsController));
router.get('/history', workoutsController.getWorkoutHistory.bind(workoutsController));
router.get('/progress', workoutsController.trackProgress.bind(workoutsController));
router.delete('/reset', workoutsController.resetData.bind(workoutsController));

module.exports = router;