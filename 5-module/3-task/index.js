function initCarousel() {
  let wholeBlock = document.querySelector('.carousel');
  let BlockToMove = document.querySelector('.carousel__inner');
  let WidthBlock;
  let counterLeft = 1;
  let ImageNumber = BlockToMove.querySelectorAll('.carousel__slide').length;  
  let ButtonLeft = document.querySelector('.carousel__arrow.carousel__arrow_left');
  let ButtonRight = document.querySelector('.carousel__arrow.carousel__arrow_right');

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
    let butRight =event.target.closest('.carousel__arrow.carousel__arrow_right');
    let  butLeft =event.target.closest('.carousel__arrow.carousel__arrow_left');
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

}
