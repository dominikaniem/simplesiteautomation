const url = 'https://jsonplaceholder.typicode.com/posts/'

const url2 = 'https://jsonplaceholder.typicode.com/posts/1/'

describe('my sixth scenario', () => {
    it('should test jsonplaceholder API', function () {

cy.request(url).then((response)  => {
    const body = JSON.stringify(response.body)
    expect(response.status).to.eq(200)
    cy.log(body)

cy.request(
    {
method: 'POST',
url: url,
body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userID: 1
    }),
    headers: {'Content-type': 'application/json'}
    })
}
).then((response)=>{
    const body = JSON.stringify(response.body)
    cy.log(body)
})    
    })
    it('should test PUT method', function () {

        cy.request(url2).then((response)  => {
            const body = JSON.stringify(response.body)
            cy.log(body)
        
        cy.request(
            {
        method: 'PUT',
        url: url2,
        body: JSON.stringify({
            title: 'Sentence',
            body: 'Draco dormiens nunquam tittulandus',
            }),
            headers: {'Content-type': 'application/json'}
            })
        }
        ).then((response)=>{
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            expect(body).to.include('Draco')
            cy.log(body)
        })    
            })
            it('should test DELETE method', function () {

                cy.request(url2).then((response)  => {
                    const body = JSON.stringify(response.body)
                    cy.log(body)
                
                cy.request(
                    {
                method: 'DELETE',
                url: url2,
                    })
                }
                ).then((response)=>{
                    const body = JSON.stringify(response.body)
                    cy.log(body)
                    expect(body).to.eq('{}')
                })    
                    })   
    
 })