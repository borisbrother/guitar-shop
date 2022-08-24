class LocalStorgeUtil {
  constructor() {
    this.keyName = 'products';
    this.values = !(localStorage.getItem(this.keyName) == null)
      ? JSON.parse(localStorage.getItem(this.keyName))
      : {};
  }
  getProducts() {
    return this.values;
  }
  saveProducts() {
    localStorage.setItem(this.keyName, JSON.stringify(this.values));
  }
  addProduct(id, qty = 1) {
    this.values[id] = qty;
    this.saveProducts();
  }
  deleteProduct(id) {
    delete this.values[id];
    this.saveProducts();
  }
  handleProduct(id) {
    if (id in this.values) {
      this.deleteProduct(id);
      return false;
    } else {
      this.addProduct(id);
      return true;
    }
  }
}

export const localStorageUtil = new LocalStorgeUtil();
