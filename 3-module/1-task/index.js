function namify(users) {
  let ArrayNames = users.map( (user)=> `${user.name}` );
  return ArrayNames;
}
