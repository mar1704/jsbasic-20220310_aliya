function highlight(table) {
    let posStatus;
    let posGender;
    let posAge;
    for( let y=0; y<table.rows[0].children.length; y++) {
      if( table.rows[0].children[y].innerHTML == 'Status')
        posStatus = y;
      if (table.rows[0].children[y].innerHTML == 'Gender')  
        posGender = y;
      if (table.rows[0].children[y].innerHTML == 'Age')  
        posAge = y;  
    }

    let tbody = table.querySelector("tbody");
    for( let i=0; i<tbody.children.length; i++) {
      if(tbody.children[i].children[posStatus].hasAttribute('data-available') && tbody.children[i].children[posStatus].getAttribute('data-available') =='true')
        tbody.children[i].classList.add('available'); 
      else if(tbody.children[i].children[posStatus].hasAttribute('data-available') && tbody.children[i].children[posStatus].getAttribute('data-available') =='false') 
        tbody.children[i].classList.add('unavailable');
      else if(!(tbody.children[i].children[posStatus].hasAttribute('data-available')))        
        tbody.children[i].hidden = true;
      if(tbody.children[i].children[posGender].innerHTML == 'm')
        tbody.children[i].classList.add('male');
      else if (tbody.children[i].children[posGender].innerHTML == 'f')
        tbody.children[i].classList.add('female');  
      if(tbody.children[i].children[posAge].innerHTML < 18) 
        tbody.children[i].style="text-decoration: line-through";
    }   
}

