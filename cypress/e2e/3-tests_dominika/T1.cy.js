import HomePage from "../../page-objects/homePage"
import CheckboxPage from "../../page-objects/checkboxPage"
import HoversPage from "../../page-objects/hoversPage"
import InputPage from "../../page-objects/inputPage"
import BasicAuthPage from "../../page-objects/basicAuthPage"
import FormPage from "../../page-objects/formPage"
import DropdownListPage from "../../page-objects/dropdownListPage"
import KeyPressPage from "../../page-objects/keyPressPage"
import AddRemovePage from "../../page-objects/addRemovePage"
import IframePage from  "../../page-objects/iframeTestPage"
import StatusCodePage from "../../page-objects/statusCodePage"


describe('Simple Site test automation', () => {
    
    beforeEach(()=>{
        cy.visit('/');
    })
    
     it('test checkbox' , function () {
    const homePage = new HomePage();
    homePage.clickChecxboxTab()

    const checkboxPage = new CheckboxPage();
    checkboxPage.checkFirstCheckbox()
    checkboxPage.uncheckLastCheckbox()

    })

//     // it('test datepicker' , function () {
//     //     const homePage = new HomePage();
//     //     homePage.clickDatepickerTab()
//     // })

    it('test hover' , function () {
    const homePage = new HomePage();
    homePage.clickHoversTab()

    const hoversPage = new HoversPage();
    hoversPage.hoverOverElement1()
    hoversPage.hoverOverElement3()

    })

    it('test inputs' , function () {
    const homePage = new HomePage();
    homePage.clickInputsTab()
    
    const inputPage = new InputPage();
    inputPage.typeNumberIntoField()
    inputPage.typeLettersIntoField()
    
    })

   it('test basic auth' , function () {
    const homePage = new HomePage();
    homePage.clickBasicAuthHeader()

    const basicAuthPage = new BasicAuthPage();
    basicAuthPage.fillWrongCredentials()
    basicAuthPage.fillCorrectCredentials()

   })
   
   it('test form' , function () {
    const homePage = new HomePage();
    homePage.clickFormHeader()

    const formPage = new FormPage();
    formPage.fillFirstName()
    formPage.fillLastName()
    formPage.pressSubmitButton()

    })

    it('test dropdown list' , function () {
    const homePage = new HomePage();
    homePage.clickDropdownListTab()

    const dropdownListPage = new DropdownListPage
    dropdownListPage.chooseDropdpownListFirstOption()
    dropdownListPage.chooseDropdpownListSecondOption()

    })

    it('test key presses' , function () {
    const homePage = new HomePage();
    homePage.clickKeyPressTab()

    const keyPressPage = new KeyPressPage();
    keyPressPage.pressFLetter()
    keyPressPage.press7Number()
    keyPressPage.pressShift()
    })

    // it('test drag and drop' , function () {
    // const homePage = new HomePage();
    // homePage.clickDragAndDrop()
    // })

    it('test add and remove' , function () {
    const homePage = new HomePage();
    homePage.clickAddRemove()
    
    const addRemovePage = new AddRemovePage();
    addRemovePage.clickAddElement()
    addRemovePage.removeElement()
    addRemovePage.removeAll()
    })

    it('test status codes' , function () {
    const homePage = new HomePage();
    homePage.clickStatusCodes()
    
    const statusCodePage = new StatusCodePage();
    statusCodePage.testCode200()
    statusCodePage.testCode305()
    statusCodePage.testCode404()
    statusCodePage.testCode500()
    })

    it('test iframe' , function () {
    const homePage = new HomePage();
    homePage.clickIframe()

    const iframePage = new IframePage();
    iframePage.testButton1()
    cy.wait(2000)
    iframePage.testButton2()
    cy.wait(2000)

    })

})