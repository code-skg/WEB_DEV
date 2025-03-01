let myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulate success/failure

    setTimeout(() => {
        if (success) {
            resolve("Operation Successful!"); // Fulfilled
        } else {
            reject("Operation Failed!"); // Rejected
        }
    }, 2000);
});

// Consuming the Promise
myPromise
    .then((message) => {
        console.log("Success:", message); // Runs if resolved
    })
    .catch((error) => {
        console.log("Error:", error); // Runs if rejected
    })
    .finally(() => {
        console.log("Promise completed!"); // Runs no matter what
    });
