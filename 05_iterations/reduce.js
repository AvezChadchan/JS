// const myNums = [1, 2, 3]
// const total = myNums.reduce(
//     (acc, currval) => (acc + currval), 0);
// console.log(total);

// const total = myNums.reduce(
//     function (acc, currval) {
//         console.log(`acc: ${acc} and current value:${currval}`);
//         return acc + currval;
//     }, 0)
// console.log(total);


const courses = [
    {
        name: 'Course 1',
        price: 10
    },
    {
        name: 'Course 2',
        price: 20
    },
    {
        name: 'Course 3',
        price: 30
    },
    {
        name: 'Course 4',
        price: 40
    },

];
//we can't do anythiing aboout this so just use reduce for adding the prices like for shopping cart,etc
const pricetoPay = courses.reduce(
    (acc, items) => (acc + items.price), 0
)
console.log(pricetoPay);
//we can't do anythiing aboout this so just use reduce for adding the prices for shopping cart,etc
// const pricetoPay =courses.map(
// (course) =>course.price
// )  
