const arr=[1,2,3,4,5]
for (const i of arr) {
    // console.log(i);
}
//difference
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
    
}
const hi = "Hello World!";
for (const i of hi) {
    // console.log(`Each char: ${i}`);   
}

//map doesn't store duplicates

const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');
// console.log(map);
for (const [key,value] of map) {  //de-structuring the map
    // console.log(key,"=> ",value);
}

const myObj = {
    game: "GTA",
    "game2": "GTA2",
    "game3": "GTA3",
}
// console.log(myObj.game);
// console.log(myObj['game2']);
// for (const [key,value] of object) {
//     console.log(key,"=> ",value);  //de-structuring is not workable for object datatype or we can say forof loop 
// }