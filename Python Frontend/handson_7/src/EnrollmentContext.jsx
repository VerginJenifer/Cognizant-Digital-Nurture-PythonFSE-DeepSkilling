import { createContext, useState } from "react";

export const EnrollmentContext = createContext();

export function EnrollmentProvider({ children }) {

    const [enrolledCourses, setEnrolledCourses] = useState([]);

    function enrollCourse(course) {
        const alreadyEnrolled = enrolledCourses.some(
            enrolledCourse => enrolledCourse.id === course.id
        );

        if (alreadyEnrolled) {
            return;
        }

        setEnrolledCourses([
            ...enrolledCourses,
            course
        ]);
    }

    function removeCourse(id) {
        setEnrolledCourses(
            enrolledCourses.filter(
                course => course.id !== id
            )
        );
    }

    return (
        <EnrollmentContext.Provider
            value={{
                enrolledCourses,
                enrollCourse,
                removeCourse
            }}
        >
            {children}
        </EnrollmentContext.Provider>
    );
}