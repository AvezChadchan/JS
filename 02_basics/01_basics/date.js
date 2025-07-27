// let myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log("Todays date is: " + myDate.toDateString());
// console.log("Current time is: "+myDate.toTimeString());
// console.log("Current date and time is: " + myDate.toLocaleString());
// console.log("Current date is: " + myDate.getDate());
// console.log("Current month is: " + (myDate.getMonth() + 1)); // Months are zero-indexed
// console.log("Current year is: " + myDate.getFullYear());
// console.log("Current day is: " + myDate.getDay()); // 0-6 (Sunday-Saturday)
// console.log(typeof myDate);

let myDate2 = new Date(2025,2,13);
console.log(myDate2.toDateString());
console.log(myDate2.toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
