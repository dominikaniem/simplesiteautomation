const url = 'https://fabrykatestow.pl/'
const url2 = 'https://register.rediff.com/register/register.php'

describe('my work with ls and cookies' , function () {
    it(' work with local and session storage' , function () {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        
        cy.clearLocalStorage('test')

        cy.getAllLocalStorage()

        cy.getAllSessionStorage()
        cy.getAllLocalStorage('test')
        
    })

    it('should work with cookies' , function () {
        cy.visit (url)
        cy.clearCookie('foo')
        cy.clearCookies()
        cy.clearAllCookies()
    
        cy.setCookie('foo' , 'bar')
        cy. getCookie('foo')
        cy.getCookies()
    
        cy.getAllCookies()
    })

    it('should work with alerts' , function () {
        cy.visit(url2)
        cy.get('input[type="submit"]').click()

        cy.on('window:alert', (t)=>{
            expect(t).to.contains('Your full name')
        })
    })
    
})
