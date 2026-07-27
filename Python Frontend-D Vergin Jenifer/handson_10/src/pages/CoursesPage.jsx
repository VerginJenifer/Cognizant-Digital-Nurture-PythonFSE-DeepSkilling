import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../components/CourseCard";
import {
    fetchAllCourses,
    selectCourses,
    selectCoursesLoading
} from "../coursesSlice";

function CoursesPage({ searchTerm, setSearchTerm }) {

    const dispatch = useDispatch();

    const courses = useSelector(selectCourses);

    const loading = useSelector(selectCoursesLoading);

    const error = useSelector(
        state => state.courses.error
    );


    useEffect(() => {
        dispatch(fetchAllCourses());
    }, [dispatch]);


    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    if (loading) {
        return <h2>Loading courses...</h2>;
    }


    if (error) {
        return <h2>{error}</h2>;
    }


    return (
        <div>
            <h1>Courses</h1>

            <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredCourses.map(course => (
                <CourseCard
                    key={course.id}
                    {...course}
                />
            ))}
        </div>
    );
}

export default CoursesPage;