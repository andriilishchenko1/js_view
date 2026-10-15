// let book = {
//     title:"Кобзар",
//     author:"Тарас Шевченко",
//     year:1840,
//     price:500,
//     Availability:true
// }
// console.log(book)
// console.log(book.title)
let books = [
    { id: 1, title: "Кобзар", author: "Тарас Шевченко", year: 1840, price: 500, isAvailable: true },
    { id: 2, title: "Лісова пісня", author: "Леся Українка", year: 1918, price: 600, isAvailable: true },
    { id: 3, title: "Тигролови", author: "Іван Багряний", year: 1944, price: 450, isAvailable: false },
    { id: 4, title: "Місто", author: "Валер'ян Підмогильний", year: 1928, price: 550, isAvailable: true }
]
// console.log(books);
// console.log(books.length);
// console.log(books[1].author);

// for (let book of books) {
//     console.log(`book: ${book.id} - ${book.author}`);
// }
//
// books.forEach(function (book) {
//     console.log(`book: ${book.author}, ${book.isAvailable}`);
// })
// let isAvailableCount = 0;
// let totalPrice = 0;
//
// for (let book of books) {
//     if (book.isAvailable === true) {
//         isAvailableCount++;
//         totalPrice += book.price;
//     }
// }
//
// console.log(totalPrice);
// console.log(isAvailableCount);
//
// books[1].price = 750;
// console.log(books);
//
// books.push({
//     id: 5,
//     title:"Захар Беркут",
//     author:"Іван Франко",
//     year: 1882,
//     price: 500,
//     isAvailable: false
// })
// console.log(books);
//
// let enterId = +prompt("Enter ID");
// let bookFound = null;
//
// for (let book of books) {
//     if (book.id === enterId) {
//         bookFound = book;
//         break;
//     }
// }
// if (bookFound !== null) {
//     let status = "немає у наявності";
//     if (bookFound.isAvailable === true) {
//         status = "У наявності"
//     }
//     alert(`Книга ${bookFound.title}. ${bookFound.price}грн. ${status}`)
// }else{
//     alert("Книжку не знайдено")
// }

//_______________________
let clubs = [
    { id: 1, name: "IT Клуб", category: "IT", price: 10000, members: 120, isAvailable: true },
    { id: 2, name: "Танці", category: "Спорт", price: 800, members: 15, isAvailable: false },
    { id: 3, name: "Counter-Strike 2", category: "Кіберспорт", price: 8900, members: 8000, isAvailable: true },
    { id: 4, name: "Шахи", category: "Спорт", price: 1000, members: 6, isAvailable: false },
    { id: 5, name: "Робототехніка", category: "IT", price: 1200, members: 12, isAvailable: true }
];

let choice;

do {
    choice = prompt(
        "МЕНЮ:\n" +
        "1 - Показати всі гуртки\n" +
        "2 - Знайти гурток за ID\n" +
        "3 - Записати учасника\n" +
        "4 - Змінити статус набору\n" +
        "5 - Додати новий гурток\n" +
        "6 - Показати статистику\n" +
        "0 - Вихід"
    );

    if (choice === null || choice === "0") break;

    switch (choice) {
        case "1":
            let text = "";
            clubs.forEach(club => {
                text += `ID: ${club.id} | ${club.name} | ${club.price} грн | Учасників: ${club.members} | Набір: ${club.isAvailable ? "Відкрито" : "Закрито"}\n`;
            });
            alert(text || "Каталог порожній");
            break;

        case "2":
            let searchId = +prompt("Введіть ID гуртка:");
            let found = null;

            for (let club of clubs) {
                if (club.id === searchId) {
                    found = club;
                    break;
                }
            }

            if (found) {
                alert(`Знайдено: ${found.name}, Напрям: ${found.category}, Ціна: ${found.price} грн, Учасників: ${found.members}, Статус: ${found.isAvailable ? "Відкрито" : "Закрито"}`);
            } else {
                alert("Помилка: неіснуючий ID");
            }
            break;

        case "3":
            let idRegister = +prompt("Введіть ID гуртка для запису:");
            let clubRegister = null;

            for (let club of clubs) {
                if (club.id === idRegister) {
                    clubRegister = club;
                    break;
                }
            }

            if (!clubRegister) {
                alert("Помилка: неіснуючий ID!");
                break;
            }
            if (!clubRegister.isAvailable) {
                alert("Набір до цього гуртка закрито");
                break;
            }

            if (confirm("Підтвердити запис учасника?")) {
                clubRegister.members++;
                alert("Успішно! Дані оновлено");
            }
            break;

        case "4":
            let idStatus = +prompt("Введіть ID гуртка для зміни:");
            let clubStatus = null;

            for (let club of clubs) {
                if (club.id === idStatus) {
                    clubStatus = club;
                    break;
                }
            }

            if (!clubStatus) {
                alert("Помилка: неіснуючий ID");
                break;
            }

            if (confirm("Змінити статус набору на протилежний?")) {
                clubStatus.isAvailable = !clubStatus.isAvailable;
                alert(`Статус змінено на: ${clubStatus.isAvailable ? "Відкрито" : "Закрито"}`);
            }
            break;

        case "5":
            let name = prompt("Введіть назву гуртка:");
            if (!name) {
                alert("Помилка: пуста назва");
                break;
            }

            let category = prompt("Введіть напрям:");
            if (!category) {
                alert("Помилка: порожній напрям!");
                break;
            }

            let price = +prompt("Введіть ціну (грн):");
            if (price < 0 || isNaN(price)) {
                alert("Помилка: невірна ціна");
                break;
            }

            let members = +prompt("Введіть кількість учасників:");
            if (members < 0 || isNaN(members)) {
                alert("Помилка: від'ємна кількість учасників");
                break;
            }

            let newId = clubs.length > 0 ? clubs[clubs.length - 1].id + 1 : 1;

            clubs.push({
                id: newId,
                name: name,
                category: category,
                price: price,
                members: members,
                isAvailable: true
            });
            alert("Гурток успішно додано до каталогу!");
            break;

        case "6":
            if (clubs.length === 0) {
                alert("Каталог порожній.");
                break;
            }
            let availableCount = 0;
            let totalMembers = 0;
            let totalPrice = 0;

            clubs.forEach(club => {
                if (club.isAvailable) availableCount++;
                totalMembers += club.members;
                totalPrice += club.price;
            });

            let avgPrice = totalPrice / clubs.length;
            alert(
                `Статистика:\n` +
                `Всього гуртків: ${clubs.length}\n` +
                `З відкритим набором: ${availableCount}\n` +
                `Сумарно учасників: ${totalMembers}\n` +
                `Середня ціна: ${avgPrice.toFixed(2)} грн`
            );
            break;

        default:
            alert("Помилка: неправильний пункт меню!");
    }
} while (true);
//_______________________

