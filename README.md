This project contains automated end-to-end tests for the Mindomo web application using Cypress.
I chose to test the Authentication (Login) functionality.

Test: 
1. Successful Login  
Verifies that a user can log in with valid credentials and access the dashboard.

2. Invalid Login  
Verifies that the application displays an error message when incorrect credentials are used.

3. Empty Fields Login  
Verifies that the application does not allow login when submitting the form without entering any data.

Test credentials are stored using Cypress environment variables,
the password input is hidden from logs using `{ log: false }` for security.
Small waits were added to make the test execution easier to follow during demonstration.
Credentials are included in the Cypress configuration to allow easy test execution.
How to run:
Install dependencies:
npm install

Run tests:
npx cypress open
