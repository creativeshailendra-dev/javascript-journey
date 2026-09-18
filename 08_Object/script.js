
// Topic 01 : Object Property Access & Notation

// 1. Dot Notation
// syntax: objectName.propertyName

let user = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};

console.log(user.name); // Rahul
console.log(user.city); // Delhi

// 2. Bracket Notation
// syntax: objectName["propertyName"]

console.log(user["age"]); // 25
console.log(user["city"]); // Delhi

// 3. Dynamic Property Access ****IMP****

let key = "name";
console.log(user[key]); // Rahul

let key2 = "age";
console.log(user[key2]); // 25

let product = {
    name: "Laptop",
    price: 50000,
    stock: 5
};

let property = "price";

console.log(product[property]); // 50000


// TOPIC 2: Add / Update / Delete Properties

/*
Object Property Modification

Existing property update:
object.property = newValue

New property add:
object.newProperty = value

Property delete:
delete object.property

Dot और Bracket notation दोनों से properties update/add/delete की जा सकती हैं।
 */


let product2 = {
    name: "Laptop",
    price: 50000,
    category: "Electronics",
    stock: 5
};

// Task 1 — Update 
product2.price = 45000;
product2["price"] = 40000; // isse bhi sab kuch(update, add, delete) kam karega.
console.log(product2);

// Task 2 — Add
product2.brand = "hp";
console.log(product2);

// Task 3 — Update
product2["stock"] = 10;
console.log(product2);

// Task 4 — Delete
delete product2.category;
console.log(product2);

// Topic 03: Nested Objects

// nested object

let user3 = {
    name: "Shailendra",

    address: {
        city: "Gorakhpur",
        state: "Uttar Pradesh"
    }
};

// why ?
let user4 = {
    name: "Shailendra",
    age: 20,

    address: {
        city: "Gorakhpur",
        state: "Uttar Pradesh",
        pincode: 273001
    },

    contact: {
        email: "abc@gmail.com",
        phone: "9876543210"
    }
};
// because of nested objects,
//  we can store more information in a structured way. It helps in
//  organizing data and makes it easier to access related information.

/*
 basic syntax : let object = {
    property: {
        nestedProperty: value
    }
};
 */

// Accessing nested object properties

let user5 = {
    name: "Shailendra",

    address: {
        city: "Gorakhpur",
        state: "Uttar Pradesh"
    }
};

console.log(user5.name); // Shailendra
console.log(user5["address"]["city"]); // Gorakhpur
console.log(user5.address.state); // Uttar Pradesh

// Update nested object properties

user5.address.city = "Lucknow";
console.log(user5.address.city); // Lucknow


// Add new nested object properties

user5.address.pincode = 273001;
console.log(user5.address.pincode); // 273001

// Multiple Nested Levels
let company = {

    name: "Tech Solutions",

    office: {

        address: {

            location: {
                city: "Delhi",
                pincode: 110001
            }

        }

    }

};

// City access:
console.log(company.office.address.location.city); // Delhi


// Real Website User Data

let user6 = {
    id: 101,
    name: "Amit",

    profile: {
        username: "amit123",
        bio: "Web Developer"
    },

    address: {
        city: "Gorakhpur",
        state: "Uttar Pradesh"
    }
};

console.log(user6.profile.username); // amit123
console.log(user6.profile.bio); // Web Developer
console.log(user6.address.city); // Gorakhpur

// Dynamic Nested Access

let key3 = "city";

console.log(user6.address[key3]); // Gorakhpur

/*
NESTED OBJECT

1. Object ke andar object = Nested Object.

2. Example:
   let user = {
       address: {
           city: "Gorakhpur"
       }
   };

3. Access:
   user.address.city

4. Bracket:
   user["address"]["city"]

5. Update:
   user.address.city = "Lucknow";

6. Add:
   user.address.pincode = 273001;

7. Nested objects real-world structured data ke liye
   use hote hain.

8. Access karte waqt object ka complete path follow
   karna hota hai.
*/



// Topic 04: Object Methods


/* BASIC SYNTAX

TRADITIONAL FUNCTION SYNTAX:
let object = {
    methodName: function() {
        // code
    }
};

METHOD CALL:
user.greet();

user.greet // FUNCTION KO ACCESS KARNE KE LIYE YE SYNTAX USE HOTA HAI.
user.greet() // FUNCTION KO CALL/EXECUTE KARNE KE LIYE YE SYNTAX USE HOTA HAI.

// MODERN METHOD SYNTAX:
let user = {

    greet() {
        console.log("Hello");
    }

};

CALL: 
user.greet();


*/


let user7 = {
    name: "Shailendra",

    greet: function () {
        console.log("Hello Shailendra");    // Action
    }
};

user7.greet(); // Hello Shailendra
console.log(user7.name); // Data
user7.greet(); // Action perform

// METHOD WITH MULTIPLE ACTIONS

let user8 = {

    name: "Shailendra",

    login() {
        console.log("User logged in");
    },

    logout() {
        console.log("User logged out");
    }

};

user8.login(); // User logged in
user8.logout(); // User logged out

// ek object ke andar multiple methods ho sakte hain.

// METHOD WITH PARAMETERS

let calculator = {

    add(a, b) {
        console.log(a + b);
    }

};


calculator.add(5, 10); // 15
calculator.add(85425, 74559365); // 74644790

// METHOD WITH RETURN VALUE

let calculator2 = {

    add(a, b) {
        return a + b;
    }

};

let result = calculator2.add(5, 10);
console.log(result); // 15

// calculator2.add(10, 20); // yah output nahi karega, kyunki return value ko store nahi kiya gaya hai.


// REAL-WORLD EXAMPLE

let product3 = {
    name: "Laptop",
    price: 50000,

    showProduct() {
        console.log(`Product Name:`, this.name);
        console.log(`Product Price:`, this.price);
    }
};

console.log(product3.showProduct());


// OBJECT METHOD + NESTED OBJECT

let user9 = {

    name: "Shailendra",
    address: {
        city: "Gorakhpur",
        state: "Uttar Pradesh"
    },

    showAdd() {

        console.log("City :", this.address.city);
        console.log("State :", this.address.state);
    }

};

user9.showAdd();


/**
 1. Object ke andar function = Method.

2. Method ko call:
   object.method();

3. Method parameters le sakta hai.

4. Method value return kar sakta hai.

5. Ek object mein multiple methods ho sakte hain.

6. Modern syntax:
   methodName() {}

7. `this` object methods mein important hai.
   Isko next topic mein deeply padhenge.


   // Notes

OBJECT METHODS

Object ke andar stored function ko Object Method kehte hain.

Example:

let user = {
    name: "Shailendra",

    greet() {
        console.log("Hello");
    }
};

Method call:
user.greet();

Method parameters le sakta hai:

add(a, b) {
    return a + b;
}

Method data ke saath object ka behavior/action
represent karta hai.

Normal property = Data
Method = Action/Behavior


// Common patterns

user.login()
user.logout()
cart.addItem()
cart.removeItem()
product.getPrice()
order.calculateTotal()


 */





// Topic 05: this Keyword (Basics)
// this generally usi object ko refer karta hai jis object ke through method call hua hai

let user10 = {
    name: "Shailendra",

    greet() {
        console.log(this.name);
    }
};

user10.greet();
// this  user object ko refer kar raha hai.
// isliye this.name = user.name

let user11 = {
    name: "Shailendra",
    age: 20,
    city: "Gorakhpur",

    introduce() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
};

user11.introduce(); //Method ko object ka data directly access karne ke liye this mil gaya.

// Same Method, Different Objects

let user12 = {
    name: "Rahul",

    greet() {
        console.log(this.name);
    }
};

let user13 = {
    name: "Amit",

    greet() {
        console.log(this.name);
    }
};

user12.greet();
user13.greet();

// Notice:
// user12.greet();  ke time this → user12
// user13.greet(); ke time this → user13

// Yahi this ki important power hai.

// this with Nested Object

let user14 = {

    name: "Shailendra",

    address: {
        city: "Gorakhpur",
        state: "Uttar Pradesh"
    },

    showAddress() {
        console.log(this.address.city);
    }

};

user14.showAddress();

//this for Calculation

let product4 = {

    name: "Laptop",
    price: 50000,
    quantity: 2,

    getTotal() {
        return this.price * this.quantity;
    }

};

console.log(product4.getTotal());
// Q. isme return lagne ka matlab new value ko usme store karna hai ya nahi? aur kyo?
// A. Nahi, return ka matlab hai ki function ke bahar is value ko use karna hai.
//  Isliye humne console.log() me call kiya hai. Agar humne return na lagaya hota
//  to ye value bahar use nahi hoti.

// Warning: this ka behavior har situation mein same nahi hota.
/*
NOtes:
THIS KEYWORD

1. Object method ke andar `this` generally
   current calling object ko refer karta hai.

2. Example:

let user = {
    name: "Shailendra",

    greet() {
        console.log(this.name);
    }
};

user.greet();

3. `this.name` → user.name

4. Formula:

object.method()
      ↓
    this
      ↓
  object

5. `this` object ke data ko method ke andar
   access karne ke liye useful hai.

6. `this` ka complete behavior Functions chapter
   mein deeply study karenge.


*/


// TOPIC 06: Object.keys()

// Object.keys() kisi object ki saari own property keys ko ek array ke form mein return karta hai.
let user15 = {
    name: "Shailendra",
    age: 20,
    city: "Gorakhpur"
};

console.log(Object.keys(user15)); // ["name", "age", "city"]
let keys = Object.keys(user15);
console.log(keys.length); // 3
console.log(Array.isArray(keys)); // true

// Number of Properties

let student = {
    name: "Amit",
    age: 20,
    course: "BCA",
    city: "Gorakhpur"
};

console.log(Object.keys(student).length); // 4

// Loop ke saath
let user16 = {
    name: "Shailendra",
    age: 20,
    city: "Gorakhpur"
};

let keys1 = Object.keys(user16);

for (let key of keys1) {
    console.log(key);
}
// Output:
// name
// age
// city

// Key + Value
let user17 = {
    name: "Shailendra",
    age: 20,
    city: "Gorakhpur"
};

let keys2 = Object.keys(user17);

for (let key of keys2) {
    console.log(key, user17[key]);
}

// output:
// name Shailendra
// age 20
// city Gorakhpur

// Yanha user[key] ka matlab hai ki user object ke andar key ke corresponding value ko access karna.
// Aur aur object.keys(user) ka matlab hai ki key ko array ke form mein return karna.

// Empty Object
let emptyObj = {};
console.log(Object.keys(emptyObj)); // []
console.log(Object.keys(emptyObj).length); // 0

// Nested Object

let user19 = {
    name: "Shailendra",

    address: {
        city: "Gorakhpur",
        state: "Uttar Pradesh"
    }
};

console.log(Object.keys(user19)); // ['name', 'address']
/**
 📜 Important Rules
Rule 1

Syntax:

Object.keys(object)
Rule 2

Result array hota hai.

Array.isArray(Object.keys(user))

➡️ true

Rule 3

Sirf keys milti hain:

["name", "age", "city"]
Rule 4

Values chahiye to Object.keys() nahi — uske liye next topic:

Object.values()
Rule 5

Nested object automatically deep nahi hota.

Object.keys(user)

sirf user ki direct keys deta hai.

// notes
OBJECT.KEYS()

Object.keys(object) object ki saari direct
property keys ko array mein return karta hai.

Example:

let user = {
    name: "Shailendra",
    age: 20,
    city: "Gorakhpur"
};

Object.keys(user);

Output:
["name", "age", "city"]

Important:
- Return type = Array
- Sirf keys milti hain
- Values nahi milti
- Nested properties automatically nahi milti
- Object.keys(user).length se properties count kar sakte hain

Dynamic access:
let keys = Object.keys(user);

for (let key of keys) {
    console.log(key, user[key]);
}

 */