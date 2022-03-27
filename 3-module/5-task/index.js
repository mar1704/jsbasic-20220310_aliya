function getMinMax(str) {
  let ArrayTemp = str.split(" ");
  let ArrayNum = ArrayTemp.map( (key) => parseFloat(key) ).filter((key) => isNaN (key) == false );

  let NumMax = Math.max(...ArrayNum);
  let NumMin = Math.min(...ArrayNum);
  
  let ObjResult= {
    min: NumMin,
    max: NumMax
  }
  return ObjResult;
}
