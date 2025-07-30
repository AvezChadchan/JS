//foreach doesn't return anything/any value  //use filter to get any values

// const coding= ['java','cpp','python','rust','go','dart']

// const val=coding.forEach(  
//     (item) =>{
//    console.log(item)   
//   }
// );
// console.log(val);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const val=nums.filter(
//     (item) => item>4
// );


//filter or foreach
// const val = nums.filter(
//     (item)=>{
//         return item>4;
//     }
// )
//
// const val=[];
// nums.forEach(
//     (item)=>{
//         if (item>4) {
//             val.push(item);
//         }
//     }
// )
// console.log(val);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let mybooks = books.filter(
    // (bk)=> bk.genre === 'Science',
    (bk)=> bk.publish === 1992,
);

mybooks = books.filter(
    (bk) =>{
        return bk.publish>1995 && bk.genre==="History"
    }
)
console.log(mybooks);


