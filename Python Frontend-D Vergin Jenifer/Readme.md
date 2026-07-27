# Frontend Development Module Solutions
### Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE) Deep Skilling Program

**Author:** D Vergin Jenifer  
**Module:** Frontend Development  
**Program:** Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE)

---

# Overview

This module consists of practical hands-on exercises covering modern frontend web development technologies. The exercises begin with HTML5 and CSS3 fundamentals, progress through JavaScript ES6+, asynchronous programming, and API integration, and finally introduce modern frontend frameworks including React, Angular, and Vue.js. The module concludes with accessibility, cross-browser compatibility, and advanced state management concepts.

Throughout the module, a **Student Portal** web application is developed progressively, allowing learners to understand how different frontend technologies solve real-world development problems.

---

# Repository Structure

```
Frontend Development Module Solutions/
    ├── README.md
    ├── FrontendDevelopment_HandsOn.pdf
    ├── handson_01/   → HTML5 Semantic Structure & CSS3 Foundations
    ├── handson_02/   → CSS Flexbox, Grid & Responsive Design
    ├── handson_03/   → JavaScript ES6+ & DOM Manipulation
    ├── handson_04/   → Async JavaScript, Fetch API & API Integration
    ├── handson_05/   → React Fundamentals
    ├── handson_06/   → React Routing & State Management
    ├── handson_07/   → Angular Components, Services & Routing
    ├── handson_08/   → Vue.js Composition API & Pinia
    ├── handson_09/   → Accessibility & Cross-Browser Compatibility
    └── handson_10/   → API Integration & Advanced State Management
```

---

# Hands-On Exercises

---

## Hands-On 01 – HTML5 Semantic Structure & CSS3 Foundations

**Technologies:** HTML5, CSS3

**Location:** `handson_01/`

Introduces semantic HTML5 elements and CSS3 styling fundamentals. Covers proper page structure, typography, box model, navigation, hero section, and reusable course cards.

### Key Files

- `index.html` – Semantic webpage structure
- `styles.css` – CSS styling and layout

---

## Hands-On 02 – CSS Flexbox, Grid & Responsive Design

**Technologies:** CSS3

**Location:** `handson_02/`

Focuses on responsive webpage design using Flexbox, CSS Grid, media queries, viewport units, and mobile-first development principles.

### Key Files

- `index.html`
- `styles.css`

---

## Hands-On 03 – JavaScript ES6+ & DOM Manipulation

**Technologies:** JavaScript ES6+

**Location:** `handson_03/`

Introduces modern JavaScript syntax and dynamic webpage manipulation.

Topics include:

- ES6 Modules
- let & const
- Arrow Functions
- Template Literals
- Array Methods
- DOM Manipulation
- Event Listeners
- Dynamic Rendering

### Key Files

- `index.html`
- `app.js`
- `data.js`

---

## Hands-On 04 – Async JavaScript, Fetch API & API Integration

**Technologies:** JavaScript, Fetch API, Axios

**Location:** `handson_04/`

Introduces asynchronous programming concepts using Promises and async/await. Demonstrates API integration using JSONPlaceholder, loading states, error handling, and Axios.

### Key Files

- `index.html`
- `app.js`
- `styles.css`

---

## Hands-On 05 – React Fundamentals

**Framework:** React (Vite)

**Location:** `handson_05/`

Builds the Student Portal using React.

Topics include:

- JSX
- Functional Components
- Props
- useState
- useEffect
- Conditional Rendering
- Component-based Architecture

### Key Files

- `App.jsx`
- `main.jsx`
- `components/`
- `data.js`

### Run

```bash
npm install
npm run dev
```

---

## Hands-On 06 – React Routing & State Management

**Framework:** React

**Location:** `handson_06/`

Extends the React application by implementing:

- React Router v6
- useNavigate
- useParams
- Context API
- Redux Toolkit
- Global State Management

### Key Files

- `App.jsx`
- `main.jsx`
- `store.js`
- `EnrollmentContext.jsx`

### Run

```bash
npm install
npm run dev
```

---

## Hands-On 07 – Angular Components, Services & Routing

**Framework:** Angular

**Location:** `handson_07/`

Introduces Angular development through components, services, dependency injection, routing, HTTP communication, and Reactive Forms.

### Key Features

- Angular CLI
- Components
- Dependency Injection
- HttpClient
- Routing
- Reactive Forms

### Run

```bash
npm install
ng serve
```

---

## Hands-On 08 – Vue.js Composition API & Pinia

**Framework:** Vue.js 3

**Location:** `handson_08/`

Builds the Student Portal using Vue.js with Composition API, Vue Router, and Pinia state management.

### Key Features

- Vue Components
- Composition API
- Vue Router
- Pinia
- Reactive Data
- Computed Properties

### Run

```bash
npm install
npm run dev
```

---

## Hands-On 09 – Accessibility & Cross-Browser Compatibility

**Technologies:** HTML5, CSS3, JavaScript

**Location:** `handson_09/`

Improves the Student Portal by implementing accessibility best practices and ensuring compatibility across modern browsers.

Topics include:

- WCAG 2.1 Guidelines
- ARIA Attributes
- Semantic HTML
- Keyboard Navigation
- Colour Contrast
- Browser Compatibility
- Lighthouse Audits

---

## Hands-On 10 – API Integration & Advanced State Management

**Technologies:** React / Angular / Vue

**Location:** `handson_10/`

Consolidates frontend development concepts by implementing a centralized API layer and advanced state management.

Topics include:

- Axios API Client
- Request & Response Interceptors
- Redux Toolkit Async Thunks
- NgRx Concepts
- Pinia Advanced Patterns
- Global Error Handling
- Framework Comparison

---

# Technologies Covered

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic webpage structure |
| CSS3 | Styling and responsive layouts |
| JavaScript ES6+ | Client-side programming |
| Fetch API | HTTP requests |
| Axios | API communication |
| React | Component-based frontend development |
| React Router | Client-side routing |
| Redux Toolkit | State management |
| Angular | Enterprise frontend framework |
| Vue.js | Progressive frontend framework |
| Pinia | Vue state management |

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- Angular
- Vue.js
- Axios
- Fetch API
- Redux Toolkit
- Context API
- Pinia
- Angular Reactive Forms
- JSONPlaceholder API
- Visual Studio Code
- Git
- Node.js & npm

---

# Prerequisites

Install Node.js before running the framework-based exercises.

```bash
# React
npm create vite@latest

# Angular CLI
npm install -g @angular/cli

# Vue
npm create vue@latest

# React Router
npm install react-router-dom

# Redux Toolkit
npm install @reduxjs/toolkit react-redux

# Axios
npm install axios

# Angular Dependencies
npm install

# Vue Dependencies
npm install
```

Alternatively, install the dependencies listed in each project's `package.json`.

---

# Learning Outcomes

After completing this module, learners will be able to:

- Build responsive webpages using HTML5 and CSS3.
- Create modern layouts using Flexbox and CSS Grid.
- Write clean JavaScript using ES6+ features.
- Manipulate the DOM dynamically.
- Consume REST APIs using Fetch API and Axios.
- Develop single-page applications with React.
- Implement client-side routing and state management.
- Build Angular applications using components, services, and Reactive Forms.
- Develop Vue.js applications using Composition API and Pinia.
- Apply accessibility standards and cross-browser compatibility techniques.
- Design maintainable frontend architectures with centralized API services.
- Understand advanced frontend state management patterns across React, Angular, and Vue.

---

# Acknowledgement

The exercises in this repository were completed as part of the **Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE) Deep Skilling Program**, providing practical experience in frontend web development using modern technologies, frameworks, responsive design principles, accessibility standards, and industry best practices.