import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";
function App() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                const courseNames = [
                    "Data Structures",
                    "Web Development",
                    "Database Management",
                    "Artificial Intelligence",
                    "Machine Learning"
                ];
                const fetchedCourses = data.slice(0, 5).map((post, index) => ({
                    id: post.id,
                    name: courseNames[index],
                    code: `CS10${post.id}`,
                    credits: 4,
                    grade: "A"
                }));

                setCourses(fetchedCourses);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load courses.");
                setLoading(false);
            });
    }, []);
    
    useEffect(() => {
        console.log("Courses updated");
    }, [courses]);

    function handleEnroll(course) {
        const alreadyEnrolled = enrolledCourses.some(
            enrolledCourse => enrolledCourse.id === course.id
        );
        if (alreadyEnrolled) {
            alert("You have already enrolled in this course.");
            return;
        }
        setEnrolledCourses([...enrolledCourses, course]);
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <>
            <Header
                siteName="Student Portal"
                enrolledCount={enrolledCourses.length}
            />

            <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {courses
                .filter(course =>
                    course.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(course => (
                    <CourseCard
                        key={course.id}
                        {...course}
                        onEnroll={handleEnroll}
                    />
                ))}
            <StudentProfile />

            <Footer />
        </>
    );
}

export default App;