//What makes a good hash? its fast

//example of a slow hash function

function slowHash() {
  for (var i = 0; i < 1000; i++) {
    console.log("everyday I'm hashing");
  }
  return key[0].charCodeAt(0);
}

//Uniform distribution of values

//deterministic

function randomHash(key) {
  return Math.floor(Math.random() * 1000);
}
//this gives us diferent out put everytime for same input

//charCodeAt tells us the utf code
//you could also subtract 96 and you get the alphabet #

let total = 0;
total += "hello".charCodeAt(0) - 96;

//simple hash function

// function hash(key, arrayLen) {
//   let total = 0;
//   let WEIRD_PRIME = 31;
//   for (let char of key) {
//     //loop through chars in key
//     //map a to 1, b to 2, c to 3, etc
//     let value = char.charCodeAt(0) - 96;
//     //add teh char code for each char to that total
//     //then we add each thing in and modulus
//     //by array length and then we start over
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

// console.log(hash("pink", 10));
// console.log(hash("orangered", 10)); //7
// console.log(hash("cyan", 10)); //3

//this isn't constant times
//scales along with the size of the input

//better version

function hash(key, arrayLen) {
  let total = 0;
  let PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash("hello", 13));
