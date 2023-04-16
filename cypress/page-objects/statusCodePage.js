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

 //const url200 = 'http://httpstat.us/200'
// const url305 = 'http://httpstat.us/305'
// const url404 = 'http://httpstat.us/404'
// const url500 = 'http://httpstat.us/500'


// class StatusCodesPage{

//     checkStatusCode200(){
//         cy.request(url200).then((response) => {
//         const body = JSON.stringify(response.body)
//         expect(response.body).to.eq('200 OK')
//         })
//     }

//     checkStatusCode305(){
//         cy.request({url: url305, followRedirect: false}).then((response) => {
//         const body = JSON.stringify(response.body)            
//         expect(response.body).to.eq('305 Use Proxy')
//         })
//     }


//     checkStatusCode404(){
//         cy.request({url: url404, failOnStatusCode: false}).then((response) => {
//         const body = JSON.stringify(response.body)
//         expect(response.status).to.eq(404)
//         })
//     }

//     checkStatusCode500(){
//         cy.request({url: url500, failOnStatusCode: false} ).then((response) => { 
//         const body = JSON.stringify(response.body)
//         expect(response.body).to.eq('500 Internal Server Error')
//         })
//     }

// }
// export default StatusCodesPage;