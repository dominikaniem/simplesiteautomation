const target = '#target'
const key = '#keyPressResult'

class KeyPressPage{
pressSpace() {
    cy.get(target).type('{shift}')
    cy.get(key).should('have.text', 'You entered: SHIFT')
    } 
}

export default KeyPressPage;