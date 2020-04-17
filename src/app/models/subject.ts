import { Student } from './student';
export interface Subject {
    id: String,
    name: String,
    students: Student[]
}