
export default class SaleItem {
  constructor (name, price, classXtra, isOutOfOrder) {
    this.name = name
    this.price = price
    this.classXtra = classXtra
    this.isOutOfOrder = false || isOutOfOrder
  }
}