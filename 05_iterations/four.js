const myObj = {
    js: "Javascript",
    py: "Python",
    cpp: "c++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}


const arr = [2, 4, 6, 8, 10];

for (const key in arr) {
    console.log(arr[key]);
}


// forin loop wont work on map because map is not iterable

