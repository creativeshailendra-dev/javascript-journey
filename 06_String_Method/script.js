// practice
// 1
let name = "  ShAiLeNdra  ";

console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name);

// 2
let country = "  InDiA  ";

country = country.trim();
country = country.toLowerCase();

console.log(country);

// 3
let area = "  BhAgiPuR  ";

let result = area.trim();

console.log(result);
result = result.toUpperCase();

console.log(result);
console.log(area);

// slice() practice 
let course = "JavaScript";

console.log(course.slice(0, 4));
console.log(course.slice(4));
console.log(course.slice(-6));
console.log(course.slice(-5, -2));
console.log(course.slice(1, -1));
console.log(course.slice(2, 2));

// substring () --> method

let text = "JavaScript";
let word = "Programming";




console.log(text.substring(0, 4)); // last include nahi karta
console.log(text.substring(4));  // start index se pura print karta hai
console.log(word.substring(3, 8)); // start include, end not iclude
console.log(word.substring(-5, 6));  // Negative value ko (0) kar deta hai 
console.log(word.substring(9, 3));  // agar start>end to value swap ho jati hai
console.log(word.substring(5, 5)); // agar same indes to empty string
console.log(word.substring(-6, -2)); // neagative value dono (0,0) jo ki khali string return karega


// replace () --> method


