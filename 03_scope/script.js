// 01_Global Scope
let name = "Shailendra";

{
    console.log(name);
}

console.log(name);

// 02_Block Scope
{
    let city = "Gorakhpur";

    console.log(city);
}

// agar mai yanha thoda changing karu to
// {
//     let city = "Gorakhpur";
// }

// console.log(city);

// out put (Uncaught ReferenceError: city is not defined)

// 03_Function Scope
function intro() {
    let age = 20;

    console.log(age);
}

intro();


// Function के अंदर बना Variable, Function के बाहर नहीं दिखता।
// function intro() {
//     let age = 25;
// }
// console.log(age);

// Error dega Uncaught ReferenceError: age is not defined


let student = "Angad Kumar";

{
    let course = "JavaScript";

    console.log(student);
    console.log(course);
}

console.log(student);

/*
 
JavaScript हमेशा उस जगह से Variable ढूँढना शुरू करती है जहाँ 
Code चल रहा होता है। अगर वहाँ नहीं मिलता, तो एक-एक करके बाहर वाले Scope में जाती है।
इस "अंदर से बाहर खोजने" की प्रक्रिया को Scope Chain कहते हैं। 
 
 🌍 Global
             x = 100
                ▲
                │
        📦 Block 1
         y = 200
                ▲
                │
        📦 Block 2
         z = 300
         console.log(x)


Block 2 ❌

     ↑

Block 1 ❌

     ↑

Global ✅


JavaScript सिर्फ ऊपर जाती है।
वह नीचे कभी नहीं जाती।

let x = 100;

{
    let y = 200;
}

console.log(y);

JavaScript ऐसे खोजेगी:

🌍 Global

क्या y है?
❌ नहीं
क्या वह नीचे Block में जाएगी?
❌ कभी नहीं।
इसलिए Error आएगा:
ReferenceError: y is not defined

Scope Chain हमेशा Current Scope → Parent Scope → Grandparent Scope → Global Scope तक जाती है।
JavaScript कभी Child Scope में Variable खोजने नहीं जाती।

*/
let fruit = "Mango";

{
    let color = "Yellow";

    console.log(fruit);
}

// console.log(color);     Uncaught ReferenceError: color is not defined

/*
color Block Scope के अंदर बना है। console.log(color) Global Scope में लिखा है। JavaScript Global Scope से Child Block
में Variable खोजने नहीं जाती। इसलिए ReferenceError आता है।
🔥 यही Line Interview में भी Impress करती है।
*/

function intro() {
    let myFriend = "Ramu";
    let myFriend2 = "Ramesh";
    console.log(myFriend);
    console.log(myFriend2);
}
intro();

// console.log(myFriend2);

// Uncaught (in promise) Error: A listener indicated an asynchronous response
//  by returning true, but the message channel closed before a response was received
// Output: Ramu
// JavaScript ने पहले intro() Function के अंदर myFriend खोजा। वहाँ Variable नहीं मिला। फिर Scope Chain
// के माध्यम से वह Parent Scope (Global Scope) में गई। वहाँ myFriend मिल गया, इसलिए Output Ramu आया।
// agar

//  Important question: बिना Run किए बताओ:

let a = 10;

function test() {

    let b = 20;

    {
        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }
}

test();

/*
बताओ:
Output क्या होगा?
console.log(a) को a कहाँ मिला?
console.log(b) को b कहाँ मिला?
console.log(c) को c कहाँ मिला?

हर Point का Reason लिखना।
*/
// Answer: 10, 20, 30
// console.log(a) को a कहाँ मिला? - Global Scope में
// console.log(b) को b कहाँ मिला? - Function Scope में
// console.log(c) को c कहाँ मिला? - Block Scope में ya Current Scope में

/*
मैं चाहता हूँ कि तुम इसे अपनी Notebook में लिखो:
JavaScript हमेशा Current Scope से Variable ढूँढना शुरू करती है।
अगर Current Scope में मिल गया, तो ऊपर नहीं जाती।
अगर नहीं मिला, तभी Parent Scope में जाती है।
यही Scope Chain का सबसे Important Rule है।

1. Variable कहाँ बना?
        ↓
2. console.log() कहाँ है?
        ↓
3. JavaScript कहाँ से Search शुरू करेगी?
        ↓
4. Current → Parent → Global

🔥 यही एक JavaScript Developer की Thinking होती है।

*/
