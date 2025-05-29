// Получаем элементы
const themeToggleButton = document.getElementById('theme-button');
const body = document.body;
// Функция для применения сохраненной темы
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add('light-theme'); // Устанавливаем светлую тему по умолчанию
    }
}
// Событие для переключения темы
themeToggleButton.addEventListener('click', () => {
    // Переключаем темы
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light'); // Сохраняем светлую тему
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Сохраняем темную тему
    }
});
// При загрузке страницы применяем сохраненную тему
applySavedTheme();







// Объект для текстов на русском языке
const textsRu = {
    welcome: "Добро пожаловать в мир Minecraft!",
    about: "О игре",
    aboutText: "Minecraft — это замечательная игра в жанре песочница, где вы можете строить, исследовать и выживать в бесконечном мире. Создавайте свои собственные приключения и делитесь ими с друзьями! К сожалению, в этой процветающей игре есть и «НО», которые можно узнать в Internet'е.",
    features: "Особенности",
    featureList: [
        "Открытый мир для исследования",
        "Разнообразные биомы",
        "Многообразие блоков и предметов",
        "Мультиплеерный режим"
    ],
    download: "Скачать Minecraft",
    downloadText: "Вы можете скачать Minecraft с официального сайта: ",
    gallery: "Галерея",
    reviews: "Отзывы",
    review1: '"Minecraft — это невероятная игра! Я люблю строить и исследовать новые миры!" - Пришелец',
    review2: '"Лучшее времяпрепровождение с друзьями. Каждый раз новые приключения, особенно на донатных помойках, по типу FunTime и ReallyWorld! Однозначно 1✪" - @fan_domer08',
    footerDisclaimer: "Информация, представленная на данном сайте, предназначена исключительно для общего ознакомления и не является юридическим, финансовым или иным профессиональным советом."
};
// Объект для текстов на английском языке
const textsEn = {
    welcome: "Welcome to the World of Minecraft!",
    about: "About the Game",
    aboutText: "Minecraft is a wonderful sandbox game where you can build, explore, and survive in an endless world. Create your own adventures and share them with friends!",
    features: "Features",
    featureList: [
        "Open world for exploration",
        "Diverse biomes",
        "Diverse blocks and items",
        "Multiplayer mode"
    ],
    download: "Download Minecraft",
    downloadText: "You can download Minecraft from the official website: ",
    gallery: "Gallery",
    reviews: "Reviews",
    review1: '"Minecraft is an incredible game! I love building and exploring new worlds!" - Alien',
    review2: '"The best pastime with friends. Every time new adventures, especially on donator-themed servers like FunTime and ReallyWorld! Definitely a 1✪" - @fan_domer08',
    footerDisclaimer: "The information presented on this site is intended for general informational purposes only and does not constitute legal, financial, or any other professional advice."
};
// Переменная для текущего языка
let currentLanguage = 'ru';
// Функция для обновления текста на странице
function updateText() {
    document.getElementById('welcome-text').textContent = currentLanguage === 'ru' ? textsRu.welcome : textsEn.welcome;
    document.getElementById('about-header').textContent = currentLanguage === 'ru' ? textsRu.about : textsEn.about;
    document.getElementById('about-text').textContent = currentLanguage === 'ru' ? textsRu.aboutText : textsEn.aboutText;
    document.getElementById('features-header').textContent = currentLanguage === 'ru' ? textsRu.features : textsEn.features;
    const featureList = currentLanguage === 'ru' ? textsRu.featureList : textsEn.featureList;
    const featuresListElement = document.getElementById('features-list');
    featuresListElement.innerHTML = ''; // Очищаем старые элементы
    featureList.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresListElement.appendChild(li);
    });
    document.getElementById('download-header').textContent = currentLanguage === 'ru' ? textsRu.download : textsEn.download;
    document.getElementById('download-text').textContent = currentLanguage === 'ru' ? textsRu.downloadText : textsEn.downloadText;
    document.getElementById('gallery-header').textContent = currentLanguage === 'ru' ? textsRu.gallery : textsEn.gallery;
    document.getElementById('reviews-header').textContent = currentLanguage === 'ru' ? textsRu.reviews : textsEn.reviews;
    document.getElementById('review1').textContent = currentLanguage === 'ru' ? textsRu.review1 : textsEn.review1;
    document.getElementById('review2').textContent = currentLanguage === 'ru' ? textsRu.review2 : textsEn.review2;
    document.getElementById('footer-disclaimer').textContent = currentLanguage === 'ru' ? textsRu.footerDisclaimer : textsEn.footerDisclaimer;
}
// Добавляем обработчик события для переключения языка
document.getElementById('language-button').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru'; // Переключаем язык
    updateText(); // Обновляем текст на странице
});
// Обновляем текст на странице при загрузке
updateText();
