//wypisać po 5 elementów z FabrykiTestów/
// po id//
//po klasie
//po tekście
// cy.contains('kontakt')


//po atrybucie, np. div-class-wrapper


describe("searchForTheElements", () => {
    beforeEach("openMainPage", () => {
      cy.visit("https://fabrykatestow.pl/");
    });
 
    it("shouldFindFiveElementsById", () => {
      cy.get('#header-menu-sidebar');
      cy.get("#header-menu-sidebar-bg");
      cy.get("#header-menu-sidebar-inner");
      cy.get("#nv-primary-navigation-sidebar");
      cy.get("#content");
    });
 
    it("shouldFindFiveElementsByClass", () => {
      cy.get(".elementor-inner-section");
      cy.get(".elementor-widget-wrap");
      cy.get(".elementor-widget-container");
      cy.get(".elementor-image");
      cy.get(".elementor-button-wrapper");
    });
 
    it("shouldFindFiveElementsByAttribute", () => {
      cy.get('[href="https://fabrykatestow.pl/taps"]');
      cy.get('[role="button"]');
      cy.get('[data-element_type="widget"]');
      cy.get('[data-element_type="column"]');
      cy.get('[data-element_type="section"]');
    })
})