/******testing how js works */
console.log("started")
const funhari = () => {
    setTimeout(() => {
        console.log("cb-hari")
    }, 5000)
}
funhari();
const url = fetch("https://api.github.com/").then(() => { return console.log("haritha-fetch") })
//////
const users = [
    { firstname: "akshay", age: 28 },
    { firstname: "shayni", age: 26 },
    { firstname: "shay", age: 78 },
]
const op = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        console.log(curr);
        acc.push(curr.firstname);
    }

    return acc;
}, [])
console.log(op);
//////
var a = 8;
let b = 9;
function x() {
    function y() {
        console.log(b);
    }
    let b = 4;
    return y;
}
// var z = y();
var z = x();
console.log(z);
z();
//////
function f() {
    const x = {};
    const y = {};
    x.a = y; // x references y
    y.a = x; // y references x

    return "azerty";
}
f();
////
document.querySelectorAll('a[href^="#"]').forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView(
            { behaviour: 'smooth' }
        )
    })
})
document.getElementById('btn').addEventListener('click', function cb() {
    console.log('clicked');
})
/******Prototype inheritance call apply bind */
const obj = {
    name: "akkii",
    city: "Hyd",
    getFun() {
        console.log("this is obj")
    }
}
const getDetails = function (state, country, y) {
    console.log(" " + this.name + " " + this.city + " " + state + " " + country + "" + y);
}
const obj2 = {
    name: "hari"
}
getDetails.call(obj, "tels", "India");
getDetails.apply(obj, ["tels", "India"]);
let myBind = getDetails.bind(obj, "tels", "India");
console.log(myBind);
myBind(5);


let mul = function (a, b) {
    console.log(a * b);
}
let multiply = mul.bind(this, 6);
console.log(multiply); multiply(6);
/*******Events bubbling capturing delegation */
document.querySelector("#gparent").addEventListener('click', function (e) {
    console.log("gparent clicked", e);
    /****** */
    // window.location.href = "/" + e.target.id
}, true)
document.querySelector("#parent").addEventListener('click', function () {
    console.log("parent clicked");
}, true)
document.querySelector("#child").addEventListener('click', function () {
    console.log("child clicked");
}, true)

document.querySelector("#form").addEventListener('keyup', function (e) {
    console.log(e);
    if (e.target.dataset.uppercase != undefined) {

        e.target.value = e.target.value.toUpperCase()
    }
})
/******Famous JS fundamental topics Debouncing and throttling */
let ctr = 0
let getBounce = () => {
    console.log("fetching data" + " " + ctr++);
}
const debounce = function (fun, delay) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        console.log(context, args);
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun.apply(context, args);
            console.log(context, args);
        }, delay)
    }
}
const betterFun = debounce(getBounce, 300);

const expensive = () => {
    console.log("expensive")
}
const throttle = function (fun, limit) {
    let flag = true;
    return function () {
        let context = this,
            args = arguments;
        if (flag) {
            fun.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;

            }, limit)
        }
    }
}

const betterFun2 = throttle(expensive, 500);

/***********sum(1)(2)(3)........() */

let sum = (a) => {
    return (b) => {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}
console.log(sum(1)(2)(3)(4));
function fact(n) {
    if (n === 1)
        return 1;
    else
        return n * fact(n - 1)
}
console.log(fact(6));
console.log("end")
