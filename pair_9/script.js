let price = [12, 5, 45, 78, 9];
// const price2 = [120, 15, 455, 738, 129];

// console.log(price2[2]);
//
// price[1] = 30;
// console.log(price2);
//
// console.log(price.length);//к-кість елементів списку
//
// let sum = 0
//  for(let i = 0; i < price.length; i++) {
//      sum += price[i];
//      if (price [i] % sum === 0) {
//          console.log(price[i]);
//      }
//  }
//  console.log(sum)


// function countLimit(prices, limit) {
//     let count = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > limit) {
//             count++;
//         }
//     }
//     return count;
// }
//
// let prices = [50, 45, 30, 100, 55];
// let limit = 50;
//
// console.log(countLimit(prices, limit));

//_______________________________________
// function getAverage(prices) {
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i];
//     }
//     return sum / prices.length;
// }
//
// let prices = [100, 981, 129, 5]
//
// console.log(getAverage(prices));\

//______________________________________

function getUserSum() {
    let count = Number(prompt("Введіть кількість елементів:"));
    let numbers = [];
    let sum = 0;

    for (let i = 0; i < count; i++) {
        numbers[i] = +prompt("Введіть число " + (i + 1));
    }

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(numbers);
    console.log(sum);
}

getUserSum();