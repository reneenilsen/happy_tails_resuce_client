describe('Header/footer links to pages', function() {
    it('successfully loads', function() {
        cy.viewport(1500, 1000)
      cy.visit('http://localhost:3000/about')
      cy.contains('Animals').click()
      cy.contains('Happy Tails Programs').click()
      cy.contains('Adopt').click()
      cy.contains('Foster').click()
      cy.contains('Volunteer').click()
      cy.contains('Help Us').click()
      cy.contains('Our Vets').click()
      cy.contains('Contact').click()

      cy.get('a[data-cy="fb"]').click()
      cy.visit('http://localhost:3000/about')
      cy.get('a[data-cy="insta"]').click()
      // will error because of cors but does clink link, mannual testing proves this
    })
  })