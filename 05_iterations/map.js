const nums =[1,2,3,4,5,6,7,8,9,10]
// for (const element of nums) {
//     console.log(element);
    
// }
// for (const key in nums) {
//     console.log(nums[key]);
    
// }
// nums.forEach(
//     (element) => console.log(element)
// )
// const h =nums.filter(
//     (element) => element % 2 === 0
// )
// console.log(h);
// const h=nums.map(
//     (element) => {
//         return element +10
//     }
// )
// console.log(h);

const newnum= nums
.map((num)=>num *10)
.map((num)=>num+1)
.filter((num)=>num>20);
console.log(newnum);