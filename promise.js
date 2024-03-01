const cart = ["kurta", "lungi", "shirt"];
createOrder(cart).then(function (orderId) {
    console.log(orderId);
    // return orderId;
}).then(function (orderId) {
    return proceedTopay(orderId)
}).then(function (orderInfo) {
    console.log(orderInfo);
}).then(function (order) {
    return showOrderSum(order)
}).then(function (order) {
    console.log(order);
}).then(orderId => {
    return updateWallet(orderId)
}).then(orderId => console.log(orderId))
    .
    catch(function (e) {
        return console.log(e.message);
    });
function createOrder(cart) {
    const pr = new Promise(function (res, rej) {
        if (!validateCart(cart)) {
            const err = new Error("cart not validated")
            rej(err);
        }
        const orderId = "4788787"

        if (orderId) {
            res(orderId);
        }
    });
    console.log(pr);
    return pr;
}
function proceedTopay(orderId) {
    const pr2 = new Promise(function (res, rej) {
        res("successsfull")
    });
    console.log(pr2);
    return pr2;
}
function showOrderSum(order) {
    return new Promise(function (res, rej) {
        res("orders");
    })
}
function updateWallet(orderId) {
    return new Promise(function (res, rej) {
        res("Wallet updated based on order id")
    })
}
function validateCart(cart) {
    return true;
}


const user_url = "https://api.github.com/users/";
async function getData() {
    return "hiii"
}
const data = getData(); console.log(data);

async function getData() {
    try {

        const data = await fetch(user_url);
        const jsonVal = await data.json();
        // console.log(jsonVal);
    }
    catch (e) {
        // console.log(e);
    }
}
getData();

function getData1() {
    return new Promise(function (res, rej) {
        try {
            // fetch(user_url).then((res) => { return res.json() }).then(data => console.log(data));
            // const jsonVal = res(data => data.json());
            // res(json);
            // console.log(data);
        } catch (e) {
            // console.log(e);
        }
    })
}
getData1();

//closures
function x() {
    let a = 5;
    function y() {
        console.log(a);
    }
    return y;
}
var d = x();
console.log(d); d();