export const calculateBmi = (height: number, weight: number): string => {
  const heightInMeters = height / 100;
  const bmi: number = weight / (heightInMeters * heightInMeters);
  switch (true) {
    case bmi < 15:
      return 'Very severely underweight';
    case bmi < 16:
      return 'Severely underweight';
    case bmi < 18.5:
      return 'Underweight';
    case bmi < 25:
      return 'Normal (healthy weight)';
    case bmi < 30:
      return 'Overweight';
    case bmi < 35:
      return 'Obese Class I (Moderately obese)';
    case bmi < 40:
      return 'Obese Class II (Severely obese)';
    default:
      return 'Obese Class III (Very severely obese)';
  }
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
  console.log(calculateBmi(args[0], args[1]));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}
