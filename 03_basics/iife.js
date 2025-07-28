//Immediately Invoked Function Expressions (IIFE)

//to remove glboal scope variale's pollution weuse iife ()()

(function hi() {  //named iife the function which has name 
    console.log("Hello World");
})(); //used to execute the fucntion immediately without calling from outside 

(() => {  //unnamed iife
    console.log("DB COnnected");
}
)();

((name)=>{
console.log(`Hello ${name}`);
}
)('srk');