import { useSelector, useDispatch } from "react-redux";
import { unenroll } from "../enrollmentSlice";

function ProfilePage() {

    const enrolledCourses = useSelector(
        state => state.enrollment.enrolledCourses
    );

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Profile</h1>

            <h2>Enrolled Courses</h2>

            {enrolledCourses.length === 0 ? (
                <p>No courses enrolled.</p>
            ) : (
                enrolledCourses.map(course => (
                    <div key={course.id}>
                        <h3>{course.name}</h3>
                        <p>Code: {course.code}</p>
                        <p>Credits: {course.credits}</p>

                        <button
                            onClick={() => dispatch(unenroll(course.id))}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default ProfilePage;