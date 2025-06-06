// singleton  (if its made with constructor then only it will me singleton)


//object literals
const mySym = Symbol("key1")
const jsuser = {
    name: "shivraj",
    "full name":"shivraj mohite",
    age: 18,
    [mySym]: "key1",
    location: "Maharashtra",
    email:"shivrajmohite@gmail.com",
    isloggedIn:"false",
    lastLoginDays:["Monday", "Saturday"]
}
// console.log(jsuser.email);            //(1)
//(1)=> shivrajmohite@gmail.com

// console.log(jsuser["email"]);        //(2)
//(2)=> shivrajmohite@gmail.com

// console.log(jsuser.full name);       //(3) [you can't access full name with this syntax]
//(3)=> syntax error

// console.log(jsuser["full name"]);    //(4)
//(4)=> shivraj mohite

// console.log(typeof jsuser.mySym);      //(5)
//(5)=> string        (it should be symbol)

// console.log(jsuser[mySym]);           //(6)
//(6)=> key1

// console.log(typeof jsuser.mySym);    //(7){jheva mSym la....[mySym] madhe convert kela tya nantr}          
//(7)=> undefined

jsuser.email = "shivrajchatgpt@google.com"    //{
// Object.freeze(jsuser)    //(after this no changes cane be done)                            
jsuser.email = "shivrajyoutube@gmail.com"           // (8)
// console.log(jsuser);                                        }
// (8)=>
//     {
//   name: 'shivraj',
//   'full name': 'shivraj mohite',
//   age: 18,
//   location: 'Maharashtra',
//   email: 'shivrajchatgpt@google.com',
//   isloggedIn: 'false',
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'key1'
// }

// console.log(jsuser);            //(9)
// (9)=> {
//   name: 'shivraj',
//   'full name': 'shivraj mohite',
//   age: 18,
//   mySym: 'key1',
//   location: 'Maharashtra',
//   email: 'shivrajchatgpt@google.com',
//   isloggedIn: 'false',
//   lastLoginDays: [ 'Monday', 'Saturday' ]
// }

// jsuser.greeting = function(){
//     console.log("Hello JS user");
// }
// jsuser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
//     console.log(jsuser.greeting());
//     console.log(jsuser.greetingTwo());

jsuser.greeting = function(){
    console.log("Hello JS user");
}

jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
// => Hello JS user
// undefined
// Hello JS user, shivraj
// undefined



