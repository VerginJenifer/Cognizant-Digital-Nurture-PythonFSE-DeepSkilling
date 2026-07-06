# Python Backend Framework Module Solutions

**Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE) Deep Skilling Program**

> **Author:** D Vergin Jenifer
> **Module:** Python Backend Frameworks  
> **Program:** Digital Nurture 5.0 – Python FSE

---

## Overview

This module consists of practical exercises focused on backend web development using three widely used Python frameworks: **Django**, **Flask**, and **FastAPI**. The hands-on activities begin with basic project creation and gradually progress to advanced concepts such as RESTful APIs, authentication, API design best practices, and microservices architecture.

---

## Repository Structure

```text
Python Backend Framework Module Solutions/
└── D Vergin Jenifer/
    ├── README.md
    ├── PythonBackendFrameworks_HandsOn.pdf   ← Hands-on exercise document
    ├── handsOn 1/   → Django Project Setup & Views
    ├── handsOn 2/   → Django REST Framework – CRUD (Courses)
    ├── handsOn 3/   → Django REST Framework – Nested Resources
    ├── handsOn 4/   → Flask Blueprints & REST API
    ├── handsOn 5/   → Flask with SQLAlchemy & Flask-Migrate
    ├── handsOn 6/   → FastAPI – Async CRUD (Single Entity)
    ├── handsOn 7/   → FastAPI – Full CRUD (Courses, Students, Enrollments)
    ├── handsOn 8/   → FastAPI – REST API Best Practices
    ├── handsOn 9/   → FastAPI – JWT Authentication & CORS
    └── handsOn 10/   → Microservices with API Gateway
```

---

## Hands-On Exercises

### Hands-On 01 – Django Project Setup & Basic Views

**Framework:** Django  
**Location:** `Python Backend Framework HandsOn 1/Sample/`

Introduces the creation of a Django project (`Sample`) along with a `courses` application. Covers the project layout, configuration settings, URL mapping, and implementation of a simple view.

**Key Files:**

- `manage.py` – Command-line utility for Django management
- `Sample/settings.py` – Project settings and configuration
- `courses/views.py` – Contains view functions
- `courses/urls.py` – URL routing configuration

---

### Hands-On 02 – Django REST Framework: Course CRUD

**Framework:** Django + Django REST Framework  
**Location:** `Python Backend Framework HandsOn 2/coursemanager/`

Develops a RESTful API for managing courses using Django REST Framework. Demonstrates model creation, serializers, and API views to perform complete CRUD operations.

**Key Files:**

- `courses/models.py` – Defines the Course model
- `courses/views.py` – REST API views
- `courses/urls.py` – API routing

---

### Hands-On 03 – Django REST Framework: Nested Resources

**Framework:** Django + Django REST Framework  
**Location:** `Python Backend Framework HandsOn 3/coursemanager/`

Enhances the DRF application by introducing nested resources and model relationships, such as Departments, Courses, Students, and Enrollments. Also demonstrates nested serializers and routing.

**Key Files:**

- `courses/models.py` – Models with relationships
- `courses/views.py` – Views for nested resources
- `courses/urls.py` – URL configuration for nested endpoints

---

### Hands-On 04 – Flask Blueprints & REST API

**Framework:** Flask  
**Location:** `Python Backend Framework HandsOn 4/handson_4/`

Creates a REST API using Flask by applying the Application Factory pattern and Blueprints. Includes CRUD operations for courses along with custom error handlers for common HTTP errors.

**Key Files:**

- `app.py` – Flask application factory
- `config.py` – Configuration settings
- `courses/routes.py` – Blueprint route definitions

**Run:**

```bash
python app.py
```

---

### Hands-On 05 – Flask with SQLAlchemy & Flask-Migrate

**Framework:** Flask + SQLAlchemy + Flask-Migrate  
**Location:** `Python Backend Framework HandsOn 5/flask_coursemanager/`

Extends the Flask project by integrating SQLAlchemy for ORM support and Flask-Migrate for handling database migrations. Additional models for Students and Enrollments are included.

**Key Files:**

- `app.py` – Initializes the application, database, and migrations
- `extensions.py` – SQLAlchemy and Flask-Migrate instances
- `courses/models.py` – ORM models for Course, Student, and Enrollment
- `courses/routes.py` – API endpoints for all resources

**Run:**

```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
python app.py
```

---

### Hands-On 06 – FastAPI: Async CRUD (Single Entity)

**Framework:** FastAPI + SQLAlchemy (Async)  
**Location:** `Python Backend Framework HandsOn 6/handson_6/`

Introduces asynchronous API development with FastAPI and async SQLAlchemy. Implements complete CRUD functionality for the Course entity using async sessions and Pydantic models.

**Key Files:**

- `main.py` – FastAPI application and route handlers
- `database.py` – Async database engine and session
- `models.py` – SQLAlchemy models
- `schemas.py` – Request and response schemas

**Run:**

```bash
uvicorn main:app --reload
```

Access Swagger UI: http://localhost:8000/docs

---

### Hands-On 07 – FastAPI: Full CRUD (Courses, Students, Enrollments)

**Framework:** FastAPI + SQLAlchemy (Async)  
**Location:** `Python Backend Framework HandsOn 7/course_management/`

Expands the FastAPI project to manage Courses, Students, and Enrollments. Covers relational database modeling, response schemas, background tasks, and APIs for retrieving enrolled students.

**Key Features:**

- CRUD operations for Courses, Students, and Enrollments
- Background task execution using `BackgroundTasks`
- Endpoint to retrieve students registered in a course

**Run:**

```bash
uvicorn main:app --reload
```

Access Swagger UI: http://localhost:8000/docs

---

### Hands-On 08 – FastAPI: REST API Best Practices

**Framework:** FastAPI + SQLAlchemy (Async)  
**Location:** `Python Backend Framework HandsOn 8/course_management/`

Applies REST API best practices to the existing FastAPI application by implementing:

- **API Versioning** using `/api/v1/`
- **Pagination** with `page` and `page_size`
- **Search** functionality using `ILIKE`
- **PATCH** endpoints for partial updates
- **Location Header** in create responses (HATEOAS)
- **Standardized Error Responses** with error codes and messages

**Run:**

```bash
uvicorn main:app --reload
```

Access Swagger UI: http://localhost:8000/docs

---

### Hands-On 09 – FastAPI: JWT Authentication & CORS

**Framework:** FastAPI + SQLAlchemy (Async) + python-jose + passlib  
**Location:** `Python Backend Framework HandsOn 9/course_management/`

Adds authentication and security features to the FastAPI application by implementing:

- User registration and login functionality
- JWT token generation using `python-jose`
- Password encryption with `passlib` (bcrypt)
- Protected routes using `OAuth2PasswordBearer`
- CORS configuration for frontend applications

**Key Endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register/` | Register a new user |
| POST | `/api/v1/auth/login/` | Authenticate and receive JWT |
| POST | `/api/courses/` | Create a course (Protected) |
| DELETE | `/api/courses/{id}` | Delete a course (Protected) |

**Run:**

```bash
uvicorn main:app --reload
```

Access Swagger UI: http://localhost:8000/docs

---

### Hands-On 10 – Microservices with API Gateway & Inter-Service Communication

**Framework:** FastAPI + Requests  
**Location:** `Python Backend Framework HandsOn 10/handson_10/`

Implements a simple microservices architecture consisting of three independent services:

- **Course Service** – Handles course-related operations
- **Student Service** – Handles student-related operations
- **API Gateway** – Routes client requests to the appropriate service

Demonstrates:

- HTTP-based synchronous communication using the `requests` library
- Asynchronous communication concepts (RabbitMQ/Kafka overview)
- Independent service deployment and isolation

**Run each service separately:**

```bash
# Course Service
uvicorn course_service.app:app --port 8001 --reload

# Student Service
uvicorn student_service.app:app --port 8002 --reload

# API Gateway
uvicorn gateway.app:app --port 8000 --reload
```

---

## Frameworks Covered

| Framework | Purpose |
|-----------|---------|
| Django | Backend web development and ORM support |
| Django REST Framework | Building REST APIs with serializers and viewsets |
| Flask | Lightweight backend and REST API development |
| Flask-SQLAlchemy | ORM integration for Flask applications |
| Flask-Migrate | Database migration management |
| FastAPI | High-performance asynchronous API development |
| SQLAlchemy (Async) | Asynchronous ORM support for FastAPI |

---

## Technologies Used

- **Programming Language:** Python 3.x
- **Database:** SQLite
- **Authentication:** JSON Web Tokens (JWT)
- **API Testing:** Swagger UI, Postman
- **Servers:** Uvicorn (ASGI), Django Development Server, Flask Development Server
- **Development Tools:** Visual Studio Code, Git

---

## Prerequisites

```bash
pip install django djangorestframework
pip install flask flask-sqlalchemy flask-migrate
pip install fastapi uvicorn sqlalchemy[asyncio] aiosqlite
pip install python-jose[cryptography] passlib[bcrypt]
pip install requests
```

Alternatively, install the dependencies listed in the `requirements.txt` file available in each hands-on directory.

---

## Learning Outcomes

After completing this module, learners will be able to:

1. Create Django, Flask, and FastAPI applications from scratch.
2. Develop RESTful CRUD APIs using multiple Python frameworks.
3. Perform database operations using Django ORM and SQLAlchemy.
4. Apply REST API best practices, including versioning, pagination, PATCH, and HATEOAS.
5. Secure backend APIs with JWT authentication.
6. Configure CORS for frontend-backend integration.
7. Build applications using a microservices architecture.
8. Route requests through an API Gateway.
9. Understand both synchronous and asynchronous service communication.

---

## Acknowledgement

The exercises in this repository were completed as part of the **Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE) Deep Skilling Program**, which provides practical experience in backend development using modern Python frameworks and industry-standard development practices.
