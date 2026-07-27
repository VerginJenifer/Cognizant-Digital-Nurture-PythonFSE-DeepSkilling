function CourseCard(props) {
    return (
        <article>
            <h2>{props.name}</h2>
            <p>Code: {props.code}</p>
            <p>Credits: {props.credits}</p>
            <p>Grade: {props.grade}</p>

            <button onClick={() => props.onEnroll(props)}>
                Enroll
            </button>
        </article>
    );
}

export default CourseCard;