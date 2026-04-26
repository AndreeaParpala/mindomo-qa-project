describe('Mindomo Authentication Tests', () => {

 it('should login and open the create templates page', () => {
  cy.visit('https://www.mindomo.com/login')
  cy.wait(1500)

  cy.get('[placeholder="Username / E-mail"]').type(Cypress.env('email'))
  cy.wait(1000)

  cy.get('[placeholder="Password"]').type(Cypress.env('password'), { log: false })
  cy.wait(1000)

  cy.contains('button', 'Log in').click()
  cy.wait(3000)

  cy.url().should('include', '/dashboard')

  cy.contains('Create').click({ force: true })
  cy.wait(3000)

  cy.contains('Blank mind map').should('be.visible')
  cy.contains('Blank concept map').should('be.visible')
})


  it('should show an error message for invalid credentials', () => {
    cy.visit('https://www.mindomo.com/login')
    cy.wait(1500)

    cy.get('[placeholder="Username / E-mail"]').type('invalid@test.com')
    cy.wait(1000)

    cy.get('[placeholder="Password"]').type('WrongPassword123!', { log: false })
    cy.wait(1000)

    cy.contains('button', 'Log in').click()
    cy.wait(2000)

    cy.url().should('include', '/login')
    cy.get('body').should('contain.text', 'Invalid login, please try again.')
    cy.wait(2000)
  })


  it('should not allow login with empty fields', () => {
    cy.visit('https://www.mindomo.com/login')
    cy.wait(1500)

    cy.contains('button', 'Log in').click()
    cy.wait(2000)

    cy.url().should('include', '/login')
    cy.get('body').should('contain.text', 'Invalid login, please try again.')
    cy.wait(2000)
  })


 
})