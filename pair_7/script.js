// function name(аргументи){
//     код
// }
// function hello() {
//     alert("Hello World!");
// }
// hello();
// hello();
// hello();
// hello();
// function showInfo(name, price = "Немає у наявності", count) {
//     console.log("Магазин у Сані")
//     console.log("Графік роботи: 08:00 - 21:00")
//     console.log(`Товар ${name}, ${price}грн`)
//     console.log(`Сумадо оплати: ${count * price}`)
// }
// showInfo("зелений чай", 100, 4);
// function calculateTotal(price, total) {
//     let suma = price * total, discount, totalSuma;
//     if (suma >= 5000) {
//         discount = 0.1
//     }
//     else {
//         discount = 0
//     }
//     totalSuma = suma * (1 - discount);
//     return totalSuma;
//
// }
//
// let total = calculateTotal(2500, 3)
// console.log(total);

//  function showInfo(name, price = "Немає у наявності", count) {
//      console.log("Магазин у Сані")
//      console.log("Графік роботи: 08:00 - 21:00")}
//
// function getProductTotal(price, count) {
//     return price * count;
// }
//
// function getDiscountPercent(total) {
//     if (total >= 10000) {
//         return 15;
//     }
//     else if (total >= 5000) {
//         return 10;
//     }
//     else if (total >= 2000) {
//         return 5;
//     }
//     else {
//         return 0;
//     }
// }
// function getDiscountValue(total, percent) {
//     return total * percent / 100;
// }
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
// let productName = prompt("Введіть назву товару")
// let productPrice = +prompt("Введіть вартість товару")
// let productCount = +prompt("Введіть к-кість товару")
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscountPercent(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalPrice = getFinalPrice(productTotal, discountValue);
//
// showInfo(productName, productPrice, productCount);
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice} грн.`);
// console.log(`Кількість: ${productCount} шт.`);
// console.log(`Сума: ${productTotal} грн.`);
// console.log(`Знижка: ${discountPercent} %`);
// console.log(`Сума знижки: ${discountValue} грн`);
// console.log(`До сплати: ${finalPrice} грн`);

//_____________________________________________________
// function showTicketInfo(count, price) {
//     console.log("Кінотеатр");
//     console.log("Графік роботи: 10:00 - 22:00");
// }
//
// function calculateTickets(price, count) {
//     return price * count;
// }
//
// function getTicketDiscount(total) {
//     if (total >= 1500) {
//         return 15;
//     }
//     else if (total >= 1000) {
//         return 10;
//     }
//     else if (total >= 500) {
//         return 5;
//     }
//     else {
//         return 0;
//     }
// }
//
// function calculateTicketDiscount(total, percent) {
//     return total * percent / 100;
// }
//
// function calculateTicketFinalPrice(total, discount) {
//     return total - discount;
// }
//
// let ticketPrice = +prompt("Введіть вартість одного квитка");
// let ticketCount = +prompt("Введіть кількість квитків");
//
// let total = calculateTickets(ticketPrice, ticketCount);
// let discountPercent = getTicketDiscount(total);
// let discountValue = calculateTicketDiscount(total, discountPercent);
// let finalPrice = calculateTicketFinalPrice(total, discountValue);
//
// showTicketInfo(ticketCount, ticketPrice);
// console.log(`Ціна квитка: ${ticketPrice} грн.`);
// console.log(`Кількість: ${ticketCount} шт.`);
// console.log(`Сума: ${total} грн.`);
// console.log(`Знижка: ${discountPercent} %`);
// console.log(`Сума знижки: ${discountValue} грн`);
// console.log(`До сплати: ${finalPrice} грн`);
//_____________________________________________________
let login;
let password;

function register() {
    login = prompt("Реєстрація: Введіть Login");
    password = prompt("Реєстрація: Введіть Password");
}

function userLogin() {
    let attempts = 3;

    while (attempts > 0) {
        let inputLogin = prompt(`Вхід: Введіть Login (залишилось спроб: ${attempts})`);
        let inputPassword = prompt("Вхід: Введіть Password");

        if (inputLogin === login && inputPassword === password) {
            alert("Вітаємо! Вхід успішний!");
            return;
        } else {
            attempts--;
            alert(`Невірний логін або пароль!`);
        }
    }

    alert("3 спроби вичерпано!");
}

let choice;

while (choice !== "0") {
    choice = prompt("1 - Реєстрація\n2 - Вхід\n0 - Закрити");

    if (choice === "1") {
        register();
    } else if (choice === "2") {
        userLogin();
    }
}