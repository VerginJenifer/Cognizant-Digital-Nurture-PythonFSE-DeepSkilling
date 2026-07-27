import { courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");
const searchInput = document.querySelector("#search-courses");
const sortButton = document.querySelector("#sort-btn");
const totalCredits = document.querySelector("#total-credits");
const selectedCourse = document.querySelector("#selected-course");

const total = courses.reduce((sum, course) => sum + course.credits, 0);
totalCredits.textContent = `Total Credits: ${total}`;

function renderCourses(courseArray) {
    courseGrid.innerHTML = "";

    courseArray.forEach(course => {
        const article = document.createElement("article");
        article.className = "course-card";

        article.dataset.name = course.name;
        article.dataset.grade = course.grade;

        article.innerHTML = `
            <h3>${course.name}</h3>
            <p>Code: ${course.code}</p>
            <span>Credits: ${course.credits}</span>
        `;

        courseGrid.appendChild(article);
    });
}

renderCourses(courses);

searchInput.addEventListener("input", () => {
    const search = searchInput.value.toLowerCase();

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(search)
    );

    renderCourses(filteredCourses);
});

sortButton.addEventListener("click", () => {
    const sortedCourses = [...courses].sort((a, b) => b.credits - a.credits);
    renderCourses(sortedCourses);
});

courseGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".course-card");

    if (!card) return;

    selectedCourse.textContent = `Selected Course: ${card.dataset.name} | Grade: ${card.dataset.grade}`;
});