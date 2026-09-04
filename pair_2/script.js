// let a, b;
// a = "1";
// b = 1;
//
// console.log(a == b);
// console.log(a === b);

// if(умова){
//     команди;
// }
// let temp = prompt('Enter a temperature');
// let result;
// if (temp <= 0) {
//     result = "Холодно";
// }
// else if (temp >0 && temp <= 17) {
//     result = "норм"
// }
// else if (temp > 17) {
//     result = "жарко"
// }
// alert(result);

//_______________________________________
// let number = prompt('Введіть число');
//
// if (number % 2 === 0) {
//     alert("Парне");
// } else {
//     alert("Непарне");
// }
//_______________________________________

// const login = "admin";
// const password = "12345";
//
// let userLogin = prompt("Enter your username");
// let userPassword = prompt("Enter your password");
//
// if (userLogin === login && userPassword === password) {
//     alert("Віхд дозволений")
// }
// else {
//     alert("невірний пароль або логін")
// }

// courier 200
// post 100
// pickup 0

// let cost, delivery = prompt('Яка доставка');
//
// switch(delivery) {
//     case "courier":
//         cost = 200;
//         break;
//     case "deliver":
//         cost = 100;
//         break;
//     case "pickup":
//         cost = 0;
//         break;
//     default:
//         cost = "n|a";
// }
// console.log(cost);


//_______________________________________
// let day = prompt('Введіть номер дня (1-7)');
// switch(day) {
//     case "1":
//         console.log("Понеділок");
//         break;
//     case "2":
//         console.log("Вівторок");
//         break;
//     case "3":
//         console.log("Середа");
//         break;
//     case "4":
//         console.log("Четвер");
//         break;
//     case "5":
//         console.log("П'ятниця");
//         break;
//     case "6":
//         console.log("Субота");
//         break;
//     case "7":
//         console.log("Неділя");
//         break;
//     default: console.log("помилка");
// }
// console.log(day);
//_______________________________________

//_______________________________________
let productName = prompt("Enter your product name");
let productPrice = +prompt("Enter your product price");
let productCount = +prompt("Enter your product count");
let hasCard = confirm("Чи є у вас дисконтна карта");
let deliveryType = prompt("Enter your delivery type: courier, post or pickup");
let totalPrice = productPrice * productCount;

let discount = 0;
if (totalPrice > 2000) {
    discount = 0.1;
} else if (totalPrice > 1000) {
    discount = 0.05;
}

if (hasCard) {
    discount += 0.1;
}

totalPrice = totalPrice - (totalPrice * discount);

let deliveryCost = 0;
if (deliveryType === "courier") {
    deliveryCost = 200;
} else if (deliveryType === "post") {
    deliveryCost = 100;
}
let grandTotal = totalPrice + deliveryCost;

alert(`Загальна сума: ${grandTotal}`);
//_______________________________________
