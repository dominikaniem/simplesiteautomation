const code200 = '#200siteAnchor'
const code300 = '#300siteAnchor'
const code400 = '#400siteAnchor'
const code500 = '#500siteAnchor'

class StatusCodePage {
    evokeCode200 () {
    cy.get(code200).click()
    }

    evokeCode300 () {
    cy.get(code300).click()
    }

    evokeCode400 () {
    cy.get(code400).click()
    }

    evokeCode500 () {
    cy.get(code500).click()    
    }

}

export default StatusCodePage;