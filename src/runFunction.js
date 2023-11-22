const { sumNumberLogN, sumNumberLog1 } = require('./sumNumber');

console.log("Complexidade O(n)")
console.log(sumNumberLogN(10)); // 23
console.log(sumNumberLogN(11)); // 33

console.log("Complexidade O(1)")
console.log(sumNumberLog1(10)); // 23
console.log(sumNumberLog1(11)); // 33