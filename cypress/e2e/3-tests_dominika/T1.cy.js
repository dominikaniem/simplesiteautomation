import HomePage from "../../page-objects/homePage"
import InputPage from "../../page-objects/inputPage"
import CheckboxPage from "../../page-objects/checkboxPage"
import DropdownListPage from "../../page-objects/dropdownListPage"
import HoversPage from "../../page-objects/hoversPage"
import IframePage from "../../page-objects/iframePage"
import BasicAuthPage from "../../page-objects/basicAuthPage"
import KeyPressPage from "../../page-objects/keyPressPage"


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

    // it('test datepicker' , function () {
    //     const homePage = new HomePage();
    //     homePage.clickDatepickerTab()
    // })

    it('test hover' , function () {
    const homePage = new HomePage();
    homePage.clickHoversTab()

    const hoversPage = new HoversPage();
    hoversPage.hoverOverElement()

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

        const keyPressPage = new KeyPressPage()
        keyPressPage.pressShift()

    })


    // it('test iframe' , function () {
    // const homePage = new HomePage();
    // homePage.clickIframe()

    // const iframePage = new IframePage();
    // iframePage.getIframe()

    // })

})