///<reference types='cypress'/>

describe('To lanuch the gmail site',()=>{

    it('Sign In page',()=>{
       //to visit the site
        cy.visit('https://www.google.com/intl/en-GB/gmail/about/#')

        //click on sign in 

        cy.contains('Sign in'). click()

        //enter email

        cy.get('input[type=email]').type('raidu.erp@gmail.com')

        //click on next button

        cy.contains('Next').click()

        //enter password

        cy.get('input[type="password"]').type('Bsr@9686655321')

        //click on next button

        cy.get('#submit').click()
    })

})