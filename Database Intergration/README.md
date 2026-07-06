# Database Integration — Digital Nurture 5.0

> **Module 3 · Python Full Stack Engineering (FSE) · Deep Skilling Program**

This module provides practical experience in database integration using **MySQL**, **MongoDB**, **SQLAlchemy ORM**, and **Alembic**. The content is organized into seven hands-on exercises, with each exercise building upon the knowledge gained in the previous one.

---

## Repository Structure

```text
Database Integration/
├── HandsOn 1/          # DDL – Schema Design & Normalization
├── HandsOn 2/          # DML – Data Manipulation & Queries
├── HandsOn 3/          # Advanced SQL – Subqueries, Views & Procedures
├── HandsOn 4/          # Performance – Indexing & N+1 Query Problem
├── HandsOn 5/          # NoSQL – MongoDB Collections & Aggregation
├── HandsOn 6/          # ORM – SQLAlchemy CRUD & Relationships
├── HandsOn 7/          # Migrations – Alembic Schema Versioning
└── DatabaseIntegration_HandsOn.pdf   # Hands-on exercise document
```

---

## Domain Context

The exercises are based on a **College Management System** database (`college_db`) consisting of the following entities:

| Table | Description |
|---|---|
| `departments` | Stores department information and budget details |
| `students` | Contains student records associated with departments |
| `courses` | Maintains course information for each department |
| `enrollments` | Stores student enrollment records along with grades |
| `professors` | Contains faculty information linked to departments |

---

## Hands-On Breakdown

---

### HandsOn-1 — DDL: Schema Design & Normalization

**Technology:** MySQL · **Concepts:** DDL, Database Design, Normalization

| File | Description |
|---|---|
| `TablesInput.sql` | Initial schema definitions used as reference |
| `Task1_Create_Database_and_Tables.sql` | Creates the `college_db` database, tables, and foreign key constraints |
| `Task2_Normalization_Analysis.txt` | Evaluation of schema normalization (1NF, 2NF, and 3NF) |
| `Task3_Alter_Table.sql` | Demonstrates schema modifications using `ALTER TABLE` |

**Key Concepts:**

- `CREATE DATABASE`, `CREATE TABLE`, `PRIMARY KEY`, `FOREIGN KEY`
- Database normalization (1NF, 2NF, 3NF)
- `ALTER TABLE` for adding, renaming, deleting columns, and applying `CHECK` constraints

---

### HandsOn-2 — DML: Data Manipulation & Basic Querying

**Technology:** MySQL · **Concepts:** DML, Filtering, Joins, Aggregate Functions

| File | Description |
|---|---|
| `Task1_DML.sql` | Inserts sample records, updates grades, and removes unwanted records |
| `Task2_Single_Table_Queries.sql` | Demonstrates filtering, sorting, grouping, and search queries |
| `Task3_Multi_Table_Joins.sql` | Uses `INNER JOIN` and `LEFT JOIN` across related tables |
| `Task4_Aggregations.sql` | Performs aggregate calculations and grouped analysis |

**Key Concepts:**

- `INSERT`, `UPDATE`, `DELETE`
- Filtering and sorting data
- Joining multiple tables
- Aggregate functions such as `COUNT`, `AVG`, `MIN`, and `MAX`

---

### HandsOn-3 — Advanced SQL: Subqueries, Views & Stored Procedures

**Technology:** MySQL · **Concepts:** Subqueries, Views, Stored Procedures, Transactions

| File | Description |
|---|---|
| `Task1_Subqueries.sql` | Examples of correlated subqueries, `EXISTS`, `NOT EXISTS`, and derived tables |
| `Task2_Views.sql` | Creation and usage of SQL views, including `WITH CHECK OPTION` |
| `Task3_Stored_Procedures_and_Transactions.sql` | Stored procedures and transaction management using COMMIT and ROLLBACK |

**Key Concepts:**

- Scalar, correlated, and derived-table subqueries
- `CREATE VIEW` and `WITH CHECK OPTION`
- `CREATE PROCEDURE`, `DELIMITER`, `SIGNAL SQLSTATE`
- Transaction handling using `START TRANSACTION`, `COMMIT`, `ROLLBACK`, and `SAVEPOINT`

---

### HandsOn-4 — Performance: Indexes & N+1 Query Problem

**Technology:** MySQL + Python (mysql-connector) · **Concepts:** Query Optimization, Indexing, N+1 Query Issue

| File | Description |
|---|---|
| `Task1_Baseline_Performance.sql` | Uses `EXPLAIN FORMAT=JSON` to analyze query execution |
| `Task2_Indexes.sql` | Creates indexes and compares query execution plans |
| `Task3_N_Plus_One.py` | Demonstrates the N+1 query problem and its optimized solution |
| `Task3_Observations.txt` | Comparison of query count and execution time |

**Key Concepts:**

- Execution plan analysis using `EXPLAIN FORMAT=JSON`
- Creating single and composite indexes
- Understanding the N+1 query problem
- Improving performance using optimized `JOIN` queries

> **Note:** Replace `your_password` in `Task3_N_Plus_One.py` with your own MySQL password before executing the script.

---

### HandsOn-5 — NoSQL: MongoDB Collections & Aggregation

**Technology:** MongoDB (mongosh) · **Concepts:** Document Database, CRUD Operations, Aggregation Framework

| File | Description |
|---|---|
| `Task1_Create_Collection.js` | Creates the database, collection, and inserts sample documents |
| `Task2_CRUD_Operations.js` | Demonstrates CRUD operations on MongoDB collections |
| `Task3_Aggregation_Pipeline.js` | Performs aggregation using grouping, filtering, sorting, and array operations |

**Key Concepts:**

- MongoDB document-based data model
- `insertMany`, `find`, `updateOne`, `deleteMany`
- Aggregation operators such as `$group`, `$match`, `$sort`, `$limit`, `$unwind`, `$avg`, and `$sum`

---

### HandsOn-6 — ORM: SQLAlchemy CRUD & Relationships

**Technology:** Python + SQLAlchemy · **Concepts:** ORM, Models, Relationships

| File | Description |
|---|---|
| `requirements.txt` | Required dependencies (`sqlalchemy`, `pymysql`) |
| `Task1_Setup_ORM.py` | Creates the engine and configures SQLAlchemy |
| `Task2_CRUD_ORM.py` | Implements CRUD operations using ORM models |
| `Task3_Relationships.py` | Demonstrates one-to-many relationships between Department and Student |

**Key Concepts:**

- `create_engine`, `sessionmaker`, `declarative_base`
- Defining ORM models with `Column`, `Integer`, and `String`
- CRUD operations using SQLAlchemy sessions
- `ForeignKey`, `relationship()`, and `back_populates`

> **Note:** Replace the `your_password` placeholder in `DATABASE_URL` before running the application.

---

### HandsOn-7 — Migrations: Alembic Schema Versioning

**Technology:** Python + Alembic + SQLAlchemy · **Concepts:** Database Migrations, Schema Version Control

| File | Description |
|---|---|
| `alembic.ini` | Alembic configuration containing the database connection |
| `requirements.txt` | Required dependencies for Alembic and SQLAlchemy |
| `Task1_Initialize_Alembic.txt` | Steps for initializing Alembic |
| `Task2_Create_Migration.txt` | Creating migration revisions |
| `Task3_Apply_Migration.txt` | Applying migrations and checking the current revision |
| `Task4_Rollback_Migration.txt` | Rolling back migrations and viewing migration history |
| `migrations/` | Alembic migration environment and version files |

**Alembic Commands Summary:**

```bash
# Initialize Alembic
python -m alembic init migrations

# Generate a migration
python -m alembic revision -m "create student table"

# Apply migrations
python -m alembic upgrade head

# Display current revision
python -m alembic current

# Roll back one revision
python -m alembic downgrade -1

# Roll back all revisions
python -m alembic downgrade base

# Display migration history
python -m alembic history
```

> **Note:** Update the `sqlalchemy.url` value in `alembic.ini` with your own database credentials before running migrations.

---

## Prerequisites

| Tool | Version |
|---|---|
| Python | 3.10+ |
| MySQL Server | 8.0+ |
| MongoDB | 6.0+ (Required for HandsOn-5) |
| Python Packages | `mysql-connector-python`, `sqlalchemy`, `pymysql`, `alembic` |

---

## Setup Instructions

### 1. MySQL Setup (HandsOn 1–4, 6–7)

```sql
-- Execute using MySQL Workbench or the MySQL command-line client
source HandsOn-1/Task1_Create_Database_and_Tables.sql;
source HandsOn-2/Task1_DML.sql;
```

### 2. Install Python Dependencies (HandsOn 4, 6, 7)

```bash
pip install mysql-connector-python sqlalchemy pymysql alembic
```

### 3. MongoDB Setup (HandsOn-5)

```bash
# Launch mongosh and execute the scripts
mongosh
load("HandsOn-5/Task1_Create_Collection.js")
load("HandsOn-5/Task2_CRUD_Operations.js")
load("HandsOn-5/Task3_Aggregation_Pipeline.js")
```

---

## Security Note

For security purposes, all database passwords in this repository are represented using the placeholder `your_password`.

**Avoid committing actual credentials to source control.** In production environments, use environment variables or a `.env` file.

```python
import os

DATABASE_URL = f"mysql+pymysql://root:{os.environ['DB_PASSWORD']}@localhost/college_db"
```

---

## Author

**D Vergin Jenifer**  
Digital Nurture 5.0 – Python Full Stack Engineering (FSE) Deep Skilling Program  
**Module:** Database Integration

---
