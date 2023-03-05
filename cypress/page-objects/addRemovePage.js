const addElement = 'button[onclick="addElement()"]'
const addedButton = '.added-manually'

class AddRemovePage {
    clickAddElement() {
        cy.get(addElement).click()
        cy.get(addedButton).should('be.visible')
    }

    removeElement () {
        cy.get(addedButton).click()
    }
}

export default AddRemovePage;