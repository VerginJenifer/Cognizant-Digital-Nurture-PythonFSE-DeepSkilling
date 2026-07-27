import CourseCard from "../components/CourseCard";

function CoursesPage({ courses, searchTerm, setSearchTerm }) {

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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