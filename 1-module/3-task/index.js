function ucFirst(str) {
  if(str!=''){
      let frstsymb=str[0].toUpperCase();
      let strresult=frstsymb+str.substring(1);
      return strresult; 
  }
  else {
    return str;
  } 
}
