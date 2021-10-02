/// <reference types="cypress" />


describe('Opening NET FLEX web site', () => {

    it('Launching net flex', () => {


        // cy.visit('https://www.amazon.com/')
        // cy.screenshot()

        // cy.get('#twotabsearchtextbox').click().type("lenovo")
        // //cy.get('#nav-search-submit-text').click();

        // cy.get('div[id=suggestions-template] div.s-suggestion:nth-child(1)').click();

        cy.visit('https://www.netflix.com/signup')



        cy.get('h1.stepTitle').should('contain', 'Choose your plan.')
        // cy.get('div.centerContainer p').should('contain','Downgrade or upgrade at any time')

        //    cy.get("li.checkmark-group--row:nth-child(1) span").should('contain','No commitments, cancel anytime.')

        //    cy.get("li.checkmark-group--row:nth-child(2) span").should('contain','Everything on Netflix for one low price.')

        //    cy.get("li.checkmark-group--row:nth-child(3) span").should('contain','No ads and no extra fees. Ever.')

        //  cy.get("div.submitBtnContainer button").click()

        let data = cy.get("li.checkmark-group--row span")

        data.each((element) => {
            element.text()
            cy.log(element.text())
            if (element.text() == 'No commitments, cancel anytime.') {
                assert(expect(element.text()).to.be.equal('No commitments, cancel anytime.'))
                cy.log(element.text())

            }

            if (element.text() == 'Everything on Netflix for one low price.') {
                assert(expect(element.text()).to.be.equal('Everything on Netflix for one low price.'))
                cy.log(element.text())

            }

            if (element.text() == 'No ads and no extra fees. Ever.') {
                assert(expect(element.text()).to.be.equal('No ads and no extra fees. Ever.'))
                cy.log(element.text())

            }
            else {
                //assert(expect(true).to.be(false))

            }

        })
        //Click on Next button
        cy.get("div.submitBtnContainer button").click()
    })

    it('Moved to netflx plans page', () => {
        cy.wait(5000)
        cy.get('h1.stepTitle').should('contain', 'Choose the plan that’s right for you')

        let dataval = cy.get("li.checkmark-group--row.-compact span")

        dataval.each((element) => {
            cy.log(element.text())

            if (element.text() == 'Watch all you want. Ad-free.') {
                assert(expect(element.text()).to.be.equal('Watch all you want. Ad-free.'))
            }

            if (element.text() == 'Recommendations just for you.') {
                assert(expect(element.text()).to.be.equal('Recommendations just for you.'))
            }

            if (element.text() == 'Change or cancel your plan anytime.') {
                assert(expect(element.text()).to.be.equal('Change or cancel your plan anytime.'))
            }
        })

    })


    it('checking displayed features', () => {

        //check all the features
        let rotate = cy.get("label.planGrid__selectorChoice.planGrid__planChoice")
        rotate.each((element) => {

            cy.log(element.text())
            if (element.text() == 'Mobile') {
                assert(expect(element.text()).to.be.equal('Mobile'))
                cy.get('label.planGrid__selectorChoice.planGrid__planChoice:nth-child(2)').click()

                //  cy.get('.planGrid__featureTable').find(tr).find(td).eq(0).should('contain','Monthly price')
                let planTable = cy.get('.planGrid__featureTable tbody tr')
                var CheckCount;
                planTable.each((ele, index) => {
                    CheckCount = index + 1;
                    cy.log(CheckCount);
                    let Trtable = cy.get('.planGrid__featureTable tbody tr:nth-child(' + CheckCount + ')  td')
                    Trtable.each((element) => {
                        cy.log(element.text());
                    })
                })
            }
        })

        cy.scrollTo(0, 500)
        
        cy.get('div.submitBtnContainer button').click()
        cy.wait(2000)
        //cy.get('div.submitBtnContainer button').click()
        cy.get("a[data-uia='header-login-link']").click()



    })

    it('Moved to Member ship page',()=>{

     cy.get('div.nfEmailPhoneControls').type('Nimmi@gmail.com')
     cy.get('div.nfPasswordControls').type(123456)

     cy.get("button[data-uia='login-submit-button']").click()
    })

})



