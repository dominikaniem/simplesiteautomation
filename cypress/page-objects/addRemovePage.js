const addElement = 'button[onclick="addElement()"]'
const addedButton = '.added-manually'

class AddRemovePage {
    clickAddElement() {
        cy.get(addElement).dblclick()
        cy.get(addedButton).should('be.visible')
        cy.get(addedButton).eq(1).should('be.visible')
    }

    removeElement () {
        cy.get(addedButton).eq(1).click()
        cy.get(addedButton).eq(0).should('be.visible')
    }

    removeAll () {
        cy.get(addedButton).eq(0).click()
        cy.get(addedButton).should('have.lengthOf' , 0)
    }
}
export default AddRemovePage;