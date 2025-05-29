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
