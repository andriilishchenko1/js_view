// let age = Number(prompt("Enter your age"));
// let register = confirm("Are you registered?");
// if (age >= 18 && register === true) {
//     alert("Welcome");
// }else{
//     alert("Enter failed");
// }
//

// let accessLevel = prompt("What is your access level?");
// if (accessLevel === 'admin' || accessLevel === 'teacher') {
//     alert("Welcome")
// } else{
//     alert("u r not welcome");
// }

// let registration = confirm("Are you registered?");
// if (registration) {
//     let age = Number("Enter ur age");
//     if (age >= 18) {
//         alert("Access confirmed")
//     }
//
// }
// else{
//     alert("Access denied")
// }

// let grade = Number(prompt("Enter your grade"));
// if (grade >= 90 ){
//     alert("awesome");
// }else if (grade >= 70 && grade <= 60){
//     alert('fine')
// }else if (grade <= 59){
//     alert('stupid')
// }
//

// let role = prompt("What is your role?");
// let sub, block;
//
// if (role === "teacher") {
//     block = confirm("Is your account blocked?");
//     if (!block) {
//         alert("Welcome Teacher");
//     } else {
//         alert("access denied");
//     }
// } else if (role === "student") {
//     block = confirm("Is your account blocked?");
//     if (!block) {
//         sub = confirm("Do you have sub?");
//         if (sub) {
//             alert("Welcome student");
//         } else {
//             alert("access denied");
//         }
//     } else {
//         alert("access denied");
//     }
// } else {
//     alert("demo version");
// }


const sale1=0.1
let name=prompt("Назва товару?");
let count=Number(prompt("Кількість товару?"));
let price = Number(prompt("Ціна товару?"));
let sign=confirm("Are you signed in?")
let promo=prompt("Have promo?")
const promo2='sale';
let VIP=confirm("status?")
if (price*count>=1000 &&sign === true &&(promo===promo2 || VIP===true)){
    alert(`Price with sale:${price*count*(1-sale1)}$`)
} else{
    alert(`No sale price ${price*count}$`)
}
