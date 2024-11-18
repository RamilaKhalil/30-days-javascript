{
// // // let a = 5{
// // // console.log(a);
// // // } // not show output (outside block)

// // // {
// // //     let a = 10;
// // //     console.log(a); // correct way
// // // }

// // // let a = 6; 
// // // a =7;  //correct

// // // a= "syed";     //wrong

// // // console.log(a);

// // //value change ho skti hai but usi var ko dusri data type nhi dy skty

// // // 1 -Introduced in ES6 (2015).
// // // 2 -Block-scoped: Only accessible within the {} block in which it was defined.
// // // 3-Can be reassigned, but cannot be redeclared in the same scope.
// // // 4-Not hoisted in the same way as var; instead, it is hoisted to the top of the block but not initialized (remains in the Temporal Dead Zone).

}

{
// // // const a = 10;
// // // const a ="syed"//Cannot redeclare block-scoped variable 'a'
// // //  a = 15; // Cannot assign to 'a' because it is a constant.
// // //  console.log(a); 


// // // 1-Block-scoped like let.
// // // 2-Cannot be reassigned after the initial assignment.
// // // 3-Used for constants or values that should not change.


// // // Mutable: An object or data type that can be changed after it's created.
// // // Immutable: An object or data type that cannot be changed after it's created.


// // const person = { name: "Ali" };
// // person.name = "Ahmed"; // ✅ Allowed (mutating object properties)
// // console.log(person); // Output: { name: "Ahmed" }


// // const arr = ["ali", "saad"];
// // arr.push("syed");

// // console.log(arr); // Output: [ 'ali','saad','syed' ]

// // Objects and arrays declared with const are mutable (you can change their contents, but not reassign the variable itself).

}

{
// //var

// // Function-scoped: Available throughout the entire function in which it was defined.
// // Hoisted to the top of the function scope and initialized as undefined.
// // Can be redeclared and reassigned, which can lead to bugs.
// // Generally not recommended for modern JavaScript due to potential issues with hoisting and scope leakage.
// // javascript



// // Temporal Dead Zone (TDZ)

// // Both let and const are hoisted, but they exist in a "Temporal Dead Zone" from the start of the block until they are defined.


// // Accessing them before their declaration results in a ReferenceError.

// // console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
// // let a = 5;

// // Urdu: Temporal Dead Zone ka matlab hai kay let aur const variables ka block kay start say declaration tak aik zone hota hai jahan access nahi kiya ja sakta.


// //function test() {
//    // console.log(x); // Output: undefined (var hoisted)
//     //var x = 10;
  
//      //console.log(y); // ❌ ReferenceError (let in TDZ)
//     //let y = 20;
// //   }
// //   test();
  

// // for (let i = 0; i < 3; i++) {
// //     console.log(i);
// //      // Output: 0, 1, 2
// //   }
  
// //   for (var j = 0; j < 3; j++) {
// //     console.log(j); // Output: 0, 1, 2
// //   }


// // setTimeout
  
// // for (let i = 0; i < 3; i++) {
// //     setTimeout(() => console.log(i), 100); // Output: 0, 1, 2
// //   }
  
// //   for (var j = 0; j < 3; j++) {
// //     setTimeout(() => console.log(j), 100); // Output: 3, 3, 3
// //   }

// //   Urdu: let loop mein har iteration ka new scope banata hai, jabkay var aik hi variable ko share karta hai.
}



{
// Best Practices for Using let, const, and var


// 1-Use const by default:
// If you don't plan to reassign the variable, always use const.


// 2-Use let only if reassignment is necessary:
// Use let when you know the value of the variable will change.

// 3-Avoid var:
// var can lead to scope-related bugs and is generally not recommended in modern JavaScript.

// 4-Group const declarations at the top:
// It's a good practice to declare all your constants first, then your let variables.

// 5-Use descriptive variable names:
// Make your code self-explanatory by using meaningful names, e.g., totalPrice instead of tp.

}



{
//Use const for Better Performance
// Use let in Loops with Closures.
// Use const with Arrow Functions
}