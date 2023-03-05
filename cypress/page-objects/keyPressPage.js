const target = '#target'
const key = '#keyPressResult'

class KeyPressPage {
pressFLetter() {
    cy.get(target).clear()
    cy.get(target).type('f')
    cy.get(key).should('have.text', 'You entered: F')
    cy.wait(1000)
    } 

press7Number() {
    cy.get(target).clear()
    cy.get(target).type('7')
    cy.get(key).should('have.text', 'You entered: 7')
    cy.wait(1000)
    }

    pressShift() {
    cy.get(target).clear()
    cy.get(target).type('{shift}')
    cy.get(key).should('have.text', 'You entered: SHIFT')
    cy.wait(1000)
    }



}

export default KeyPressPage;