/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatient, Gender, HealthCheckEntry } from './types';

export const toNewEntry = (object: any): HealthCheckEntry => {
  return {
    id: object.date,
    date: object.date,
    specialist: object.specialist,
    type: object.type,
    description: object.description,
    healthCheckRating: Number(object.healthCheckRating),
  };
};

export const toNewPatient = (object: any): NewPatient => {
  return {
    name: parseString(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseString(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
    entries: object.entries,
  };
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${date}`);
  }
  return date;
};

const parseString = (stringToParse: any): string => {
  if (!stringToParse || !isString(stringToParse)) {
    throw new Error(`Incorrect or missing string: ${stringToParse}`);
  }
  return stringToParse;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${gender}`);
  }
  return gender;
};
