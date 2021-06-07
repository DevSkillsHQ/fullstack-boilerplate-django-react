# Fullstack Boilerplate Django/React

A backbone for your coding challenge.

## Contents

- [Backend service](app-backend) - a Django service with a `/ping` endpoint.
- [Frontend app](app-frontend) - a React/NextJS app.
- [E2E test suites](cypress/integration) - a backend and a frontend Cypress test suites. Extend with your tests.
- [Pipeline](.github/workflows/tests.yml) - a test Runner that executes the Cypress tests on push to a branch other than `master`/`main`.

## Tech Stack

### Backend

- Django 3.1.5

#### Additional libs

- sqlite3 (SQLite connection)
- django-cors-headers (CORS support)

### Frontend

- Next 10
- React 17

#### Additional libs

- tailwindcss 2 (css)
- DOM/React Testing Library / Jest (testing)

### Misc

- Cypress
- GitHub Actions

## Getting started

1. Make sure [`python3`](https://www.python.org/downloads/) and [`pip3`](https://pip.pypa.io/en/stable/installing/) are installed on your local env.

2. Make sure npm & node are configured on your local env. You can download those distributions for your platform [here](https://nodejs.org/en/download/)

3. Build your app.

```bash
npm install
npm run build # both Django backend and Next frontend
npm run build:backend # only Django backend
npm run build:frontend # only Next frontend
```

4. Start your app.

```bash
npm install
npm run start # both Django backend and Next frontend
npm run start:backend # only Django backend
npm run start:frontend # only Next frontend
```

5. Run the Cypress tests.

```bash
npm run test # run project tests under `cypress/integration`
```

---

Made by [DevSkills](https://devskills.co).

Did you find this repo useful? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
