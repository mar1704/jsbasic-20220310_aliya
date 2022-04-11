import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.CreateDiv();
  }

  CreateDiv() {
    const hrefList = this.categories.map(category => {
      return `
        <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>      
      ` }
    ).join(''); 

    let divCategories= createElement(`
    <div class="ribbon">
	    <button class="ribbon__arrow ribbon__arrow_left">
	      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    	</button>
      <nav class="ribbon__inner">
        ${hrefList}
      </nav>
	    <button class="ribbon__arrow ribbon__arrow_right">
	      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  	  </button>
    </div>
    `);	
    
 
    const btnRight = divCategories.querySelector('.ribbon__arrow.ribbon__arrow_right');  //кнопка вправо
    const btnLeft = divCategories.querySelector('.ribbon__arrow.ribbon__arrow_left');   //кнопка влево
    const categoriesBlock = divCategories.querySelector('.ribbon__inner');  //блок для прокрутки

    Update();

    function Update() {
      if(categoriesBlock.scrollLeft == 0) {
        btnRight.classList.add('ribbon__arrow_visible');
        btnLeft.classList.remove('ribbon__arrow_visible');
      }
    }

    function UpdateAfterScroll() {
      Update();
      if( (categoriesBlock.scrollWidth - categoriesBlock.scrollLeft - categoriesBlock.clientWidth) < 1) {
        btnLeft.classList.add('ribbon__arrow_visible');
        btnRight.classList.remove('ribbon__arrow_visible');
      }
    }

    function btnRightMove() {
      categoriesBlock.scrollBy( 350, 0 );      
    }

    function btnLeftMove() {
      categoriesBlock.scrollBy( -350, 0 );
    }

    btnRight.addEventListener('click', btnRightMove );
    btnLeft.addEventListener('click', btnLeftMove );
    categoriesBlock.addEventListener('scroll', UpdateAfterScroll );

    let hrefChoosen = categoriesBlock.querySelectorAll('.ribbon__item').forEach(href => href.addEventListener('click',  event => {
      event.preventDefault();
      let hrefActive = categoriesBlock.querySelector('.ribbon__item_active');
      if(categoriesBlock.querySelector('.ribbon__item_active'))
        categoriesBlock.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');
      href.classList.add('ribbon__item_active');

      let Clickevent = new CustomEvent("ribbon-select", { 
        detail: href.getAttribute('data-id'), // Уникальный идентификатора товара из объекта товара
        bubbles: true 
      });
    
      href.dispatchEvent(Clickevent);
      }
    ));   
    
    return divCategories;
  }

  
}
