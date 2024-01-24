const user = {
    name: 'Reed',
    age: 28,
    isEnglishSpeaker: true
 };

 // Dot property access
 const usersName = user.name;
 const usersAge = user.age;
 
 // Object destructuring
 const { age, name, isEnglishSpeaker: knowsEnglish } = user;

 // Use ':' to rename a value as you destructure it
 console.log(knowsEnglish); // true
 