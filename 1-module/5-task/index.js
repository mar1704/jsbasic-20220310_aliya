function truncate(str, maxlength) {
  if(str.length>maxlength) {
      let strtemp=str.substring(0,maxlength-1) + "…";
      return strtemp;
    }
    else{
      return str;
    }
}
