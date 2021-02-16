import { ProxyState } from "../AppState.js"
import { saleItemService } from "../Services/SaleItemService.js"


function _draw () {

  document.getElementById('saleItemSelections').innerHTML = /* html */ `
    <div class="col-4">
      <div class="row h-100">
          <button id="item1" onclick="app.saleItemController.buyItem('pepchi')" class="col-6 d-flex justify-content-center align-items-center sale-item pepchi" data-toggle="tooltip" data-html="true" title="pepchi"></button> 
          <button id="item2" onclick="app.saleItemController.buyItem('pepchi')" class="col-6 d-flex justify-content-center align-items-center sale-item pepchi" data-toggle="tooltip" data-html="true" title="pepchi"></button>
          <button id="item3" onclick="app.saleItemController.buyItem('mtnstew')" class="col-6 d-flex justify-content-center align-items-center sale-item mtnstew" data-toggle="tooltip" data-html="true" title="mtnstew"></button>
          <button id="item4" onclick="app.saleItemController.buyItem('sierracyst')" class="col-6 d-flex justify-content-center align-items-center sale-item sierracyst" data-toggle="tooltip" data-html="true" title="sierracyst"></button>
          <button id="item5" onclick="app.saleItemController.buyItem('mtnglue')" class="col-6 d-flex justify-content-center align-items-center sale-item mtnglue" data-toggle="tooltip" data-html="true" title="mtnglue"></button>
          <button id="item6" onclick="app.saleItemController.buyItem('mtnglue')" class="col-6 d-flex justify-content-center align-items-center sale-item mtnglue" data-toggle="tooltip" data-html="true" title="mtnglue"></button>
      </div>
    </div>
    <div class="col-3">
      <div class="row h-100">
          <button id="pay" onclick="app.saleItemController.addFunds(prompt('You have \$${ProxyState.cashOnHand}... How much would you like to add?'))" class="col-12 d-flex justify-content-center align-items-center pay" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"></button>
          <button id="returnChange" onclick="app.saleItemController.returnFunds()" class="col-12 d-flex justify-content-center align-items-center return-change" data-toggle="tooltip" data-html="true" title="">
            <!-- <img src="assets/img/pepmi.png" width="55" height="45" alt="" loading="lazy"> -->
          </button>
      </div>
    </div>
    <div class="col-4">
      <div class="row h-100">
          <button id="item7" onclick="app.saleItemController.buyItem('pepchichi')" class="col-6 d-flex justify-content-center align-items-center sale-item pepchichi" data-toggle="tooltip" data-html="true" title="pepchichi"></button>
          <button id="item8" onclick="app.saleItemController.buyItem('mrprepper')" class="col-6 d-flex justify-content-center align-items-center sale-item mrprepper" data-toggle="tooltip" data-html="true" title="mrprepper"></button>
          <button id="item9" onclick="app.saleItemController.buyItem('brawndo')" class="col-6 d-flex justify-content-center align-items-center sale-item brawndo" data-toggle="tooltip" data-html="true" title="brawndo"></button>
          <button id="item10" onclick="app.saleItemController.buyItem('glockstar')" class="col-6 d-flex justify-content-center align-items-center sale-item glockstar" data-toggle="tooltip" data-html="true" title="glockstar"></button>
          <button id="item11" onclick="app.saleItemController.buyItem('outofservice')" class="col-6 d-flex justify-content-center align-items-center outofservice flicker" data-toggle="tooltip" data-html="true" title="outofservice"></button>
          <button id="item12" onclick="app.saleItemController.buyItem('truck')" class="col-6 d-flex justify-content-center align-items-center sale-item truck" data-toggle="tooltip" data-html="true" title="truck"></button>
      </div>
    </div>
  `
}

export default class SaleItemController {
  constructor() {
    console.log('hello from SaleItemController');
    ProxyState.on('cashOnHand', _draw)
    
    _draw()
  }

  addFunds(amount) {
    saleItemService.addFunds(amount)
  }
  buyItem (saleItem) {
    saleItemService.buyItem(saleItem)
  }
  returnFunds() {
    saleItemService.returnFunds()
  }
}