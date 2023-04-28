const firstName = '#fname'
const lastName = '#lname'
const submitbutton ='#formSubmitButton'


class FormPage {
fillFirstName () {
    cy.get(firstName).clear()
    cy.get(firstName).type('user').should('have.value','user')
    cy.wait(1000)
}

fillLastName () {
    cy.get(lastName).clear()
    cy.get(lastName).type('userski').should('have.value','userski') 
}

pressSubmitButton () {
    cy.get(submitbutton).click()
    cy.on('window:alert', (text) => {
        expect(text).to.contains('success');
    })
}
}

export default FormPage;