// var पुराना वेरिएबल्स लिखने का तरीका है। इसे re-declare और re-assign किया जा सकता है।
var name = "John Doe";
var name = "Khusbu"; // Re-declaring the variable 'name' using var
name = "Shudha"; // Re-assigning the variable 'name' using var


// console (output)
console.log("Name:", name); // Output: Shudha


// let नया सुरक्षित वेरिएबल्स लिखने का तरीका है। इसे re-assign किया जा सकता है लेकिन re-declare नहीं किया जा सकता है।
let myFriend = "Priyanshu";
myFriend = "Suraj"; // Re-assigning the variable 'myFriend' using let
// let myFriend = "Balindar"; // Error: Identifier 'myFriend' has already been declared

console.log("My Friend:", myFriend); // Output: Suraj

// const और भी सुरक्षित वेरिएबल्स लिखने का तरीका है। इसे re-assign और re-declare नहीं किया जा सकता है।
// और const का इस्तेमाल हमेशा उन वेरिएबल्स के लिए किया जाता है जिनकी value कभी नहीं बदलनी चाहिए।
const myCountry = "India";
const myVillage = "Gorakhpur";

// myCountry = "USA"; // Error: Assignment to constant variable


console.log("My Country:", myCountry); // Output: India
console.log("My Village:", myVillage); // Output: Gorakhpur