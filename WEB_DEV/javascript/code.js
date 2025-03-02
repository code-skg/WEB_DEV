// let myPromise = new Promise((resolve, reject) => {
//     let success = 1 ; // Simulate success/failure

//     setTimeout(() => {
//         if (success) {
//             resolve("Operation Successful!"); // Fulfilled
//             return new Promise(()=>{
//                 resolve("next 1 ");
//             });
//         } else {
//             reject("Operation Failed!"); // Rejected
//         }
//     }, 2000);
// });

// // Consuming the Promise
// myPromise
//     .then((message) => {
//         console.log("Success:", message); // Runs if resolved
//     })
//     .then((next)=>{
//         console.log("nest 1 ", next )
//     })
//     .catch((error) => {
//         console.log("Error:", error); // Runs if rejected
//     })
//     .finally(() => {
//         console.log("Promise completed!"); // Runs no matter what
//     });





// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 1 completed");
//             resolve("Data from Step 1");
//         }, 5000);
//     });
// }

// function step2(previousData) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 2 completed, received:", previousData);
//             resolve("Data from Step 2");
//         }, 5000);
//     });
// }

// function step3(previousData) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 3 completed, received:", previousData);
//             resolve("Final result");
//         }, 5000);
//     });
// }

// // Chaining multiple promises
// step1()
//     .then(step2) // step2 receives data from step1
//     .then(step3) // step3 receives data from step2
//     .then((finalData) => {
//         console.log("All steps completed:", finalData);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });




async function asyncStep1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Async Step 1 completed");
            resolve("Data from Async Step 1");
        }, 5000);
    });
}

async function asyncStep2(previousData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Async Step 2 completed, received:", previousData);
            resolve("Data from Async Step 2");
        }, 5000);
    });
}

async function asyncStep3(previousData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Async Step 3 completed, received:", previousData);
            resolve("Final async result");
        }, 5000);
    });
}

async function executeAsyncSteps() {
    try {
        const data1 = await asyncStep1();
        const data2 = await asyncStep2(data1);
        const finalData = await asyncStep3(data2);
        console.log("All async steps completed:", finalData);
    } catch (error) {
        console.log("Error:", error);
    }
}

executeAsyncSteps();