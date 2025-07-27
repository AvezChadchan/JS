const name='Avez';
const repocount=18;

// console.log(name+repocount);
console.log(`My name is ${name} and I have ${repocount} repositories.`);

const gameName= new String("Call of Duty");
console.log(gameName); 
console.log(typeof gameName);
console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.indexOf("C"));
console.log(gameName.charAt(1));
console.log(gameName.slice(-4, 1));
console.log(gameName.substring(0, 4));

console.log(gameName.trim());
console.log(gameName.replace("Call", "Battle"));
console.log(gameName.includes("Duty"));

const hi = function(name){
    return `Hello, ${name}`;
}
console.log(hi('Avez'));