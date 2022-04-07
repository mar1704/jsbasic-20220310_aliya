import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.CreateCarousel();
    this.btn =  this.initCarousel();    
  }

  CreateCarousel(){
      const divProduct = this.slides.map( (slide) => {
      return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
      `
      }
    ).join(''); 
    
    let divCarousel_inner = createElement(`
    <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">${divProduct}</div>
    </div>
    `);
    return divCarousel_inner;
    
  }

  initCarousel() {
    let BlockToMove = this.elem.querySelector('.carousel__inner');
    let WidthBlock;
    let counterLeft = 1;
    let ImageNumber = BlockToMove.querySelectorAll('.carousel__slide').length;  
    let ButtonLeft = this.elem.querySelector('.carousel__arrow.carousel__arrow_left');
    let ButtonRight = this.elem.querySelector('.carousel__arrow.carousel__arrow_right');
    let wholeBlock = ButtonRight.parentElement;
  
      function HideButton() {
        if(counterLeft == ImageNumber)
          ButtonRight.style.display = 'none';
        else  
          ButtonRight.style.display = '';
        if(counterLeft ==1)
          ButtonLeft.style.display = 'none';
        else  
          ButtonLeft.style.display = '';
      }
  
      function Move(event) {
        let butRight = event.target.closest('.carousel__arrow.carousel__arrow_right');
        let butLeft = event.target.closest('.carousel__arrow.carousel__arrow_left');
        if(butRight) {
          WidthBlock =  BlockToMove.offsetWidth ;
          if(counterLeft < ImageNumber) {
            BlockToMove.style.transform = 'translateX('+ -counterLeft*WidthBlock + 'px)'; 
            counterLeft++;     
          }
          HideButton();
        }
        if(butLeft) {
          WidthBlock =  BlockToMove.offsetWidth ;
          if(counterLeft > 1) {
            BlockToMove.style.transform = 'translateX('+ -(counterLeft-2) * WidthBlock + 'px)';
            counterLeft--;
          }
          HideButton();
        }
        
      }

      HideButton();

    wholeBlock.addEventListener('click', Move);

    let btnPlus = this.elem.querySelectorAll('.carousel__button').forEach(button => button.addEventListener('click',  () => {
    
        let Clickevent = new CustomEvent("product-add", { 
          detail: button.parentElement.parentElement.getAttribute('data-id'), // Уникальный идентификатора товара из объекта товара
          bubbles: true 
        });
      
      button.dispatchEvent(Clickevent);
    }
    ));   
  
  } 

}
