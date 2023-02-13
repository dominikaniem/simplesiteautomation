//wypisać po 5 elementów z FabrykiTestów/
// po id//
//po klasie
//po tekście
// cy.contains('kontakt')
//po atrybucie, np. div-class-wrapper


describe("searchForElements", () => {
    beforeEach("openMainPage", () => {
      cy.visit("https://fabrykatestow.pl/");
    });
 
    it("shouldFindFiveElementsById", () => {
      cy.get('#menu-item-238');
      cy.get('#menu-item-3992');
      cy.get('#menu-item-1692');
      cy.get('#menu-item-1871');
      cy.get('#kursy');
    });
 
    it("shouldFindFiveElementsByClass", () => {
      cy.get(".elementor-widget-image");
      cy.get(".elementor-icon-box-title");
      cy.get(".elementor-icon-box-description");
      cy.get(".elementor-row");
      cy.get(".elementor-widget-container");
      
    });
 
    it("shouldFindFiveElementsByAttribute", () => {
      cy.get('[href="https://fabrykatestow.pl/koszulki"]');
      cy.get('[src="https://fabrykatestow.pl/wp-content/uploads/2021/01/cropped-ft_logo_best.jpg"]');
      cy.get('[aria-label="Fabryka Testów"]');
      cy.get('[data-element_type="column"]');
      cy.get('[width="1024"][height="1024"]');
    })


    it("shouldFindFiveElementsByText", () => {
      cy.get('span').contains("ZAPISZ MNIE NA NEWSLETTER")
      cy.get('h2').contains("SZKOŁa ONLINE DLA TESTERÓW")
      cy.get('a').contains("Newsletter")
      cy.get('a').contains("Darmowe dokumenty")
      cy.get('span').contains("POKAŻ CZEGO SIĘ NAUCZĘ")

})

})