let news = [
    {
        category: "JS",
        title: "JS оживляє сторінку",
        description: 'DOM...',
        date: '12.11.2026'
    },
    {
        category: "Design",
        title: "Дизайн важливий",
        description: 'Чому картки важливі',
        date: '20.10.2026'
    }
]
let newsList = document.querySelector('#news-list');
let newsCount = document.querySelector('#news-count');

function addNews(items) {
    newsList.innerHTML = '';
    for (let item of items) {
        let card = document.createElement("article");
        card.classList.add("news-card");

        let tag = document.createElement("span");
        tag.classList.add("tag");
        tag.textContent = item.title;

        let title = document.createElement("h2");
        title.textContent = item.category;

        let description = document.createElement("p");
        description.textContent = item.description;

        let date = document.createElement("p");
        description.textContent = item.date;

        card.append(tag, title, description, date);
        newsList.append(card);

    }
    newsCount.textContent = items.length;

    allButton.addEventListener("click", function (){
        renderNews(news)
    });

    jsButton.addEventListener("click", function (){
        let jsNews = news.filter(function (items){
            return item.cayegory === "JS"
        });
        renderNews(jsNews);
    })
}
addNews(news);

let allButton = document.querySelectorAll('#show-all');
let jsButton = document.querySelectorAll('#show-js');
let designButton = document.querySelectorAll('#show-design');