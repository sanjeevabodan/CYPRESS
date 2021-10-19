const { each } = require("cypress/types/bluebird")

describe('Codenboxautomation', () => {

    it('practice', () => {


        cy.visit('http://codenboxautomationlab.com/practice/')
        cy.get('.page-title').should('contain','Automation Practice')

        cy.get('div[id=radio-btn-example] legend').should('have.text','Radio Button Example')

        let iterate=cy.get("div[id='radio-btn-example'] label")

        iterate.each((element)=>{

            cy.log(element.text())
        })
    })
})