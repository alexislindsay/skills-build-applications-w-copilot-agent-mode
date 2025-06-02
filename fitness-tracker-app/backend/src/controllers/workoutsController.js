class WorkoutsController {
    constructor(workoutModel) {
        this.workoutModel = workoutModel;
    }

    async logWorkout(req, res) {
        try {
            const { type, duration, intensity } = req.body;
            const newWorkout = await this.workoutModel.create({ type, duration, intensity });
            res.status(201).json(newWorkout);
        } catch (error) {
            res.status(500).json({ message: 'Error logging workout', error });
        }
    }

    async getWorkoutHistory(req, res) {
        try {
            const workouts = await this.workoutModel.find({});
            res.status(200).json(workouts);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving workout history', error });
        }
    }

    async trackProgress(req, res) {
        try {
            const workouts = await this.workoutModel.find({});
            // Logic to calculate progress can be added here
            res.status(200).json(workouts);
        } catch (error) {
            res.status(500).json({ message: 'Error tracking progress', error });
        }
    }

    async resetData(req, res) {
        try {
            await this.workoutModel.deleteMany({});
            res.status(200).json({ message: 'Workout data reset successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error resetting data', error });
        }
    }
}

export default WorkoutsController;