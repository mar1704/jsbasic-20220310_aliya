function sumSalary(salaries) {
  let summresult=0;

  for ( let prop in salaries ) {
      if (salaries[prop]!=null) {
        if (typeof(salaries[prop]) == 'number' && isNaN( salaries [prop] ) == false  && isFinite( salaries [prop] ) == true) {
             summresult += salaries[prop];            
        }
    }
  }
  return summresult;
}
