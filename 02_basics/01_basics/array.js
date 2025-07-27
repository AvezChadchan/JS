const bots = ["Avez", "Adil", "Hayy", "SAif", "Mozu", "Shafi"];
for (let i in bots) {
    const element = bots[i];
    console.log(["Bot no. " + i + ":" + element]);
}
console.log(typeof (bots));

const marvel = {
    "Iron Man": "Tony Stark",
    "Captain America": "Steve Rogers",
    "Black Widow": "Natasha Romanoff",
    "Hulk": "Bruce Banner",
    "Thor": "Thor Odinson",
}
for (let i in marvel) {
    console.log(i + " is " + marvel[i]);
}
console.log(typeof marvel);

const myFunc = function () {
    console.log("Hello, World!");
}
console.log(typeof myFunc);
myFunc();

var hi = null
console.log(typeof hi);
