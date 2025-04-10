// document.getElementById("search").onclick = function() {
//     console.log("clicked");
// };

// let myString = "JavaScript Basics";
// let myNumber = 100;
// let myBoolean = true;
// let myNull = null;
// let myUndefined;
// let mySymbol = Symbol("unique");
// let myBigInt = 123456789012345678901234567890n;  // Note the 'n' at the end

// console.log(typeof myString);     // "string"
// console.log(typeof myNumber);     // "number"
// console.log(typeof myBoolean);    // "boolean"
// console.log(typeof myNull);       // "object" (a known quirk in JavaScript)
// console.log(typeof myUndefined);  // "undefined"
// console.log(typeof mySymbol);     // "symbol"
// console.log(typeof myBigInt);     // "bigint"

// console.log("54"==55);


// 1st as C++
// void greet (string word){
//     cout<<"hello "<<word<<endl; 
// }
// function fun1(word){
//     console.error(` say hi1 to ${word} !`);
// }
// //fuction expression
// let fun2 = function (word){
//     console.error(` say hi2 to ${word} !`);
// } 

// // arrow funtion 
// let fun3 =  (word) => {
//     console.error(` say hi3 to ${word} !`);
// }

// fun1("Satyam");
// fun2("Satyam");
// fun3("Satyam");




// let area = (length , breadth) => {
//     console.log("area of rectangle =" , length*breadth);
    
// }
// area(5,3);

// const check = (num) => {
//     if(num%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }

// let toCheck = (num) => (num % 2 === 0) ? true : false;
// console.log(toCheck(4));



// function stringRevesal (str){
//     return str.split("").reverse().join(""); 
// }
// console.log(stringRevesal("JavaScript"));

// function additon (a , b ){
//     return a+b;
// }
// function subtraction  (a , b ){
//     return a-b;
// }
// function multiplication (a , b ){
//     return a*b;
// }
// function division (a , b ){
//     return a/b;
// }
// let calculate = (a , b , callback) => {
//     return callback(a, b);
// }
// console.log(calculate (5,3 , multiplication));

 

// let arr = [11,2,3,10,5,6];
// console.log(arr.sort((a,b) => a-b));//acending order


// let details = {
//     name: "Satyam Kumar" , 
//     age : 18 , 
//     isStudent : false ,
//     greet(){
//         return " Hi , Mr." + this.name;
//     }

// };

// console.log(details.greet());


// Product manager



const productManager = {
    products: [],
  
    addProduct(product) {
      this.products.push(product);
    },
  
    removeProduct(id) {
      this.products = this.products.filter(product => product.id !== id);
    },
  
    getProducts() {
      return this.products;
    }
  };
  
  // Example Usage:
  productManager.addProduct({ id: 1, name: "Laptop", price: 1000 });
  productManager.addProduct({ id: 2, name: "Smartphone", price: 500 });
  console.log(productManager.getProducts());  // List of 2 products
  productManager.removeProduct(1);
  console.log(productManager.getProducts());  // List with only the smartphone
  