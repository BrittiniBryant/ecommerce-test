/// <reference types="cypress" />

//Navigation tests

//This first test is to make sure that we can navigate to each category of the site
context('Navigation Tests', () => {
    var URL = 'http://opencart.abstracta.us/'

    it('Can Navigate To Each Category', () => {
        visit(URL)
    })
})

//Navigates to the website itself
function visit(URL) {
    cy.visit(URL)
}

//Navigates through each category page
function categorynav() {
    
}

