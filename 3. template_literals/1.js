/* 
  Concatenating strings prior to ES6.
  Notice the awkward space after the word Hello?
*/
function sayHello(text) {
    return 'Hello ' + text + '!';
}

sayHello('React'); // Hello React!

/* 
  Concatenating strings using template literals.
  See how much more readable and predictable this code is?
*/
function sayHelloAgain(text) {
    return `Hello again, ${text}!`;
}

sayHelloAgain('React'); // Hello again, React!

