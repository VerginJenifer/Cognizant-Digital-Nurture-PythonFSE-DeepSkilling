# QA Concepts & Selenium Basics Module Solutions
### Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE) Deep Skilling Program

**Author:** D Vergin Jenifer  
**Module:** QA Concepts & Selenium Basics  
**Program:** Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE)

---

# Overview

This module consists of practical exercises covering Quality Assurance (QA) fundamentals and Selenium WebDriver automation using Python. The exercises begin with core QA concepts such as software testing, defect lifecycle, SDLC, TDLC, Agile testing, and automation strategy before progressing to hands-on Selenium WebDriver automation, pytest integration, and the Page Object Model (POM).

The coding exercises use the **LambdaTest Selenium Playground** to provide practical experience in browser automation, element location strategies, synchronization techniques, and maintainable test automation frameworks.

---

# Repository Structure

```
QA Concepts & Selenium Basics Module Solutions/
    ├── README.md
    ├── SeleniumBasics_HandsOn.pdf
    ├── handson_1/   → QA Concepts, Functional Testing & Defect Lifecycle
    ├── handson_2/   → SDLC vs TDLC, V-Model & Agile QA Integration
    ├── handson_3/   → Test Automation Process & Framework Types
    ├── handson_4/   → Selenium WebDriver Setup & Browser Commands
    ├── handson_5/   → Locators & Explicit Waits
    ├── handson_6/   → Selenium with pytest
    └── handson_7/   → Page Object Model (POM)
```

---

# Hands-On Exercises

## Hands-On 01 – QA Concepts, Functional Testing & Defect Lifecycle

**Topics:** QA Fundamentals

**Location:** `written_exercises/handson_1/`

Introduces the fundamentals of software testing by covering testing types, testing levels, defect lifecycle, severity vs priority, black-box and white-box testing, and professional test case writing.

### Key Topics

- Functional vs Non-Functional Testing
- Unit, Integration, System & UAT
- Black-Box vs White-Box Testing
- Defect Lifecycle
- Severity & Priority
- Test Case Documentation

---

## Hands-On 02 – SDLC vs TDLC, V-Model & Agile QA

**Topics:** Software Testing Lifecycle

**Location:** `written_exercises/handson_2/`

Explores the relationship between Software Development Life Cycle (SDLC) and Test Development Life Cycle (TDLC), including V-Model mapping, Agile QA practices, Shift-Left Testing, and Gherkin acceptance criteria.

### Key Topics

- SDLC & TDLC
- V-Model
- Entry & Exit Criteria
- Agile Testing
- Shift-Left Testing
- Gherkin (Given-When-Then)

---

## Hands-On 03 – Test Automation Strategy & Framework Types

**Topics:** Automation Planning

**Location:** `written_exercises/handson_3/`

Focuses on selecting suitable test cases for automation, automation ROI, handling flaky tests, and comparing automation framework architectures.

### Key Topics

- Automation Decision Criteria
- Automation ROI
- Flaky Tests
- Linear Framework
- Modular Framework
- Data-Driven Framework
- Keyword-Driven Framework
- Hybrid Framework

---

## Hands-On 04 – Selenium WebDriver Setup & Basic Commands

**Framework:** Selenium WebDriver

**Location:** `automation_scripts/handson_4/`

Introduces Selenium architecture and browser automation using Python. Covers browser setup, navigation commands, browser windows, tabs, screenshots, and webdriver-manager.

### Key Files

- `setup_test.py`
- `navigation_test.py`

### Run

```bash
python setup_test.py
```

---

## Hands-On 05 – Selenium Locators & Explicit Waits

**Framework:** Selenium WebDriver

**Location:** `automation_scripts/handson_5/`

Develops reliable Selenium scripts by implementing robust locator strategies and synchronization using explicit waits.

### Topics Covered

- ID
- Name
- Class Name
- Tag Name
- XPath
- CSS Selectors
- WebDriverWait
- Expected Conditions
- Fluent Wait
- Avoiding time.sleep()

### Run

```bash
python locator_test.py
```

---

## Hands-On 06 – Selenium with pytest

**Framework:** Selenium + pytest

**Location:** `automation_scripts/handson_6/`

Integrates Selenium scripts into a proper test framework using pytest. Covers fixtures, parameterized tests, assertions, HTML reporting, and screenshots on failures.

### Key Features

- pytest Fixtures
- conftest.py
- Parameterized Tests
- HTML Reports
- Screenshot on Failure
- Test Discovery

### Run

```bash
pytest tests/ -v
pytest tests/ --html=report.html --self-contained-html
```

---

## Hands-On 07 – Page Object Model (POM)

**Framework:** Selenium + pytest

**Location:** `automation_scripts/handson_7/`

Implements the Page Object Model (POM) design pattern to create maintainable, reusable, and scalable Selenium automation suites.

### Key Features

- Base Page
- Page Classes
- Locator Management
- Reusable Methods
- Separation of Test Logic
- Maintainable Automation Framework

### Example Structure

```
pages/
│── base_page.py
│── simple_form_page.py
│── checkbox_page.py
│── dropdown_page.py
│── input_form_page.py

tests/
│── test_playground.py

conftest.py
```

### Run

```bash
pytest tests/ -v --html=report.html
```

---

# Technologies Covered

| Technology | Purpose |
|------------|---------|
| QA Concepts | Software Quality Assurance Fundamentals |
| Selenium WebDriver | Browser Automation |
| webdriver-manager | Automatic Browser Driver Management |
| pytest | Test Framework |
| pytest-html | HTML Test Reporting |
| Page Object Model | Maintainable Test Automation Design Pattern |

---

# Technologies Used

- Python 3.x
- Selenium WebDriver
- pytest
- pytest-html
- webdriver-manager
- Google Chrome
- ChromeDriver
- LambdaTest Selenium Playground
- Visual Studio Code
- Git

---

# Prerequisites

Install the required packages before running the automation scripts.

```bash
pip install selenium
pip install webdriver-manager
pip install pytest
pip install pytest-html
```

Or install everything at once:

```bash
pip install -r requirements.txt
```

---

# Learning Outcomes

After completing this module, learners will be able to:

- Understand software testing fundamentals and QA processes.
- Differentiate between testing types and testing levels.
- Write professional test cases and defect reports.
- Understand SDLC, TDLC, V-Model, and Agile testing.
- Select suitable test cases for automation.
- Develop Selenium WebDriver automation scripts using Python.
- Implement robust locator strategies and synchronization techniques.
- Execute Selenium test suites using pytest.
- Generate HTML test reports.
- Capture screenshots on test failures.
- Design maintainable automation frameworks using the Page Object Model (POM).

---

# Practice Website

All Selenium automation exercises are performed using the **LambdaTest Selenium Playground**, which provides interactive components for practicing browser automation, including forms, checkboxes, dropdowns, alerts, and tables.

---

# Acknowledgement

The exercises in this repository were completed as part of the **Digital Nurture 5.0 – Python Full Stack Engineer (Python FSE) Deep Skilling Program**, providing practical experience in software testing, QA methodologies, Selenium WebDriver automation, pytest integration, and modern automation framework design following industry best practices.