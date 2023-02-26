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
clickHoverTab(){
    cy.get(hoversHeader).click()
}


visitPage() {
    const url = new Urls()
    url.visitHomePage()
}

}

export default HomePage;

    
