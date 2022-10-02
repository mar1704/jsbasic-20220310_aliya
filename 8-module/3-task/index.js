export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
    this.cartItems =[];
  }

  addProduct(product) {
   
    
    
  }

  updateProductCount(productId, amount) {
    // ваш код
  }

  isEmpty() {
    // ваш код
  }

  getTotalCount() {
    // ваш код
  }

  getTotalPrice() {
    // ваш код
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

