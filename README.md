# 🎭 CodeceptJS + TypeScript Hybrid Automation Framework

[![Playwright/CodeceptJS CI](https://github.com/bfsouza/codeceptjs-typescript-sdet-framework/actions/workflows/main.yml/badge.svg)](https://github.com/bfsouza/codeceptjs-typescript-sdet-framework/actions)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![CodeceptJS](https://img.shields.io/badge/CodeceptJS-3.x-yellow?style=flat)
![NodeJS](https://img.shields.io/badge/Node.js-18%2B-green?style=flat&logo=nodedotjs)
![Docker](https://img.shields.io/badge/Docker-Supported-blue?style=flat&logo=docker)

> A hybrid test automation framework (E2E & API) built with **CodeceptJS** and **TypeScript**. It demonstrates advanced SDET engineering practices, including hybrid testing strategies (bypassing UI login via API), Page Object Model (POM), schema validation, and an integrated CI/CD pipeline.

---

## 🎯 Target Application

Tests are executed against the **[ServeRest](https://serverest.dev/)** ecosystem:
* **API REST:** `https://serverest.dev`
* **Web UI:** `https://front.serverest.dev`

---

## 🏗️ Architecture & Best Practices

This repository utilizes a modular architecture focused on reusability, maintainability, and high execution speed:

* **Hybrid Strategy:** Prepares test data and authenticates directly via API prior to UI execution (reducing total suite execution time by up to 70%).
* **Page Object Model (POM):** Encapsulates locators and user interactions within dedicated page classes.
* **Strict Typing:** TypeScript applied across all layers (requests, responses, and page objects).
* **Integrated CI/CD:** GitHub Actions workflow with parallel execution, test report generation, and failure artifact archiving.

```text
├── .github/workflows/   # CI/CD Workflows (GitHub Actions)
├── config/              # Global & Environment configurations
├── src/
│   ├── api/             # HTTP clients and typings for API endpoints
│   ├── web/             # Page Objects and UI components
│   └── utils/           # Helpers, data generators, and utilities
├── tests/
│   ├── api/             # API-only test suite
│   ├── web/             # End-to-End (E2E) UI test suite
│   └── hybrid/          # Hybrid test suite (API + UI)
└── codecept.conf.ts     # Main CodeceptJS configuration file
```

---

## 🛠️ Tech Stack

* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Test Framework:** [CodeceptJS](https://codecept.io/) (with Playwright & REST Helpers)
* **Data Generator:** [@faker-js/faker](https://fakerjs.dev/)
* **Reporting:** Allure Report / HTML Reporter
* **CI/CD & Containers:** GitHub Actions & Docker

---

## 🚀 Getting Started Locally

### Prerequisites
* **Node.js** v18+ installed
* **npm** or **yarn**

### 1. Clone the repository
```bash
git clone https://github.com/bfsouza/codeceptjs-typescript-sdet-framework.git
cd codeceptjs-typescript-sdet-framework
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the Tests

```bash
# Run all tests in headless mode
npm run test

# Run API tests only
npm run test:api

# Run Web (UI) tests only
npm run test:web

# Run Hybrid tests only
npm run test:hybrid

# Open CodeceptJS UI Mode
npm run test:ui
```

---

## 🐳 Running with Docker

To run the entire test suite inside an isolated container environment:

```bash
# Build the Docker image
docker build -t codeceptjs-sdet .

# Execute the test suite
docker run --rm codeceptjs-sdet
```

---

## 📊 Test Reports

After executing tests, detailed reports containing screenshots and videos of failed scenarios can be generated using:

```bash
npm run report
```

Test artifacts from PRs or main branch builds are also available for download under the **Actions** tab on GitHub.

---

## ✉️ Contact

Developed by **Bruno Felipi de Souza** - [LinkedIn](https://www.linkedin.com/in/brunofelipisouza) - [Email](mailto:brunofelipi.desouza@gmail.com)
