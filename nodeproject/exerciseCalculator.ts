interface exerciseCalculation {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const ratingDescriptions: string[] = [
  'not good',
  'not too bad but could be better',
  'good',
];

export const calculateExercises = (
  exerciseHours: number[]
): exerciseCalculation => {
  const target: number = exerciseHours[0];
  const hours: number[] = exerciseHours.slice(1);
  const periodLength: number = hours.length;
  const trainingDays: number = hours.filter((x) => x !== 0).length;
  const average: number = hours.reduce((a, x) => a + x, 0) / hours.length;
  const rating: number = average < 1 ? 1 : average < 3 ? 2 : 3;
  const ratingDescription: string = ratingDescriptions[rating - 1];
  const success: boolean = target <= rating ? true : false;
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

const parseArguments = (args: Array<string>): number[] => {
  if (args.length < 4) throw new Error('Not enough arguments');
  const array: number[] = args.slice(2).map((x) => Number(x));
  if (array.filter((x) => isNaN(x)).length === 0) {
    return array;
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

try {
  const args: number[] = parseArguments(process.argv);
  console.log(calculateExercises(args));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}
