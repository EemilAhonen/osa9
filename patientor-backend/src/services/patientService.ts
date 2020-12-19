import patientData from '../../data/patients.json';
import {
  NewPatientEntry,
  NonSensitivePatientEntry,
  PatientEntry,
} from '../types';
import toNewPatientEntry from '../utils';

const patientEntries: PatientEntry[] = patientData.map((obj) => {
  const object = toNewPatientEntry(obj) as PatientEntry;
  object.id = obj.id;
  return object;
});

const getEntries = (): NonSensitivePatientEntry[] => {
  return patientEntries.map(
    ({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    })
  );
};

const addEntry = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: (patientData.length + 1).toString(),
    ...entry,
  };
  patientEntries.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getEntries,
  addEntry,
};
