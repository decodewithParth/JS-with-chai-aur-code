const promiseOne = new Promise(function (resolve, reject) {
    // Async calls
    // DB calls , network calls , cryptograpy
    setTimeout(function () {
        console.log("Async task is completed!");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed!");
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved!");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Parth", age: 21, department: "UVPCE", erno: "22012012041" });
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Parth-Chauhan", isAccessed: true });
        }
        else {
            reject("ERROR : Something went wrong");
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(() => {
        console.log("Error occured at catch time");
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    })



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Parth-Chauhan", isAccessed: true });
        }
        else {
            reject("ERROR : Something went wrong");
        }
    }, 1000)
})

async function promiseConsumed() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

promiseConsumed()



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers();


fetch('https://api.github.com/users/decodewithParth')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})