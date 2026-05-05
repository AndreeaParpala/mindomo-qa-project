<<<<<<< HEAD
describe('Mindomo Cypress Tests', () => {
  const closeWhatsNewPopup = () => {
    cy.get('body').then(($body) => {
      if ($body.text().includes("What's new")) {
        cy.get('body').type('{esc}', { force: true })

        cy.get('body').then(($bodyAfterEsc) => {
          if ($bodyAfterEsc.text().includes("What's new")) {
            cy.contains("What's new")
              .parents()
              .find('button, [role="button"], .close, [aria-label="Close"]')
              .last()
              .click({ force: true })
          }
        })
      }
    })
  }

  const login = () => {
    cy.visit('https://www.mindomo.com/login')
    cy.get('[placeholder="Username / E-mail"]').type(Cypress.env('email'))
    cy.get('[placeholder="Password"]').type(Cypress.env('password'), { log: false })
    cy.contains('button', 'Log in').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.wait(1000)
    closeWhatsNewPopup()
  }

  it('should login and open the create templates page', () => {
    login()

    cy.contains('Create').click({ force: true })
    closeWhatsNewPopup()

    cy.contains('Blank mind map').should('exist')
    cy.contains('Blank concept map').should('exist')
  })

  it('should show an error message for invalid credentials', () => {
    cy.visit('https://www.mindomo.com/login')

    cy.get('[placeholder="Username / E-mail"]').type('invalid@test.com')
    cy.get('[placeholder="Password"]').type('WrongPassword123!', { log: false })
    cy.contains('button', 'Log in').click()
cy.wait(1000)
    cy.url().should('include', '/login')
    cy.wait(1000)
    cy.get('body').should('contain.text', 'Invalid login, please try again.')
  })

  it('should not allow login with empty fields', () => {
    cy.visit('https://www.mindomo.com/login')

    cy.contains('button', 'Log in').click()
cy.wait(1000)
    cy.url().should('include', '/login')
    cy.wait(1000)
    cy.get('body').should('contain.text', 'Invalid login, please try again.')
  })

  it('should open the forgot password page', () => {
    cy.visit('https://www.mindomo.com/login')

    cy.contains('Forgot password?').click()
cy.wait(1000)
    cy.url().should('include', 'forgot')
    cy.get('body').should('contain.text', 'Forgot')
  })

it('should open the AI Mind Maps section', () => {
  login()

  cy.visit('https://www.mindomo.com/dashboard/create/ai/brainstorm')
  cy.wait(1500)
  closeWhatsNewPopup()

  
})
=======
describe('Mindomo Cypress Tests', () => {

 it('should login and open the create templates page', () => {
  cy.visit('https://www.mindomo.com/login')
  cy.wait(1500)

  cy.get('[placeholder="Username / E-mail"]').type(Cypress.env('email'))
  cy.wait(1000)
  cy.get('[placeholder="Password"]').type(Cypress.env('password'), { log: false })
  cy.wait(1000)
  cy.contains('button', 'Log in').click()
  cy.wait(2000)
  cy.url().should('include', '/dashboard')

  cy.contains('Create').click({ force: true })
  cy.wait(2000)

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
it('should open the forgot password page', () => {
  cy.visit('https://www.mindomo.com/login')
  cy.wait(1500)
  cy.contains('Forgot password?').click()
  cy.wait(2000)
  cy.url().should('include', 'forgot')
  cy.get('body').should('contain.text', 'Forgot')
})
it('should allow user to input text in AI Mind Maps', () => {
  cy.visit('https://www.mindomo.com/login')
  cy.wait(1500)

  cy.get('[placeholder="Username / E-mail"]').type(Cypress.env('email'))
  cy.wait(1000)

  cy.get('[placeholder="Password"]').type(Cypress.env('password'), { log: false })
  cy.wait(1000)
  cy.contains('button', 'Log in').click()
  cy.wait(2000)
  cy.url().should('include', '/dashboard')
  cy.contains('Create').click({ force: true })
  cy.wait(2000)
  cy.contains('AI Mind Maps').click({ force: true })
  cy.wait(2000)
  cy.get('textarea').type('Project')

  cy.get('textarea')
    .should('be.visible')
    .and('have.value', 'Project')

  
})
>>>>>>> bb2a92396a5974163a5a4d291614501a9a4a4d47
})