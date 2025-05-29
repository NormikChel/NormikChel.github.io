// Получаем элементы
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
// Функция для применения сохраненной темы при загрузке страницы
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme); // Применяем сохраненную тему
    } else {
        body.classList.add('light-theme'); // Устанавливаем светлую тему по умолчанию
    }
}
// Событие для переключения темы
themeToggleButton.addEventListener('click', () => {
    // Проверяем текущую тему и переключаем её
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
// Применяем сохраненную тему при загрузке
applySavedTheme();
