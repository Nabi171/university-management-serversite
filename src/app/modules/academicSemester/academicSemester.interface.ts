import { Model } from 'mongoose';

export type IAcademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemesterTitles = 'Autumn' | 'Summer' | 'Fall';

export type IAcademicSemesterCodes = '01' | '02' | '03';

export const academicSemesterSearchableFields = ['title', 'code', 'year'];

export const academicSemesterfilterableFields = [
  'searchTerm',
  'title',
  'code',
  'year',
];

export type IAcademicSemester = {
  title: IAcademicSemesterTitles;
  year: string;
  code: IAcademicSemesterCodes;
  startMonth: IAcademicSemesterMonths;
  endMonth: IAcademicSemesterMonths;
};

export type AcademicSemesterModel = Model<IAcademicSemester>;

export type IAcademicSemesterFilters = {
  searchTerm?: string;
};
