import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enroll } from "../enrollmentSlice";

function CourseCard(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleEnroll() {
        dispatch(enroll(props));
        navigate("/profile");
    }

    return (
        <article
            onClick={() => navigate(`/courses/${props.id}`)}
        >
            <h2>{props.name}</h2>
            <p>Code: {props.code}</p>
            <p>Credits: {props.credits}</p>
            <p>Grade: {props.grade}</p>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleEnroll();
                }}
            >
                Enroll
            </button>
        </article>
    );
}

export default CourseCard;