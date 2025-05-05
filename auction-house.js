// Глобальные переменные
let apiKey = '';
const API_KEY_STORAGE_KEY = 'hypixel_api_key';
const HYPIXEL_API_BASE_URL = 'https://api.hypixel.net';
const API_KEY_RATE_LIMIT = 300; // 300 запросов за 5 минут

// Примеры предметов (в реальном приложении эти данные будут приходить с API)
const sampleItems = [
    {
        name: "Hypixel Sword",
        id: "HYPIXEL_SWORD",
        rarity: "legendary",
        type: "weapon",
        stats: {
            damage: 100,
            strength: 50,
            critChance: 20,
            critDamage: 150
        },
        description: "Легендарный меч Hypixel",
        lore: "Создан самим Hypixel",
        price: 10000000
    },
    {
        name: "Necron's Armor",
        id: "NECRON_ARMOR",
        rarity: "mythic",
        type: "armor",
        stats: {
            defense: 120,
            health: 200,
            strength: 35,
            intelligence: 50
        },
        description: "Мифическая броня Некрона",
        lore: "Броня, созданная из останков дракона",
        price: 50000000
    },
    {
        name: "Talisman of Power",
        id: "POWER_TALISMAN",
        rarity: "epic",
        type: "accessory",
        stats: {
            strength: 30,
            critDamage: 50,
            speed: 10
        },
        description: "Эпический талисман силы",
        lore: "Увеличивает вашу силу",
        price: 5000000
    }
];

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли сохраненный API ключ
    apiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    
    if (apiKey) {
        // Если ключ есть, проверяем его валидность
        validateApiKey(apiKey)
            .then(isValid => {
                if (isValid) {
                    // Если ключ валидный, показываем интерфейс аукциона
                    document.getElementById('apiKeySection').style.display = 'none';
                    document.getElementById('auctionHouseContent').style.display = 'block';
                } else {
                    // Если ключ невалидный, удаляем его из localStorage
                    localStorage.removeItem(API_KEY_STORAGE_KEY);
                    apiKey = '';
                    
                    // Показываем сообщение об ошибке
                    showApiKeyError(document.documentElement.lang === 'ru' ? 
                        'API ключ недействителен или истек. Пожалуйста, введите новый ключ.' : 
                        'API key is invalid or expired. Please enter a new key.');
                }
            })
            .catch(error => {
                console.error('Error validating API key:', error);
                showApiKeyError(document.documentElement.lang === 'ru' ? 
                    'Ошибка при проверке API ключа. Пожалуйста, попробуйте позже.' : 
                    'Error while validating API key. Please try again later.');
            });
    } else {
        // Добавляем информацию о получении API ключа
        addApiKeyInfo();
    }
    
    // Инициализация обработчиков событий для фильтров
    initFilters();
    
    // Применяем текущую тему
    applyCurrentTheme();
});

// Функция для добавления информации о получении API ключа
function addApiKeyInfo() {
    const apiKeyInfoElement = document.getElementById('apiKeyInfo');
    if (apiKeyInfoElement) {
        const isRussian = document.documentElement.lang === 'ru';
        apiKeyInfoElement.innerHTML = isRussian ? 
            `<p class="api-key-info">Чтобы получить API ключ Hypixel:</p>
            <ol>
                <li>Зайдите на <a href="https://developer.hypixel.net/dashboard" target="_blank">Hypixel Developer Dashboard</a></li>
                <li>Войдите в свой аккаунт</li>
                <li>Найдите раздел "Development Key"</li>
                <li>Нажмите на кнопку "Create API Key"</li>
                <li>Скопируйте сгенерированный ключ</li>
                <li>Вставьте его в поле ввода выше</li>
            </ol>
            <p class="api-limit-warning">⚠️ У API Hypixel есть ограничение на количество запросов в минуту. Обратите внимание на лимит, указанный в вашем Dashboard.</p>` 
            : 
            `<p class="api-key-info">To get your Hypixel API key:</p>
            <ol>
                <li>Go to <a href="https://developer.hypixel.net/dashboard" target="_blank">Hypixel Developer Dashboard</a></li>
                <li>Login to your account</li>
                <li>Find the "Development Key" section</li>
                <li>Click the "Create API Key" button</li>
                <li>Copy the generated key</li>
                <li>Paste it into the input field above</li>
            </ol>
            <p class="api-limit-warning">⚠️ Hypixel API has a rate limit for requests per minute. Check your Dashboard for your specific limit.</p>`;
    }
}

// Функция для проверки валидности API ключа
async function validateApiKey(key) {
   /* try {
        // В реальной реализации следует избегать прямых запросов к API из клиентской части
        // из-за проблем с CORS. Лучше использовать серверный прокси.
        
        // Для целей демонстрации будем просто проверять формат ключа:
        // - UUID формат (8-4-4-4-12 символов)
        const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        const isValidFormat = uuidPattern.test(key);
        
        console.log('API Key validation:', {
            key: key,
            isValidFormat: isValidFormat
        });
        
        // В демо версии принимаем любой ключ в формате UUID
        return isValidFormat;
        
        /* Оригинальная реализация для настоящего API запроса
        // В реальном приложении нужен серверный прокси для этого запроса
        const response = await fetch(`${HYPIXEL_API_BASE_URL}/key?key=${key}`);
        const data = await response.json();
        
        console.log('API response:', data);
        
        // Проверяем, что запрос успешен и ключ действителен
        return data.success === true;
        /
    } catch (error) {
        console.error('API key validation error:', error); */
        return false;
   // }
}

// Функция для отображения ошибки API ключа
function showApiKeyError(message) {
    const errorElement = document.getElementById('apiKeyError');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Функция для применения текущей темы
function applyCurrentTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.className = currentTheme + '-theme';
    
    // Обновляем выбранную опцию в селекте
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        for (let i = 0; i < themeSelect.options.length; i++) {
            if (themeSelect.options[i].value === currentTheme) {
                themeSelect.selectedIndex = i;
                break;
            }
        }
    }
}

// Обработка ввода API ключа
function submitApiKey() {
    const keyInput = document.getElementById('apiKeyInput');
    const key = keyInput.value.trim();
    
    if (key) {
        // Проверяем валидность ключа
        validateApiKey(key)
            .then(isValid => {
                if (isValid) {
                    // Если ключ валидный, сохраняем его и показываем интерфейс аукциона
                    apiKey = key;
                    localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
                    
                    document.getElementById('apiKeySection').style.display = 'none';
                    document.getElementById('auctionHouseContent').style.display = 'block';
                    
                    // Скрываем сообщение об ошибке, если оно было
                    const errorElement = document.getElementById('apiKeyError');
                    if (errorElement) {
                        errorElement.style.display = 'none';
                    }
                    
                    console.log('API Key accepted and saved:', key);
                } else {
                    // Если ключ невалидный, показываем сообщение об ошибке
                    showApiKeyError(document.documentElement.lang === 'ru' ? 
                        'Неверный формат API ключа. Пожалуйста, убедитесь, что вы ввели правильный ключ из Developer Dashboard.' : 
                        'Invalid API key format. Please make sure you entered the correct key from Developer Dashboard.');
                }
            })
            .catch(error => {
                console.error('Error validating API key:', error);
                showApiKeyError(document.documentElement.lang === 'ru' ? 
                    'Ошибка при проверке API ключа. Пожалуйста, попробуйте позже.' : 
                    'Error while validating API key. Please try again later.');
            });
    } else {
        showApiKeyError(document.documentElement.lang === 'ru' ? 
            'Пожалуйста, введите API ключ' : 
            'Please enter an API key');
    }
}

// Функция для редактирования API ключа
function editApiKey() {
    // Показываем снова секцию API ключа
    document.getElementById('apiKeySection').style.display = 'block';
    document.getElementById('auctionHouseContent').style.display = 'none';
    
    // Заполняем поле текущим значением
    document.getElementById('apiKeyInput').value = apiKey;
}

// Инициализация фильтров
function initFilters() {
    const itemTypeFilter = document.getElementById('itemTypeFilter');
    const rarityFilter = document.getElementById('rarityFilter');
    
    // Добавляем обработчики изменения для фильтров
    if (itemTypeFilter) {
        itemTypeFilter.addEventListener('change', applyFilters);
    }
    
    if (rarityFilter) {
        rarityFilter.addEventListener('change', applyFilters);
    }
}

// Применение фильтров
function applyFilters() {
    // В реальном приложении здесь будет логика фильтрации предметов
    // и запрос к API Hypixel с фильтрами
    console.log('Фильтры применены');
}

// Получение случайного предмета
function fetchRandomItem() {
    // Выбираем случайный предмет из нашего списка
    const randomIndex = Math.floor(Math.random() * sampleItems.length);
    const item = sampleItems[randomIndex];
    
    // Отображаем детали предмета
    displayItemDetails(item);
}

// Отображение деталей предмета
function displayItemDetails(item) {
    const container = document.getElementById('itemDetailsContainer');
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    // Создаем HTML для отображения предмета
    const itemHTML = `
        <div class="item-card ${item.rarity}">
            <h3 class="item-name">${item.name}</h3>
            <div class="item-type">${getTranslatedItemType(item.type)}</div>
            <div class="item-rarity">${getTranslatedRarity(item.rarity)}</div>
            <div class="item-stats">
                <h4>${document.documentElement.lang === 'ru' ? 'Характеристики:' : 'Stats:'}</h4>
                <ul>
                    ${Object.entries(item.stats).map(([stat, value]) => `
                        <li><span class="stat-name">${getTranslatedStat(stat)}:</span> ${value}</li>
                    `).join('')}
                </ul>
            </div>
            <div class="item-description">
                <p>${item.description}</p>
                <p class="item-lore">${item.lore}</p>
            </div>
            <div class="item-price">
                <span>${document.documentElement.lang === 'ru' ? 'Цена:' : 'Price:'}</span>
                ${formatPrice(item.price)}
            </div>
        </div>
    `;
    
    container.innerHTML = itemHTML;
}

// Вспомогательные функции для перевода
function getTranslatedItemType(type) {
    if (document.documentElement.lang !== 'ru') return capitalizeFirstLetter(type);
    
    const translations = {
        'weapon': 'Оружие',
        'armor': 'Броня',
        'accessory': 'Аксессуар'
    };
    
    return translations[type] || type;
}

function getTranslatedRarity(rarity) {
    if (document.documentElement.lang !== 'ru') return capitalizeFirstLetter(rarity);
    
    const translations = {
        'common': 'Обычный',
        'uncommon': 'Необычный',
        'rare': 'Редкий',
        'epic': 'Эпический',
        'legendary': 'Легендарный',
        'mythic': 'Мифический'
    };
    
    return translations[rarity] || rarity;
}

function getTranslatedStat(stat) {
    if (document.documentElement.lang !== 'ru') return capitalizeFirstLetter(stat);
    
    const translations = {
        'damage': 'Урон',
        'strength': 'Сила',
        'critChance': 'Шанс крит. удара',
        'critDamage': 'Крит. урон',
        'defense': 'Защита',
        'health': 'Здоровье',
        'intelligence': 'Интеллект',
        'speed': 'Скорость'
    };
    
    return translations[stat] || stat;
}

// Форматирование цены
function formatPrice(price) {
    return price.toLocaleString() + ' монет';
}

// Вспомогательная функция для преобразования первой буквы в верхний регистр
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Функции для Охотника за редкими предметами
// Эти функции интегрируются с новым интерфейсом, добавленным в auction-house.html

// Функция для получения данных аукциона с API Hypixel
async function fetchAuctionData(page = 0) {
    try {
        // Создаем URL для запроса к API
        const url = `${HYPIXEL_API_BASE_URL}/skyblock/auctions?page=${page}&key=${apiKey}`;
        console.log(`Fetching auction data page ${page}...`);
        
        // Делаем запрос к API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API returned status ${response.status}: ${response.statusText}`);
        }
        
        // Получаем данные в формате JSON
        const data = await response.json();
        
        // Проверяем успешность запроса
        if (!data.success) {
            throw new Error(data.cause || 'API request was not successful');
        }
        
        return data;
    } catch (error) {
        console.error('Error fetching auction data:', error);
        throw error;
    }
}

// Функция для поиска редких предметов
async function fetchRareItems() {
    try {
        // Обновляем статус поиска
        const searchStatus = document.getElementById('searchStatus');
        searchStatus.innerHTML = '<span data-lang-ru="Статус: Получение данных..." data-lang-en="Status: Fetching data...">Status: Fetching data...</span> <div class="loading-indicator"></div>';
        
        // Получаем данные аукциона (первую страницу для начала)
        let auctionData = await fetchAuctionData(0);
        let allAuctions = [...auctionData.auctions];
        
        // Если есть дополнительные страницы и кол-во не превышает установленный лимит,
        // получаем их тоже
        const maxPages = Math.min(auctionData.totalPages, 3); // Ограничиваем проверку первыми 3 страницами
        
        searchStatus.innerHTML = `<span data-lang-ru="Статус: Загрузка страницы 1/${maxPages}..." data-lang-en="Status: Loading page 1/${maxPages}...">Status: Loading page 1/${maxPages}...</span> <div class="loading-indicator"></div>`;
        
        // Загружаем остальные страницы
        for (let i = 1; i < maxPages; i++) {
            try {
                searchStatus.innerHTML = `<span data-lang-ru="Статус: Загрузка страницы ${i+1}/${maxPages}..." data-lang-en="Status: Loading page ${i+1}/${maxPages}...">Status: Loading page ${i+1}/${maxPages}...</span> <div class="loading-indicator"></div>`;
                
                const pageData = await fetchAuctionData(i);
                if (pageData.success && pageData.auctions) {
                    allAuctions = [...allAuctions, ...pageData.auctions];
                }
            } catch (error) {
                console.error(`Error fetching page ${i}:`, error);
                // Продолжаем с уже полученными данными
            }
        }
        
        // Обновляем статус
        searchStatus.innerHTML = '<span data-lang-ru="Статус: Анализ данных..." data-lang-en="Status: Analyzing data...">Status: Analyzing data...</span> <div class="loading-indicator"></div>';
        
        // Фильтруем предметы, ищем только нужные нам типы
        const targetItemNames = ['Velvet Top Hat', 'Cashmere Jacket', 'Satin Trousers', 'Oxford Shoes'];
        
        // Соберем все предметы, соответствующие нашим критериям
        const foundItems = [];
        
        for (const auction of allAuctions) {
            const itemName = auction.item_name;
            // Проверяем, содержит ли название предмета одно из целевых имен
            if (targetItemNames.some(target => itemName && itemName.includes(target))) {
                // Добавляем предмет в список найденных
                foundItems.push(auction);
            }
        }
        
        // Сортируем предметы по времени окончания (от ближайшего к дальнему)
        foundItems.sort((a, b) => a.end - b.end);
        
        // Обновляем статус
        const totalFound = foundItems.length;
        searchStatus.innerHTML = `<span data-lang-ru="Статус: Найдено ${totalFound} предметов" data-lang-en="Status: Found ${totalFound} items">Status: Found ${totalFound} items</span>`;
        
        // Отображаем найденные предметы
        if (foundItems.length === 0) {
            // Если ничего не найдено, показываем сообщение
            const resultsContainer = document.getElementById('rareItemsResults');
            if (resultsContainer.childElementCount === 0) {
                resultsContainer.innerHTML = '<div class="no-items-found" data-lang-ru="Предметы не найдены. Попробуйте обновить поиск позже." data-lang-en="No items found. Try refreshing search later.">No items found. Try refreshing search later.</div>';
            }
        } else {
            // Очищаем результаты перед новым поиском
            document.getElementById('rareItemsResults').innerHTML = '';
            
            // Отображаем каждый найденный предмет
            foundItems.forEach(item => {
                // Эта функция определена в auction-house.html
                displayRareItem(item);
            });
        }
        
        // Применяем выбранный язык к новым элементам
        if (typeof updateLanguage === 'function') {
            updateLanguage();
        }
        
        return foundItems;
    } catch (error) {
        console.error('Error searching for rare items:', error);
        const searchStatus = document.getElementById('searchStatus');
        searchStatus.innerHTML = `<span style="color: red;" data-lang-ru="Ошибка: ${error.message}" data-lang-en="Error: ${error.message}">Error: ${error.message}</span>`;
        return [];
    }
}

// Функция для преобразования RGB значений в HEX
function rgbToHex(r, g, b) {
    // Проверяем, передан ли один объект вместо трех параметров
    if (typeof r === 'object' && r !== null) {
        // Если это объект с полями r, g, b
        const rgb = r;
        if (rgb.r === undefined || rgb.g === undefined || rgb.b === undefined) {
            console.error('Invalid RGB object:', rgb);
            return '#000000'; // Возвращаем черный цвет по умолчанию
        }
        r = rgb.r;
        g = rgb.g;
        b = rgb.b;
    }
    
    // Проверяем, что все значения определены
    if (r === undefined || g === undefined || b === undefined) {
        console.error('Invalid RGB values:', r, g, b);
        return '#000000'; // Возвращаем черный цвет по умолчанию
    }
    
    // Преобразуем в HEX
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// Реализация функции для извлечения и анализа цвета предмета
function extractColorInfo(itemLore) {
    if (!itemLore) return null;
    
    try {
        // В формате Hypixel API информация о предмете часто закодирована в NBT или Base64
        // Для этого примера будем искать информацию о цвете в строковом представлении
        
        // Удаляем форматирование Minecraft (§ + код формата)
        const cleanLore = itemLore.replace(/§[0-9a-fklmnor]/g, '');
        
        // Ищем строки с указанием RGB значений
        // Разные шаблоны поиска для гибкости
        let rMatch = cleanLore.match(/R:?\s*(\d+)/i);
        let gMatch = cleanLore.match(/G:?\s*(\d+)/i);
        let bMatch = cleanLore.match(/B:?\s*(\d+)/i);
        
        // Если стандартный шаблон не найден, ищем альтернативные форматы
        if (!rMatch || !gMatch || !bMatch) {
            // Ищем RGB(r,g,b) формат
            const rgbMatch = cleanLore.match(/RGB\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
            if (rgbMatch) {
                rMatch = [null, rgbMatch[1]];
                gMatch = [null, rgbMatch[2]];
                bMatch = [null, rgbMatch[3]];
            }
            
            // Ищем формат "Red: X, Green: Y, Blue: Z"
            if (!rMatch) rMatch = cleanLore.match(/Red:?\s*(\d+)/i);
            if (!gMatch) gMatch = cleanLore.match(/Green:?\s*(\d+)/i);
            if (!bMatch) bMatch = cleanLore.match(/Blue:?\s*(\d+)/i);
        }
        
        // Ищем HEX представление
        let hexMatch = cleanLore.match(/(?:HEX|Color):?\s*(#[0-9A-Fa-f]{6})/i);
        if (!hexMatch) {
            // Пробуем найти без # символа
            const hexNoHashMatch = cleanLore.match(/(?:HEX|Color):?\s*([0-9A-Fa-f]{6})/i);
            if (hexNoHashMatch) {
                hexMatch = [null, '#' + hexNoHashMatch[1]];
            }
        }
        
        // Логируем результаты парсинга для отладки
        console.log("Color parsing results:", {
            rMatch, gMatch, bMatch, hexMatch, cleanLore
        });
        
        // Если найдены RGB значения, создаем информацию о цвете
        if (rMatch && gMatch && bMatch) {
            const r = parseInt(rMatch[1]);
            const g = parseInt(gMatch[1]);
            const b = parseInt(bMatch[1]);
            
            // Проверяем валидность значений
            if (isNaN(r) || isNaN(g) || isNaN(b) || 
                r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
                console.error("Invalid RGB values:", r, g, b);
                return null;
            }
            
            const hexCode = hexMatch ? hexMatch[1] : rgbToHex(r, g, b);
            
            return {
                r, g, b, hexCode
            };
        }
        
        // Если найден только HEX код, преобразуем его в RGB
        if (hexMatch) {
            const hex = hexMatch[1];
            // Преобразуем HEX в RGB
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            if (result) {
                const r = parseInt(result[1], 16);
                const g = parseInt(result[2], 16);
                const b = parseInt(result[3], 16);
                return {
                    r, g, b, hexCode: hex.startsWith('#') ? hex : '#' + hex
                };
            }
        }
        
        // Если не смогли найти цветовую информацию, ищем по названию цвета
        const colorNames = {
            'red': {r: 255, g: 0, b: 0},
            'green': {r: 0, g: 255, b: 0},
            'blue': {r: 0, g: 255, b: 255},
            'cyan': {r: 0, g: 255, b: 255},
            'magenta': {r: 255, g: 0, b: 255},
            'yellow': {r: 255, g: 255, b: 0},
            'purple': {r: 128, g: 0, b: 128},
            'orange': {r: 255, g: 165, b: 0},
            'pink': {r: 255, g: 192, b: 203},
            'white': {r: 255, g: 255, b: 255},
            'black': {r: 0, g: 0, b: 0},
            'gray': {r: 128, g: 128, b: 128},
            'amber': {r: 255, g: 191, b: 0},
            'teal': {r: 0, g: 128, b: 128},
            'lime': {r: 0, g: 255, b: 0},
        };
        
        for (const [colorName, rgb] of Object.entries(colorNames)) {
            if (cleanLore.toLowerCase().includes(colorName) || 
                (itemLore && itemLore.toLowerCase().includes(colorName))) {
                return {
                    ...rgb,
                    hexCode: rgbToHex(rgb.r, rgb.g, rgb.b)
                };
            }
        }
        
        return null;
    } catch (error) {
        console.error("Error extracting color info:", error, itemLore);
        return null;
    }
}

// Функции для работы с цветами и определения редкости
// Эти функции взяты из app.js и адаптированы для использования в охотнике за редкими предметами

// Функция для преобразования RGB в Lab цветовое пространство
function rgbToLab(rgb) {
    const xyz = rgbToXyz(rgb);
    return xyzToLab(xyz);
}

// Функция для преобразования RGB в XYZ цветовое пространство
function rgbToXyz(rgb) {
    // Нормализуем значения RGB
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;
    
    // Применяем гамма-коррекцию
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    
    // Умножаем на матрицу преобразования
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    
    return {x, y, z};
}

// Функция для преобразования XYZ в Lab цветовое пространство
function xyzToLab(xyz) {
    // Используем стандартный наблюдатель и освещение D65
    const xRef = 0.95047;
    const yRef = 1.0;
    const zRef = 1.08883;
    
    // Нормализуем значения XYZ
    let x = xyz.x / xRef;
    let y = xyz.y / yRef;
    let z = xyz.z / zRef;
    
    // Применяем функцию преобразования
    x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
    y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
    z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);
    
    // Вычисляем компоненты Lab
    const l = (116 * y) - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    
    return {l, a, b};
}

// Функция для расчета дельты между двумя цветами в пространстве Lab (CIE76)
function calculateDeltaE(lab1, lab2) {
    const deltaL = lab1.l - lab2.l;
    const deltaA = lab1.a - lab2.a;
    const deltaB = lab1.b - lab2.b;
    
    return Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);
}

// Функция для определения тира редкости по значению дельты
function getRank(distance) {
    if (distance === 0) {
        return 'T0';
    } else if (distance < 1.999) {
        return 'T1';
    } else if (distance < 4.999) {
        return 'T2';
    } else if (distance < 9.999) {
        return 'T3';
    } else {
        return 'T4';
    }
}

// Функция для получения числового значения тира (для сравнения)
function getRankValue(tier) {
    switch(tier) {
        case 'T0': return 0;
        case 'T1': return 1;
        case 'T2': return 2;
        case 'T3': return 3;
        case 'T4': return 4;
        default: return 5;
    }
}

// Функция для расчета редкости предмета на основе цвета
function calculateRarityBasedOnColor(colorInfo) {
    // Если информации о цвете нет, возвращаем самый низкий тир
    if (!colorInfo || !colorInfo.r || !colorInfo.g || !colorInfo.b) {
        return {
            tier: 'T4',
            tierValue: 4,
            description: 'Обычный'
        };
    }
    
    // Цвета для сравнения - редкие/необычные цвета
    const referenceColors = [
        { name: 'Amber', rgb: {r: 255, g: 191, b: 0} },
        { name: 'Teal', rgb: {r: 0, g: 128, b: 128} },
        { name: 'Magenta', rgb: {r: 255, g: 0, b: 255} },
        { name: 'Cyan', rgb: {r: 0, g: 255, b: 255} },
        { name: 'Light Blue', rgb: {r: 173, g: 216, b: 230} }
    ];
    
    const itemRgb = {
        r: colorInfo.r,
        g: colorInfo.g,
        b: colorInfo.b
    };
    
    const itemLab = rgbToLab(itemRgb);
    
    // Находим ближайший референсный цвет
    let minDelta = Number.MAX_VALUE;
    let closestColor = null;
    
    for (const refColor of referenceColors) {
        const refLab = rgbToLab(refColor.rgb);
        const delta = calculateDeltaE(itemLab, refLab);
        
        if (delta < minDelta) {
            minDelta = delta;
            closestColor = refColor;
        }
    }
    
    // Определяем тир на основе дельты
    const tier = getRank(minDelta);
    const tierValue = getRankValue(tier);
    
    // Формируем описание
    let description = '';
    if (tierValue === 0) {
        description = 'Идеальное совпадение';
    } else if (tierValue === 1) {
        description = 'Очень редкий';
    } else if (tierValue === 2) {
        description = 'Редкий';
    } else if (tierValue === 3) {
        description = 'Необычный';
    } else {
        description = 'Обычный';
    }
    
    return {
        tier,
        tierValue,
        description,
        delta: minDelta,
        closestColor: closestColor ? closestColor.name : 'Unknown'
    };
}

// Переопределение функции для расчета редкости
function calculateRarityTier(colorInfo) {
    // Если у нас нет информации о цвете, возвращаем самый низкий тир
    if (!colorInfo) return 4;
    
    // Вычисляем редкость на основе цвета
    const rarityInfo = calculateRarityBasedOnColor(colorInfo);
    
    // Возвращаем числовое значение тира (0-4, где 0 - самый редкий)
    return rarityInfo.tierValue;
} 