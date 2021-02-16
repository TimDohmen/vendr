import SaleItemController from "./Controllers/SaleItemController.js";

class App {
  saleItemController = new SaleItemController();
}

window["app"] = new App();
