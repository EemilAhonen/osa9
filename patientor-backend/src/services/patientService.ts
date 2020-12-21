/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import patientData from '../../data/patients';
import {
  HealthCheckEntry,
  NewPatient,
  NonSensitivePatient,
  Patient,
} from '../types';
import { toNewPatient } from '../utils';

const patientEntries: Patient[] = patientData.map((obj) => {
  const object = toNewPatient(obj) as Patient;
  object.id = obj.id;
  return object;
});

const getEntries = (): NonSensitivePatient[] => {
  return patientEntries.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
};

const getEntry = (id: string): Patient => {
  return patientEntries.filter((x) => x.id === id)[0];
};

const addEntry = (entry: NewPatient): Patient => {
  const newPatient = {
    id: (patientData.length + 1).toString(),
    ...entry,
  };
  patientEntries.push(newPatient);
  return newPatient;
};

const addPatientEntry = (
  entry: HealthCheckEntry,
  patientId: string
): HealthCheckEntry => {
  const newPatientEntry = {
    ...entry,
    id: entry.date,
  };
  patientEntries.find((x) => x.id === patientId)?.entries.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getEntries,
  addEntry,
  getEntry,
  addPatientEntry,
};
