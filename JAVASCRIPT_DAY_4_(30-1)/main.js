//  --------------------------------------------------
// Call-Back Function 

let myDisplayer = (some) => {
    document.getElementById("cb").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

/* function showData(name, age) {
    console.log("Hey " + name + ",\nAge: " + age);
}

function getData(callback) {
    let name = prompt("enter your name:")
    let age = prompt("Enter your age: ")
    callback(name, age);
}

getData(showData) */


//  --------------------------------------------------
// Promises

// Syntax =====>

/* 
let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) // code if successful
    function (error) // code if some error
);

*/

function myDisplayer2(some) {
    document.getElementById("pro1").innerHTML = some;
}

let myPromise1 = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise1.then(
    function (value) { myDisplayer2(value); },
    function (error) { myDisplayer2(error); }
);

function myDisplayer3(some) {
    document.getElementById("pro2").innerHTML = some;
}

let myPromise2 = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x !== 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise2.then(
    function (value) { myDisplayer3(value); },
    function (error) { myDisplayer3(error); }
);



//  --------------------------------------------------
// Error Handling

function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if (x.trim() == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "Input is " + err;
    } finally {
        document.getElementById("p02").innerHTML = "Error Handling from finally";
    }
}

//  --------------------------------------------------
// JSON

let person = '{"name":"xyz", "age":25}'
document.getElementById('json').innerHTML = JSON.parse(person).name + " " + JSON.parse(person).age


let car = '["Audi", "Ford", "BMW"]'
document.getElementById('ajson').innerHTML = JSON.parse(car)[0] + " " + JSON.parse(car)[1] + " " + JSON.parse(car)[2]


const personData = { name: "abc",  age: 23, city: "New York" }
document.getElementById('sjson').innerHTML = JSON.stringify(personData);


const arr = ["John", "Peter", "Sally", "Jane"];
document.getElementById('asjson').innerHTML = JSON.stringify(arr);