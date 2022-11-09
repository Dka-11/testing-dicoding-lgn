describe('Dicoding web Login Test ', () => {
  const email = "adikaahmad05@gmail.com";
  const password = "xyz12345";
  it('Visits the Dicoding', () => {
    cy.clearCookies();
    cy.visit('https://www.dicoding.com/')
  })

  it('Click Navbar Right ', () => {
    cy.get('.navbar-nav-right > :nth-child(1) > .dcd-btn').click();
  })

  it('Fill Login Form ', () => {
    cy.get(':nth-child(3) > .form-control').type(email);
    cy.get('#login-password').type(password);
  })

  it('Click Button Sign in', () => {
    cy.get('.form-group.mb-4 > .dcd-btn').click();
  })

})