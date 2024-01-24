function myFunction() {
    var a = 1;
 
    if (a === 1) {
       var b = 2;
       console.log(a); // Code here can use variable a
       console.log(b); // Code here can use variable b
    }
 
    console.log(a); // Code here can also use variable a
    console.log(b); // Code here can also use variable b
 }
 
 myFunction();
 
 console.log(a); // Code here CANNOT use variable a