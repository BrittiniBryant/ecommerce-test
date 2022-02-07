/// <reference types="cypress" />

//Navigation tests

//This first test is to make sure that we can navigate to each category of the site
context('Navigation Tests', () => {
    var URL = 'http://opencart.abstracta.us/'

    it('Can Navigate To Each Category', () => {
        visit(URL)
        categorynav()
    })
})

//Navigates to the website itself
function visit(URL) {
    cy.visit(URL)
}

//Navigates through each category page
function categorynav() {
    //Navigates to Desktops
    cy.get('.nav > :nth-child(1) > .dropdown-toggle') 
        .click()
    cy.get('.open > .dropdown-menu > .see-all')
        .click()
    //Navigates to Laptops and Notebooks
    cy.get('.nav > :nth-child(2) > .dropdown-toggle')
        .click()
    cy.get('.open > .dropdown-menu > .see-all')
        .click()
    //Navigates to Components
    cy.get(':nth-child(3) > .dropdown-toggle')
        .click()
    cy.get('.open > .dropdown-menu > .see-all')    
    //Navigates to Tablets
    cy.get('.nav > :nth-child(4) > a')
        .click() 
    //Navigates to Software
    cy.get('.nav > :nth-child(5) > a')
        .click()  
    //Navigates to Phones and PDAs
    cy.get(':nth-child(6) > a')
        .click()
    //Navigates to Cameras
    cy.get(':nth-child(7) > a')
        .click()
    //Navigates to MP3 Players
    cy.get(':nth-child(8) > .dropdown-toggle')
        .click()
    cy.get('.open > .dropdown-menu > .see-all')
        .click()
             


}

