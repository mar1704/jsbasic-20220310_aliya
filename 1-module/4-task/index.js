function checkSpam(str) {
  var strUp=str.toUpperCase();
  if(~strUp.indexOf('1XBET') || ~strUp.indexOf('XXX')){
    return true;
  }
  else return false;
}
