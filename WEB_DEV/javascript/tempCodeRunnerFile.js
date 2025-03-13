// function greet (name){
//     console.log("hello" , name );
// }
// function fuxn (callback){
//     callback("Satyam");
// }
// fuxn(greet);
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to see rejection
    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data!");
        }
    }, 2000);  // Simulating delay
});

myPromise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Failed:", error);
    });

