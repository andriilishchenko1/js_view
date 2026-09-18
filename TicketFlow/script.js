let processed = 0;
let freeCount = 0;
let discountCount = 0;
let fullPriceCount = 0;
let totalSum = 0;

let eventType = +prompt("Оберіть тип події:\n"+"1 - кіно\n"+"2 - театр\n"+"3 - концерт");
while(eventType !==1 && eventType !== 2 && eventType !== 3) {
    alert("Невибрана правильна подія");
    eventType = +prompt("Оберіть тип події:\n1-кіно\n2 - театр\n3 - концерт");
}

let basePrice = 0
switch(eventType) {
    case 1:
        basePrice = 150;
        break;
    case 2:
        basePrice = 220;
        break;
    case 3:
        basePrice = 350;
        break;
}

let dayType = +prompt("Оберіть день: \n"+"1 - будній "+"2 - вихіний")
while (dayType !== 1 && dayType !== 2) {
    alert("Некоректний тип дня!");
    dayType = +prompt("Оберіть день: \n"+"1 - будній "+"2 - вихіний");
}

if (dayType === 2) {
    basePrice = basePrice * 1.15;
}
let ticketCount = +prompt("введіть к-кість квитків(1-6)")
while (ticketCount < 1 && ticketCount > 6) {
    alert("неправильна к-кість квитків")
    ticketCount = +prompt("введіть к-кість квитків(1-6)")
}

for (let i = 1; i <= ticketCount; i++) {
    let age = +prompt("Квиток №" + i + " Введіть вік відвідувача");

    if (age === -1) {
        break;
    }

    while (!(age >= 0 && age <= 130)) {
        alert("Некоректний вік!");
        age = +prompt("Квиток №" + i + " Введіть вік відвідувача");

        if (age === -1) {
            break;
        }
    }

    if (age === -1) {
        break;
    }

    processed++;

    let price = basePrice;

    if (age >= 0 && age <= 5) {
        freeCount++;
        continue;
    } else if (age >= 6 && age <= 12) {
        price = price * 0.5;
        discountCount++;
    } else if (age >= 13 && age <= 17) {
        price = price * 0.8;
        discountCount++;
    } else if (age >= 18 && age <= 59) {
        if (age >= 18 && age <= 25) {
            let isStudent = prompt("Чи є студентський квиток? (так/ні)");

            if (isStudent === "так") {
                price = price * 0.9;
                discountCount++;
            } else {
                fullPriceCount++;
            }
        } else {
            fullPriceCount++;
        }
    } else if (age >= 60) {
        price = price * 0.75;
        discountCount++;
    }

    totalSum += price;
}
if (totalSum > 1000) {
    totalSum = totalSum * 0.95;
}
console.log("Квитків" + processed);
console.log("Безкоштовні" + freeCount);
console.log("Зі знижкою" + discountCount);
console.log("Повна ціна" + fullPriceCount);
console.log("Загалальна сума" + totalSum);