# Cypress Test Suite for Demo Web Shop
This project contains automated tests written in Cypress for a demo e-commerce website. The tests cover essential functionalities such as user registration, login, basic API requests, cart operations, and checkout.
## Prerequisites
* [Node.js](https://nodejs.org/) (version 22.1.0 recommended)
* [Cypress](https://www.cypress.io/) (installed via npm, version 14.0.3)
## Installation
1. Clone the repository:
*  `git clone https://github.com/ppejcic/automaticity.git`
* `cd automaticity`
2. Install dependencies:
* `npm install`
## Running Tests
* To execute tests in headed mode: `npx cypress open`
* To run tests in headless mode: `npx cypress run`
## Project Structure
* `cypress/e2e/` – Contains the test files.
* `cypress/support/` – Custom commands and setup files.
* `cypress/fixtures/` – Test data.
* `cypress.config.js` – Cypress configuration file.
## Known Issues
# Test: `cypress/e2e/cart.cy.js`: 
* This test is flaky and sometimes fails.
* Possible solution: Add retries or wait for a specific element before proceeding. 





      