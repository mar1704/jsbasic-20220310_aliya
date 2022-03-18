function isEmpty(obj) {
  let IsExist = true;

  for (let prop in obj) {
    IsExist = false;
  }
  
  return IsExist;
}
