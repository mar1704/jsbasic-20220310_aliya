function makeFriendsList(friends) {
  var ULElem = document.createElement("UL");
  for( let i=0; i<friends.length; i++) {
    var liElem = document.createElement('li');
    liElem.innerHTML = friends[i].firstName +" " + friends[i].lastName;
    ULElem.append(liElem);
    
  }
  return ULElem;
}
