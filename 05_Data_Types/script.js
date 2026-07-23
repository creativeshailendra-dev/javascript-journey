// String
let name = "Ajay";
let mobile = "7525830102";
let country = "India";
let city = "Gorakhpur";
let state = "Uttar Pradesh";
let address = "Gorakhpur, Uttar Pradesh, India";
let pincode = "273158";
let email = "chaudharyshailendra684@gmail.com";
let password = "radha@gopal11";

// String likhne ke liye single ya double ya backtick ka use kar sakte ho.

let firstName = "Abhinav";
let lastName = 'Kumar';
let course = `JavaScript`;





// Number
let age = 20;

// Boolean
let isOpen = true;



console.log(name);
console.log(age);
console.log(isOpen);
console.log(mobile);
console.log(country);
console.log(city);
console.log(state);
console.log(address);
console.log(pincode);
console.log(email);
console.log(password);

console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isOpen:", typeof isOpen);
console.log("Type of mobile:", typeof mobile);
console.log("Type of country:", typeof country);
console.log("Type of city:", typeof city);
console.log("Type of state:", typeof state);
console.log("Type of address:", typeof address);
console.log("Type of pincode:", typeof pincode);
console.log("Type of email:", typeof email);
console.log("Type of password:", typeof password);

console.log(firstName, typeof (firstName));
console.log(lastName, typeof (lastName));
console.log(course, typeof (course));


// Question
// नीचे दिए गए Code में कौन-सी Lines सही हैं और कौन-सी Error देंगी?

// let a = "Hello";
// let b = 'Hello';
// let c = `Hello`;

// let d = "I'm Shailendra";
// let e = 'I'm Shailendra';
// let f = `I'm Shailendra`;

// a ✅ / ❌
// b ✅ / ❌
// c ✅ / ❌
// d ✅ / ❌
// e ✅ / ❌
// f ✅ / ❌

// और अगर किसी में Error है, तो क्यों?


// Escape Character
// let g = "I'm Shailendra"; // Error
let g = "I\'m Shailendra"; // ✅


console.log(g);


// Project information Card


let student = "Student Details\n\nName : Shailendra\nCity : Gorakhpur\nCourse : JavaScript";

console.log(student);

console.log("Hello\nWorld");
console.log("A\tB");
console.log("Path: C:\\Users\\Shailendra");


// String Length

let nameLength = "Rahul Kumar";
let n = "";



console.log(nameLength);
console.log("Length of name:", nameLength.length);
console.log("n:", n.length)


// String Indexing इसका मतलब है कि String के हर Character का एक Index होता है। Index 0 से शुरू होता है।

let language = "Developer";

console.log(language.length);
console.log(language[0]); // D
console.log(language[8]); // r
console.log(language[9]); // undefined
console.log(language[language.length - 1]); // r


// String Methods

// UpparCase 
let project = "missonshikar";
const father = "Ramanand Sagar";


console.log(project.toUpperCase());
console.log(father.toUpperCase());
console.log(project);

// LowerCase

let country1 = "DELHI";
let poster = "TAJMAHAL";

poster = poster.toLowerCase();

console.log(country1.toLowerCase());
console.log(country1);
console.log(poster);