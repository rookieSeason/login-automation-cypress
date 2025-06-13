/// <reference types= "cypress"/>

import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
describe("Login, Add to Cart, and Logout Functionality", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  beforeEach(() => {
    loginPage.visit();
  });
  it("should successfully login using valid credentials", () => {
    loginPage.login("standard_user", "secret_sauce");
    loginPage.assertSuccessfulLogin();
  });
  it("should show an error message when login using invalid credentials", () => {
    loginPage.login("invalid_user", "invalid_password");
  });
  it("should add an item to the cart, go to sidebar menu and logout the user", () => {
    loginPage.login("standard_user", "secret_sauce");
    loginPage.assertSuccessfulLogin();
    inventoryPage.addItemToCart();
    loginPage.logout();
  });
});
