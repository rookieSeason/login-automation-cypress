class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  fillUsername(username) {
    cy.get('input[name="user-name"]').clear().type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').clear().type(password);
  }

  submit() {
    cy.get('input[type="submit"]').click();
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
  logout() {
    // Clicking the menu icon to open the sidebar
    cy.get("#react-burger-menu-btn").click();
    // Clicking the logout link in the sidebar
    cy.get("#logout_sidebar_link").click();
  }
}

export default LoginPage;
