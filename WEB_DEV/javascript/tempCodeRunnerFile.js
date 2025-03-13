// function greet (name){
//     console.log("hello" , name );
// }
// function fuxn (callback){
//     callback("Satyam");
// }
// fuxn(greet);
// let myPromise = new Promise((resolve, reject) => {
//     let success = true; // Change to false to see rejection
//     setTimeout(() => {
//         if (success) {
//             resolve("Data fetched successfully!");
//         } else {
//             reject("Error fetching data!");
//         }
//     }, 2000);  // Simulating delay
// });

// myPromise
//     .then((message) => {
//         console.log("Success:", message);
//     })
//     .catch((error) => {
//         console.log("Failed:", error);
//     });


// function createTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = Math.random() > 0.8; // 70% chance of success
//             if (success) {
//                 console.log("Task Created! ");
//                 resolve("Created -> ");
//             } else {
//                 reject("Failed to create task ❌");
//             }
//         }, 1000);
//     });
// }

//  function processTask(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Task processed!");
//             resolve(`${data} processed ->`);
//         },2000)
//     })
// }
//  function completedTask(data){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Task Completed !");
//             resolve(`${data} Completed`);
//         },1000)
//     });
// }
// //chaining pr

// async function manager () {
//     try {
//         let data = await createTask();
//         let processdata = await processTask(data);
//         let finalData = await completedTask(processdata);
//         console.log(finalData);

//     } catch(error){
//         console.log("Error" , error );
//     }
// }
// manager();






// Real-time API call
async function getCoordinates(city) {
    try {
        let geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
        let geoData = await geoResponse.json();
        
        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found! ❌");
        }

        let { latitude: lat, longitude: lon } = geoData.results[0];  // Extract latitude & longitude
        console.log(`📍 Coordinates for ${city}: ${lat}, ${lon}`);
        
        return { lat, lon };  // Pass data to the next function
    } catch (error) {
        console.error("Error fetching coordinates:", error);
    }
}

async function getWeather(lat, lon) {
    try {
        let weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        let weatherData = await weatherResponse.json();

        if (!weatherData.current_weather) {
            throw new Error("Weather data not found! ❌");
        }

        console.log(`🌡 Temperature: ${weatherData.current_weather.temperature}°C`);
        console.log(`💨 Wind Speed: ${weatherData.current_weather.windspeed} km/h`);

    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

async function fetchWeatherForCity(city) {
    let coordinates = await getCoordinates(city);
    if (coordinates) {
        await getWeather(coordinates.lat, coordinates.lon);  // Pass values to the next API call
    }
}

// 🔥 Test with a city name
fetchWeatherForCity("patna")

