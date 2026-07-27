import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ProfilePage from "./pages/ProfilePage";
import CourseDetailPage from "./pages/CourseDetailPage";

function App() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
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
            />

            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/courses"
                    element={
                        <CoursesPage
                            courses={courses}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    }
                />

                <Route
                    path="/profile"
                    element={<ProfilePage />}
                />

                <Route
                    path="/courses/:courseId"
                    element={<CourseDetailPage courses={courses} />}
                />
            </Routes>

            <Footer />
        </>
    );
}

export default App;