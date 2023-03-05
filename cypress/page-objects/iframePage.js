const iframeHeader = '#iframe-header'
const iframe = 'iframe'
const button1 = "#simpleButton1"
const button2 = "#simpleButton2"


class IframePage {
getIframe () {
  cy.get(iframe)
  .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframeTest.find(button).click()
   }
 }
export default IframePage;
