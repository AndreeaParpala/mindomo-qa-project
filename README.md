In this project I created some end-to-end tests for the Mindomo web application using Cypress.
I chose to test the login functionality because it is a core part of the application, and then I extended the tests a bit to cover another feature (AI Mind Maps).

Test:
1. Successful Login  
Checks that a user can log in with valid credentials.

2. Invalid Login  
Checks that an error message is displayed when wrong credentials are used.

3. Empty Fields Login  
Checks that the user cannot log in without entering any data.

4. Forgot Password  
Checks that the "Forgot password" page can be accessed from the login screen.

5. AI Mind Maps  
Checks that the user can access the AI Mind Maps section and type text in the input field.

The test credentials are stored using Cypress environment variables.  
The password is hidden from the logs using `{ log: false }`.  
I added small waits to make the tests easier to follow during execution.

How to run:
npm install  
npx cypress open
