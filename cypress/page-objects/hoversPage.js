const figure = '.figure'
const figcaption = '.figcaption'


class HoversPage {
 hoverOverElement1() {
    // cy.get(figure).first().trigger('mouseover')
 cy.get(figcaption).first().should('be.hidden').invoke('show').should('be.visible')

 }

 hoverOverElement3() {
cy.get(figcaption).last().should('be.hidden').invoke('show').should('be.visible')


 }
}

export default HoversPage;