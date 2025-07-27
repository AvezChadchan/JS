// const myarr= [1, 2, 3, 4, 5,6,7];
// console.log(myarr[0]);
// myarr.push(6);
// myarr.push(7); //adding elements at the end
// console.log(myarr);

// myarr.pop(); //removing the last element
// console.log(myarr);

// myarr.shift(); //removing the first element
// console.log(myarr);
// myarr.unshift(0); //adding an element at the beginning
// console.log(myarr);

// console.log(myarr.includes(3)); //checking if an element exists
// console.log(myarr.indexOf(3)); //finding the index of an element

// console.log("a: "+myarr);
// const newarr = myarr.slice(1, 4); //slicing the array from index 1 to 3
// console.log("b: "+newarr);

// console.log("c: "+myarr.splice(1,4)); //splicing from index 1 to the end
// console.log("d: "+myarr); //myarr is now modified after splice

const marvel_heroes =["Thor","Captain America","Iron Man"];
const dc_heroes =["Batman","Superman","Aquaman"];
// marvel_heroes.push(dc_heroes) //adding dc_heroes array to marvel_heroes
// console.log(marvel_heroes); // marvel_heroes now contains dc_heroes as a single element
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes); //concatenating two arrays
// console.log(all_heroes);

const all_heroes=[...marvel_heroes,...dc_heroes]; //using spread operator to concatenate arrays
console.log(all_heroes);
console.log(typeof all_heroes); //checking the type of all_heroes

const another_array = [1,2,3,4,5,[6,7],8,9,[10,11,[12,13]]]; 

console.log(another_array.flat(Infinity)); //flattening the array to remove nested arrays


console.log(Array.isArray('srk'));
console.log(Array.isArray(marvel_heroes)); //checking if marvel_heroes is an array
console.log(Array.from('hello')); //converting a string to an array
console.log(Array.from({name:"John", age: 30})); //converting an object to an array

let s1=100;
let s2=200;
let s3=300;

const scores =Array.of(s1, s2, s3); //creating an array from variables
console.log(scores); //printing the scores array