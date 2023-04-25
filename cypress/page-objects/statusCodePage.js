const code200 = 'http://httpstat.us/200'
const code305 = 'http://httpstat.us/305'
const code404 = 'http://httpstat.us/404'
const code500 = 'http://httpstat.us/500'


class StatusCodePage{

testCode200(){
        cy.request(code200).then((response) => {
        const body = JSON.stringify(response.body)
        expect(response.body).to.eq('200 OK')
        })
    }

   testCode305(){
        cy.request({url: code305, followRedirect: false}).then((response) => {
        const body = JSON.stringify(response.body)            
        expect(response.body).to.eq('305 Use Proxy')
        })
    }


testCode404(){
        cy.request({url: code404, failOnStatusCode: false}).then((response) => {
        const body = JSON.stringify(response.body)
        expect(response.body).to.eq('404 Not Found')
        })
    }

    testCode500(){
        cy.request({url: code500, failOnStatusCode: false} ).then((response) => { 
        const body = JSON.stringify(response.body)
        expect(response.body).to.eq('500 Internal Server Error')
        })
    }

}
export default StatusCodePage;