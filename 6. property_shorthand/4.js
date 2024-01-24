const user = {
    name: 'Reed',
    age: 28
 };
 
 const moreUserInfo = {
    age: 70,
    country: 'USA'
 };
 
 // Copy all of user's properties into secondUser
 const secondUser = {
    ...user,
    ...moreUserInfo,
    computer: 'MacBook Pro'
 };
 
 console.log(secondUser);
 // { name: "Reed", age: 70, country: "USA", computer: "Macbook Pro" }
 
 