const dropdownList = 'select'

class DropdownListPage {
    chooseDropdpownListFirstOption() {
        cy.get(dropdownList).select('Option 1').should('have.value', '1')
    }
}
export default DropdownListPage;
