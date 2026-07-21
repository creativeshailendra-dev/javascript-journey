// console.log(a);

// var a = 10;

// इसे अपने दिमाग में दो हिस्सों में बाँटो:

// var a;   // Memory Phase

// a = 10;  // Execution Phase

// यही Hoisting का सबसे बड़ा Secret है।

// console.log(age);

// let age = 20;

// 🤯 सवाल है:
// दोनों में Hoisting होती है...
// फिर var में Error क्यों नहीं आया?
// और let में Error क्यों आ गया?

// Answer: 🚨 Temporal Dead Zone (TDZ)

// 📌 सबसे Important Difference
// var	let
// Memory में undefined मिलता है	Memory में रहता है, लेकिन TDZ में रहता है
// पहले Access कर सकते हो	पहले Access नहीं कर सकते
// undefined मिलता है	ReferenceError मिलता है

/*
var:
Hoisted + initialized with undefined

let:
Hoisted but NOT initialized
(TDZ में रहता है)

🧠 Memory Trick (Exam + Interview)
    var                                	let
Hoisted ✅	                    Hoisted ✅
Initialized (undefined) ✅	    Initialized ❌
TDZ ❌	                        TDZ ✅
Access Before Declaration ✅    	Access Before Declaration ❌

*/
// console.log(a);
// console.log(b);

// var a = 10;
// let b = 20;


// Output: a = undefined
// b = <TDZ>

/*
Memory Phase
var a;
a = undefined;
यानी JavaScript खुद ही शुरुआत में undefined रख देती है।
Execution Phase
console.log(a);
Output:
undefined
फिर:
a = 10;
अब Value बदल गई।
let fruit;
fruit = "Mango";

*/


/*
let का मामला
console.log(b);
let b = 20;
Memory Phase
let b;
बस Variable बना।
❌ JavaScript undefined नहीं रखती।
यानी Variable बना है, लेकिन अभी Initialize नहीं हुआ।
इसलिए वह TDZ (Temporal Dead Zone) में है।
Execution Phase
पहली लाइन:
console.log(b);
JavaScript कहती है:
"रुको! b अभी Initialize नहीं हुआ है।"
इसलिए:
ReferenceError
फिर:
let b = 20;
अब Initialization हुआ।
अब b को Use कर सकते हो।
*/

// Question 01 : किस लाइन में Variable बना?
// Question 02 : किस लाइन में पहली बार Value रखी गई (Initialization हुआ)?

// Answer: pahle me variable bana aur dusre me value rakhi gayi (Initialization hua)


// Function Hositing



// 1. Function Declaration chal jata hai, isliye Hello print ho jaata hai
// 2. Function Expression + var TypeError: sayHi is not a function

