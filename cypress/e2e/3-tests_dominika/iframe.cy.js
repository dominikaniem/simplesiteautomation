const url = 'http://simpletestsite.fabrykatestow.pl'
const iframe = 'iframe'
const iframeHeader = '#iframe-header'
const button1 = "#simpleButton1"
const button2 = "#simplebutton2"
const message = '#whichButtonIsClickedMessage'

describe('my 7th scenario', () => {
    it('' , function () {
        cy.visit(url)

        cy.get(iframeHeader).click()

        const iframeTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframeTest.find(button1).click()
        iframeTest.find(button2).click()
    })
})

