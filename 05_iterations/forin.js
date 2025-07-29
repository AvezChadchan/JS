const myobj ={
    c: "CPP",
    rb:"ruby",
    swift:"Swift by Apple",
    java:"java by oracle",
    python:"python by google"
}
// console.log(myobj);
for (const i in myobj) {
//    console.log(`${i.toUpperCase()} is the shortcut for: ${myobj[i]}`);  
}


const arr =[1,2,3,4,5,6,7,8,9]
for (const i in arr) {
    // console.log(`Index ${i} has ${arr[i]} value`);   
}

const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

for (const key in map) {
//   console.log(key);  both are not working bcuz map is not iteratable with forin loop
//   console.log(map[key]);
  
}