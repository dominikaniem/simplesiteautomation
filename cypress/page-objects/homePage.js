import Urls from "./urls";

const inputsTab = '#inputs-header'
const checboxHeader = '#checkbox-header'
const dropdownListHeader = '#dropdownlist-header'
const hoversHeader = '#hovers-header'

class HomePage{

clickInputsTab(){
        cy.get(inputsTab).click()
    }
clickChecxboxTab(){
    cy.get(checboxHeader).click()

    }
    
clickHoversTab(){
    cy.get(hoversHeader).click()
}

clickDropdownListTab(){
    cy.get(dropdownListHeader).click()
}

visitPage() {
    const url = new Urls()
    url.visitHomePage()
}

}

export default HomePage;

    
