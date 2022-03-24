function camelize(str) {
  let ArrayTemp;
  let ResultStr;
  ArrayTemp = str.split('-');

  for( let i=0; i< ArrayTemp.length; i++) {
    if(i>0){
      ArrayTemp[i] = ArrayTemp[i][0].toUpperCase() + ArrayTemp[i].substr(1) ;
    }
  }
  ResultStr = ArrayTemp.join("");
  return ResultStr;
}
