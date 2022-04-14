import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.div = this.CreateDiv();
  }

  CreateDiv() {
    let divModal = createElement(`      
        <div class="modal">
          <div class="modal__overlay"></div>
            <div class="modal__inner">
              <div class="modal__header">
                <button type="button" class="modal__close">
                  <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
                </button>
                <h3 class="modal__title"></h3>
              </div>
              <div class="modal__body"></div>
            </div>
        </div>
      `); 
      return divModal;
  }

  setTitle(textTitle) {
    let title = this.div.querySelector('.modal__title');
    title.textContent = textTitle;
  }

  setBody(node){
    this.div.querySelector('.modal__body').innerHTML = '';
    this.div.querySelector('.modal__body').append(node);    
  }

  open(){
    document.body.append(this.div);
    document.body.classList.add('is-modal-open');

    let btnClose = document.querySelector('.modal__close');
    btnClose.addEventListener('click', event=> {
        event.preventDefault;
        this.close();
      }      
    );

    this.Esc = event => { if (event.code == 'Escape') {
        event.preventDefault;
        document.removeEventListener('keydown', this.Esc);
        this.close()
      }
    };

    document.addEventListener('keydown', this.Esc);
  }
 
  close(){
    document.body.classList.remove('is-modal-open');
    this.div.remove();  
  }

}
