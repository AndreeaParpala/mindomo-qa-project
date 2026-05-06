
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
    cy.url().should('include', '/dashboard')
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

    cy.url().should('include', '/login')
    cy.get('body').should('contain.text', 'Invalid login, please try again.')
  })

  it('should not allow login with empty fields', () => {
    cy.visit('https://www.mindomo.com/login')

    cy.contains('button', 'Log in').click()

    cy.url().should('include', '/login')
    cy.get('body').should('contain.text', 'Invalid login, please try again.')
  })

  it('should open the forgot password page', () => {
    cy.visit('https://www.mindomo.com/login')

    cy.contains('Forgot password?').click()

    cy.url().should('include', 'forgot')
    cy.get('body').should('contain.text', 'Forgot')
  })

  it('should open the AI Mind Maps section', () => {
  login()

  cy.visit('https://www.mindomo.com/dashboard/create/ai/brainstorm')
  closeWhatsNewPopup()

  cy.get('body').should('contain.text', 'AI Brainstorm')
  cy.get('body').should('contain.text', 'AI Mind Maps')
})
})