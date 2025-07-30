//foreach doesn't return anything/any value  //use filter to get any values
const arr = ['java', 'cpp', 'js', 'ruby', 'dart', 'python']

// arr.forEach(function (item){
//     console.log(item);
// });

//or
// arr.forEach(
//     (item)=>{
//         console.log(item);
//     }
// );
// arr.forEach(
//     element=>console.log(element)  
// );

// (()=>{ //iife
// let arr=['java','cpp','js','ruby','dart','python']
// arr.forEach(element=>console.log(element))
// })();

//or creating function externally and supplying it's reference in the loop

// function printing(item){
//     console.log(item);
// }
// arr.forEach(printing);

// arr.forEach(
//     (item,index,arr)=>{
//         console.log(item,index,arr)
//     }
// )

const MyCoding = [
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
];
const { languageName: langname } = MyCoding;
const { languageFileName: lfilename } = MyCoding;
MyCoding.forEach(
    (item) => {
        console.log(item.languageName, item.languageFileName);
    }
)