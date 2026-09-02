// alert("привід")
// const name = "Ivan"
// const isStudent = true;
//
// console.log(typeof isStudent); //показує тип змінної
// + -
// * / % **
// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter a number");
// console.log(Number(num1) + Number(num2));
//
// let num3 = 13;
// console.log(typeof String(num3));
//

let productName = prompt("Enter your product name");
let productPrice = +prompt("Enter your product price");
let productCount = +prompt("Enter your product count");
let delivery = +prompt("Enter your delivery");
let discount = +prompt("Enter your discount (%)");
let wallet = +prompt("Enter how much money you have");

let totalPrice = (productPrice * productCount * (1 - discount / 100)) + delivery;

let balance = wallet - totalPrice;

console.log(`Product name: ${productName} на суму: ${totalPrice}`);
console.log(`Remaining balance: ${balance}`);

alert("Product is " + productName +
    "\ntotal price is " + totalPrice +
    "\nRemaining balance: " + balance);