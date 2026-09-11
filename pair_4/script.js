// for (let i = 1, i<=10; i++){
//     console.log(i);
// }
//
// for (let i = 20; i > 0; i--){
//     console.log(i);
// }
// let count = 0;
// for (let i = 20; i > 0; i--) {
//     count += i
// }
// console.log(count)

// let sum = 0
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum += i
//     }
// }
// console.log(sum)
//_______________________________
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sum += i
//     }
// }
// console.log(sum)
//____________________________
// for (let i = 1; i <= 100; i++) {
//     if (i > 25 && i % 4 === 0 && i% 6 === 0) {
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1; i <= 30; i++){
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// let student = +prompt("К-кість учнів ");
// let sum = 0, goodGrade = 0, badGrade = 0, maxGrade = 12, minGrade = 1;
// for (let i = 1; i <= student; i++) {
//     let grade = +prompt("Введіть оцінку учня номер" + i)
//     if (!(grade >= 1 && grade <= 12)) {
//         alert("Error")
//         i--;
//         continue;
//     }
//
//     sum += grade;
//     if(i >= 7){
//         goodGrade ++;
//     } else {
//         badGrade ++;
//     }
//     if (grade > maxGrade){
//         maxGrade = grade
//     }
//     if (grade < minGrade){
//         minGrade = grade
//     }
// }
// console.log(sum);
// console.log(goodGrade);
// console.log(badGrade);
// console.log(maxGrade);
// console.log(minGrade);

//______________________________
let student = +prompt("К-кість учасників:");
let sum = 0, high = 0, mid = 0, maxGrade = 0, low = 0, minGrade = 100, first100 = 0;

for (let i = 1; i <= student; i++) {
    let grade = +prompt("Введіть оцінку учасника номер " + i);

    if (!(grade >= 0 && grade <= 100)) {
        alert("Error");
        i--;
        continue;
    }

    sum += grade;
    if (grade >= 90) {
        high++;
    } else if (grade >= 60) {
        mid++;
    } else {
        low++;
    }

    if (grade > maxGrade) {
        maxGrade = grade;
    }
    if (grade < minGrade) {
        minGrade = grade;
    }

    if (grade === 100 && first100 === 0) {
        first100 = i;
    }
}

let avg = sum / student;
console.log(avg);
console.log(high);
console.log(mid);
console.log(low);
console.log(maxGrade);
console.log(minGrade);
console.log(first100);
//______________________________