import SaleItem from "./Models/SaleItem.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  
  cashOnHand = 1000.00
  cashInMachine = 0.00
  numRegex  = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/

  saleItems = {
    pepchi: new SaleItem('Pepchi', '1.50', 'pepchi-left'),
    pepchichi: new SaleItem('Pepchichi', '1.50', 'pepchichi-left'),
    mtnstew: new SaleItem('Mountain Stew', '1.00', 'mtnstew-left'),
    sierracyst: new SaleItem('Sierra Cyst', '2.00', 'sierracyst-left'),
    mtnglue: new SaleItem('Mountain Glue', '1.00', 'mtnglue-left'),
    mrprepper: new SaleItem('Mr. Prepper', '1.50', 'mrprepper-left'),
    brawndo: new SaleItem('Brawndo', '1.00', 'brawndo-left'),
    glockstar: new SaleItem('Glockstar', '1.50', 'glockstar-left'),
    outofservice: new SaleItem('Out of Service', '0.00', 'none', true),
    truck: new SaleItem('Truck', '1.00', 'truck-left')
  }

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
