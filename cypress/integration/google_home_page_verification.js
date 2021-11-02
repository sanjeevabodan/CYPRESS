///<reference types='cypress'/>

describe('Google Home Page Verication', () => {

    it('Launching the site and verifying all the functionalities', () => {

        //launching the site
        cy.visit('https://www.google.com/')

        //checking the title in home page
        cy.get("[alt='Google']").should('be.visible').should('have.attr', 'alt', 'Google')

        //checking the gmail text on top of the page

        cy.get("[href*='https://mail.google.com/mail/&ogbl']").should('be.visible').should('have.text', 'Gmail')

        //images text verification on top of the page
        cy.get("[href*='imghp']").should('be.visible').should('have.text', 'Images')

        //google apps text verification on top of the page
        cy.get("[aria-label='Google apps']").should('be.visible').should('have.attr', 'aria-label', 'Google apps')

        //sign in text verification
        cy.get("[href*='accounts.google']").should('be.visible').should('have.text', 'Sign in')

        //checking serach Glanse

        cy.get("form[role='search'] svg").first().should('be.visible');
        //Checking speaker icon

        cy.get("div[aria-label='Search by voice']").last().should('be.visible');
        //checking search textbox

        cy.get('[aria-label="Search"]').should('be.visible')

        //checking google search text 

        cy.get("form[role=search] input[value='Google Search']").last().should('be.visible').should('have.attr', 'aria-label', 'Google Search')

        //checking im so lucky text

        cy.get('form[role=search] input[value="I\'m Feeling Lucky"]').last().should('be.visible').should('have.attr', 'aria-label', "I\'m Feeling Lucky")

        //Validate the Google Offered by

        cy.get('div[id=gws-output-pages-elements-homepage_additional_languages__als] div').should('be.visible').should('contain.text', 'Google offered in:')

        //Validate the languages in google home page

        let lang = cy.get('div[id=gws-output-pages-elements-homepage_additional_languages__als] div a')
        lang.each((ele) => {
            //checking the elements through log option
            cy.log(ele.text())

            if (ele.text() == "हिन्दी") {
                //validating the result
                assert(expect(ele.text()).to.be.equal('हिन्दी'))
            }
            if (ele.text() == "বাংলা") {
                //validating the result
                assert(expect(ele.text()).to.be.equal('বাংলা'))
            }
            if (ele.text() == "తెలుగు") {
                //validating the result

                assert(expect(ele.text()).to.be.equal('తెలుగు'))
            }
            if (ele.text() == "मराठी") {
                //validating the result

                assert(expect(ele.text()).to.be.equal('मराठी'))
            }
            if (ele.text() == "தமிழ்") {
                //validating the result

                assert(expect(ele.text()).to.be.equal('தமிழ்'))
            }
            if (ele.text() == "ગુજરાતી") {
                //validating the result

                assert(expect(ele.text()).to.be.equal('ગુજરાતી'))
            }
            if (ele.text() == "ಕನ್ನಡ") {
                //validating the result

                assert(expect(ele.text()).to.be.equal('ಕನ್ನಡ'))
            }
            if (ele.text() == "മലയാളം") {
                //validating the result

                assert(expect(ele.text()).to.be.equal('മലയാളം'))
            }
            if (ele.text() == "ਪੰਜਾਬੀ") {
                //validating the result

                assert(expect(ele.text()).to.be.equal('ਪੰਜਾਬੀ'))
            }


        })
    })

    it('Verifying texts available at bottom of the google page', () => {

        //verfying india title
        cy.get('div.uU7dJb').should('be.visible').should('have.text', 'India')

        //  cy.get("[href*='about.google']").should('be.visible').should('have.text','About')
        let bottomfields = cy.get('a[class=pHiOh]')

        bottomfields.each((ele) => {

            //to print all the elements through log 
            cy.log(ele.text())

            if (ele.text() == "About") {
                //validating the result

                assert(expect(ele.text()).to.be.equal('About'))
            }
            if (ele.text() == "Advertising") {
                //validating the result
                assert(expect(ele.text()).to.be.equal('Advertising'))
            }
            if (ele.text() == "Business") {
                //validating the result
                assert(expect(ele.text()).to.be.equal('Business'))
            }
            if (ele.text() == "  How Search works ") {
                //validating the result
                assert(expect(ele.text()).to.be.equal('  How Search works '))
            }
            if (ele.text() == "Privacy") {
                //validating the result
                assert(expect(ele.text()).to.be.equal('Privacy'))
            }
            if (ele.text() == "Terms") {
                //validating the result
                assert(expect(ele.text()).to.be.equal('Terms'))
            }

        })

        //validate the setting text

        cy.get("[aria-haspopup='true']").should('be.visible').should('have.text', 'Settings')


    })


    it('Verify the search functionality', () => {
        //wait for 1 sec
        cy.wait(1000)
        //searching with cypress
        cy.get('[aria-label="Search"]').should('be.visible').type("Cypress")
        cy.wait(1000)
        //checking displayed list with cypress related items
        let search_result = cy.get('div[role=presentation] ul li')

        //checking each element
        search_result.each((ele) => {
            cy.log(ele.text())
            //assertion
            assert(expect((ele.text().toLocaleLowerCase())).to.be.contain('cypress'))
        })

    })

    it('Verify the search functionality with invlaid text', () => {
        //launching the site
        cy.visit('https://www.google.com/')

        //searching for the data
        cy.get('[aria-label="Search"]').should('be.visible').type("44rgrg56565@2323^&&{enter}")

        //message verification
        cy.get('div[class=card-section] p').first().should('be.visible').should('contain.text', 'Your search - 44rgrg56565@2323^&& - did not match any documents.')
    })

    it('Validate the tabs functionality and url verification', () => {

        //launching the site
        cy.visit('https://www.google.com/')
        //click on gmail button
        cy.get("[href*='https://mail.google.com/mail/&ogbl']").should('be.visible').click()

        //redirected url verification

        cy.url().should('include', 'gmail')

        //to return home page

        cy.go('back')
        cy.wait(2000)

        //click on sign in button
        cy.get("[href*='accounts.google']").should('be.visible').click()


        //sign in  url verification
        cy.url().should('include', 'ServiceLogin')

        //redirect to home page from sign in page
        cy.go('back')


        //checking feeling lucky tab
        cy.get('form[role=search] input[value="I\'m Feeling Lucky"]').last().should('be.visible').click()
        //navigated url verification
        cy.url().should('include', "doodles")
        //back to home page
        cy.go('back');
    })
})











