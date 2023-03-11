const code200 = '#200siteAnchor'
const code305 = '#305siteAnchor'
const code404 = '#404siteAnchor'
const code500 = '#500siteAnchor'

class StatusCodePage {
    testCode200 () {
        cy.get(code200).invoke('attr', 'href').then(href => {
        cy.request(href).then((response) => {
        expect(response.status).to.eq(200); //https://stackoverflow.com/questions/48348354/cypress-get-href-attribute
         })
     })
    }

    testCode305 () {
        cy.get(code305).invoke('attr', 'href').then((href) => {
        cy.request({
        url: href,
        followRedirect: false, 
        }).then((response) => {
        expect(response.status).to.eq(305);
        });
    });
}
    
    testCode404 () {
        cy.get(code404).invoke('attr', 'href').then((href) =>{ 
        cy.request({
        url: href,                
        failOnStatusCode: false
        }).then((response) => {
        expect(response.status).to.eq(404);
            });
        });
    }
    testCode500 () {
        cy.get(code500).invoke('attr', 'href').then((href) =>{ 
        cy.request({
        url: href,                
        failOnStatusCode: false
        }).then((response) => {
        expect(response.status).to.eq(500);
            });
        });
    }
     
}


 export default StatusCodePage;