// // // // // // let a = "ali";
// // // // // // let greeting = ` hello ${a}`;

// // // // // // // @ts-ignore
// // // // // // console.log(greeting); // Output: hello ali


// // // // // // let d = "ali";
// // // // // // let e = 'ali';
// // // // // // let f = `ali`;
// // // // // // console.log(d);
// // // // // // console.log(e);
// // // // // // console.log(f); 


// // // // // // let a = `jjdjsncjjskmsm
// // // // // // sncksncksnck`;

// // // // // // let b = "jcifjeihf
// // // // // // sjdijfijf" // error

// // // // // // let c = "jhgghjnb\njnjj"
// // // // // // console.log(c);

// // // // // // let js = "Javascript";
// // // // // // console.log(js.startsWith("Java")); // boolean return

// // // // // // let js = "Javascript";

// // // // // // console.log(js.endsWith("script")); 

// // // // // // console.log("Hello World".includes("World"));


// // // // // //console.log("Hello World".includes("World")); // true

// // // // // // let a = "ayesha "
// // // // // // console.log(a.repeat(3));

// // // // // // let a = "ayesha";
// // // // // // console.log(a.padStart(12 ,"bilal"));

// // // // // // let name = "Ali";
// // // // // // console.log(name.padEnd(10, "bilal")); 


// // // // // // let char = "MujheJavaScriptseekhnihai";
// // // // // // console.log(char.split(" ")); 
// // // // // // ["MujheJavaScriptseekhnihai"]


// // // // // // let char = "MujheJavaScriptseekhnihai".split("");
// // // // // // console.log(char);
// // // // // // ['M', 'u', 'j', 'h', 'e', 'J',
// // // // // //   'a', 'v', 'a', 'S', 'c', 'r',
// // // // // //   'i', 'p', 't', 's', 'e', 'e',
// // // // // //   'k', 'h', 'n', 'i', 'h', 'a',
// // // // // //   'i'
// // // // // // ]

// // // // // // let data = "Apple , Banana ,  Cherry";
// // // // // // let fruits = data.split(",");
// // // // // // console.log(fruits);

// // // // // // let text = "Ali,Ahmed,Asim,Amna";
// // // // // // let limited = text.split(",", 3); // split at comma and take only 3 elements
// // // // // // console.log(limited);

// // // // // // let name = "Ramila";
// // // // // // let characters = name.split( ); // full ramila
// // // // // // console.log(characters);

// // // // // // let name = "Ramila";
// // // // // // let characters = name.split(""); // [ 'R', 'a', 'm', 'i', 'l', 'a' ]
// // // // // // console.log(characters);


// // // // // // let str = "123";
// // // // // // let num = Number(str);
// // // // // // console.log(num); // Output: 123 (as a number)

// // // // // // let invalidStr = "123abc";
// // // // // // console.log(Number(invalidStr)); // Output: NaN


// // // // // // console.log(typeof "ali"); // "string"
// // // // // // console.log(typeof 42); // "number"
// // // // // // console.log(typeof Array); // "function"
// // // // // // console.log(typeof null); // "object"
// // // // // // console.log(typeof undefined); // "undefined"
// // // // // // console.log(typeof true); // "boolean"
// // // // // // console.log(typeof {}); // "object"


// // // // // // let name = "Alice";
// // // // // //const age = 25;
// // // // // // console.log(name, age);

// // // // // // let name = "Alice";
// // // // // // name = "Bob"; // Reassign
// // // // // // console.log(name);

// // // // // // const age = 25;
// // // // // // age = 30; // Uncomment to see an error


// // // // // // function testScope() {
// // // // // //     if (true) {
// // // // // //       let blockScoped = "I exist only in this block!";
// // // // // //       console.log(blockScoped); // works
// // // // // //       var functionScoped = "I exist in the whole function!";
// // // // // //     }
// // // // // //     // console.log(blockScoped); // Error: blockScoped is not defined
// // // // // //     console.log(functionScoped); // Works
// // // // // //   }
// // // // // //   testScope();
  
// // // // // // let a = 10;
// // // // // // const b = 20;
// // // // // // var c = 30;

// // // // // // a = 15;
// // // // // // // b = 25; // Uncomment to test

// // // // // // console.log(a); // ?
// // // // // // console.log(b); // ?
// // // // // // console.log(c); // ?

// // // // // // const length = 10;
// // // // // // const width = 5;
// // // // // // const area = length * width;
// // // // // // console.log("Area:", area);
// // // // // // console.log("Area:", length * width); // Same as above

// // // // // // let greeting = "Hello";
// // // // // // greeting = "Hi";

// // // // // // const pi = 3.14;
// // // // // // //pi = 3.15; // Uncomment to test // Error: Cannot reassign a constant
// // // // // // const fi = 3.14159; 
// // // // // // console.log(greeting, pi);

// // // // // // console.log(a);
// // // // // // let or const a = 10 // temporal dead zone

// // // // // //console.log(a);
// // // // // // var a = 10 // undefined

// // // // // // var d = 30;
// // // // // // var d = 40; // Allowed

// // // // // // let e = 50;
// // // // // // let e = 60; // Error

// // // // // // const f = 70;
// // // // // // const f = 80; // Error

// // // // // // for (let i = 0; i < 3; i++) {
// // // // // //     setTimeout(() => console.log(i), 1000); // Prints: 0, 1, 2
// // // // // //   }
  
// // // // // //   for (var j = 0; j < 3; j++) {
// // // // // //     setTimeout(() => console.log(j), 1000); // Prints: 3, 3, 3
// // // // // //   }
// // // // // //   var x= 10;

// // // // // //   {
// // // // // //     var x = 20; //overide Shadows outer x
// // // // // //     console.log(x); // 20
// // // // // //   }
  
// // // // // //   console.log(x); // 20
   
// // // // // //   ///////////////
// // // // // //   let x = 10;

// // // // // // {
// // // // // //   let x = 20; // Shadows outer x
// // // // // //   console.log(x); // 20
// // // // // // }

// // // // // // console.log(x); // 10

// // // // // function testVar() {
// // // // //     var x = 1;
// // // // //     if (true) {
// // // // //       var x = 2;
// // // // //       console.log(x); // ?
// // // // //     }
// // // // //     console.log(x); // ?
// // // // //   }
  
// // // // //   function testLet() {
// // // // //     let y = 1;
// // // // //     if (true) {
// // // // //       let y = 2;
// // // // //       console.log(y); // ?
// // // // //     }
// // // // //     console.log(y); // ?
// // // // //   }
  
// // // // //   testVar();
// // // // //   testLet();
 
// // // // function testConst() {
// // // //     const a = 10;
// // // //     a = 20; // Error here
// // // //     console.log(a);
// // // //   }
// // // //   testConst();

// // // console.log(a); // ?
// // // var a = 5;

// // // console.log(b); // ?
// // // let b = 10;

// // // console.log(c); // ?
// // // const c = 15;

// // let x = 10;

// // function shadowExample() {
// //   let x = 20;
// //   console.log(x); // ?
// //   if (true) {
// //     let x = 30;
// //     console.log(x); // ?
// //   }
// //   console.log(x); // ?
// // }

// // shadowExample();
// // console.log(x); // ?
// var a = 10;
// let b = 20;
// const c = 30;

// if (true) {
//   var a = 40; // Re-declaring `a`
//   let b = 50; // Shadowing `b`
//   const c = 60; // Shadowing `c`
// }

// console.log(a); // ?
// console.log(b); // ?
// console.log(c); // ?

const shop = [];
let personEnter = [];
let personLeave = [];
let person = 0;

function addPerson(name) {
    personEnter.push(name);
    person++;
    console.log(`${name} entered the shop`);
}
function removePerson(name) {
    if (personEnter.includes(name)) {
        personLeave.push(name);
        person--;
        console.log(`${name} left the shop`);
    } else {
        console.log(`${name} is not in the shop`);
    }
}
function showPeople() {
    console.log(`There are ${person} people in the shop`);
    console.log(`People who entered the shop: ${personEnter}`);
    console.log(`People who left the shop: ${personLeave}`);

}
 
addPerson("John");
showPeople();
removePerson("John");
showPeople();  // ?