let age = +prompt("ВВедіть ваш вік");
let dayType = +prompt("Введіть тип дня(1 — будній, 2 — вихідний)");
let basePrice;
if (dayType !== 1 && dayType !== 2 ) {
    console.log("Помилка: неправильний тип дня");
}else{
    if (dayType === 1) {
        basePrice = 200;
    }else {
        basePrice = 250;
    }
}
let finalPrice = basePrice;
if (age <= 7){
    finalPrice = 0;
}else if(age >= 8 && age <= 17){
    finalPrice = basePrice * 0.5;
}else if(age >= 18 && age <= 59) {
    finalPrice = basePrice;
}else if (age >= 60) {
    finalPrice = basePrice * 0.6;
}
console.log("Вік:" + age);
console.log("День:" + dayType);
console.log("Результат:" + finalPrice);