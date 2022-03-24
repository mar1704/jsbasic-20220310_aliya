function showSalary(users, age) {
  let strResult="";

  const NeedUsers = users.filter((key) => key.age <= age );
  let BalanceArray = NeedUsers.map( (user)=>{
    return `${user.name}, ${user.balance}`;
    }  )

  strResult = BalanceArray.join('\n');
  return strResult;
}
