// array
// () :- parenthesis , [] :- Brackets , {} :- curly braces

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[2]);

const Array1 = new Array ('shaktiman', 'singham', 'powerrangers')
const Array2 = ['shiv', 'raj']
// console.log(Array1);
// console.log(Array2);

Array2.push('raju')
// console.log(Array2);
Array2.push('rishi','nikhil')
// console.log(Array2);
Array2.pop('rishi')   //rishi pop kela tri jhale nahi nikhil ch coz (last in/last out)
// console.log(Array2);

Array2.unshift('sheru', 'leru')   // to add element in starting
// console.log(Array2);

Array2.shift()  //to remove starting element
// console.log(Array2);

const Array3 = [2, 5, 4, 8, 9, 10]
// console.log(Array3);
// console.log(Array3.includes(1));
// console.log(Array3.includes(2));

const Array4 = new Array(3, 6, 7, 8, 9)
// console.log(Array4);
// console.log(Array4.includes(1));
// console.log(Array4.includes(3));
// console.log(Array4.join());
// console.log(typeof Array4);

// console.log(Array3);
// console.log(Array3.join());
// console.log(typeof Array3);

const Array5 = Array3.join()
// console.log(Array3);

// console.log(typeof Array3);  // this will be remain object
// console.log(typeof Array5);   // this will change into a string/also compress it

console.log("A ", myArr);
const mya1 = myArr.slice(1, 3)
console.log(mya1);

console.log('B', myArr);

const mya2 = myArr.splice(1, 3)  // it takes range from(1,2,3) and it also removes that element from original array
console.log(mya2);
console.log(myArr);



 












