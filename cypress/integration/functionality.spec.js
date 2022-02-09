/// <reference types="cypress" />

context('Functionality Tests', () => {
    var URL = 'http://opencart.abstracta.us/'

    
    it('Wishlist Is Functional', () => {
        visit(URL)
        wishlist()    
    })

    //If this test "fails" due to pagespeed not being defined, that is the fault of the application itself and not Cypress.
    //If you see the item in the shopping cart after the test has finished, then this test has passed.
    it('Cart Is Functional', () => {
        visit(URL)
        cart()   
    })

    //You can't create another account with the same information, so it's best to change the email/password each time you want
    //To run this test.
    it('Account Registration Is Functional', () => {
        visit(URL)
        registration()
    })

    it('Login Is Functional', () => {
        visit(URL)
        login()
    })
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

function cart() {
    cy.get('#content > .row > :nth-child(4)')
        .find('span[class="hidden-xs hidden-sm hidden-md"]')
        .invoke('show')
        .click({force: true})
    cy.get('#input-option226')
        .select('16') 
    cy.get('#button-cart')
        .click()
    cy.get(':nth-child(5) > a > .fa')
        .click()         
}

function registration() {
    cy.get('.list-inline > .dropdown > .dropdown-toggle')
        .find('span[class="hidden-xs hidden-sm hidden-md"]')
        .invoke('show')
        .click({force: true})
    cy.get('.dropdown-menu > :nth-child(1) > a')
        .click()
    cy.get('#input-firstname')
        .type('Shirley')
    cy.get('#input-lastname')
        .type('Sasser')
    cy.get('#input-email')
        .type('kel@gmail.com')
    cy.get('#input-telephone')
        .type('919-999-9990')
    cy.get('#input-password')
        .type('Pass')
    cy.get('#input-confirm')
        .type('Pass')
    cy.get('[type="checkbox"]')
        .check()
    cy.get('.pull-right > .btn')
        .click()                
}

function login() {
    cy.get('.list-inline > .dropdown > .dropdown-toggle')
        .find('span[class="hidden-xs hidden-sm hidden-md"]')
        .invoke('show')
        .click({force: true})
    cy.get('.dropdown-menu > :nth-child(2) > a')
        .click()
    cy.get('#input-email')
        .type('jubalee@engineer.com')
    cy.get('#input-password')
        .type('Pass')
    cy.get('form > .btn')
        .click()
}
