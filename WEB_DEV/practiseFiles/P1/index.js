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
function fun1(word){
    console.error(` say hi1 to ${word} !`);
}
//fuction expression
let fun2 = function (word){
    console.error(` say hi2 to ${word} !`);
} 

// arrow funtion 
let fun3 = (word) => {
    console.error(` say hi3 to ${word} !`);
}

fun1("Satyam");
fun2("Satyam");
fun3("Satyam");
