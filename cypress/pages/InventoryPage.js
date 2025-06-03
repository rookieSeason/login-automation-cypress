class InventoryPage {
  addItemToCart() {
    cy.get(".inventory_item").each(($el) => {
      cy.wrap($el)
        .find(".inventory_item_label")
        .then(($label) => {
          if ($label.text().includes("Sauce Labs Backpack")) {
            cy.wrap($el).find("button").click();
          }
        });
    });
  }
}
export default InventoryPage;
