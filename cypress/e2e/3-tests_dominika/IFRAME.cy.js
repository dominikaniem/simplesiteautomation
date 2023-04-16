import IframeTestPage from "../../page-objects/iframeTestPage";
const url = 'http://simpletestsite.fabrykatestow.pl'
const iframe = 'iframe'
const iframeHeader = '#iframe-header'
const button = "#simpleButton1"

describe('iframe test asserting message', () => {
     it('test iframe' , function () {
        cy.visit('http://simpletestsite.fabrykatestow.pl');
        cy.get(iframeHeader).click()
    
        // const iframeTestPage = new IframeTestPage();
        // iframeTestPage.getIframeBody()
        // iframeTestPage.testButton1()
    })
})