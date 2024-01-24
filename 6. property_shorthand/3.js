const user = {
    name: 'Reed',
    age: 28,
    isEnglishSpeaker: true
 };
 
 const firstUser = {
    name: user.name,
    age: user.age,
    isEnglishSpeaker: user.isEnglishSpeaker
 };
 
 // Copy all of user's properties into secondUser
 const secondUser = {
    ...user
 };
 