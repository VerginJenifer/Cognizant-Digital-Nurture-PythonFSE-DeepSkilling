import { courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");
const searchInput = document.querySelector("#search-courses");
const sortButton = document.querySelector("#sort-btn");
const totalCredits = document.querySelector("#total-credits");
const selectedCourse = document.querySelector("#selected-course");
const notifications = document.querySelector("#notifications");
const loading = document.querySelector("#loading");
const retryButton = document.querySelector("#retry-btn");
const resultsCount = document.querySelector("#results-count");

const total = courses.reduce((sum, course) => sum + course.credits, 0);
totalCredits.textContent = `Total Credits: ${total}`;

function renderCourses(courseArray) {
    courseGrid.innerHTML = "";

    resultsCount.textContent = `${courseArray.length} courses found`;

    courseArray.forEach(course => {
        const article = document.createElement("article");
        article.className = "course-card";
        article.tabIndex = 0;

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

courseGrid.textContent = "Loading courses...";

fetchAllCourses().then(courseData => {
    renderCourses(courseData);
});

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

function selectCourse(card) {
    selectedCourse.textContent =
        `Selected Course: ${card.dataset.name} | Grade: ${card.dataset.grade}`;
}

courseGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".course-card");

    if (!card) return;

    selectCourse(card);
});

courseGrid.addEventListener("keydown", (event) => {
    const card = event.target.closest(".course-card");

    if (!card) return;

    if (event.key === "Enter") {
        selectCourse(card);
    }
});

function fetchUser(id) {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(response => response.json())
        .then(user => {
            console.log(user.name);
        });
}

fetchUser(1);

async function fetchUserAsync(id) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
        const user = await response.json();
        console.log(user.name);
    } catch (error) {
        console.log(error);
    }
}

fetchUserAsync(1);

function fetchAllCourses() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(courses);
        }, 1000);
    });
}

Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json()),
    fetch("https://jsonplaceholder.typicode.com/users/2").then(response => response.json())
]).then(users => {
    console.log(users[0].name);
    console.log(users[1].name);
});

axios.interceptors.request.use(config => {
    console.log(`API call started: ${config.url}`);
    return config;
});

async function apiFetch(url) {
    const response = await axios.get(url);
    return response.data;
}

apiFetch("https://jsonplaceholder.typicode.com/posts")
    .then(posts => {
        loading.style.display = "none";

        posts.slice(0, 5).forEach(post => {
            const article = document.createElement("article");
            article.className = "course-card";

            article.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            notifications.appendChild(article);
        });
    });

apiFetch("https://jsonplaceholder.typicode.com/posts")
    .catch(error => {
        notifications.innerHTML = `
            <h2>Notifications</h2>
            <p>${error.message}</p>
        `;

        retryButton.style.display = "block";
    });

retryButton.addEventListener("click", () => {
    location.reload();
});

axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
        userId: 1
    }
}).then(response => {
    console.log(response.data);
});