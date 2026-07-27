import { useParams } from "react-router-dom";

function CourseDetailPage({ courses }) {

    const { courseId } = useParams();

    const course = courses.find(
        course => course.id === Number(courseId)
    );

    if (!course) {
        return <h2>Course not found</h2>;
    }

    return (
        <div>
            <h1>{course.name}</h1>
            <p>Code: {course.code}</p>
            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
        </div>
    );
}

export default CourseDetailPage;