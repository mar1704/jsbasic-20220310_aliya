import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.valueInit = value;
    this.elem = this.CreateDiv();
    this.segments = steps-1;
    this.elem.addEventListener('click' , (event) => this.ClickEvent(event));

  }

  CreateDiv() {
    let divSlider = createElement(`      
    <div class="slider">
      <div class="slider__thumb">
        <span class="slider__value">${this.valueInit}</span>
      </div>  
      <div class="slider__progress"></div>
      <div class="slider__steps">
      </div>
    </div>  
  `); 
    let span;
    let divSliderStep = divSlider.querySelector('.slider__steps');

    for( let i =0 ; i< this.steps; i++){
      divSliderStep.insertAdjacentHTML('beforeEnd', '<span></span>');
    }
    divSlider.querySelector('.slider__steps').children[this.valueInit].classList.add('slider__step-active');
  return divSlider;

  }

  ClickEvent(event){
    
    let thumb = this.elem.querySelector('.slider__thumb');

    let left =   event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let approximateValue = leftRelative * this.segments;
    let value;
    
     value = Math.round(approximateValue);    

    let valuePercents = (value/this.segments) * 100;
    this.elem.querySelector('.slider__value').innerHTML = value;
    let spanNum = this.elem.querySelector('.slider__steps').children.length;
    let progress = this.elem.querySelector('.slider__progress');
    let stepActive;

      for (let y = 0; y < spanNum; y++) {
        if( y == value) {

          stepActive = this.elem.querySelector('.slider__step-active');
          if(stepActive)
            stepActive.classList.remove('slider__step-active')

          this.elem.querySelector('.slider__steps').children[y].classList.add('slider__step-active');
        }   
      }

      thumb.style.left = `${valuePercents}%`; 
      progress.style.width = `${valuePercents}%`;

      let custEvent = new CustomEvent('slider-change', {
        detail: value,
        bubbles: true
      });
  
      this.elem.dispatchEvent(custEvent);

  }
}