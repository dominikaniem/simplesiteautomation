import Urls from "./urls";

const inputsTab = '#inputs-header'
const checboxHeader = '#checkbox-header'
const dropdownListHeader = '#dropdownlist-header'
const hoversHeader = '#hovers-header'
const datepickerHeader = '#datepicker-header'
const basicAuthHeader = '#basicauth-header'
const formHeader = '#form-header'
const keyPressHeader = '#keypresses-header'
const dragAndDropHeader = '#draganddrop-header'
const addRemoveHeader = '#addremoveelements-header'
const statusCodesHeader = '#statuscodes-header'
const iframeHeader = '#iframe-header'

class HomePage{

clickChecxboxTab(){
    cy.get(checboxHeader).click()
    }

clickDatepickerTab() {
    cy.get(datepickerHeader).click()
    }

clickHoversTab(){
    cy.get(hoversHeader).click()
}
clickInputsTab(){
        cy.get(inputsTab).click()
}

clickBasicAuthHeader(){
    cy.get(basicAuthHeader).click()
}

clickFormHeader(){
    cy.get(formHeader).click()
}

clickDropdownListTab(){
    cy.get(dropdownListHeader).click()
}

clickKeyPressTab(){
    cy.get(keyPressHeader).click()
}

clickDragAndDrop(){
    cy.get(dragAndDropHeader).click()
}

clickAddRemove(){
    cy.get(addRemoveHeader).click()
}

clickStatusCodes(){
    cy.get(statusCodesHeader).click()
}

clickIframe(){
    cy.get(iframeHeader).click()
}

visitPage() {
    const url = new Urls()
    url.visitHomePage()
}

}

export default HomePage;

    
