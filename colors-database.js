/* SB Palette - Database API Functions */

// URL Google Apps Script 
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyQFuGJdsqZVxnsV4j2uOlTY39vS2k7PInnLnAKjfOabilBfHMbpHzIsd8zR049JIbhlg/exec';

// Функция для получения активного типа брони
function getActiveArmorType() {
    const armorButtons = document.querySelectorAll('.armor-type-button');
    for (const button of armorButtons) {
        if (button.classList.contains('active')) {
            return button.getAttribute('data-type');
        }
    }
    return 'all'; // Если ни одна кнопка не активна, возвращаем 'all'
}

// Функция для добавления цвета в коллекцию
async function addColorToCollection(discordId, color, armorType) {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                discordId: discordId,
                color: color,
                armorType: armorType,
            }),
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка при добавлении цвета:', error);
        return { status: 'error', message: 'Ошибка соединения с сервером' };
    }
}

// Функция для поиска цвета в базе данных
async function searchColorInDatabase(color, armorType = 'all') {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'searchColor');
        url.searchParams.append('color', color);
        if (armorType !== 'all') {
            url.searchParams.append('armorType', armorType);
        }
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка при поиске цвета:', error);
        return { status: 'error', message: 'Ошибка соединения с сервером' };
    }
}

// Функция для получения коллекции пользователя
async function getUserCollection(discordId) {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getUserCollection');
        url.searchParams.append('discordId', discordId);
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка при получении коллекции:', error);
        return { status: 'error', message: 'Ошибка соединения с сервером' };
    }
}

// Функция для получения статистики
async function getBasicStatistics() {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getBasicStats');
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка при получении статистики:', error);
        return { status: 'error', message: 'Ошибка соединения с сервером' };
    }
}

// Функция для получения редких цветов
async function getRareColors() {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getRareColors');
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка при получении редких цветов:', error);
        return { status: 'error', message: 'Ошибка соединения с сервером' };
    }
}

// Функция для получения популярных цветов
async function getPopularColors() {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getPopularColors');
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка при получении популярных цветов:', error);
        return { status: 'error', message: 'Ошибка соединения с сервером' };
    }
}

// Функция для получения топа коллекционеров
async function getTopCollectors() {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getTopCollectors');
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка при получении топа коллекционеров:', error);
        return { status: 'error', message: 'Ошибка соединения с сервером' };
    }
}

// Функция для отображения кнопки "У меня есть этот цвет" рядом с результатами поиска
function addIHaveThisColorButton() {
    // Проверяем, что у нас есть результаты поиска
    const resultContainer = document.getElementById('resultContainer');
    if (!resultContainer) return;

    // Создаем кнопку, если она еще не существует
    if (!document.getElementById('addToCollectionBtn')) {
        const enteredColorContainer = document.querySelector('.entered-color-container');
        if (enteredColorContainer) {
            const addButton = document.createElement('button');
            addButton.id = 'addToCollectionBtn';
            addButton.className = 'add-to-collection-btn';
            addButton.innerHTML = '➕ У меня есть этот цвет';
            addButton.addEventListener('click', showAddToCollectionForm);
            
            // Добавляем кнопку в контейнер
            enteredColorContainer.appendChild(addButton);
        }
    }
}

// Показать уведомление об успешном добавлении цвета
function showSuccessNotification() {
    // Проверяем, есть ли уже уведомление на странице
    let notification = document.getElementById('successNotification');
    if (!notification) {
        // Если нет, создаем новое
        notification = document.createElement('div');
        notification.id = 'successNotification';
        notification.className = 'success-notification';
        
        // Добавляем стили для уведомления
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .success-notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #27ae60;
                color: white;
                padding: 15px 20px;
                border-radius: 4px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.3s ease, transform 0.3s ease;
                max-width: 300px;
                text-align: center;
            }
            
            .success-notification.show {
                opacity: 1;
                transform: translateY(0);
            }
            
            .dark-theme .success-notification {
                background-color: #2ecc71;
                color: #2c3e50;
            }
            
            @media (max-width: 768px) {
                .success-notification {
                    bottom: 10px;
                    right: 10px;
                    left: 10px;
                    max-width: none;
                    padding: 10px;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Локализованный текст уведомления
        const currentLanguage = localStorage.getItem('selectedLanguage') || 'ru';
        const message = currentLanguage === 'ru' 
            ? 'Цвет успешно добавлен в вашу коллекцию!' 
            : 'Color has been added to your collection!';
            
        notification.textContent = message;
        
        // Добавляем на страницу
        document.body.appendChild(notification);
    }
    
    // Показываем и скрываем уведомление
    setTimeout(() => {
        notification.classList.add('show');
        
        // Удаляем через 3 секунды
        setTimeout(() => {
            notification.classList.remove('show');
            
            // Удаляем элемент после анимации
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }, 100);
}

// Обновляем функцию showAddToCollectionForm
function showAddToCollectionForm() {
    // Получаем цвет из input
    const hex = document.getElementById('hexInput').value.trim().toUpperCase();
    // Получаем активный тип брони
    const armorType = getActiveArmorType();
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'collection-modal';
    modal.innerHTML = `
        <div class="collection-modal-content">
            <span class="close-modal">&times;</span>
            <h3>${translations[currentLanguage].addToCollection || 'Добавить в коллекцию'}</h3>
            <p>${translations[currentLanguage].addingColor || 'Добавление цвета'}: <span style="color: ${hex};">${hex}</span></p>
            <p>${translations[currentLanguage].armorType || 'Тип брони'}: ${getArmorTypeDisplayName(armorType)}</p>
            <div class="form-group">
                <label for="discordId">${translations[currentLanguage].discordId || 'Discord ID (например, Username#1234)'}</label>
                <input type="text" id="discordId" placeholder="Username#1234" required>
            </div>
            <button id="submitToCollection" class="submit-collection-btn">
                ${translations[currentLanguage].addToCollection || 'Добавить в коллекцию'}
            </button>
            <div id="collectionMessage" class="collection-message"></div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие модального окна
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Обработчик отправки формы
    const submitBtn = modal.querySelector('#submitToCollection');
    submitBtn.addEventListener('click', async () => {
        const discordId = modal.querySelector('#discordId').value.trim();
        if (!discordId) {
            modal.querySelector('#collectionMessage').textContent = 
                translations[currentLanguage].enterDiscordId || 'Пожалуйста, введите Discord ID';
            modal.querySelector('#collectionMessage').style.color = '#e74c3c';
            return;
        }
        
        // Отправляем данные
        const result = await addColorToCollection(discordId, hex, armorType);
        if (result.status === 'success') {
            modal.querySelector('#collectionMessage').textContent = result.message;
            modal.querySelector('#collectionMessage').style.color = '#27ae60';
            
            // Закрываем окно через 2 секунды
            setTimeout(() => {
                document.body.removeChild(modal);
                showSuccessNotification();
            }, 2000);
        } else {
            modal.querySelector('#collectionMessage').textContent = result.message;
            modal.querySelector('#collectionMessage').style.color = '#e74c3c';
        }
    });
}

// Функция для получения отображаемого имени типа брони
function getArmorTypeDisplayName(armorType) {
    const typeNames = {
        'all': translations[currentLanguage].allArmor || 'Все',
        'helmet': translations[currentLanguage].helmet || 'Шлем',
        'chestplate': translations[currentLanguage].chestplate || 'Нагрудник',
        'leggings': translations[currentLanguage].leggings || 'Поножи',
        'boots': translations[currentLanguage].boots || 'Ботинки'
    };
    
    return typeNames[armorType] || armorType;
}

// Добавляем стили для нового интерфейса
function addCollectionStyles() {
    const style = document.createElement('style');
    style.id = 'collection-styles';
    style.textContent = `
        .add-to-collection-btn {
            background-color: #27ae60;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 8px 16px;
            margin-left: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            font-size: 14px;
        }
        
        .add-to-collection-btn:hover {
            background-color: #2ecc71;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .collection-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .collection-modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            width: 400px;
            max-width: 90%;
            position: relative;
        }
        
        .dark-theme .collection-modal-content {
            background-color: #2c3e50;
            color: white;
        }
        
        .close-modal {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 24px;
            cursor: pointer;
            color: #aaa;
        }
        
        .close-modal:hover {
            color: #e74c3c;
        }
        
        .form-group {
            margin: 15px 0;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .form-group input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        .dark-theme .form-group input {
            background-color: #34495e;
            border-color: #2c3e50;
            color: white;
        }
        
        .submit-collection-btn {
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
        }
        
        .submit-collection-btn:hover {
            background-color: #2980b9;
        }
        
        .collection-message {
            margin-top: 15px;
            font-weight: bold;
        }
        
        /* Стили для базовой статистики */
        .basic-stats-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin: 20px 0;
            justify-content: center;
        }
        
        .stats-card {
            background-color: var(--card-bg, white);
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            min-width: 150px;
            text-align: center;
            flex: 1;
        }
        
        .stats-number {
            font-size: 32px;
            font-weight: bold;
            color: var(--primary-color, #3498db);
            margin-bottom: 5px;
        }
        
        .stats-label {
            font-size: 14px;
            color: var(--text-color, #333);
        }
        
        .armor-types {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }
        
        .armor-type-stat {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `;
    
    document.head.appendChild(style);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем стили для нового интерфейса
    addCollectionStyles();
    
    // Проверяем, находимся ли мы на странице базы данных
    if (window.location.pathname.includes('database.html')) {
        console.log('Инициализация страницы базы данных...');
        
        // Обработка статистической вкладки
        const statsTab = document.querySelector('[data-tab="statistics"]');
        if (statsTab) {
            statsTab.addEventListener('click', async () => {
                loadStatistics();
            });
        }
        
        // Загружаем статистику при первом открытии страницы
        if (document.querySelector('#statistics.active')) {
            loadStatistics();
        }
        
        return; // На странице database.html не нужно модифицировать checkColor
    }
    
    // Модифицируем функцию checkColor на основной странице
    if (window.checkColor) {
        const originalCheckColor = window.checkColor;
        window.checkColor = function(armorType = 'all') {
            // Вызываем оригинальную функцию
            originalCheckColor(armorType);
            
            // Добавляем кнопку "У меня есть этот цвет" после обновления результатов
            setTimeout(() => {
                addIHaveThisColorButton();
            }, 100);
        };
    }
});

// Функция инициализации страницы базы данных
function initializeDatabasePage() {
    console.log('Инициализация страницы базы данных...');
    
    // Обработка статистической вкладки
    const statsTab = document.querySelector('[data-tab="statistics"]');
    if (statsTab) {
        statsTab.addEventListener('click', async () => {
            loadAllStatistics();
        });
    }
    
    // Локализация интерфейса в зависимости от языка
    updateDatabasePageLanguage();
}

// Функция загрузки всех типов статистики
async function loadAllStatistics() {
    try {
        showLoader('statsLoader');
        hideMessage('statsMessage');
        
        // Загружаем все типы статистики параллельно
        const [basicStats, rareColors, popularColors, topCollectors] = await Promise.all([
            getBasicStatistics(),
            getRareColors(),
            getPopularColors(),
            getTopCollectors()
        ]);
        
        // Отображаем статистику на странице
        if (basicStats.status === 'success') {
            displayBasicStatistics(basicStats.statistics);
        }
        
        if (rareColors.status === 'success') {
            displayRareColors(rareColors.data);
        } else {
            document.getElementById('rareColorsTable').style.display = 'none';
            showMessage('statsMessage', rareColors.message || 'Ошибка при загрузке редких цветов', 'error');
        }
        
        if (popularColors.status === 'success') {
            displayPopularColors(popularColors.data);
        } else {
            document.getElementById('popularColorsTable').style.display = 'none';
        }
        
        if (topCollectors.status === 'success') {
            displayTopCollectors(topCollectors.data);
        } else {
            document.getElementById('topCollectorsTable').style.display = 'none';
        }
        
    } catch (error) {
        console.error('Ошибка при загрузке статистики:', error);
        showMessage('statsMessage', 'Произошла ошибка при загрузке статистики', 'error');
    } finally {
        hideLoader('statsLoader');
    }
}

// Загрузка статистики
async function loadStatistics() {
    const statsLoader = document.getElementById('statsLoader');
    const statsMessage = document.getElementById('statsMessage');
    const statsContainer = document.getElementById('statsContainer');
    
    // Показываем загрузчик и скрываем сообщение
    statsLoader.style.display = 'block';
    statsMessage.style.display = 'none';
    statsContainer.innerHTML = '';
    
    try {
        // Загружаем все данные параллельно
        const [basicStatsResult, rareColorsResult, popularColorsResult, topCollectorsResult] = await Promise.all([
            getBasicStatistics(),
            getRareColors(),
            getPopularColors(),
            getTopCollectors()
        ]);
        
        // Проверяем результаты и отображаем данные
        if (basicStatsResult.status === 'success' && basicStatsResult.data) {
            displayBasicStatistics(basicStatsResult.data);
        }
        
        if (rareColorsResult.status === 'success' && rareColorsResult.data) {
            displayRareColors(rareColorsResult.data);
        }
        
        if (popularColorsResult.status === 'success' && popularColorsResult.data) {
            displayPopularColors(popularColorsResult.data);
        }
        
        if (topCollectorsResult.status === 'success' && topCollectorsResult.data) {
            displayTopCollectors(topCollectorsResult.data);
        }
        
        if (statsContainer.innerHTML === '') {
            statsMessage.textContent = 'Нет данных для отображения';
            statsMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Ошибка при загрузке статистики:', error);
        statsMessage.textContent = 'Произошла ошибка при загрузке статистики';
        statsMessage.className = 'message error';
        statsMessage.style.display = 'block';
    } finally {
        statsLoader.style.display = 'none';
    }
}

// Отображение базовой статистики
function displayBasicStatistics(stats) {
    const statsContainer = document.getElementById('statsContainer');
    
    // Создаем карточку для базовой статистики
    const basicStatsCard = document.createElement('div');
    basicStatsCard.className = 'stat-card';
    basicStatsCard.innerHTML = `
        <h3>Основная статистика</h3>
        <div class="basic-stats-container">
            <div class="basic-stat">
                <div class="value">${stats.totalEntries}</div>
                <div class="label">Всего записей</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.uniqueUsers}</div>
                <div class="label">Уникальных пользователей</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.uniqueColors}</div>
                <div class="label">Уникальных цветов</div>
            </div>
        </div>
        <h3>По типам брони</h3>
        <div class="basic-stats-container">
            <div class="basic-stat">
                <div class="value">${stats.armorCounts.helmet || 0}</div>
                <div class="label">🎩 Шлемы</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.armorCounts.chestplate || 0}</div>
                <div class="label">👔 Нагрудники</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.armorCounts.leggings || 0}</div>
                <div class="label">👖 Поножи</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.armorCounts.boots || 0}</div>
                <div class="label">👞 Ботинки</div>
            </div>
        </div>
    `;
    
    statsContainer.appendChild(basicStatsCard);
}

// Отображение редких цветов
function displayRareColors(colors) {
    const statsContainer = document.getElementById('statsContainer');
    
    const rareColorsCard = document.createElement('div');
    rareColorsCard.className = 'stat-card';
    rareColorsCard.innerHTML = `
        <h3>Самые редкие цвета</h3>
    `;
    
    const table = document.createElement('table');
    table.className = 'color-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Цвет</th>
                <th>Владельцев</th>
                <th>Тип брони</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    
    const tbody = table.querySelector('tbody');
    
    colors.forEach(color => {
        const row = document.createElement('tr');
        
        const colorCell = document.createElement('td');
        const colorPreview = document.createElement('span');
        colorPreview.className = 'color-preview';
        colorPreview.style.backgroundColor = color.color;
        colorCell.appendChild(colorPreview);
        colorCell.appendChild(document.createTextNode(color.color));
        
        const countCell = document.createElement('td');
        countCell.textContent = color.count;
        
        const armorTypeCell = document.createElement('td');
        armorTypeCell.innerHTML = `${getArmorTypeIcon(color.armorType)} ${getArmorTypeName(color.armorType)}`;
        
        row.appendChild(colorCell);
        row.appendChild(countCell);
        row.appendChild(armorTypeCell);
        
        tbody.appendChild(row);
    });
    
    rareColorsCard.appendChild(table);
    statsContainer.appendChild(rareColorsCard);
}

// Отображение популярных цветов
function displayPopularColors(colors) {
    const statsContainer = document.getElementById('statsContainer');
    
    const popularColorsCard = document.createElement('div');
    popularColorsCard.className = 'stat-card';
    popularColorsCard.innerHTML = `
        <h3>Самые популярные цвета</h3>
    `;
    
    const table = document.createElement('table');
    table.className = 'color-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Цвет</th>
                <th>Владельцев</th>
                <th>Тип брони</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    
    const tbody = table.querySelector('tbody');
    
    colors.forEach(color => {
        const row = document.createElement('tr');
        
        const colorCell = document.createElement('td');
        const colorPreview = document.createElement('span');
        colorPreview.className = 'color-preview';
        colorPreview.style.backgroundColor = color.color;
        colorCell.appendChild(colorPreview);
        colorCell.appendChild(document.createTextNode(color.color));
        
        const countCell = document.createElement('td');
        countCell.textContent = color.count;
        
        const armorTypeCell = document.createElement('td');
        armorTypeCell.innerHTML = `${getArmorTypeIcon(color.armorType)} ${getArmorTypeName(color.armorType)}`;
        
        row.appendChild(colorCell);
        row.appendChild(countCell);
        row.appendChild(armorTypeCell);
        
        tbody.appendChild(row);
    });
    
    popularColorsCard.appendChild(table);
    statsContainer.appendChild(popularColorsCard);
}

// Отображение топа коллекционеров
function displayTopCollectors(collectors) {
    const statsContainer = document.getElementById('statsContainer');
    
    const topCollectorsCard = document.createElement('div');
    topCollectorsCard.className = 'stat-card';
    topCollectorsCard.innerHTML = `
        <h3>Топ коллекционеров</h3>
    `;
    
    const table = document.createElement('table');
    table.className = 'color-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Discord ID</th>
                <th>Количество цветов</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    
    const tbody = table.querySelector('tbody');
    
    collectors.forEach(collector => {
        const row = document.createElement('tr');
        
        const discordIdCell = document.createElement('td');
        discordIdCell.textContent = collector.discordId;
        
        const countCell = document.createElement('td');
        countCell.textContent = collector.count;
        
        row.appendChild(discordIdCell);
        row.appendChild(countCell);
        
        tbody.appendChild(row);
    });
    
    topCollectorsCard.appendChild(table);
    statsContainer.appendChild(topCollectorsCard);
}

// Вспомогательные функции для страницы базы данных
function getArmorTypeIcon(type) {
    const icons = {
        'all': '👤',
        'helmet': '🎩',
        'chestplate': '👔',
        'leggings': '👖',
        'boots': '👞'
    };
    
    return icons[type] || '👤';
}

function getArmorTypeName(type) {
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'ru';
    
    const names = {
        'ru': {
            'all': 'Все',
            'helmet': 'Шлем',
            'chestplate': 'Нагрудник',
            'leggings': 'Поножи',
            'boots': 'Ботинки'
        },
        'en': {
            'all': 'All',
            'helmet': 'Helmet',
            'chestplate': 'Chestplate',
            'leggings': 'Leggings',
            'boots': 'Boots'
        }
    };
    
    return names[currentLanguage][type] || type;
}

// Функция для обновления языка страницы базы данных
function updateDatabasePageLanguage() {
    // Получаем текущий язык из localStorage
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'ru';
    
    // Получаем переводы
    const translations = {
        'ru': {
            'pageTitle': 'SB Palette - База данных цветов',
            'searchTabTitle': 'Поиск по цветам',
            'myCollectionTabTitle': 'Моя коллекция',
            'statisticsTabTitle': 'Статистика',
            'searchHeading': 'Поиск цветов в коллекциях',
            'searchDescription': 'Введите HEX-код цвета для поиска коллекционеров этого цвета',
            'searchInputPlaceholder': 'Введите HEX-код (например, #FFFFFF)',
            'searchButton': 'Найти',
            'collectionHeading': 'Моя коллекция цветов',
            'collectionDescription': 'Введите ваш Discord ID для просмотра вашей коллекции',
            'discordIdPlaceholder': 'Введите ваш Discord ID',
            'loadButton': 'Загрузить',
            'statsHeading': 'Статистика коллекций',
            'statsDescription': 'Информация о наиболее редких и популярных цветах',
            'rareColorsHeading': 'Самые редкие цвета',
            'popularColorsHeading': 'Самые популярные цвета',
            'topCollectorsHeading': 'Топ коллекционеров',
            'backLink': '← Вернуться к палитре цветов',
            'discordIdColumn': 'Discord ID',
            'colorColumn': 'Цвет',
            'armorTypeColumn': 'Тип брони',
            'dateColumn': 'Дата добавления',
            'collectorsCountColumn': 'Кол-во коллекционеров',
            'colorsCountColumn': 'Кол-во цветов',
            'totalEntries': 'Всего записей',
            'uniqueUsers': 'Уникальных пользователей',
            'uniqueColors': 'Уникальных цветов'
        },
        'en': {
            'pageTitle': 'SB Palette - Colors Database',
            'searchTabTitle': 'Search Colors',
            'myCollectionTabTitle': 'My Collection',
            'statisticsTabTitle': 'Statistics',
            'searchHeading': 'Search Colors in Collections',
            'searchDescription': 'Enter a HEX color code to find collectors of this color',
            'searchInputPlaceholder': 'Enter HEX code (e.g., #FFFFFF)',
            'searchButton': 'Search',
            'collectionHeading': 'My Color Collection',
            'collectionDescription': 'Enter your Discord ID to view your collection',
            'discordIdPlaceholder': 'Enter your Discord ID',
            'loadButton': 'Load',
            'statsHeading': 'Collection Statistics',
            'statsDescription': 'Information about the rarest and most popular colors',
            'rareColorsHeading': 'Rarest Colors',
            'popularColorsHeading': 'Most Popular Colors',
            'topCollectorsHeading': 'Top Collectors',
            'backLink': '← Back to Color Palette',
            'discordIdColumn': 'Discord ID',
            'colorColumn': 'Color',
            'armorTypeColumn': 'Armor Type',
            'dateColumn': 'Date Added',
            'collectorsCountColumn': 'Collectors Count',
            'colorsCountColumn': 'Colors Count',
            'totalEntries': 'Total Entries',
            'uniqueUsers': 'Unique Users',
            'uniqueColors': 'Unique Colors'
        }
    };
    
    // Получаем тексты для текущего языка
    const texts = translations[currentLanguage];
    
    // Обновляем заголовок страницы
    document.title = texts.pageTitle;
    const pageHeading = document.querySelector('header h1');
    if (pageHeading) pageHeading.textContent = texts.pageTitle;
    
    // Обновляем заголовки вкладок
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        if (button.getAttribute('data-tab') === 'search') {
            button.textContent = texts.searchTabTitle;
        } else if (button.getAttribute('data-tab') === 'my-collection') {
            button.textContent = texts.myCollectionTabTitle;
        } else if (button.getAttribute('data-tab') === 'statistics') {
            button.textContent = texts.statisticsTabTitle;
        }
    });
    
    // Обновляем тексты в секции поиска
    const searchHeading = document.querySelector('#search h2');
    if (searchHeading) searchHeading.textContent = texts.searchHeading;
    
    const searchDescription = document.querySelector('#search p');
    if (searchDescription) searchDescription.textContent = texts.searchDescription;
    
    const searchInput = document.getElementById('colorSearchInput');
    if (searchInput) searchInput.placeholder = texts.searchInputPlaceholder;
    
    const searchButton = document.getElementById('colorSearchButton');
    if (searchButton) searchButton.textContent = texts.searchButton;
    
    // Обновляем тексты в секции коллекции
    const collectionHeading = document.querySelector('#my-collection h2');
    if (collectionHeading) collectionHeading.textContent = texts.collectionHeading;
    
    const collectionDescription = document.querySelector('#my-collection p');
    if (collectionDescription) collectionDescription.textContent = texts.collectionDescription;
    
    const discordIdInput = document.getElementById('discordIdInput');
    if (discordIdInput) discordIdInput.placeholder = texts.discordIdPlaceholder;
    
    const loadButton = document.getElementById('loadCollectionButton');
    if (loadButton) loadButton.textContent = texts.loadButton;
    
    // Обновляем тексты в секции статистики
    const statsHeading = document.querySelector('#statistics h2');
    if (statsHeading) statsHeading.textContent = texts.statsHeading;
    
    const statsDescription = document.querySelector('#statistics p');
    if (statsDescription) statsDescription.textContent = texts.statsDescription;
    
    const rareColorsHeading = document.querySelector('#statistics h3:nth-of-type(1)');
    if (rareColorsHeading) rareColorsHeading.textContent = texts.rareColorsHeading;
    
    const popularColorsHeading = document.querySelector('#statistics h3:nth-of-type(2)');
    if (popularColorsHeading) popularColorsHeading.textContent = texts.popularColorsHeading;
    
    const topCollectorsHeading = document.querySelector('#statistics h3:nth-of-type(3)');
    if (topCollectorsHeading) topCollectorsHeading.textContent = texts.topCollectorsHeading;
    
    // Обновляем ссылку "Назад"
    const backLink = document.querySelector('.back-link');
    if (backLink) backLink.textContent = texts.backLink;
    
    // Обновляем заголовки таблиц
    const tableHeaders = document.querySelectorAll('th');
    tableHeaders.forEach(header => {
        if (header.textContent.includes('Discord ID')) {
            header.textContent = texts.discordIdColumn;
        } else if (header.textContent.includes('Цвет') || header.textContent.includes('Color')) {
            header.textContent = texts.colorColumn;
        } else if (header.textContent.includes('Тип брони') || header.textContent.includes('Armor Type')) {
            header.textContent = texts.armorTypeColumn;
        } else if (header.textContent.includes('Дата') || header.textContent.includes('Date')) {
            header.textContent = texts.dateColumn;
        } else if (header.textContent.includes('Кол-во коллекционеров') || header.textContent.includes('Collectors Count')) {
            header.textContent = texts.collectorsCountColumn;
        } else if (header.textContent.includes('Кол-во цветов') || header.textContent.includes('Colors Count')) {
            header.textContent = texts.colorsCountColumn;
        }
    });
    
    // Обновляем тексты в базовой статистике
    const statsLabels = document.querySelectorAll('.stats-label');
    if (statsLabels.length > 0) {
        statsLabels.forEach(label => {
            if (label.textContent.includes('Всего записей') || label.textContent.includes('Total Entries')) {
                label.textContent = texts.totalEntries;
            } else if (label.textContent.includes('Уникальных пользователей') || label.textContent.includes('Unique Users')) {
                label.textContent = texts.uniqueUsers;
            } else if (label.textContent.includes('Уникальных цветов') || label.textContent.includes('Unique Colors')) {
                label.textContent = texts.uniqueColors;
            }
        });
    }
}

// Функция для поиска цвета в коллекциях
async function searchColorInCollections() {
    const colorSearch = document.getElementById('colorSearch');
    const searchLoader = document.getElementById('searchLoader');
    const searchMessage = document.getElementById('searchMessage');
    const searchResults = document.getElementById('searchResults');
    
    const color = colorSearch.value.trim().toUpperCase();
    if (!color.match(/^#?[0-9A-F]{6}$/i)) {
        searchMessage.textContent = 'Введите корректный HEX-код цвета (например, #FF5500)';
        searchMessage.className = 'message error';
        searchMessage.style.display = 'block';
        return;
    }
    
    // Добавляем # если его нет
    const formattedColor = color.startsWith('#') ? color : '#' + color;
    
    searchLoader.style.display = 'block';
    searchMessage.style.display = 'none';
    searchResults.innerHTML = '';
    
    try {
        const result = await searchColorInDatabase(formattedColor);
        
        if (result.status === 'success') {
            if (result.data && result.data.length > 0) {
                // Создаем таблицу для результатов
                const table = document.createElement('table');
                table.className = 'color-table';
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Discord ID</th>
                            <th>Цвет</th>
                            <th>Тип брони</th>
                            <th>Дата добавления</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;
                
                const tbody = table.querySelector('tbody');
                
                result.data.forEach(item => {
                    const row = document.createElement('tr');
                    
                    const discordIdCell = document.createElement('td');
                    discordIdCell.textContent = item.discordId;
                    
                    const colorCell = document.createElement('td');
                    const colorPreview = document.createElement('span');
                    colorPreview.className = 'color-preview';
                    colorPreview.style.backgroundColor = formattedColor;
                    colorCell.appendChild(colorPreview);
                    colorCell.appendChild(document.createTextNode(formattedColor));
                    
                    const armorTypeCell = document.createElement('td');
                    armorTypeCell.innerHTML = `${getArmorTypeIcon(item.armorType)} ${getArmorTypeName(item.armorType)}`;
                    
                    const dateCell = document.createElement('td');
                    dateCell.textContent = formatDate(new Date(item.dateTime));
                    
                    row.appendChild(discordIdCell);
                    row.appendChild(colorCell);
                    row.appendChild(armorTypeCell);
                    row.appendChild(dateCell);
                    
                    tbody.appendChild(row);
                });
                
                searchResults.appendChild(table);
            } else {
                searchMessage.textContent = `Цвет ${formattedColor} не найден в коллекциях`;
                searchMessage.className = 'message';
                searchMessage.style.display = 'block';
            }
        } else {
            searchMessage.textContent = result.message || 'Ошибка при поиске цвета';
            searchMessage.className = 'message error';
            searchMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Ошибка при поиске цвета:', error);
        searchMessage.textContent = 'Произошла ошибка при поиске';
        searchMessage.className = 'message error';
        searchMessage.style.display = 'block';
    } finally {
        searchLoader.style.display = 'none';
    }
}

// Функция для загрузки коллекции пользователя
async function loadUserCollection() {
    const discordIdInput = document.getElementById('discordIdInput');
    const collectionLoader = document.getElementById('collectionLoader');
    const collectionMessage = document.getElementById('collectionMessage');
    const collectionResults = document.getElementById('collectionResults');
    
    const discordId = discordIdInput.value.trim();
    if (!discordId) {
        collectionMessage.textContent = 'Введите ваш Discord ID';
        collectionMessage.className = 'message error';
        collectionMessage.style.display = 'block';
        return;
    }
    
    collectionLoader.style.display = 'block';
    collectionMessage.style.display = 'none';
    collectionResults.innerHTML = '';
    
    try {
        const result = await getUserCollection(discordId);
        
        if (result.status === 'success') {
            if (result.data && result.data.length > 0) {
                // Создаем таблицу для результатов
                const table = document.createElement('table');
                table.className = 'color-table';
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Цвет</th>
                            <th>Тип брони</th>
                            <th>Дата добавления</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;
                
                const tbody = table.querySelector('tbody');
                
                result.data.forEach(item => {
                    const row = document.createElement('tr');
                    
                    const colorCell = document.createElement('td');
                    const colorPreview = document.createElement('span');
                    colorPreview.className = 'color-preview';
                    colorPreview.style.backgroundColor = item.color;
                    colorCell.appendChild(colorPreview);
                    colorCell.appendChild(document.createTextNode(item.color));
                    
                    const armorTypeCell = document.createElement('td');
                    armorTypeCell.innerHTML = `${getArmorTypeIcon(item.armorType)} ${getArmorTypeName(item.armorType)}`;
                    
                    const dateCell = document.createElement('td');
                    dateCell.textContent = formatDate(new Date(item.dateTime));
                    
                    row.appendChild(colorCell);
                    row.appendChild(armorTypeCell);
                    row.appendChild(dateCell);
                    
                    tbody.appendChild(row);
                });
                
                collectionResults.appendChild(table);
            } else {
                collectionMessage.textContent = `Коллекция пользователя ${discordId} пуста`;
                collectionMessage.className = 'message';
                collectionMessage.style.display = 'block';
            }
        } else {
            collectionMessage.textContent = result.message || 'Ошибка при загрузке коллекции';
            collectionMessage.className = 'message error';
            collectionMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Ошибка при загрузке коллекции:', error);
        collectionMessage.textContent = 'Произошла ошибка при загрузке коллекции';
        collectionMessage.className = 'message error';
        collectionMessage.style.display = 'block';
    } finally {
        collectionLoader.style.display = 'none';
    }
}

// Функция для отображения формы добавления цвета в коллекцию
function showAddToCollectionForm(color, armorType) {
    // Проверяем, существует ли модальное окно, если нет - создаем
    let modal = document.getElementById('addToCollectionModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'addToCollectionModal';
        modal.className = 'modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <h2>Добавить цвет в коллекцию</h2>
                <p>Введите ваш Discord ID для добавления цвета в коллекцию:</p>
                <div class="color-preview" id="modalColorPreview"></div>
                <input type="text" id="modalDiscordId" placeholder="Ваш Discord ID">
                <div id="collectionMessage" class="message" style="display: none;"></div>
                <button id="addToCollectionButton">Добавить</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Добавляем стили для модального окна
        const style = document.createElement('style');
        style.textContent = `
            .modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
            }
            
            .modal-content {
                background-color: var(--card-bg);
                margin: 15% auto;
                padding: 20px;
                border-radius: 8px;
                width: 80%;
                max-width: 500px;
                position: relative;
            }
            
            .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 28px;
                font-weight: bold;
                color: var(--text-color);
                cursor: pointer;
            }
            
            .modal input {
                width: 100%;
                padding: 10px;
                margin: 10px 0;
                border: 1px solid var(--border-color);
                border-radius: 4px;
                font-size: 16px;
            }
            
            .modal button {
                padding: 10px 20px;
                background-color: var(--accent-color);
                color: white;
                border: none;
                border-radius: 4px;
                font-size: 16px;
                cursor: pointer;
                margin-top: 10px;
            }
            
            .modal button:hover {
                background-color: var(--accent-hover-color);
            }
        `;
        
        document.head.appendChild(style);
        
        // Добавляем обработчики событий
        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Устанавливаем значения в модальном окне
    const colorPreview = modal.querySelector('#modalColorPreview');
    colorPreview.style.backgroundColor = color;
    
    const addButton = modal.querySelector('#addToCollectionButton');
    addButton.onclick = async function() {
        const discordId = modal.querySelector('#modalDiscordId').value.trim();
        const messageElement = modal.querySelector('#collectionMessage');
        
        if (!discordId) {
            messageElement.textContent = 'Введите ваш Discord ID';
            messageElement.className = 'message error';
            messageElement.style.display = 'block';
            return;
        }
        
        // Добавляем цвет в коллекцию
        const result = await addColorToCollection(discordId, color, armorType);
        
        if (result.status === 'success') {
            messageElement.textContent = result.message || 'Цвет успешно добавлен в коллекцию';
            messageElement.className = 'message success';
            messageElement.style.display = 'block';
            
            // Показываем уведомление
            showSuccessNotification();
            
            // Закрываем модальное окно через 2 секунды
            setTimeout(function() {
                modal.style.display = 'none';
            }, 2000);
        } else {
            messageElement.textContent = result.message || 'Ошибка при добавлении цвета';
            messageElement.className = 'message error';
            messageElement.style.display = 'block';
        }
    };
    
    // Показываем модальное окно
    modal.style.display = 'block';
}

// Функция для форматирования даты
function formatDate(date) {
    const language = localStorage.getItem('language') || 'ru';
    
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    const locale = language === 'en' ? 'en-US' : 'ru-RU';
    return date.toLocaleDateString(locale, options);
} 