let student = +prompt("Введіть к-кість учнів")
let sum = 0, goodGrade = 0, badGrade = 0, maxGrade = 0, avgGrade = 0, grade = 0;
for (let i = 1; i <= student; i++) {
    grade = +prompt("Введіть оцінку учасника номер " + i);

    sum += grade;

    if (grade >= 7) {
        goodGrade ++;
    } else {
        badGrade++;
    }

    if (grade > maxGrade) {
        maxGrade = grade;
    }
}

if (student > 0) {
    avgGrade = sum / student;
}
console.log("Сума: " + sum);
console.log("Середня: " + avgGrade);
console.log("Оцінок 7 і вище: " + goodGrade);
console.log("Оцінок нижче 7: " + badGrade);
console.log("Найбільша оцінка: " + maxGrade);