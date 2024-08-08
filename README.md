# API automation project for randomlyapi.symphony.is API

\*\*Version 1.0.0

Swagger Page : https://randomlyapi.symphony.is/swagger/

This repo consists of example of a suite of API test cases written in Cypress regarding different actions a user can do.

There are 5 different endpoints which are used in the test cases:

POST: SIGNUP (https://randomlyapi.symphony.is/api/auth/signup)
POST: LOGIN (https://randomlyapi.symphony.is/api/auth/login)
POST: ADD POST (https://randomlyapi.symphony.is/api/posts)
POST: ADD COMMENT (https://randomlyapi.symphony.is/api/post-comments)
GET: READ COMMENTS (https://randomlyapi.symphony.is/api/posts/{id}/comments)

Page Object Model (POM) pattern is used to create an object repository for storing all web elements locators per page. Tests included in this repo and any new tests would generally need to cover 3 phases:

The tests request different endpoints of the API and supply the required payload. After that, a different set of assertions to verify and validate the responses.

Several values obtained in the tests such as the token or the id of the post are stored and passed between tests as environment variables stored within Cypress.

## :gear: Setup

1. Clone the repo:

   ```
   git clone https://github.com/aarsenovski/symphony-api-assignment
   ```

2. Install project dependencies:
   ```
   npm install
   ```

---

## :bulb: Information

#### :test_tube: Configuration:

:file_folder: Tests are located in `cypress/e2e` folder

:file_folder: Fixtures (test data) are located in `cypress/fixtures` folder

:file_folder: Custom commands are located in `cypress/support` folder

:file_folder: Selectors (Page object patterns) are located in `cypress/pages` folder

:page_facing_up: Main config file where default behavior of Cypress can be modified. -`cypress.config.js` file

#### :test_tube: Run tests:

- run tests in headless mode:

```
npm run cypress-h
```

- run tests within Cypress Launchpad:

```
npm run cypress
```

- see available options and help:

```
npx cypress --help
```

## Contributor

- Andrej Arsenovski - <andrejarsenovski@gmail.com> - 2024

---

## License and copyright

```

```
