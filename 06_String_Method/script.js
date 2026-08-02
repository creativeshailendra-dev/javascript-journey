
// String Methods

// UpparCase  --> Method <---- #1
let project = "missonshikar";
const father = "Ramanand Sagar";


console.log(project.toUpperCase());
console.log(father.toUpperCase());
console.log(project);

// LowerCase --> Method <---- #2

let country1 = "DELHI";
let poster = "TAJMAHAL";

poster = poster.toLowerCase();

console.log(country1.toLowerCase());
console.log(country1);
console.log(poster);

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

// slice() practice ---->Method <---- #3
let course = "JavaScript";

console.log(course.slice(0, 4));
console.log(course.slice(4));
console.log(course.slice(-6));
console.log(course.slice(-5, -2));
console.log(course.slice(1, -1));
console.log(course.slice(2, 2));

// substring () --> method <---- #4

let text = "JavaScript";
let word = "Programming";


console.log(text.substring(0, 4));      // last include nahi karta
console.log(text.substring(4));         // start index se pura print karta hai
console.log(word.substring(3, 8));      // start include, end not iclude
console.log(word.substring(-5, 6));     // Negative value ko (0) kar deta hai 
console.log(word.substring(9, 3));      // agar start>end to value swap ho jati hai
console.log(word.substring(5, 5));      // agar same indes to empty string
console.log(word.substring(-6, -2));    // neagative value dono (0,0) jo ki khali string return karega





// replace () --> method <---- #5


let msg = "I Love Java";
let city = "Lukhnow";
let sub = "HTML CSS HTML";
let Name = "Shailendra";
let Msg = "Good Morning my dear friends";
let newMsg = Msg.replace("Morning", "Night");
let string = "JavaScript";



console.log(msg.replace("Java", "JavaScript")); // kisi bhi string ko new string me replace karta hai.
console.log(msg);
console.log(city.replace("Lukh", "Kan"));       // kisi ek string se character replace karta hai.
console.log(sub.replace("HTML", "JS"));         // agar same chheze ho jo js use bayne se pahle strign ko replace karta hai
console.log(Name.replace("XYZ", "Pratap"));     // agar aisa strig jo variable me na ho to use as it as dikhata hai bina kuch changinng ke
console.log(Msg);
console.log(newMsg);                            // yah string ko ek variable me store karta hai 
console.log(string.replace("java", "Python"));  // yah nahi change karega balki real output dikhayega kyoki java != Java


// Case Sensitivity

let a = "HTML";
console.log(a.replace("html", "CSS"));
console.log(a.replace("HTML", "CSS"));

let b = "Hello World";
console.log(b.replace("world", "JavaScript"));
console.log(b.replace("World", "JavaScript"));

console.log("".replace("a", "b")); // khali string dega kyoki js khojega ki khali stirng me a ko b kar do lekin kahli string me to kuch hai hi nahi.

console.log("".replace("", "A"));  // yah khali string ko A se replace kar dega kyoki vah khali string hai hi to js new string return karega A.

console.log("Hello".replace("", "A"));
// Empty String ("") String की शुरुआत (index 0) पर Match हो जाती है। इसलिए replace() शुरुआत में नया Text Insert कर देता है।

/* Original

""

↓

Start Position

^

↓

"A" Insert

↓

"A"  "" (Empty String) String की शुरुआत में Match हो जाती है, इसलिए replace() शुरुआत में नया Text Insert कर देता है।
*/

// replaceAll () --> method  <---- #6


// Practice 1
let text1 = "HTML HTML HTML";
console.log(text1.replaceAll("HTML", "CSS"));

// Practice 2
let text2 = "Java Java Java";
console.log(text2.replaceAll("java", "Python"));

// Practice 3
let text3 = "Lucknow Lucknow";
console.log(text3.replaceAll("Luck", "Kan"));

// Practice 4
let text4 = "Good Morning Good Morning";
console.log(text4.replaceAll("Good", "Great"));

// Practice 5
let text5 = "Apple Apple Apple";
let result1 = text5.replaceAll("Apple", "Mango");

console.log(text5);
console.log(result1);



// concat () --> method <---- #7


// Practice 1

let firstName = "Shailendra";
let lastName = "Chaudhary";

console.log(firstName.concat(lastName));
console.log(firstName.concat(" ", lastName));


// Practice 2

let subject1 = "HTML";
let subject2 = "CSS";
let subject3 = "JavaScript";

console.log(subject1.concat(" ", subject2));
console.log(subject1.concat(" ", subject2, " ", subject3));


// Practice 3

let good = "Good";
let morning = "Morning";

let greeting = good.concat(" ", morning);

console.log(good);
console.log(greeting);


// Practice 4

let city1 = "Luck";
let city2 = "now";

console.log(city1.concat(city2));


// Practice 5

let text6 = "Hello";


console.log(text6.concat());


// Practice 6

let company = "Open";
let company2 = "AI";

console.log(company.concat(company2));
console.log(company.concat(" ", company2));

// repeat() --> method <---- #8

// qus 01 : "Hi" ko 5 bar repeat karke print kare

let x = "Hi ";
console.log(x.repeat(5));

let y = "Hi";
console.log(y.repeat(5));

// qus 02 : "*" ko 10 bar

let syb = "*";
console.log(syb.repeat(10));

// qus 03 : "😀" ko 3 bar

let emoji = "😀";
console.log(emoji.repeat(3));

// qus 04: "Java" ko 4 bar repeat karkke console me dikho

let textJ = "Java";
console.log(textJ.repeat(4));

// qus 05 : " "  space ke sath repeat karke oputput observe kare

let textS = " Arjun ";
let text2S = " ";
let text3S = "";

console.log(textS.repeat(5));  // output: Arjun  Arjun  Arjun  Arjun  Arjun
console.log(text2S.repeat(5)); // output: empty stirng
console.log(text3S.repeat(5));  // output: empty string

// qus 06: repeat 0 ka result check kare

let textZ = "Aman";

console.log(textZ.repeat(0)); // empty string


// qus 07: Negative count dekar dekhe ki kya hota hai 

// let NegVal = "Sidharth";

// console.log(NegVal.repeat(-2)); // Uncaught RangeError: Invalid count value: -2

// qus 08: Decimal count dekhar dekhe kya hota hai?

let NegVal = "Sidharth ";

console.log(NegVal.repeat(4.9)); // output: yah decimal ke baad wale number ko ignore kar rha hai aur whole number 4 ke hisab se output de rha hai
//  Sidharth Sidharth Sidharth Sidharth


// qus 09: pahle original string print kare fir repeat wala result print kare dono me antar likhe

let org = "JavaScript ";

let res = org.repeat(10);

console.log(org); // output: JavaScript
console.log(res); // output: JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript

// isme js original value ko change nahi kar rha hai balki new strign return kar rha hai aur sath hi new string ka value store kar rha hai ek variable me



// charAt() --> method <---- #9

// qus 01; "JavaScript" ka pahla character print kare
let str2 = "JavaScript";
console.log(str2.charAt(0));  // output: J

// qus 02: "OpenAI" ka panchwa character print kare 
let str3 = "OpenAI";
console.log(str3.charAt(6)); // output: A

// qus 03: "India" ka aakhri character print kare 
let country2 = "India";
console.log(country2.charAt(4));

// qus 04: "Computer" ka index 3 wala character nikale 
let device = "Computer";
let result3 = device.charAt(3);
console.log(result3);

// qus 05: "HTML" me indexf 20 check kare
let language = "HTML";
console.log(language.charAt(20));  // output: empty string

// qus 06: charAt() aise hi bina indes diye run kare aur result likhe
console.log(language.charAt()); // js charAt( ) ke andar 0 put karke output de rha hai

// qus 07 : kisi string ka last character length-1 se nikale


// qus 08: Negative Index dekar output check kare
console.log(language.charAt(-1)); // output: empty string

// qus 09: Original string aur charAt() ke return value me antar likhe 
let result2 = language.charAt(2);

console.log(language);
console.log(result2); // iska matlab charAt() bhi baki strings ki tarah original value change kiye bina new string return karti hai




// at () -----> Method <---- #10

let text10 = "JavaScript";
console.log(text10.at(0)); // J

let text11 = "OpenAI";
console.log(text11.at(5)); // I

let text12 = "India";
console.log(text12.at(1)); // n

let text13 = "Computer";
console.log(text13.at(5)); // t
console.log(text13.at(20)); // undefined
console.log(text13.at()); // C  kyoki without index at () ko at (0) me badal deta hai

let text14 = "Frontend";
console.log(text14.at(-1)); // d  Neagative index bhi leta hai

let text15 = "";
console.log(text15.at(0)); // undefined
console.log(text15.at(-1)); // uhdefined

// includes() ----> Method  <---- #11

let msg1 = "JavaScript";
console.log(msg1.includes("Java")); // true  yani return boolean

let msg2 = "HTML CSS";
console.log(msg2.includes("CSS")); // true

let msg3 = "Python";
console.log(msg3.includes("Java")); // false

let msg4 = "OpenAI GPT";
console.log(msg4.includes("GPT")); // true

result = msg1.includes("Java");
console.log(result); // true

console.log(msg1.includes("Script", 4)); // true  yani start index se check karega
console.log(msg1.includes("Script", 5)); // false  yani start index se check karega

let msg5 = "";
console.log(msg5.includes("")); // true  khali string me khali string hamesha hoti hai

let msg6 = "Hello World";
let result4 = msg6.includes("Hello", 0);
console.log(msg6); // Hello World
console.log(result4); // true  yani original string change nahi hoti hai aur new string return hoti hai boolean value me

// Qus; includes method aur indexOf method me kya antar hai?
// Answer: includes() method return boolean value karta hai true ya false,
//  jabki indexOf() method return index number karta hai agar string me 
// match ho to aur agar match nahi ho to -1 return karta hai.

// startsWith() ----> Method <---- #12

let msg7 = "JavaScript";
console.log(msg7.startsWith("Java")); // true
console.log(msg7.startsWith("Script")); // false kyoki yah string ke starting me match karega

let msg8 = "Python";
console.log(msg8.startsWith("Java",)); // false kyoki yah string ke starting me match karega

let msg9 = "OpenAI GPT";
console.log(msg9.startsWith("GPT")); // false

console.log(msg7.startsWith("Java", 0)); // true  yani start index se check karega
console.log(msg5.startsWith("")); // true  khali string me khali string hamesha hoti hai

let result5 = msg7.startsWith("Java", 0);
console.log(msg7); // JavaScript
console.log(result5); // true  yani original string change nahi hoti hai aur new string return hoti hai boolean value me    

// Qus: includes() method aur startsWith() method me kya antar hai?
// Answer: includes() method string ke andar kahi bhi match karega aur return boolean value karega true ya false,
// jabki startsWith() method string ke starting me match karega aur return boolean value karega true ya false.

// endsWith() ----> Method  <---- #13

console.log(msg7.endsWith("Script")); // true

let msg10 = "index.html";
console.log(msg10.endsWith(".html")); // true

console.log(msg9.endsWith("GPT")); // true

console.log(msg7.endsWith("Java", 3)); // false  yani end index se check karega 
console.log(msg7.endsWith("Java", 4)); // true  yani end index se check karega 

console.log(msg7.endsWith("script")); // false  yah case sensitive hai

console.log(msg5.endsWith("")); // true  khali string me khali string hamesha hoti hai

console.log(msg7); // JavaScript
let result6 = msg7.endsWith("Script", 10);
console.log(result6);   // true  yani original string change nahi hoti hai aur new string return hoti hai boolean value me

// Qus: startsWith() method aur endsWith() method me kya antar hai?
// Answer: startsWith() method string ke starting me match karega aur return boolean value karega true ya false,
// jabki endsWith() method string ke end me match karega aur return boolean value karega true ya false.

// indexOf() ----> Method <---- #14

console.log(msg7.indexOf("Script")); // 4  yani match hone par index number return karega
console.log(msg7.indexOf("Java")); // 0  
console.log(msg7.indexOf("Python")); // -1  yani match nahi hone par -1 return karega

let msg11 = "Java Java";
console.log(msg11.indexOf("Java")); // 0  yani pahla match check karega aur uska index return karega

console.log(msg11.indexOf("java")); // -1  yah case sensitive hai

console.log(msg5.indexOf("")); // 0  khali string me khali string hamesha hoti hai aur uska index 0 hota hai

let result7 = msg3.indexOf("thon");
console.log(msg3); // Python
console.log(result7); // 2  yani original string change nahi hoti hai aur new string return hoti hai index number me
console.log(typeof result7); // number  yani indexOf() method return type number hai

// Qus: includes() method aur indexOf() method me kya antar hai?
// Answer: includes() method return boolean value karta hai true ya false,
//  jabki indexOf() method return index number karta hai agar string me 
// match ho to aur agar match nahi ho to -1 return karta hai.   

// lastIndexOf() ----> Method <---- #15
let msg12 = "Java Java Java";
console.log(msg12.lastIndexOf("Java")); // 10  yani last match check karega aur uska index return karega

console.log(msg7.lastIndexOf("a")); // 3  yani last match check karega aur uska index return karega
console.log(msg12.lastIndexOf("Java", 9)); // 5  yani last match check karega aur uska index return karega  

console.log(msg7.lastIndexOf("script")); // -1  yani match nahi hone par -1 return karega

console.log(msg7.lastIndexOf("")); // 10  khali string me khali string hamesha hoti hai aur uska index last me hota hai

// Qus: indexOf() aur lastIndexOf() ke output compare kijiye?
console.log(msg12.indexOf("Java")); // 0  yani pahla match check karega aur uska index return karega
console.log(msg12.lastIndexOf("Java")); // 10  yani last match check karega aur uska index return karega

let result8 = msg12.lastIndexOf("Java", 9);
console.log(msg12); // Java Java Java
console.log(result8); // 5

// Qus: fromIndex () kaise kam karta hai?   
// Answer: fromIndex () method string ke andar match check karne ke liye use hota hai.
// Agar fromIndex () method ka value positive hai to uske baad ke index se match check
//  karega aur agar negative hai to uske pehle ke index se match check karega.

// search() ----> Method  <---- #16

// Qus; Regex kya hota hai? details me samjhao|
// answer: Regex (Regular Expression) ek pattern hota hai jo string me match karne ke liye use hota hai.
// Regex me kuch special characters hote hai jaise ki ^, $, ., *, +, ?, { }, [ ], ( ), |, \, /, etc.
// inka use karke hum string me match kar sakte hai. Regex me case sensitive aur case insensitive dono
//  hota hai. Regex me global aur local dono hota hai. Regex me multiline aur single line dono hota hai. 
// Regex me greedy aur non-greedy dono hota hai. Regex me lookahead aur lookbehind dono hota hai.
//  Regex me capturing aur non-capturing dono hota hai. Regex me backreference aur non-backreference 
// dono hota hai. Regex me anchors aur boundaries dono hota hai. Regex me quantifiers aur modifiers
//  dono hota hai. Regex me character classes aur negated character classes dono hota hai. Regex me 
// alternation aur grouping dono hota hai. Regex me escape sequences aur unicode escape sequences dono hota hai.


let msg13 = "JavaScript";
console.log(msg13.search("Java")); // 0  yani match hone par index number return karega

console.log(msg13.search("Script")); // 4  yani match hone par index number return karega

console.log(msg13.search("Python")); // -1  yani match nahi hone par -1 return karega

// Qus: indexOf() aur search() ka output compare kare?
console.log(msg13.indexOf("Java")); //0
console.log(msg13.search("Java")); //0

// ek Regex banayiye jo "Hello123" me numbers search kare

// match () -----> Method <---- #17

let msg14 = "I Love JavaScript";
console.log(msg14.match("Java")); // yah match karega aur uska index return karega
/*
Output:

['Java', index: 7, input: 'I Love JavaScript', groups: undefined]
0
: 
"Java"
groups
: 
undefined
index
: 
7
input
: 
"I Love JavaScript"
length
: 
1
[[Prototype]]
: 
Array(0)
*/
console.log(msg14.match("Python")); // null yah match nahi hone par null return karega

let msg15 = "Java Java Java";
console.log(msg15.match(/Java/)); // yah first match karega aur uska index return karega
console.log(msg15.match(/Java/g)); // global match karega aur sabhi match ko return karega

// Qus: apne sabdo me search() aur match() method me kya antar hai?
// Answer: search() method string me match check karta hai aur uska index return karta hai agar match ho to aur agar match nahi ho to -1 return karta hai.
// jabki match() method string me match check karta hai aur uska value return karta hai agar match ho to aur agar match nahi ho to null return karta hai.
// search() method me regex ka use hota hai aur match() method me regex ka use hota hai. search() method me global match nahi hota hai aur match() method
//  me global match hota hai. search() method me case sensitive aur case insensitive dono hota hai aur match() method me case sensitive aur case
//  insensitive dono hota hai. search() method me multiline aur single line dono hota hai aur match() method me
//  multiline aur single line dono hota hai. search() method me greedy aur non-greedy dono hota hai aur match()
//  method me greedy aur non-greedy dono hota hai. search() method me

// Qus: Regex seekhne ke bad email match karne ka program banaiye.


// match() method match information return karta hai jaise ki match hone par match string, index,
// input string aur groups return karta hai.


// matchAll ()  -----> Method <---- #18

let textAll = "HTML CSS HTML JavaScript HTML CSS";
console.log(textAll.matchAll(/HTML/g)); // yah sabhi match karega aur uska index return karega

let fruits = "apple mango apple banana apple";
console.log(fruits.matchAll(/apple/g));

// Qus: match() aur matchAll() method me kya antar hai?
// answer: match() method match information return karta
//  hai jaise ki match hone par match string, index, 
// input string aur groups return karta hai. 

// jabki matchAll() method interator return
//  karta hai jo sabhi match ko iterate karta
//  hai aur uska index return karta hai.


// matchAll() Interator return karta hai jo sabhi match ko iterate karta hai aur uska index 
// return karta hai. matchAll() method me global match hota hai aur case sensitive aur case
//  insensitive dono hota hai. matchAll() method me multiline aur single line dono hota hai.
//  matchAll() method me greedy aur non-greedy dono hota hai. matchAll() method me lookahead 
// aur lookbehind dono hota hai. matchAll() method me capturing aur non-capturing dono hota
//  hai. matchAll() method me backreference aur non-backreference dono hota hai. matchAll()
//  method me anchors aur boundaries dono hota hai. matchAll() method me quantifiers aur 
// modifiers dono hota hai. matchAll() method me character classes aur negated character 
// classes dono hota hai. matchAll() method me alternation aur grouping dono hota hai. 
// matchAll() method me escape sequences aur unicode escape sequences dono hota hai.


// split() -----> Method <---- #19

let msg16 = "HTML,CSS,JavaScript";
console.log(msg16.split(",")); // yah string ko split karega aur array return karega

let msg17 = "apple mango banana";
console.log(msg17.split(" ")); // yah space ko split karke aur array return karega    

let msg18 = "HTML|CSS|JavaScript|Python";
console.log(msg18.split("|")); // yah pipe ko split karke aur array return karega

let msg19 = "Rahul, Aman, Rohit, Sohan";
const result9 = msg19.split(", ");
console.log(result9); // yah comma aur space ko split karke aur array return karega

let text20 = "HTML, CSS, JavaScript";
console.log(text20.split(", ")); // yah comma aur space ko split karke aur array return karega

let text21 = "abc@gmail.com";
const result10 = text21.split("@");
console.log(result10); // yah @ ko split karke aur array return karega


// Mini Challange: let data = "HTML, CSS, JavaScript, React"; ko split karke
//  sabhi courses ko alag alag print kare aur unka index bhi print kare.

let data = "HTML, CSS, JavaScript, React";
const courses = data.split(", ");
console.log(courses); // yah courses ko array me split karke return karega




// localeCompare() -----> Method <---- #20

let text22 = "Apple";
let text23 = "Banana";
console.log(text22.localeCompare(text23)); // -1  yani text22 < text23


let text24 = "Cat";
let text25 = "cat";
console.log(text24.localeCompare(text25)); // -1  yani text24 < text25

let text26 = "Mango";
let text27 = "Orange";
console.log(text26.localeCompare(text27)); // -1  yani text26 < text27

let d = "Apple";
console.log(d.localeCompare("Boe")); // 1  yani d > 100



// padStart() -----> Method <---- #21

let text28 = "5";
console.log(text28.padStart(3, "0")); // 005  yani text28 ko 3 digit me convert karega aur 0 se fill karega

let id = "21";
console.log(id.padStart(5, "0")); // 00021  yani id ko 5 digit me convert karega aur 0 se fill karega

let otp = "789";
console.log(otp.padStart(6, "0")); // 000789  yani otp ko 6 digit me convert karega aur 0 se fill karega

let account = "4567";
console.log(account.padStart(10, "0")); // 0000004567  yani account ko 10 digit me convert karega aur 0 se fill karega

let product = ["5", "45", "789"];
console.log(product.map(p => p.padStart(3, "0"))); // ['005', '045', '789']
// .map(p =>  yah arrow function hai jo product array ke sabhi elements ko iterate karega aur unko
//  padStart() method se convert karega aur new array return karega (ek loop ke jaisa kaam karega).

// padEnd() -----> Method <---- #22

let text29 = "5";
console.log(text29.padEnd(3, "0")); // 500  yani text29 ko 3 digit me convert karega aur 0 se fill karega

let text30 = "JS";
console.log(text30.padEnd(5, "*")); // JS***

let text31 = "A12";
console.log(text31.padEnd(6, "0")); // A12000

let id1 = "P45";
console.log(id1.padEnd(8, "0")); // P4500000

// let num = 7;
// console.log(num.padEnd(4,"0"));
// yah error dega kyoki hamari method string method hai ek function hai lekin numbers ke liye yah kam nahi karti

let name1 = "Ram";
console.log(name1.padEnd(8, "_")); // Ram_____

// challange
let ids = ["A", "AB", "ABC"]; // Loop ka use karke sabhi ko 5 characters ka banao aur ant me * jodo.



// toString() -----> Method <---- #23

let num1 = 100;
console.log(num1.toString());

let marks = 450;
console.log("marks:", marks.toString());

let price = 999;
console.log("🤑:", price.toString());

// let value = null;
// console.log(value.toString());  // Error: Cannot read properties of null (reading 'toString')

let arr = [1, 2, 3, 4];
console.log("String:", arr.toString());

// let numbers2 = [10,20,30,40]; Loop lagakar her numbers ko string me convert karo.


// valueOf() -----> Method <---- #24

let text32 = "HTML";
console.log(text32.valueOf()); // HTML

let city3 = "Delhi";
console.log("valueOf () --> Method Ise hum kewal strings per apply kar sakte hai jisse yah pta hota hai ki yah string hai \n :", city3.valueOf()
);

let language1 = "JavaScript";
console.log(language1 === language1.valueOf()); // true  yani valueOf() method string ke original value ko return karta hai

let product1 = "Laptop";
console.log(product1.valueOf()); // Laptop

let text33 = "500";
console.log(text33.valueOf() +100); // 500100  yani valueOf() method string ke original value ko return karta hai aur usko number ke sath add karne par string ke sath concatenate ho jata hai

let text34 = "React";
let result11 = text34.valueOf();
console.log(text34); // React
console.log(result11); // React

// Qus: ek program banaiye jisme 5 alag alag strings ho aur vauleOf() lagakar console me print kare.
let str1 = "Hello";
let str6 = "World";
let str7 = "JavaScript";
let str4 = "React";
let str5 = "Node.js";

console.log(str1.valueOf());
console.log(str6.valueOf());
console.log(str7.valueOf());
console.log(str4.valueOf());
console.log(str5.valueOf());

// normalize() -----> Method <---- #25

let text35 = "café";
console.log(text35.normalize()); // café  yani normalize() method string ke original value ko return karta hai

let a1 = "café";
let b1 = "cafe\u0301"; // yah unicode hai jo é ko represent karta hai
console.log(a1 === b1); // false  yani a1 aur b1 alag alag hai
console.log(a1.normalize() === b1.normalize()); // true  yani normalize kare par dono same hain

let name2 = "Shailendara";
console.log(name2.normalize()); // Shailendara  


// qus: international user names compare karne ke liye normalize() method ka use karke ek program banaiye.
let user1 = "José";
let user2 = "Jose";
console.log(user1.normalize() === user2.normalize()); // true  yani normalize kare par dono same hain

// qus: 5 strings ki array banaiye aur loop ki madad se sabhi per normalize() lagakar print kijiye.
let strings = ["café", "cafe\u0301", "José", "Jose", "Shailendara"];
for (let i = 0; i < strings.length; i++) {
    console.log(strings[i].normalize());
}

