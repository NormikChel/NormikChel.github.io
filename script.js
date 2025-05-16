// Функция для переключения темы (светлая/темная)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Сохранение выбранной темы в localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Восстановление темы из localStorage при загрузке страницы
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
};

// Объект с переводами
const translations = {
    en: {
        title: "Welcome to the World of Minecraft!",
        aboutTitle: "About the Game",
        aboutText: "Minecraft is a wonderful sandbox game where you can build, explore, and survive in an endless world. Create your own adventures and share them with friends!",
        featuresTitle: "Features",
        featuresList: [
            "Open world for exploration",
            "Diverse biomes",
            "Variety of blocks and items",
            "Multiplayer mode"
        ],
        downloadTitle: "Download Minecraft",
        downloadText: "You can download Minecraft from the official website: ",
        reviewsTitle: "Reviews",
        review1: "\"Minecraft is an incredible game! I love building and exploring new worlds!\" - Alien",
        review2: "\"The best pastime with friends!\" - @fan_domer08"
    },
    ru: {
        title: "Добро пожаловать в мир Minecraft!",
        aboutTitle: "О игре",
        aboutText: "Minecraft — это замечательная игра в жанре песочница, где вы можете строить, исследовать и выживать в бесконечном мире.",
        featuresTitle: "Особенности",
        featuresList: [
            "Открытый мир для исследования",
            "Разнообразные биомы",
            "Многообразие блоков и предметов",
            "Мультиплеерный режим"
        ],
        downloadTitle: "Скачать Minecraft",
        downloadText: "Вы можете скачать Minecraft с официального сайта: ",
        reviewsTitle: "Отзывы",
        review1: "\"Minecraft — это невероятная игра!\" - Пришелец",
        review2: "\"Лучшее времяпрепровождение с друзьями!\" - @fan_domer08"
    }
};

// Переменная для хранения текущего языка
let currentLanguage = 'ru';

// Функция для переключения языка
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en'; // Меняем язык
    updateText(); // Обновляем текст
}

// Функция для обновления текста на странице
function updateText() {
    document.querySelector('h1').innerText = translations[currentLanguage].title;
    document.querySelector('#about h2').innerText = translations[currentLanguage].aboutTitle;
    document.querySelector('#about p').innerText = translations[currentLanguage].aboutText;

    const featuresSection = document.querySelector('#features');
    featuresSection.querySelector('h2').innerText = translations[currentLanguage].featuresTitle;
    const featuresList = featuresSection.querySelector('ul');
    featuresList.innerHTML = ''; // Очищаем список
    translations[currentLanguage].featuresList.forEach(feature => {
        const li = document.createElement('li');
        li.innerText = feature;
        featuresList.appendChild(li);
    });

    document.querySelector('#download h2').innerText = translations[currentLanguage].downloadTitle;
    document.querySelector('#download p').innerHTML = translations[currentLanguage].downloadText + 
        '<a href="https://www.minecraft.net" target="_blank">minecraft.net</a>';

    const reviewsSection = document.querySelector('#reviews');
    reviewsSection.querySelector('h2').innerText = translations[currentLanguage].reviewsTitle;
    const reviewBlocks = reviewsSection.querySelectorAll('blockquote');
    reviewBlocks[0].querySelector('p').innerText = translations[currentLanguage].review1;
    reviewBlocks[1].querySelector('p').innerText = translations[currentLanguage].review2;
}

// Добавляем обработчик события для кнопки
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('language-button').addEventListener('click', toggleLanguage);
    updateText(); // Обновляем текст при загрузке страницы
});
