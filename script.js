// Получаем элементы
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
// Проверяем предпочтение темы пользователя при загрузке страницы
function applySavedTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
    }
}
// Событие для переключения темы
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    // Сохраняем выбранную тему в localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// Применяем сохраненную тему при загрузке
applySavedTheme();
