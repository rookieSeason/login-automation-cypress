/// <reference types= "cypress"/>
import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

describe("Login and Add to Cart Functionality", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  it("should not login using invalid credentials and show an error message when credentials are invalid", () => {
    loginPage.visit();
    loginPage.login("random_user", "random_password");
  });

  it("should login using valid credentials and redirect to next page ", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");
  });

  it("should login and add an item to cart", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");
    inventoryPage.addItemToCart();
  });

  it("should go to sidebar menu and logout", () => {
    loginPage.visit();
    loginPage.login("standard_user", "secret_sauce");
    loginPage.logout();
  });
});
