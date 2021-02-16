import { ProxyState } from "../AppState.js"

class SaleItemService {


  addFunds(amount) {
    amount = parseFloat(amount)
    let numRegex = ProxyState.numRegex
    if (!numRegex.test(amount)){
      alert(`${amount} is not a valid entry`)
      return
    } else {
      let cashOnHand = ProxyState.cashOnHand
      let cashInMachine = ProxyState.cashInMachine
      let hasEnoughCash = cashOnHand - amount < 0.00 ? false : true
      if (hasEnoughCash) {
        cashOnHand -= amount
        cashInMachine += amount
        ProxyState.cashOnHand = cashOnHand
        ProxyState.cashInMachine = cashInMachine
        alert(`You added \$${amount} to the vending machine! Time to get your fizzy juice!`);
      } else {
        alert(`Vending machine mad. You tried to add more money than you have!`);
      }
      console.log(`cash in machine: \$${ProxyState.cashInMachine}`);
      console.log(`cash on hand: \$${ProxyState.cashOnHand}`);
      // console.log(`typeof cashInMachine: \$${typeof ProxyState.cashInMachine}`);
      // console.log(`typeof cashOnHand: \$${typeof ProxyState.cashOnHand}`);
    }
  }

  buyItem (saleItem) {
    let cashInMachine = ProxyState.cashInMachine
    saleItem = ProxyState.saleItems[saleItem]
    if (saleItem.isOutOfOrder) {
      alert(`Uh-oh! This item appears to be out-of-order... =(`)
      return
    }
    let hasEnoughCash = cashInMachine - saleItem.price < 0.00 ? false : true
    if (hasEnoughCash) {
      cashInMachine -= saleItem.price

      let itemPickupAnim = document.getElementById('itemPickupAnim')
      itemPickupAnim.classList.remove('text-blur-out')
      itemPickupAnim.classList.remove(saleItem.classXtra)
      itemPickupAnim.classList.remove('focus-in-expand-fwd')

      itemPickupAnim.classList.add('focus-in-expand-fwd')
      itemPickupAnim.classList.add(saleItem.classXtra)
      
      
      // 
      setTimeout(() => {
        itemPickupAnim.classList.remove('focus-in-expand-fwd')
        console.log(`Woot! You bought a ${saleItem.name}!`)
      }, 1000)
      setTimeout(() => {
        itemPickupAnim.classList.add('text-blur-out')
      }, 1500)
      setTimeout(() => {
        itemPickupAnim.classList.remove(saleItem.classXtra)
      }, 2500)
      setTimeout(() => {
        itemPickupAnim.classList.remove('text-blur-out')
      }, 3000)
    } else {
      alert(`Couldn\'t purchase ${saleItem.name}! \nPlease add more funds!`);
    }
    ProxyState.cashInMachine = cashInMachine
    // alert(`There is \$${ProxyState.cashInMachine} left in the machine and \$${ProxyState.cashOnHand} on hand`);
    console.log(`cash in machine: \$${ProxyState.cashInMachine}`);
    console.log(`cash on hand: \$${ProxyState.cashOnHand}`);
    // console.log(`typeof cashInMachine: \$${typeof ProxyState.cashInMachine}`);
    // console.log(`typeof cashOnHand: \$${typeof ProxyState.cashOnHand}`);
  }

  returnFunds () {
    let cashInMachine = ProxyState.cashInMachine
    let cashOnHand = ProxyState.cashOnHand
    if (cashInMachine > 0.00) {
      cashOnHand += cashInMachine
      alert(`Vending machine sad. \nYou received \$${cashInMachine} from the vending machine. \nThank you come again!`);
      cashInMachine = 0.00
      ProxyState.cashInMachine = cashInMachine
      ProxyState.cashOnHand = cashOnHand
      console.log(`cash in machine: \$${ProxyState.cashInMachine}`);
      console.log(`cash on hand: \$${ProxyState.cashOnHand}`);
    } else {
      alert(`There is no money in the machine!`)
    }
    console.log(`cash in machine: \$${ProxyState.cashInMachine}`);
    console.log(`cash on hand: \$${ProxyState.cashOnHand}`);
    // console.log(`typeof cashInMachine: \$${typeof ProxyState.cashInMachine}`);
    // console.log(`typeof cashOnHand: \$${typeof ProxyState.cashOnHand}`);
  }


  constructor () {
    console.log('hello from SaleItemService');
  }
}

export const saleItemService = new SaleItemService()

