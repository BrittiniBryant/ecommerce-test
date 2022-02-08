/// <reference types="cypress" />

context('Functionality Tests', () => {
    var URL = 'http://opencart.abstracta.us/'

    
    it('Can Navigate To Each Category', () => {
        visit(URL)
        
    })

    it('Can Navigate to The Wishlist', () => {
        visit(URL)
        
        
    })

    it('Can Navigate to The Cart', () => {
        visit(URL)
        

    })
})

//Navigates to the website itself
function visit(URL) {
    cy.visit(URL)
}

function wishlist() {
    cy.get('#product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12')
    
}
