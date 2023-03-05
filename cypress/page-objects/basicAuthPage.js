const username = "#ba_username"
const password = "#ba_password"
const LoginButton ='button[onclick="onLoginSubmit()"]'
const  wrongCredentialsMsg ='#loginFormMessage'

class BasicAuthPage{
    fillCorrectCredentials() {
        cy.get(username).clear()
        cy.get(username).type('admin').should('have.value','admin')
        cy.wait(2000)
        cy.get(password).clear()
        cy.get(password).type('admin').should('have.value','admin')
        cy.wait(2000)
        cy.get(LoginButton).click()
        cy.wait(500)
        cy.url().should('be.equal', 'http://simpletestsite.fabrykatestow.pl/basicauth.html')
    }

    fillWrongCredentials(){
        cy.get(username).clear()
        cy.get(username).type('user').should('not.have.value','admin')
        cy.wait(2000)
        cy.get(password).clear()
        cy.get(password).type('pass').should('not.have.value','admin')
        cy.wait(2000)
        cy.get(LoginButton).click()
        cy.get(wrongCredentialsMsg).should('have.text', 'Invalid credentials')
    }

}

export default BasicAuthPage;
