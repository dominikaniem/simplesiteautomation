const target = '#target'
const key = '#keyPressResult'

class KeyPressPage {
pressFLetter() {
    cy.get(target).clear()
    cy.get(target).type('f')
    cy.get(key).should('have.text', 'You entered: F')
    } 

press7Number() {
    cy.get(target).clear()
    cy.get(target).type('7')
    cy.get(key).should('have.text', 'You entered: 7')
    }

    pressShift() {
    cy.get(target).clear()
    cy.get(target).type('{shift}')
    cy.get(key).should('have.text', 'You entered: SHIFT')
    }



}

export default KeyPressPage;