import { create } from "zustand";

interface Course {
  id: number;
  code: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade: string; // A, B+, B, C+, C, D+, D, F
}

interface CourseState {
  courses: Course[];
  dropped: Course[];
  addCourse: (course: Omit<Course, "id">) => void;
  dropCourse: (id: number) => void;
  calculateGPA: () => number;
}

const gradeToPoint: Record<string, number> = {
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2.5,
  C: 2.0,
  "D+": 1.5,
  D: 1.0,
  F: 0,
};

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  dropped: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, { ...course, id: Date.now() }],
    })),
  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        dropped: [...state.dropped, course],
      };
    }),
  calculateGPA: () => {
    const { courses } = get();
    let totalCredits = 0;
    let totalPoints = 0;

    courses.forEach((c) => {
      totalCredits += c.credit;
      totalPoints += gradeToPoint[c.grade] * c.credit;
    });

    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  },
}));
