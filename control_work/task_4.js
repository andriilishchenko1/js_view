for (let i = 1; i <= 7; i++) {
    let hours = +prompt("Введіть кількість годин стоянки (авто " + i + "):");

    if (hours === 0) {
        break;
    }

    if (hours < 0 || hours > 12) {
        continue;
    }

    let carType = +prompt("Введіть тип автомобіля (1 — звичайний, 2 — електромобіль):");
    if (carType !== 1 && carType !== 2) {
        console.log("Error")
    }
    let price = 40;
    if (carType === 2) {
        price = 30;
    }
}