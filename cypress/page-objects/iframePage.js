const iframe = 'iframe'
const button1 = "#simpleButton1"
const button2 = "#simpleButton2"
const message = '#whichButtonIsClickedMessage'

class IframePage{
testButton1 () {
  const iframeTest = cy.get(iframe)
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap)

iframeTest.find(button1).click()
}

testButton2 () {
  const iframeTest = cy.get(iframe)
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap)
iframeTest.find(button2).click()
}
}

export default IframePage;
