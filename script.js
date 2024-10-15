// Получаем элементы из DOM
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

// Инициализируем счетчик, загружая его из localStorage, если он там есть
let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

// Обновляем отображение счетчика
clickCountDisplay.textContent = clickCount;

// Добавляем обработчик события на клик кнопки
clickButton.addEventListener('click', () => {
    clickCount++; // Увеличиваем счетчик на 1
    clickCountDisplay.textContent = clickCount; // Обновляем отображение
    
    // Сохраняем новое значение в localStorage
    localStorage.setItem('clickCount', clickCount);
    
    // Создаем смайлик
    const emoji = document.createElement('span');
    emoji.textContent = '😻';
    emoji.classList.add('emoji');
    
    // Позиционируем смайлик по центру кнопки
    clickButton.appendChild(emoji);
    
    // Анимация
    setTimeout(() => {
        emoji.classList.add('fly');
    }, 0); // Убедимся, что добавление класса происходит после добавления элемента

    // Удаляем смайлик после 1 секунды
    setTimeout(() => {
        emoji.remove();
    }, 1000);
});