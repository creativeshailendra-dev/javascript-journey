

// Introduction of Array

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple "];
console.log(fruits);

let numbers = [50, 65, 75, 85, 95];
console.log(numbers);


let booleanValues = [true, false, true, false];
console.log(booleanValues);

let mixedArray = ["Hello", 100, true, null, undefined];
console.log(mixedArray);

// let colors = "Red", "Green", "Blue", "Yellow", "Purple"];  isko sahi karo

let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
console.log(colors);


// Array Index

let color1 = ["Red", "Green", "Blue"];
console.log(color1[1]); // Green

let cities = ["Delhi", "Mumbai", "Lucknow", "Gorakhpur"];
console.log(cities[2]);

let marks = [45, 67, 89, 91];
console.log(marks[0], marks[3]); // 45 91

let students = ["Rahul", "Sohan", "Mohan", "Rohit"];
console.log(students[2]);

// Mini Challenge

let lag = ["HTML", "CSS", "JavaScript", "Python", "C++"];
console.log(lag[0]); // HTML
console.log(lag[2]); // JavaScript
console.log(lag[4]); // C++
console.log(lag[0], lag[2], lag[4]); // HTML JavaScript C++ teeno ek sath


// Updating Array Values

let fruit1 = ["Apple", "Mango", "Banana"];
fruit1[1] = "Orange";
console.log(fruit1);

let mark1 = [50, 80, 90];
mark1[0] = 100;
console.log(mark1);

let user = ["Rahul", "Samir", "Suraj"];
user[2] = "Shailendra";
console.log(user);

// Array length Property

let arr = ["HTML", "CSS", "JavaScript"];
console.log(arr.length); // 3

let empty = [];
console.log(empty.length); // 0

let colors1 = ["Red", "Green", "White", "Blue"];
console.log(colors1[colors1.length - 1]); // Blue    * yahi trick industry me last element nikalne me help karta hai.





// इस चैप्टर में हम सीखेंगे 
// 1. push ()
// 2. pop ()
// 3. unshift ()
// 4. shift ()
// ye char method har JavaScript Developer ko roz istemal karne padte hai.




// Method # 1 : push ()

console.log("02_basic_array_method.js Loaded");

let fruits1 = ["Apple", "Mango"];
fruits1.push("Banana");
console.log(fruits1);

let mark = [50, 60];
mark.push(70, 80);
console.log(mark);

let address = [];
address.push("Shailendra", 19, "Gorakhpur");
console.log(address);

let students1 = [];
students1.push("Shekhar", "Rohit", "Niraj", "Rekha", "Surekha");
console.log(students1);
console.log(students1.length);  // 5


let arr2 = [];
console.log(arr2.push("JavaScript course"));
console.log(arr2);


// Method # 2 : pop ()

let fruits2 = ["Apple", "Mango", "Banana"];
fruits2.pop();
console.log(fruits2); //(2) ['Apple', 'Mango']

let fruits4 = ["Apple", "Mango", "Banana"];
let removed = fruits4.pop();
console.log(fruits4); // ['Apple', 'Mango']
console.log(removed); // Banana  yani remove items dikhayega

let number2 = [90];
number2.pop();
console.log(number2); // []

let empty1 = [];
empty1.pop();
console.log(empty1); // []
console.log(empty1.pop()); // undefined

// Method # 3 : unshift ()

let fruits5 = ["Mango", "Banana", "Orange"];
fruits5.unshift("Guava");
console.log(fruits5); // ['Guava', 'Mango', 'Banana', 'Orange']

fruits5.unshift("Pineapple", "Apple", "Lemon");
console.log(fruits5);  // ['Pineapple', 'Apple', 'Lemon', 'Guava', 'Mango', 'Banana', 'Orange']

let fruits6 = ["Apple", "Mango"];
let result = fruits6.unshift("Orange");
console.log(result); // 3
console.log(fruits6); // ['Orange', 'Apple', 'Mango']

// Method # 4 : shift ()

let fruits7 = ["Orange", "Lemon", "Pineapple"];
let removed1 = fruits7.shift();
console.log(fruits7); // ['Lemon', 'Pineapple']
console.log(removed1); //  Orange  yah hataya gya value return karega.

let fruits8 = [];
fruits8.shift();
console.log(fruits8); // []




// ###############   Array Manipulation   ################# 

// Is chapte ka sabse IMP Method hai splice() jo real project me bahut jada use hota hai 

// Method # 01 : concat();

let arr1 = ["HTML", "CSS"];
let arr3 = ["JavaScript", "React"];
let result1 = arr1.concat(arr3);
console.log(result1); //  ['HTML', 'CSS', 'JavaScript', 'React']

let a = [1, 2];
let b = [3, 4];
let result2 = a.concat(b);
console.log(result2); // [1, 2, 3, 4]

let c = [5, 6];
let result3 = a.concat(b, c);
console.log(result3); // [1, 2, 3, 4, 5, 6]

console.log(a, b, c); // (2) [1, 2] (2) [3, 4] (2) [5, 6]  yani koi nahi badla hai.


// Method # 2 : join ()

let arr4 = ["Apple", "Boy", 20];
console.log(arr4.join()); // Apple,Boy,20
console.log(arr4); // ['Apple', 'Boy', 20]

let colors2 = ["Red", "Green", "Black"];
console.log(colors2.join("-")); // Red-Green-Black

let id = [12, 25, 46];
console.log(id.join(" *")); // 12 *25 *46 yani yah space aur kuch sepretor se seprate karke string me badal deta hai.

let date = [10, "Aug", 2026];
console.log(date.join("-")); // 10-Aug-2026

console.log(arr4); // array
console.log(colors2); // array
console.log(date); // array

// Method # 3 : slice()

let arr5 = ['mango', 'orange', 'apple', 'guva'];
console.log(arr5.slice(1, 3)); // ['orange', 'apple']

let num = [20, 30, 40];
console.log(num.slice(2)); // [40]
console.log(num.slice(0)); // [20, 30, 40]
console.log(num.slice()); // [20, 30, 40]
console.log(arr5); // ?
console.log(num); // ?

let char = ["a", "b", "c", "d"];
console.log(char.slice(-2)); // ['c', 'd'] YANI YAH NEGATIVE VALUE BHI SUPPORT KARTA HAI.


// Method # 4 : splice () *MIP

let frut = ["Mango", "Banana", "Orange"];
frut.splice(1, 2);
console.log(frut); // ['Mango']

frut.splice(1, 2, "Pineapple");
console.log(frut); // ['Mango', 'Pineapple']

let box = ["a1", "c1", "d1"];
box.splice(1, 0, "b1");
console.log(box); //  ['a1', 'b1', 'c1', 'd1']

let box2 = ["x", "y", "z"];
box2.splice(1, 1, "Ji Mai HU");
console.log(box2); // ['x', 'Ji Mai HU', 'z']

let banks = ["HDFC", "SBI", "UP Baroda"];
let remove = banks.splice(1, 1);
console.log(remove); // ['SBI'] yani delete items


let num3 = [20, 25, 30];
num3.splice(2, 0, 45);
console.log(num3); //  [20, 25, 45, 30]

// Method # 5 : fill ()

let arr6 = [20, 30, 40];
arr6.fill("X");
console.log(arr6); // ['X', 'X', 'X']

let arr7 = [20, 30, 40];
arr7.fill("I", 1, 2);
console.log(arr7); // [20, 'I', 40]

// Method # 6 : copyWithin ();

let arr8 = ["A", "B", "C", "D"];
arr8.copyWithin(2, 0);
console.log(arr8); // ['A', 'B', 'A', 'B']

let arr9 = [1, 2, 3, 4, 5];
arr9.copyWithin(3, 0, 2);
console.log(arr9); // [1, 2, 3, 1, 2]

let arr10 = ["HTML", "CSS", "JS"];
arr10.copyWithin(1, 0, 1);
console.log(arr10); // ['HTML', 'HTML', 'JS']


// ###############   Searching Methods   ################# 


// Method # 1 : includes()

let names = ["Geeta", "Seeta", "Ram"];
console.log(names.includes("Geeta")); // true
console.log(names.includes("Ravan")); // false

let num2 = [20, 30, 40];
console.log(num2.includes(20, 1)); // false kyoki index 1 se start karega

let arr11 = ["HTML", "CSS", "JS"];
let result4 = arr11.includes("CSS");
console.log(result4); // true
console.log(arr11); // ["HTML", "CSS", "JS"]


// Method # 2 : indexOf ()

let arr12 = ["Mango", "Banana", "Orange"];
console.log(arr12.indexOf("Banana")); // 1
console.log(arr12.indexOf("Apple")); // -1  iska matlab array me o value hai hi nahi.

let arr13 = ["Saurabh", "Umesh", "Balindar"];
console.log(arr13.indexOf("Saurabh")); // 0
console.log(arr13.indexOf("Saurabh", 1)); // -1

let arr14 = ["a", "b", "c", "d"];
console.log(arr14.indexOf("c")); // 2


// Method # 3 : lastIndexOf ()

let arr15 = ["A", "B", "C", "D", "A"];
console.log(arr15.lastIndexOf("A")); // 4

let fruit9 = ["Apple", "Mango", "Banana"];
console.log(fruit9.lastIndexOf("Orange")); // -1

let arr17 = ["HTML", "CSS", "JS", "CSS"];
console.log(arr17.lastIndexOf("CSS")); // 3
console.log(arr17.indexOf("CSS")); // 1

let arr18 = ["A", "B", "C"];
let result5 = arr18.lastIndexOf("B");
console.log(result5); // 1
console.log(arr18);  // ["A", "B", "C"]


// Method # 4 : find()

let marks2 = [45, 60, 75, 82, 90];
let result6 = marks2.find(mark => mark > 80);
console.log(result6); // 82 Grater than 80

let numbers2 = [2, 4, 6, 7, 8];
let result7 = numbers2.find(num => num % 2 !== 0);
console.log(result7); // 7 ODD Number

let ages = [10, 15, 18, 22];
console.log(ages.find(age => age >= 18)); // 18 

let arr19 = [10, 20, 30];
console.log(arr19.find(num => num > 100)); // undefined कोई भी Number Condition पूरी नहीं कर रहा।

let users = [
  { name: "Rahul", age: 18 },
  { name: "Aman", age: 22 },
  { name: "Sohan", age: 20 }
];

let result8 = users.find(user => user.age > 20);
console.log(result8);
/*
 Output:
  {
    "name": "Aman",
    "age": 22
  }  
 💡 यही Real Projects में सबसे ज़्यादा Use होता है।  
 
📜 Rules
पहला Matching Element Return करता है।
कोई Match नहीं मिला तो undefined Return करता है।
Original Array Modify नहीं करता।
Condition के आधार पर Search करता है।
Search मिलते ही रुक जाता है।

*/



// Method # 5 : findIndex()

/* findIndex() एक JavaScript Array Method है, 
जो Condition को पूरा करने वाले पहले Element का Index Return करता है।
अगर कोई Element नहीं मिलता, तो -1 Return करता है। 
*/

let marks3 = [45, 60, 75, 82, 90];
let result9 = marks3.findIndex(mark => mark > 80);
console.log(result9); // 3

let numbers3 = [2, 4, 6, 7, 8];
let result10 = numbers3.findIndex(num => num % 2 !== 0);
console.log(result10); // 3

let ages1 = [10, 15, 18, 22];
console.log(ages1.findIndex(age => age >= 18)); // 2

let arr20 = [10, 20, 30];
console.log(arr20.findIndex(num => num > 100)); // -1

let users1 = [
  { name: "Rahul", age: 18 },
  { name: "Aman", age: 22 },
  { name: "Sohan", age: 20 }
];
let result11 = users.findIndex(user => user.age > 20);
console.log(result11); // 1

/*
findIndex()
JavaScript Array Method है।
Condition के आधार पर Search करता है।
पहला Matching Element का Index Return करता है।
Match नहीं मिला तो -1 Return करता है।
Original Array Modify नहीं करता।
Objects Search करने में बहुत उपयोगी है।
Function और Arrow Function सीखने के बाद इसे दोबारा Detail में पढ़ेंगे।
*/



// ###############   Chapter 5: Sorting Methods   ################# 

// Method # 1 : sort ()

let fruits9 = ["Mango", "Apple", "Banana"];
fruits9.sort();
console.log(fruits9)

let names2 = ["Rohit", "Aman", "Rahul", "Sohan"];
names2.sort();
console.log(names2); // ['Aman', 'Rahul', 'Rohit', 'Sohan']

let numbers4 = [10, 2, 30, 5];
numbers4.sort((a, b) => a - b);
console.log(numbers4); // [2, 5, 10, 30] Ascending order

let numbers5 = [10, 2, 30, 5];
numbers5.sort((a, b) => b - a);
console.log(numbers5); // [30, 10, 5, 2]  Descending Order

let fruits10 = ["Mango", "Apple", "Banana"];
let result12 = fruits10.sort();
console.log(result12); // ['Apple', 'Banana', 'Mango']
console.log(fruits10); // ['Apple', 'Banana', 'Mango']

// Method # 2 : reverse()

let fruits11 = ["Apple", "Banana", "Mango"];
fruits11.reverse();
console.log(fruits11); // ['Mango', 'Banana', 'Apple']

let numbers6 = [1, 2, 3, 4, 5];
numbers6.reverse();
console.log(numbers6); // [5, 4, 3, 2, 1]

let arr21 = ["A", "B", "C"];
let result13 = arr21.reverse();
console.log(result13); // ['C', 'B', 'A']
console.log(arr21);  // ['C', 'B', 'A']
// kyoki reverse ne original array ko hi badal diya (Mutable Method)

let numbers7 = [10, 2, 30, 5];
numbers7.sort((a, b) => a - b);
numbers7.reverse();
console.log(numbers7); //  [30, 10, 5, 2]


// Method # 3 : toSorted ()

// sort() original array ko badlta hai, lekin toSorted () original array ko nahi badlta hai.

let fruits12 = ["Mango", "Apple", "Banana"];
let sortedFruits = fruits12.toSorted();
console.log(sortedFruits); //  ['Apple', 'Banana', 'Mango']
console.log(fruits12); // ['Mango', 'Apple', 'Banana']

let numbers8 = [10, 2, 30, 5];
let result14 = numbers8.toSorted((a, b) => a - b);
console.log(result14); // [2, 5, 10, 30]
console.log(numbers8); // [10, 2, 30, 5]
// Original array untouched hai

let numbers9 = [10, 2, 30, 5];
let result15 = numbers9.toSorted((a, b) => b - a);
console.log(result15); // [30, 10, 5, 2]


// Method # 4 : toReversed ()
// New Reversed Array deta hai.

let fruits14 = ["Mango", "Apple", "Banana"];
let result16 = fruits14.toReversed();
console.log(result16); // ['Banana', 'Apple', 'Mango']
console.log(fruits14); // ['Mango', 'Apple', 'Banana']
// yani yah new array return kar rha hai aur origina safe kar rha hai.

let numbers10 = [10, 20, 30, 40, 50];
let result17 = numbers10.toReversed();
console.log(result17); // [50, 40, 30, 20, 10]
console.log(numbers10); // [10, 20, 30, 40, 50]

let arr22 = ["A", "B", "C"];
let result18 = arr22.reverse();
console.log(result18); // ['C', 'B', 'A']
console.log(arr22); // ['C', 'B', 'A']
// kyoki reverse ne original array badal diya



// ###############   Chapter 6: Array Transformation & Iteration   ################# 
// array ke har element ke sath ststematically kam kaise kiya jata hai.

// Method # 1 : forEach ()

let fruits15 = ["Mango", "Apple", "Banana"];

fruits15.forEach(function (fruit) {
  console.log(fruit);
});


let numbers12 = [5, 10, 15, 20];
numbers12.forEach(function (number) {
  console.log(number * 2);
});


let colors3 = ["Red", "Green", "Blue"];
colors3.forEach(function (color, index) {
  console.log(index, color);
});
// 0 'Red' is types se

let numbers13 = [2, 5, 8, 11, 14];
numbers13.forEach(function (evenNumber) {
  if (evenNumber % 2 === 0) {
    console.log(evenNumber);
  }
});
// only even number print karega

let prices = [100, 250, 500, 750];
prices.forEach(function (price) {
  console.log("Porduct price :", price);
});
// Product price : 100 is tarah se dikhega

let numbers14 = [10, 20, 30];
let result19 = numbers14.forEach(function (number) {
  return number * 2;
});
console.log(result19); // undefined kyoki forEach method new array nahi return karta hai.

// Method # 2 : map()
// yah her element per kam karke new array return karta hai

let numbers15 = [5, 10, 15, 20];
let result20 = numbers15.map(function (number) {
  return number * 2;
});
console.log(numbers15); // [5, 10, 15, 20]
console.log(result20); // [10, 20, 30, 40] // thats main logic for this method

let numbers16 = [10, 20, 30];
let result21 = numbers16.map(function (number) {
  return number + 100;
});
console.log(result21); // [110, 120, 130]

// Logicial
let names3 = ["Aman", "Rahul", "Ravi"];
let result22 = names3.map(function (name) {
  return "Hello, " + name;
});
console.log(result22); // ['Hello, Aman', 'Hello, Rahul', 'Hello, Ravi']

let users2 = [
  { name: "Aman", age: 20 },
  { name: "Rahul", age: 22 },
  { name: "Ravi", age: 19 }
];
let result23 = users2.map(function (user) {
  return user.name;
});
console.log(result23); // ['Aman', 'Rahul', 'Ravi']

let result24 = users2.map(function (user) {
  return user.age + 1;
});
console.log(result24); // [21, 23, 20] // yah users ke age me 1 add karke ek new array bana rha hai.

let numbers17 = [1, 2, 3];
let res3 = numbers17.map(function (number) {
  return number;
});
console.log(res3); // [1, 2, 3]


// ###############   Chapter 7 : Array Filtering   #################
// filter () sirf un elements ko chunkar ek new array banata hai jo di gyi condition ko satisfy karta hai.

// Method # : filter ()
// syntax
/*

let newArray = array.filter(function(elemnt){
return condition;
});

*/
// yah elements ko condition ke adhar per select karta hai jabki map trasform karta hai. IMP line



let numbers19 = [5, 10, 15, 25, 30];
let result25 = numbers19.filter(function (number) {
  return number > 15;
});
console.log(result25);


let numbers18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenumbers = numbers18.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenumbers);


let ages2 = [12, 17, 18, 20, 25];
let result26 = ages2.filter(function (age) {
  return age >= 18;

});
console.log(result26);


let users3 = [
  { name: "Aman", age: 20 },
  { name: "Rahul", age: 16 },
  { name: "Rohan", age: 22 },
  { name: "Sohan", age: 15 }
];

let adults = users3.filter(function (user) {
  return user.age >= 18;
});
console.log(adults); // [{…}, {…}]


let product = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 800 },
  { name: "Phone", price: 20000 },
  { name: "Keyboard", price: 1500 }
];

let filtProduct = product.filter(function (fit) {
  return fit.price > 5000;
});
console.log(filtProduct); // [{…}, {…}]


let numbers20 = [10, 20, 30];
let result27 = numbers20.filter(function (number) {
  return number;
});
console.log(result27); // [10, 20, 30]


// ###############   Chapter 8 : Reduction   #################
// pure array ki kai values ko milakar ek final value banana.
/* syntax;
let result = array.reduce(function(accumulator, currentValue){
return newValue;
}, initialValue) ;
*/

/* 
accumulator - ab tak ka jma hua result
currentValue - abhi jis element par kam ho rha hai.
intialValue - shuruaat ki value/
*/

let numbers21 = [10, 20, 30, 40];
let totalN = numbers21.reduce(function (sum, number) {
  return sum + number;
}, 0);
console.log(totalN); // 100



let numbers22 = [5, 10, 15, 20];
let totalN2 = numbers22.reduce(function (total, number) {
  return total + number;
}, 0);
console.log(totalN2); // 50



let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Mouse", price: 1000 }
];

let totalPrice = products.reduce(function (price, product) {
  return price + product.price;
}, 0);
console.log(totalPrice); // 71000


let numbers23 = [10, 20, 30];
let total = numbers23.reduce(function (sum, number) {
  return sum + number;
}, 100);
console.log(total); // 160 kyoki initial value 100 hai,

// Logicial qus
let numbers24 = [15, 40, 10, 80];
let maxiumN = numbers24.reduce(function (max, number) {
  if (number > max) {
    return number;
  }
  return max;
}, numbers24[0]);
console.log(maxiumN); // 80


// ###########     Chapter 9 : Advanced Array Concepts       ############


// Method 01 : some()

let numbers25 = [10, 20, 30, 40, 50];
let result28 = numbers25.some(function (number) {
  return number > 45;
});
console.log(result28); // true


let numbers26 = [5, 10, 15, -2, 20];
let result29 = numbers26.some(function (number) {
  return number < 0;
});
console.log(result29); // true


let ages3 = [12, 15, 16, 21];
let result30 = ages3.some(function (age) {
  return age > 18;
});
console.log(result30); // true


let users4 = [
  { name: "Aman", age: 15 },
  { name: "Rahul", age: 16 },
  { name: "Ravi", age: 17 }
];

let result31 = users4.some(function (user) {
  return user.age > 18;
});
console.log(result31); // false


let products2 = [
  { name: "Laptop", stock: 0 },
  { name: "Phone", stock: 0 },
  { name: "Mouse", stock: 5 }
];

let result32 = products2.some(function (product) {
  return product.stock > 0;
});
console.log(result32); // true


let numbers27 = [5, 10, 15];
let result33 = numbers27.some(function (number) {
  return number > 100;
});
console.log(result33); // false 
/*  why: computer sabhi numbers ko diye condition ke adhar par check karke result deta hai chunki 100 se bda 
number nahi hai isliye output: false

IMP - 
some()
ek ek element check karta hai,
kya koi ek condition sastisfy karta hai?,
yes - true
NO - false

teeno ko sath rakhiye 
map() - badlo
filter() - chanto
some() - kya koi ek hai?
 */


// Method #2 : every()
// every () check karta hai ki array ke sabhi elements given condition ko satisfy karte hai ya nahi.

/* syntax: let rexul = array.every(function(element){
return condition;
});
*/

// sabhi pass - true 
// ek bhi fail - false

// some() - koi ek?
// every() - sabhi?

let numbers28 = [10, 20, 30, 40];
let result34 = numbers28.every(function (number) {
  return number > 5;
});
console.log(result34); // true



let numbers29 = [2, 4, 6, 8, 10];
let result35 = numbers29.every(function (number) {
  return number % 2 === 0;
});
console.log(result35); // true



let ages4 = [20, 25, 17, 30];
let result36 = ages4.every(function (age) {
  return age >= 18;
});
console.log(result36); // false



let users5 = [
  { name: "Aman", active: true },
  { name: "Rahul", active: true },
  { name: "Prabhu", active: true }
];

let result37 = users5.every(function (user) {
  return user.active;
});
console.log(result37); // true



let products3 = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 2 },
  { name: "Mouse", stock: 0 }
];

let result38 = products3.every(function (product) {
  return product.stock
});
console.log(result38); // false


let numbers30 = [5, 10, 15, 20];
let result39 = numbers30.some(function (number) {
  return number > 18;
});

let result40 = numbers30.every(function (number) {
  return number > 18;
});

console.log(result39); // true // ek bhi mila to true 
console.log(result40); // false  // sab hone chahiye 



// Method #3 : flat()

// flat () Nested array ko specified depth tak flatten karke new array return karta hai.
/* 
syntax:
let result = array.flat(depth);
arr.flat(1); - 1 level
arr.flat(2); - 2 level ---- infinity
*/

let arr23 = [1, [2, 3], 4];
let result41 = arr23.flat();
console.log(result41); // [1, 2, 3, 4]

let arr24 = [[1, 2], [3, 4], [5, 6]];
let result42 = arr24.flat();
console.log(result42); // [1, 2, 3, 4, 5, 6]

let arr25 = [1, [2, [3, 4]], 5]; 3
let result43 = arr25.flat(2);

console.log(arr25);  // [1, Array(2), 5]
console.log(arr25.flat()); //  [1, 2, Array(2), 5] // isme by default depth 1 rahta hai. jo ek hi level flatten karta hai.
console.log(result43); // [1, 2, 3, 4, 5] // 2 level flatten ke liye depth 2 ka use karte hai.

let categories = [
  ["Laptop", "Phone"],
  ["Mouse", "Keyboard"],
  ["Monitor", "Printer"]
];
let result44 = categories.flat();
console.log(result44); // ['Laptop', 'Phone', 'Mouse', 'Keyboard', 'Monitor', 'Printer']

let arr26 = [1, [2, [3, [4]]]];
console.log(arr26); // [1, Array(2)]

/*
map() - Transform
filter() - Select
flat() - Flatten
*/

// Method # 4 : flatMap () 

// flatMap() array ke har element ko transform karta hai aur resulting array ko ek level tak flattern karke new array deta hai.
/*
synatax:
let result = numbers.flatMap(function(number){
return newValue;
});
                                                                                                                                                               
agar callback se value return hota hai 

let result = array.flatMap(function(element){
return [value1, value2];
});
*/

let numbers31 = [1, 2, 3];
let result45 = numbers31.flatMap(function (number) {
  return [number, number * 2];
});
console.log(result45); //  [1, 2, 2, 4, 3, 6]

let numbers32 = [1, 2, 3];
let result46 = numbers32.map(function (number) {
  return [number, number * 10];
});
console.log(result46); // [1, 10], [2, 20], [3, 30]

let result47 = numbers32.flatMap(function (number) {
  return [number, number * 10];
});
console.log(result47); // [1, 10, 2, 20, 3, 30]

let users6 = [
  { name: "Aman", skills: ["HTML", "CSS"] },
  { name: "Rahul", skills: ["JavaScript", "React"] }
];
let result48 = users6.flatMap(function (user) {
  return user.skills;
});
console.log(result48); // ['HTML', 'CSS', 'JavaScript', 'React']

let sentences = [
  "I love coding", "JavaScript is powerful"
];
let result49 = sentences.flatMap(function (word) {
  return word.split(" ");
});
console.log(result49); // ['I', 'love', 'coding', 'JavaScript', 'is', 'powerful']

let numbers33 = [1, 2, 3];
let result50 = numbers33.flatMap(function (number) {
  return [number * 2];
});
console.log(result50); // [2, 4, 6]


// Next Method # VIP : Array.isArray()

// Yah check karta hai ki di gai value Array hai ya nahi
/*
Syntax:
Array.isArrayI(value);
returns boolean always
*/
// yah validation me help karta hai

let data = [10, 20, 30];
console.log(Array.isArray(data)); // true

console.log(Array.isArray("Hello")); // false
console.log(Array.isArray(100)); // false
console.log(Array.isArray(true));  // false
console.log(Array.isArray({}));  // false
console.log(Array.isArray([]));  // true


let users7 = {
  name: "Aman",
  age: 20
};

console.log(Array.isArray(users7)); // false


// MExt MEthod : Array.form();
// syntax: Array.from(value);
// yah iterable array likes value se new array create / convert karta hai.

let naam = "Aman";
let ans = Array.from(naam);

console.log(ans); //  ['A', 'm', 'a', 'n']

// IMP Set data ko Array me badlna

let numbers34 = new Set([10, 20, 30]);
let result51 = Array.from(numbers);
console.log(result);

// Array-like Data 
let elements = Array.from(
  document.querySelectorAll("div")
);
console.log(elements); // []

// Array.from() ka dusra argument bhi ho sakta hai
let numbers35 = Array.from([1, 2, 3],
  function (number) {
    return number * 2;
  });
console.log(numbers35); //  [2, 4, 6]

let numbers37 = [1, 2, 3, 4];
let result52 = Array.from([1, 2, 3, 4], // ya hum seedhe numbers37 bhi likh sakte hai
  function (number) {
    return number * 2;
  });
console.log(result52);


// 5 Element Array

let numbrs36 = Array.from({ length: 5 });

console.log(numbrs36); // [undefined, undefined, undefined, undefined, undefined]

console.log(Array.isArray(result51)); // true

let numbes38 = Array.from(
  { length: 5 },
  function (value, index) {
    return index + 1;
  }
);
console.log(numbes38); // [1, 2, 3, 4, 5]

// yah iterable ya arrayl like value se new array create karta hai




/*

Questions:  

Round 1 — Variables & Data Types

Ek variable city banao jisme apne sheher ka naam store karo, aur console.log se print karo.
Ye batao in mein se konsa data type hai:
javascript
   let a = 25;
   let b = "25";
   let c = true;
   let d = 25.5;
typeof operator use karke ye check karo ki b ka data type kya hai. (Hint: console.log(typeof b))

Round 2 — String Methods

let name = "  Rahul Sharma  "; — is string ke extra spaces hatao (kaunsa method use karoge?)
let word = "javascript"; — ise poori tarah CAPITAL letters mein convert karo.
let sentence = "I love coding"; — sirf "love" word nikaalo is string se (slice ya substring use karke).
Check karo ki "JavaScript" string mein "Script" word hai ya nahi (true/false batana hai).

Round 3 — Array Methods

let fruits = ["apple", "banana", "mango"]; — is array ke end mein "orange" add karo.
Same array se pehla element ("apple") remove karo.
let numbers = [1, 2, 3, 4, 5]; — is array ko .map() use karke har number ka double banao (naya array: [2,4,6,8,10]).
Same numbers array se sirf even numbers nikaalo .filter() use karke.
numbers array ke sab elements ka sum (jod) nikaalo .reduce() use karke.

*/









































