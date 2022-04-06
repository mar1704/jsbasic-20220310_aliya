import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  
  constructor(product) {
    this.img = product.image;
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.id = product.id;
    this.elem = this.CreateDiv();
    this.btnevent = this.BtnClick()
  }

  CreateDiv(){
    const div = createElement(`
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.img}" class="card__image" alt="product">
          <span class="card__price">€${this.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `)
      
      return div;        
  }
  
  BtnClick() {
    const btn = this.elem.querySelector('.card__button');

    btn.addEventListener('click', () => {
    
        let Clickevent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
          detail: this.id, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        
        btn.dispatchEvent(Clickevent);
    });
  }
   
}