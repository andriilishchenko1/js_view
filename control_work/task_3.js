let correctPin = 2026;
let attempts = 3;
while (attempts > 0) {
    let enterPin = +prompt("введіть пароль");
    if (enterPin === correctPin) {
        console.log("Доступ дозволено")
        break;
    } else{ attempts = attempts - 1;
    if (attempts > 0) {
        console.log("Залишилося " + attempts + " спроб");
    } else {
        console.log("Доступ заблоковано")
    }
    }


}