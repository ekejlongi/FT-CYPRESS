describe ('my first test', () => {
    beforeEach(() => {
        cy.visit('https://fabrykatestow.pl/')
    })
it ('test1', () => {
    cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER!').click()
})
    });


  //  <span class="elementor-button-text">ZAPISZ MNIE NA NEWSLETTER!</span>