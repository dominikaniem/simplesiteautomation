describe("take screenshot of cdp-course", () => {
   it('enter main page and take screenshot' , () => {

cy.visit('https://fabrykatestow.pl/')
cy.get('#menu-item-1871').click()    
cy.contains('POKAŻ CZEGO SIĘ NAUCZĘ').eq(0).click()
cy.get('.elementor-background-overlay').eq(1).scrollIntoView().screenshot('homeworkscreen')

})
   })