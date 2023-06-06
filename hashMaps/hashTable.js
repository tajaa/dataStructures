//Separate Chaining
// store in array if collision
//Set
//1.Accepts a key and a value pair
//2. hashes the key
//3.sores the key value par in the hash table array via separate
//chaining (meaning in a nestested structure)

//GET
//1. Accepts a a key
//2. hashes the key
//3. Retrieves the key-value pair in the hash table
//4. If the key isn't found, returns 'undefined'

//Hash table Class

class HashTable {
  constructor(size = 53) {
    //default prime# size
    //for how large hash table should be
    this.keyMap = new Array(size);
    //store all of day this.keyMap
  }
  _hash(key) {
    //we no longer have to pass in the size of the hash table
    //because its in a class so we can access keymap
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    //if unoccupied, set index to be empty array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    //if above doesn't run, just push new array to the parent
    //array of that index
    this.keyMap[index].push([key, value]);
    // return index;
  }
  get(key) {
    let index = this._hash(key);
    //if you find something at index then
    //
    if (this.keyMap[index]) {
      //   return this.keyMap[index];
      //this below occurs once we've foudn the right data
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  values() {
    let valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        // console.log(this.keyMap[i]);
        //this second for loop loops WITHIN the subarray
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            //if it doesn't already include the duplicate value then
            //push this in below
            valuesArray.push(this.keyMap[i][j][1]);
          }
          //for each item in keymap of i of j get 2nd e
        }
      }
    }
    return valuesArray;
  }
  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }
}

let ht = new HashTable(17);
// console.log(ht.set("hello world", "Goodbye"));
// ht.set("hello world", "goodbye");
// ht.set("dogs", "are cool");
// ht.set("cats are", "fine");
// ht.set("i love", "pizza");
// console.log(ht);
// ht.set("hi","bye");
// ht.set("french""fries")

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");
ht.set("violet", "#DDA0DD");

// console.log(ht.get("yellow"));
// console.log(ht.get("sldfkj"));
// console.log(ht.get("plum"));
// console.log(ht.get("maroon"));
// console.log(ht);
// ht.set("are we done?", "yes");
// console.log(ht.get("are we done?"));

//basics of Get:
//we hash the key provided to get an index then we
//check if the key map contains anythign at that index
//if not, return undefined
//otherwise, check over every item in that index loop over and check
//to see if what we're looking for
//is your key [i][0] = to my key? if so, return the value
console.log(ht.values());
console.log(ht.keys());

ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
