import InputPage from "../../page-objects/inputPage"
import HomePage from "../../page-objects/homePage"
import CheckboxPage from "../../page-objects/checkboxPage"

describe('Simple Site test automation', () => {
    
    beforeEach(()=>{
        cy.clearAllLocalStorage()
        cy.visit('/');
    })
    
    
    it('test inputs' , function () {
       const homePage = new HomePage();
       homePage.clickInputsTab()
    
        const inputPage = new InputPage();
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()
    
    })

    it('test checkbox' , function () {
        const homePage = new HomePage();
        homePage.clickChecxboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckLastCheckbox()

})
})