// let num=1;
// while (num<=5){
//     console.log(num);
//     num++
// }
// let userNumber = +prompt("Enter your number");
// while (userNumber < 1 || userNumber>10) {
//     userNumber = +prompt("Error. Enter your number");
//     console.log("Error");
// }
// console.log(userNumber);

// console.log(Number("7"))
// console.log(Number("Hello"))

// let age=+prompt("Enter your age");
// while(Number.isNaN(age) || age<=0 || age>=100){
//     age = +prompt("Error. Enter your age");
// }
// console.log(age);

// const correctPin = 1234;
// // let userPin = +prompt('Enter a valid pin');
// let attempts = 1;
//
// while (correctPin !== userPin && attempts < 3) {
//     userPin = +prompt('Error.Enter a valid pin');
//     attempts++;
// }
// if (userPin === correctPin){
//     console.log("Welcome");
// }
// else{
//     console.log("Заблоковано");
// }
// while (attempts <= 3) {
//     let userPin = +prompt('Enter a valid pin');
//     if (userPin === correctPin) {
//         console.log('You entered a valid pin');
//         break;
//     }
//     console.log('error pin');
//     attempts++;
// }

// let menuChoice;
//
// do{
//     menuChoice = prompt(`What is your choice? \n
//     1 = переглянути профіль\n
//     2 = налаштування\n
//     3 = статистика\n
//     0 = вийти`);
//     if (menuChoice === "1"){
//         console.log("Відкриваємо профіль")
//     }else if (menuChoice === "2"){
//         console.log("Відкриваємо налаштування")
//     }else if (menuChoice === "3"){
//         console.log("Відкриваємо статистику")
//     }else if (menuChoice === "0"){
//         console.log("Вийти")
//     }else {
//         console.log("вибір не правильний")
//     }
// } while (menuChoice !== "0");


//______________________________
// let menuChoice, text;
// do{
//     menuChoice= prompt("Оберіть дію:\n"+
//         "1 - Профіль\n"+"2 - налаштування\n"+"0 - вихід");
//     switch(menuChoice){
//         case "1":
//             text="Переглянути профіль";
//             break;
//         case "2":
//             text="налаштування";
//             break;
//         case "0":
//             text="Вийти";
//             break;
//     }
//     alert(text)
// }
// while(menuChoice!=="0");
//______________________________


// let count = 0;
// let sum = 0;
// while (count < 5) {
//     let grade = +prompt(`Введи оцінку № ${count + 1}`);
//     if (!Number.isInteger(grade) || grade < 1 || grade > 12) {
//         alert("Не коректна оцінка, введи ще раз")
//         continue
//     }
//     sum += grade;
//     count ++;
// }
// console.log(sum);
// console.log(sum / 5);

// let questionsNumber = 1, score = 0;
// while (questionsNumber <= 5) {
//     let questions = '', correctAnswer = '';
//     switch (questionsNumber) {
//         case 1:
//             questions = "Ключове слово для створення змінної";
//             correctAnswer = 'let';
//             break;
//         case 2:
//             questions = 'оператор and';
//             correctAnswer = '&&';
//             break;
//         case 3:
//             questions = "оператор or";
//             correctAnswer = '||';
//             break;
//         case 4:
//             questions = 'яка зупинити цикл? ';
//             correctAnswer = 'break';
//             break;
//         case 5:
//             questions = 'Строга рівність позначається'
//             correctAnswer = '===';
//             break;
//     }
//     let answer = prompt(`Запитання № ${questionsNumber} із 5\n ${questionsNumber}`);
//     if (answer === ""){
//         console.log("Відповідь не може бути пуста")
//         continue;
//     }
//     else if (answer === correctAnswer){
//         alert("Вірно")
//         score++
//     }
//     else{
//         alert("Не вірно")
//     }
//     questionsNumber++
// }
// if (score===5){
//     alert("Харооош")
// }
// else if(score>=3){
//     alert("Норм")
// }
// else{
//     alert("Біда")
// }

//______________________________
let age = +prompt("Введіть ваш вік:");
while (age < 12 || age > 90) {
    alert("Некоректний вік!");
    age = +prompt("Введіть ваш вік:");
}

let pinAttempts = 0;
let isAccessGranted = false;

while (pinAttempts < 3) {
    let pin = +prompt("Введіть PIN:");
    pinAttempts++;

    if (pin === 4321) {
        isAccessGranted = true;
        alert("Доступ дозволено!");
        break;
    } else {
        alert("Невірний PIN");
    }
}

if (isAccessGranted) {
    let choice;
    do {
        choice = +prompt("Оберіть:" +
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід");

        switch (choice) {
            case 1:
                alert("Особистий кабінет");
                break;
            case 2:
                alert("Повідомлення");
                break;
            case 3:
                alert("Налаштування");
                break;
            case 0:
                alert("Вихід");
                break;
            default:
                alert("Такого пункту немає.");
                break;
        }
    } while (choice !== 0);
} else {
    alert("Доступ заблоковано.");
}
//______________________________