

let myProducts = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 5
    },
    {
        name: "Phone",
        price: 20000,
        category: "Electronics",
        stock: 10
    },
    {
        name: "Shoes",
        price: 2000,
        category: "Fashion",
        stock: 10
    },
    {
        name: "Watch",
        price: 3000,
        category: "Fashion",
        stock: 7
    }
];

console.log("Total Products : ", myProducts.length); // Total Products :  4
console.log(myProducts[0]); // {name: 'Laptop', price: 50000, category: 'Electronics', stock: 5}
console.log(myProducts[0].name); // Laptop
console.log("First Product Price :", myProducts[0].price); // First Product Price : 50000
console.log("Last Product Name : ", myProducts[3].name); // Last Product Name :  Watch
console.log("First Product Category : ", myProducts[0].category); // First Product Category :  Electronics

// 0 se greater stock 

let avaProd = myProducts.filter(function (product) {
    return product.stock > 0;
});

console.log("Available Products : ", avaProd); // Available Products :  (4) [{…}, {…}, {…}, {…}]

// Electronics Products
let myElectronics = myProducts.filter(function (product) {
    return product.category === "Electronics";
});
console.log("Electronics Products : ", myElectronics); // Electronics Products :  (2) [{…}, {…}]

// Low Products under 5000
let lowProducts = myProducts.filter(function (product) {
    return product.price < 5000;
});
console.log("Low Price Products : ", lowProducts); // Low Price Products :  (2) [{…}, {…}]

// Products Name
let productNames = myProducts.map(function (product) {
    return product.name;
});
console.log("Products Name : ", productNames); // Products Name :  (4) ['Laptop', 'Phone', 'Shoes', 'Watch']

// Product Name + Price
let productNamePrice = myProducts.map(function (product) {
    return product.name  + " - ₹" + product.price;
});
console.log("Product Name + Price : ", productNamePrice); 
/*  Product Name + Price :  (4) 
 ['Laptop - ₹50000', 'Phone - ₹20000', 'Shoes - ₹2000', 'Watch - ₹3000'] */

// Total Price of All Products
let totalProductPrice = myProducts.reduce(function(price, product){
    return price + product.price;
}, 0);
console.log("Total Price of All Products : ", totalProductPrice); // Total Price of All Products :  75000  

// Cart
let cart = myProducts.filter(function(product) {
    return product.name === "Phone" || product.name === "Watch";
});

console.log("Cart:", cart); // Cart: (2) [{…}, {…}]

// Total Cart Price
let cartPrice = myProducts.reduce(function(price, product){
return price + product.price ;
}, 0);
console.log("Total Cart Price : ", cartPrice); // Total Cart Price :  75000


// Cart me Available Products hai ya nahi (All)
let cartHasAvailableProduct = cart.every(function(product){
    return product.stock > 0;
});
console.log("Cart me Available Products hai ya nahi : ", cartHasAvailableProduct); // Cart me Available Products hai ya nahi :  true

// cart me kam se kam ek available product 
let cartHasAtleastOneAvailableProduct = cart.some(function(product){
    return product.stock > 0;
});
console.log("Cart me kam se kam ek available product : ", cartHasAtleastOneAvailableProduct); // Cart me kam se kam ek available product :  true

// Group Products by Category ko ek array me store karna 
let productGroups = [
    ["Laptop", "Phone"],
    ["Shoes", "Watch"]
];

let flatProductGroups = productGroups.flat();
console.log("Flat Product Groups : ", flatProductGroups); // Flat Product Groups :  (4) ['Laptop', 'Phone', 'Shoes', 'Watch']

// products with category
let categoryProducts = [
    {
        category: "Electronics",
        products: ["Laptop", "Phone"]
    },
    {
        category: "Fashion",
        products: ["Shoes", "Watch"]
    }
];

let flatCategoryProducts = categoryProducts.flatMap(function(categoryProduct){
    return categoryProduct.products;
});
console.log("Flat Category Products : ", flatCategoryProducts); // Flat Category Products :  (4) ['Laptop', 'Phone', 'Shoes', 'Watch']

// cart check karna ki array hai ya nahi 
console.log("Cart is Array : ", Array.isArray(cart)); // Cart is Array :  true

// String ke characters ko ek proper Array me convert karna
let productName = "Laptop";
let productNameArray = Array.from(productName);
console.log("Product Name Array : ", productNameArray); // Product Name Array :  (6) ['L', 'a', 'p', 't', 'o', 'p']

