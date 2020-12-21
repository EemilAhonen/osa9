export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface CoursePartComment extends CoursePartBase {
  description: string;
}

export interface CoursePartOne extends CoursePartComment {
  name: 'Fundamentals';
}

export interface CoursePartTwo extends CoursePartBase {
  name: 'Using props to pass data';
  groupProjectCount: number;
}

export interface CoursePartThree extends CoursePartComment {
  name: 'Deeper type usage';
  exerciseSubmissionLink: string;
}

export interface CoursePartFour extends CoursePartComment {
  name: 'Testing';
}

export type CoursePart =
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree
  | CoursePartFour;
