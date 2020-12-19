import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if (isNaN(height) || isNaN(weight))
      throw new Error('malformatted parameters');

    const bmi = calculateBmi(height, weight);
    res.json({ weight, height, bmi });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post('/exercises', (req, res) => {
  try {
    const body = req.body;
    if (!body.target || !body.daily_exercises)
      throw new Error('parameters missing');

    const dailyExercises: number[] = body.daily_exercises;
    const target = Number(body.target);

    if (isNaN(target) || dailyExercises.filter((x) => isNaN(x)).length > 0)
      throw new Error('malformatted parameters');

    res.json(calculateExercises([target].concat(dailyExercises)));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
