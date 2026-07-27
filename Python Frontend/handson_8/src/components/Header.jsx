import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header(props) {

    const enrolledCourses = useSelector(
        state => state.enrollment.enrolledCourses
    );

    return (
        <header>
            <h1>{props.siteName}</h1>

            <p>
                Enrolled Courses: {enrolledCourses.length}
            </p>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
}

export default Header;