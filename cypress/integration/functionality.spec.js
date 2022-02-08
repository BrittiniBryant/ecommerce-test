/// <reference types="cypress" />

context('Functionality Tests', () => {
    var URL = 'http://opencart.abstracta.us/'

    
    it('Wishlist Is Functional', () => {
        visit(URL)
        wishlist()
        
    })

    // it('Can Navigate to The Wishlist', () => {
    //     visit(URL)
        
        
    // })

    // it('Can Navigate to The Cart', () => {
    //     visit(URL)
        

    // })
})

//Navigates to the website itself
function visit(URL) {
    cy.visit(URL)
}

function wishlist() {
    cy.get('#content > .row > :nth-child(3)')
        .find('[data-original-title="Add to Wish List"]')
        .click()
    cy.get('#wishlist-total')
        .click()    

}
