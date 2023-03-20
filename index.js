// function calcTip(bill){
//     if(bill>=50&&bill<=300){
//         return 15/100*bill
//     }else{
//         return 20/100*bill
//     }
// }

// const bills = [122, 555, 47];
// const tips =  [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(bills, tips, total);

// objects

// const jonas = ["Jonas", "Jonatan", 1999];  jonas[2]

// const jonas = {
//     name:"Jonas",
//     lastName:"Jonatan",
//     birthYear:1999
// }

// // console.log(jonas);
// // console.log(jonas.name);
// // console.log(jonas['lastName']);
// jonas.birthYear = 1980;
// // console.log(jonas);
// jonas.location = "Uzbekistan";
// // console.log(jonas);

// const interestedIn = prompt("What do you want to know about Jonas ? Just write as a given example: name, lastName, birthYear, location");
// // console.log(interestedIn);
// // console.log(jonas.interestedIn);
// // console.log(jonas['interestedIn']);
// // console.log(jonas[interestedIn]);
// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else{
//     console.log("You write wrong answer, just check one more time");
// }

// const jonas = {
//     name:"Jonas",
//     lastName:"Jonatan",
//     birthYear:1999,
//     friends:["Bob", "Tom", "Piter"],
//     hasDriverLicense:true,
//     calcAge:function(){
//         return 2023-this.birthYear
//     }
// }
// console.log(jonas.calcAge());

// // Jonas is a 46 years old. He has a/no driver's license
// const result = `${jonas.name} is ${jonas.calcAge()} years old. He has ${jonas.hasDriverLicense == true ? "a" : " no"} driver's license`;
// console.log(result);

// const jonas = [
//   "Jonas",
//   "Schmedman",
//   2023 - 1990,
//   "teacher",
//   ["Michel", "Bob", "Tom"],
// ];




// for (let i = 0; i < jonas.length; i--) {
//   console.log(jonas[i]);
// }

// const types = [];
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] == "number") {
//     break;
//   } else {
//     types.push(jonas[i]);
//   }
// }

// console.log(types);

// const years = [1999, 2002, 2004, 1995];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages );


// function calcTip(bill){
//   if(bill>=50&&bill<=300){
//     return 15/100*bill
//   }else{
//     return 20/100*bill
//   }
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// for(let i = 0; i<bills.length; i++){
//   tips.push(calcTip(bills[i]));
//   total.push(tips[i] + bills[i])
  
// }


// console.log(tips, bills,  total);

// const calcAvarage = function(arr){
//   let sum = 0;
//   for(let i = 0; i<arr.length; i++){
//     sum+=arr[i]
//   }
//   return sum/arr.length
// }

// console.log(calcAvarage(total));
// console.log(calcAvarage(tips));
const numberOfSeries = +prompt("Nechta serial ko'rdingiz ?");
const lastMovie = prompt("oxirgi ko'rgan serialingiz ?");
const ball = prompt("Nechi baho berasiz ?")
const seriesDB  = {
  count: numberOfSeries,
  series:{lastMovie: ball},
  actors:{},
  genres:[],
  privat:false
} 
