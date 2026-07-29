
// String Methods

// UpparCase  --> Method
let project = "missonshikar";
const father = "Ramanand Sagar";


console.log(project.toUpperCase());
console.log(father.toUpperCase());
console.log(project);

// LowerCase --> Method

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


console.log(text.substring(0, 4));      // last include nahi karta
console.log(text.substring(4));         // start index se pura print karta hai
console.log(word.substring(3, 8));      // start include, end not iclude
console.log(word.substring(-5, 6));     // Negative value ko (0) kar deta hai 
console.log(word.substring(9, 3));      // agar start>end to value swap ho jati hai
console.log(word.substring(5, 5));      // agar same indes to empty string
console.log(word.substring(-6, -2));    // neagative value dono (0,0) jo ki khali string return karega





// replace () --> method


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

// replaceAll () --> method


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



// concat () --> method


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

// repeat() --> method

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



// charAt() --> method

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


