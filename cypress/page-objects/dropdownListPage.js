const dropdownList = 'select'

class DropdownListPage {
    chooseDropdpownListFirstOption() {
        cy.get(dropdownList).select('Option 1').should('have.value', '1')
    }
    chooseDropdpownListSecondOption() {
        cy.get(dropdownList).select('Option 2').should('have.value', '2')
    }
}
export default DropdownListPage;
