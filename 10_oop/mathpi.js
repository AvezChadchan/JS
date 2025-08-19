const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Math.PI);
// Math.PI =3;
// console.log(Math.PI);

// console.log(descriptor);

const chai={
    name:"Ginger Chai",
    price:100,
    isAvailable:true,
    order:function(){
        console.log('chai not available');
        
    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,"name",{
    writable :false,
    // enumerable:false, //for iteration
    configurable:false,
});
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (const [key,value] of Object.entries(chai)) {
    if (typeof value !=='function') {
        console.log(`${key}:${value}`);
    }
    
}