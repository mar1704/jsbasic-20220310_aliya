/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.HeadArray =  ['Имя', 'Возраст','Зарплата','Город'];
    this.rows = rows;
  }

  set rows(value) {
    const elem = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');   
    
    for (let i = 0; i < this.HeadArray.length; i++) {
      let th = document.createElement('th');
      th.innerHTML = this.HeadArray[i];
      tr.appendChild(th);
    }
    thead.appendChild (tr);
    elem.appendChild (thead);

    const bodyTable = value.map(item => {
      return `
      <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>${item.city}</td>
        <td><button id="Btn">X</button></td>
      </tr>`;
    }).join('');

    elem.insertAdjacentHTML('beforeEnd', bodyTable);
    this.elem = elem;

    let tableBody = elem.querySelector("tbody");
    tableBody.addEventListener('click', clickBtn)

    function clickBtn(event) {
      let btn = event.target.closest('#Btn');
      if(btn) {
        btn.parentElement.parentElement.remove();
      }
    }
    

  }
  
  get rows() {
    return elem;
  }
  
}
