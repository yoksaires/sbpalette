/* SB Palette - Database API Functions */

// URL Google Apps Script - необходимо обновить на актуальный URL после переразвертывания скрипта
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwzZRCdzRmbB6unpVpiCG9XcJMh6ccheS2mrbqeWnJq2H-JQS2-8F0lZVdOgUpfk4RGWQ/exec';

// Обработчик CORS для локальной разработки
function handleCORS() {
    // Если ваше приложение работает локально, может потребоваться прокси для обхода CORS
    // Например, можно использовать https://cors-anywhere.herokuapp.com/
    // Этот код проверяет, находится ли скрипт на локальном хосте
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Running on localhost, CORS may be an issue');
        // Можно добавить CORS-прокси к URL
        // return 'https://cors-anywhere.herokuapp.com/' + GOOGLE_SCRIPT_URL;
    }
    return GOOGLE_SCRIPT_URL;
}

// Получение актуального URL для API
function getApiUrl() {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwzZRCdzRmbB6unpVpiCG9XcJMh6ccheS2mrbqeWnJq2H-JQS2-8F0lZVdOgUpfk4RGWQ/exec';
    
    // Проверяем, запущено ли приложение с хостинга
    const usingHostedVersion = window.location.href.includes('github.io') || window.location.protocol === 'https:';
    
    if (usingHostedVersion) {
        // Добавляем параметр no-cors для обхода CORS при запуске с хостинга
        // Это позволит обрабатывать GET-запросы без CORS-ошибок
        console.log('Using API URL with CORS handling for hosted version');
    }
    
    return GOOGLE_SCRIPT_URL;
}

// Для тестирования соединения с API
async function testApiConnection() {
    try {
        console.log('Testing API connection to:', getApiUrl());
        const testUrl = new URL(getApiUrl());
        testUrl.searchParams.append('action', 'getBasicStats');
        
        const response = await fetch(testUrl);
        
        if (!response.ok) {
            console.error('API connection test failed:', response.status, response.statusText);
            return false;
        }
        
        const text = await response.text();
        console.log('API response:', text);
        
        try {
            const result = JSON.parse(text);
            console.log('API connection successful:', result);
            return result.status === 'success';
        } catch (e) {
            console.error('API response not valid JSON:', e);
            return false;
        }
    } catch (error) {
        console.error('API connection test error:', error);
        return false;
    }
}

// Запускаем тест соединения при загрузке страницы
document.addEventListener('DOMContentLoaded', async function() {
    const isConnected = await testApiConnection();
    const statsMessage = document.getElementById('statsMessage');
    
    if (!isConnected && statsMessage) {
        statsMessage.textContent = 'Не удалось подключиться к базе данных. Проверьте соединение или перейдите по ссылке https://script.google.com/macros/s/AKfycbwzZRCdzRmbB6unpVpiCG9XcJMh6ccheS2mrbqeWnJq2H-JQS2-8F0lZVdOgUpfk4RGWQ/exec чтобы активировать API.';
        statsMessage.className = 'message error';
        statsMessage.style.display = 'block';
        
        const searchMessage = document.getElementById('searchMessage');
        if (searchMessage) {
            searchMessage.textContent = 'Не удалось подключиться к базе данных. Сначала перейдите по ссылке API в сообщении выше, чтобы активировать соединение.';
            searchMessage.className = 'message error';
            searchMessage.style.display = 'block';
        }
        
        const collectionMessage = document.getElementById('collectionMessage');
        if (collectionMessage) {
            collectionMessage.textContent = 'Не удалось подключиться к базе данных. Сначала перейдите по ссылке API в сообщении выше, чтобы активировать соединение.';
            collectionMessage.className = 'message error';
            collectionMessage.style.display = 'block';
        }
    }
});

// Function to get active armor type
function getActiveArmorType() {
    const armorButtons = document.querySelectorAll('.armor-type-button');
    for (const button of armorButtons) {
        if (button.classList.contains('active')) {
            return button.getAttribute('data-type');
        }
    }
    return 'all'; // If no button is active, return 'all'
}

// Function to add color to collection
async function addColorToCollection(discordId, color, armorType) {
    try {
        console.log('Adding color to collection:', {discordId, color, armorType});
        
        const response = await fetch(getApiUrl(), {
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
        
        // Check if response is OK
        if (!response.ok) {
            console.error('Server returned error:', response.status, response.statusText);
            return { status: 'error', message: `Server error: ${response.status} ${response.statusText}` };
        }
        
        const text = await response.text();
        console.log('Add color response:', text);
        
        // Try to parse JSON
        try {
            const result = JSON.parse(text);
            return result;
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError, 'Text:', text);
            return { status: 'error', message: 'Invalid JSON response from server' };
        }
    } catch (error) {
        console.error('Error adding color:', error);
        return { status: 'error', message: 'Server connection error: ' + error.message };
    }
}

// Function to search for color in database
async function searchColorInDatabase(color, armorType = 'all') {
    try {
        const url = new URL(getApiUrl());
        url.searchParams.append('action', 'searchColor');
        url.searchParams.append('color', color);
        if (armorType !== 'all') {
            url.searchParams.append('armorType', armorType);
        }
        
        console.log('Searching color in database:', url.toString());
        const response = await fetch(url);
        
        // Check if response is OK
        if (!response.ok) {
            console.error('Server returned error:', response.status, response.statusText);
            return { status: 'error', message: `Server error: ${response.status} ${response.statusText}` };
        }
        
        const text = await response.text();
        
        // Try to parse JSON
        try {
            const result = JSON.parse(text);
            return result;
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError, 'Text:', text);
            return { status: 'error', message: 'Invalid JSON response from server' };
        }
    } catch (error) {
        console.error('Error searching for color:', error);
        return { status: 'error', message: 'Server connection error: ' + error.message };
    }
}

// Function to get user collection
async function getUserCollection(discordId) {
    try {
        const url = new URL(getApiUrl());
        url.searchParams.append('action', 'getUserCollection');
        url.searchParams.append('discordId', discordId);
        
        console.log('Getting user collection from:', url.toString());
        const response = await fetch(url);
        
        // Check if response is OK
        if (!response.ok) {
            console.error('Server returned error:', response.status, response.statusText);
            return { status: 'error', message: `Server error: ${response.status} ${response.statusText}` };
        }
        
        const text = await response.text();
        
        // Try to parse JSON
        try {
            const result = JSON.parse(text);
            return result;
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError, 'Text:', text);
            return { status: 'error', message: 'Invalid JSON response from server' };
        }
    } catch (error) {
        console.error('Error getting collection:', error);
        return { status: 'error', message: 'Server connection error: ' + error.message };
    }
}

// Function to get basic statistics
async function getBasicStatistics() {
    try {
        const url = new URL(getApiUrl());
        url.searchParams.append('action', 'getBasicStats');
        
        console.log('Fetching basic statistics from:', url.toString());
        const response = await fetch(url);
        
        // Check if response is OK
        if (!response.ok) {
            console.error('Server returned error:', response.status, response.statusText);
            return { status: 'error', message: `Server error: ${response.status} ${response.statusText}` };
        }
        
        const text = await response.text();
        console.log('Response text:', text);
        
        // Try to parse JSON
        try {
            const result = JSON.parse(text);
            return result;
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError, 'Text:', text);
            return { status: 'error', message: 'Invalid JSON response from server' };
        }
    } catch (error) {
        console.error('Error getting statistics:', error);
        return { status: 'error', message: 'Server connection error: ' + error.message };
    }
}

// Function to get rare colors
async function getRareColors() {
    try {
        const url = new URL(getApiUrl());
        url.searchParams.append('action', 'getRareColors');
        
        console.log('Fetching rare colors from:', url.toString());
        const response = await fetch(url);
        
        // Check if response is OK
        if (!response.ok) {
            console.error('Server returned error:', response.status, response.statusText);
            return { status: 'error', message: `Server error: ${response.status} ${response.statusText}` };
        }
        
        const text = await response.text();
        
        // Try to parse JSON
        try {
            const result = JSON.parse(text);
            return result;
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError, 'Text:', text);
            return { status: 'error', message: 'Invalid JSON response from server' };
        }
    } catch (error) {
        console.error('Error getting rare colors:', error);
        return { status: 'error', message: 'Server connection error: ' + error.message };
    }
}

// Function to get popular colors
async function getPopularColors() {
    try {
        const url = new URL(getApiUrl());
        url.searchParams.append('action', 'getPopularColors');
        
        console.log('Fetching popular colors from:', url.toString());
        const response = await fetch(url);
        
        // Check if response is OK
        if (!response.ok) {
            console.error('Server returned error:', response.status, response.statusText);
            return { status: 'error', message: `Server error: ${response.status} ${response.statusText}` };
        }
        
        const text = await response.text();
        
        // Try to parse JSON
        try {
            const result = JSON.parse(text);
            return result;
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError, 'Text:', text);
            return { status: 'error', message: 'Invalid JSON response from server' };
        }
    } catch (error) {
        console.error('Error getting popular colors:', error);
        return { status: 'error', message: 'Server connection error: ' + error.message };
    }
}

// Function to get top collectors
async function getTopCollectors() {
    try {
        const url = new URL(getApiUrl());
        url.searchParams.append('action', 'getTopCollectors');
        
        console.log('Fetching top collectors from:', url.toString());
        const response = await fetch(url);
        
        // Check if response is OK
        if (!response.ok) {
            console.error('Server returned error:', response.status, response.statusText);
            return { status: 'error', message: `Server error: ${response.status} ${response.statusText}` };
        }
        
        const text = await response.text();
        
        // Try to parse JSON
        try {
            const result = JSON.parse(text);
            return result;
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError, 'Text:', text);
            return { status: 'error', message: 'Invalid JSON response from server' };
        }
    } catch (error) {
        console.error('Error getting top collectors:', error);
        return { status: 'error', message: 'Server connection error: ' + error.message };
    }
}

// Load statistics
async function loadStatistics() {
    const statsLoader = document.getElementById('statsLoader');
    const statsMessage = document.getElementById('statsMessage');
    const statsContainer = document.getElementById('statsContainer');
    
    // Show loader and hide message
    statsLoader.style.display = 'block';
    statsMessage.style.display = 'none';
    statsContainer.innerHTML = '';
    
    try {
        console.log('Loading statistics...');
        
        // Load all data in parallel
        const [basicStatsResult, rareColorsResult, popularColorsResult, topCollectorsResult] = await Promise.all([
            getBasicStatistics(),
            getRareColors(),
            getPopularColors(),
            getTopCollectors()
        ]);
        
        console.log('Statistics loaded:', {basicStatsResult, rareColorsResult, popularColorsResult, topCollectorsResult});
        
        let dataDisplayed = false;
        
        // Check results and display data
        if (basicStatsResult.status === 'success' && basicStatsResult.data) {
            displayBasicStatistics(basicStatsResult.data);
            dataDisplayed = true;
        } else {
            console.error('Error loading basic statistics:', basicStatsResult);
        }
        
        if (rareColorsResult.status === 'success' && rareColorsResult.data) {
            displayRareColors(rareColorsResult.data);
            dataDisplayed = true;
        } else {
            console.error('Error loading rare colors:', rareColorsResult);
        }
        
        if (popularColorsResult.status === 'success' && popularColorsResult.data) {
            displayPopularColors(popularColorsResult.data);
            dataDisplayed = true;
        } else {
            console.error('Error loading popular colors:', popularColorsResult);
        }
        
        if (topCollectorsResult.status === 'success' && topCollectorsResult.data) {
            displayTopCollectors(topCollectorsResult.data);
            dataDisplayed = true;
        } else {
            console.error('Error loading top collectors:', topCollectorsResult);
        }
        
        if (!dataDisplayed) {
            statsMessage.textContent = 'No data to display. Server connection might be unavailable.';
            statsMessage.className = 'message error';
            statsMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading statistics:', error);
        statsMessage.textContent = 'An error occurred while loading statistics: ' + error.message;
        statsMessage.className = 'message error';
        statsMessage.style.display = 'block';
    } finally {
        statsLoader.style.display = 'none';
    }
}

// Display basic statistics
function displayBasicStatistics(stats) {
    const statsContainer = document.getElementById('statsContainer');
    
    // Create card for basic statistics
    const basicStatsCard = document.createElement('div');
    basicStatsCard.className = 'stat-card';
    basicStatsCard.innerHTML = `
        <h3>Basic Statistics</h3>
        <div class="basic-stats-container">
            <div class="basic-stat">
                <div class="value">${stats.totalEntries}</div>
                <div class="label">Total Entries</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.uniqueUsers}</div>
                <div class="label">Unique Users</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.uniqueColors}</div>
                <div class="label">Unique Colors</div>
            </div>
        </div>
        <h3>By Armor Type</h3>
        <div class="basic-stats-container">
            <div class="basic-stat">
                <div class="value">${stats.armorCounts.helmet || 0}</div>
                <div class="label">🎩 Helmets</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.armorCounts.chestplate || 0}</div>
                <div class="label">👔 Chestplates</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.armorCounts.leggings || 0}</div>
                <div class="label">👖 Leggings</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.armorCounts.boots || 0}</div>
                <div class="label">👞 Boots</div>
            </div>
        </div>
    `;
    
    statsContainer.appendChild(basicStatsCard);
}

// Display rare colors
function displayRareColors(colors) {
    const statsContainer = document.getElementById('statsContainer');
    
    const rareColorsCard = document.createElement('div');
    rareColorsCard.className = 'stat-card';
    rareColorsCard.innerHTML = `
        <h3>Rarest Colors</h3>
    `;
    
    const table = document.createElement('table');
    table.className = 'color-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Color</th>
                <th>Owners</th>
                <th>Armor Type</th>
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

// Display popular colors
function displayPopularColors(colors) {
    const statsContainer = document.getElementById('statsContainer');
    
    const popularColorsCard = document.createElement('div');
    popularColorsCard.className = 'stat-card';
    popularColorsCard.innerHTML = `
        <h3>Most Popular Colors</h3>
    `;
    
    const table = document.createElement('table');
    table.className = 'color-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Color</th>
                <th>Owners</th>
                <th>Armor Type</th>
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

// Display top collectors
function displayTopCollectors(collectors) {
    const statsContainer = document.getElementById('statsContainer');
    
    const topCollectorsCard = document.createElement('div');
    topCollectorsCard.className = 'stat-card';
    topCollectorsCard.innerHTML = `
        <h3>Top Collectors</h3>
    `;
    
    const table = document.createElement('table');
    table.className = 'color-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Discord ID</th>
                <th>Colors Count</th>
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

// Function to search color in collections
async function searchColorInCollections() {
    const colorSearch = document.getElementById('colorSearch');
    const searchLoader = document.getElementById('searchLoader');
    const searchMessage = document.getElementById('searchMessage');
    const searchResults = document.getElementById('searchResults');
    
    const color = colorSearch.value.trim().toUpperCase();
    if (!color.match(/^#?[0-9A-F]{6}$/i)) {
        searchMessage.textContent = 'Enter a valid HEX color code (e.g., #FF5500)';
        searchMessage.className = 'message error';
        searchMessage.style.display = 'block';
        return;
    }
    
    // Add # if it doesn't exist
    const formattedColor = color.startsWith('#') ? color : '#' + color;
    
    searchLoader.style.display = 'block';
    searchMessage.style.display = 'none';
    searchResults.innerHTML = '';
    
    try {
        console.log('Searching for color:', formattedColor);
        const result = await searchColorInDatabase(formattedColor);
        console.log('Search result:', result);
        
        if (result.status === 'success') {
            if (result.data && result.data.length > 0) {
                // Create table for results
                const table = document.createElement('table');
                table.className = 'color-table';
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Discord ID</th>
                            <th>Color</th>
                            <th>Armor Type</th>
                            <th>Date Added</th>
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
                searchMessage.textContent = `Color ${formattedColor} not found in any collections`;
                searchMessage.className = 'message';
                searchMessage.style.display = 'block';
            }
        } else {
            searchMessage.textContent = result.message || 'Error searching for color. Server connection might be unavailable.';
            searchMessage.className = 'message error';
            searchMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Error searching for color:', error);
        searchMessage.textContent = 'An error occurred during search: ' + error.message;
        searchMessage.className = 'message error';
        searchMessage.style.display = 'block';
    } finally {
        searchLoader.style.display = 'none';
    }
}

// Function to load user collection
async function loadUserCollection() {
    const discordIdInput = document.getElementById('discordIdInput');
    const collectionLoader = document.getElementById('collectionLoader');
    const collectionMessage = document.getElementById('collectionMessage');
    const collectionResults = document.getElementById('collectionResults');
    
    const discordId = discordIdInput.value.trim();
    if (!discordId) {
        collectionMessage.textContent = 'Please enter a Discord ID';
        collectionMessage.className = 'message error';
        collectionMessage.style.display = 'block';
        return;
    }
    
    collectionLoader.style.display = 'block';
    collectionMessage.style.display = 'none';
    collectionResults.innerHTML = '';
    
    try {
        console.log('Loading collection for Discord ID:', discordId);
        const result = await getUserCollection(discordId);
        console.log('Collection result:', result);
        
        if (result.status === 'success') {
            if (result.data && result.data.length > 0) {
                displayUserCollection(result.data, discordId);
            } else {
                collectionMessage.textContent = 'No colors found for this Discord ID';
                collectionMessage.className = 'message info';
                collectionMessage.style.display = 'block';
            }
        } else {
            collectionMessage.textContent = result.message || 'Error loading collection. Server connection might be unavailable.';
            collectionMessage.className = 'message error';
            collectionMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading collection:', error);
        collectionMessage.textContent = 'Error: ' + error.message;
        collectionMessage.className = 'message error';
        collectionMessage.style.display = 'block';
    } finally {
        collectionLoader.style.display = 'none';
    }
}

// Function to show form for adding color to collection
function showAddToCollectionForm(color, armorType) {
    // Check if modal already exists
    let modal = document.getElementById('addToCollectionModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'addToCollectionModal';
        modal.className = 'modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <h2>Add Color to Collection</h2>
                <p>Enter your Discord ID to add this color to your collection:</p>
                <div class="color-preview" id="modalColorPreview"></div>
                <input type="text" id="modalDiscordId" placeholder="Your Discord ID">
                <div id="collectionMessage" class="message" style="display: none;"></div>
                <button id="addToCollectionButton">Add to Collection</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add styles for modal
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
        
        // Add event handlers
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
    
    // Set values in modal
    const colorPreview = modal.querySelector('#modalColorPreview');
    colorPreview.style.backgroundColor = color;
    
    const addButton = modal.querySelector('#addToCollectionButton');
    addButton.onclick = async function() {
        const discordId = modal.querySelector('#modalDiscordId').value.trim();
        const messageElement = modal.querySelector('#collectionMessage');
        
        if (!discordId) {
            messageElement.textContent = 'Please enter your Discord ID';
            messageElement.className = 'message error';
            messageElement.style.display = 'block';
            return;
        }
        
        // Add color to collection
        const result = await addColorToCollection(discordId, color, armorType);
        
        if (result.status === 'success') {
            messageElement.textContent = result.message || 'Color successfully added to your collection';
            messageElement.className = 'message success';
            messageElement.style.display = 'block';
            
            // Show notification
            showSuccessNotification();
            
            // Close modal after 2 seconds
            setTimeout(function() {
                modal.style.display = 'none';
            }, 2000);
        } else {
            messageElement.textContent = result.message || 'Error adding color';
            messageElement.className = 'message error';
            messageElement.style.display = 'block';
        }
    };
    
    // Show modal
    modal.style.display = 'block';
}

// Show success notification
function showSuccessNotification() {
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
        
        // Add styles for notification
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: var(--success-color);
                color: white;
                padding: 15px 20px;
                border-radius: 4px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                opacity: 0;
                transform: translateY(20px);
                animation: fadeInUp 0.3s forwards, fadeOut 0.3s 2.7s forwards;
            }
            
            @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    transform: translateY(-20px);
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    notification.textContent = 'Color added to collection';
    notification.style.animation = 'none';
    
    // This line is needed to restart the animation
    void notification.offsetWidth;
    
    notification.style.animation = 'fadeInUp 0.3s forwards, fadeOut 0.3s 2.7s forwards';
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to get armor type name
function getArmorTypeName(type) {
    const names = {
        'all': 'All',
        'helmet': 'Helmet',
        'chestplate': 'Chestplate',
        'leggings': 'Leggings',
        'boots': 'Boots'
    };
    
    return names[type] || type;
}

// Function to get armor type icon
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

// Function to format date
function formatDate(date) {
    // Check if date is valid
    if (!(date instanceof Date) || isNaN(date)) {
        return 'Invalid Date';
    }
    
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    try {
        return date.toLocaleDateString('en-US', options);
    } catch (error) {
        console.error('Error formatting date:', error);
        return date.toString();
    }
}

// Функции для импорта предметов из буфера обмена

// Функция для разбора текста из текстовой области
function parseItemsFromTextarea() {
    const importTextarea = document.getElementById('importTextarea');
    const importMessage = document.getElementById('importMessage');
    const importPreview = document.getElementById('importPreview');
    const importPreviewContent = document.getElementById('importPreviewContent');
    const importLoader = document.getElementById('importLoader');
    const importItemsButton = document.getElementById('importItemsButton');
    const onlyClotheCheck = document.getElementById('onlyClotheCheck');

    // Показать загрузчик и скрыть сообщение и предварительный просмотр
    importLoader.style.display = 'block';
    importMessage.style.display = 'none';
    importPreview.style.display = 'none';
    importItemsButton.disabled = true;

    try {
        const text = importTextarea.value.trim();
        if (!text) {
            throw new Error('Please paste items data into the textarea');
        }

        console.log('Parsing text input:', text.substring(0, 200) + '...');

        // Разделяем текст на строки
        const lines = text.split('\n');
        
        // Отфильтровываем нужные предметы
        const validItemTypes = ['CASHMERE_JACKET', 'OXFORD_SHOES', 'SATIN_TROUSERS', 'VELVET_TOP_HAT'];
        let parsedItems = [];

        for (const line of lines) {
            try {
                // Проверяем различные форматы строки для предметов с hex цветом
                let itemType, hexColor, location;
                
                // Формат 1: `ITEM_TYPE`, hex: `HEXCODE` (**ORIGINAL**) - Location: LOCATION
                const hexItemMatch1 = line.match(/`([^`]+)`, hex: `([0-9A-F]{6})` \(\*\*ORIGINAL\*\*\) - Location: (.+)$/i);
                
                // Формат 2: `ITEM_TYPE`, hex: `HEXCODE` - Location: LOCATION
                const hexItemMatch2 = line.match(/`([^`]+)`, hex: `([0-9A-F]{6})` - Location: (.+)$/i);
                
                // Формат 3: ITEM_TYPE - hex: HEXCODE - Location: LOCATION
                const hexItemMatch3 = line.match(/([A-Z_]+) - hex: ([0-9A-F]{6}) - Location: (.+)$/i);
                
                if (hexItemMatch1) {
                    itemType = hexItemMatch1[1];
                    hexColor = hexItemMatch1[2];
                    location = hexItemMatch1[3];
                } else if (hexItemMatch2) {
                    itemType = hexItemMatch2[1];
                    hexColor = hexItemMatch2[2];
                    location = hexItemMatch2[3];
                } else if (hexItemMatch3) {
                    itemType = hexItemMatch3[1];
                    hexColor = hexItemMatch3[2];
                    location = hexItemMatch3[3];
                }
                
                // Если найден предмет с hex цветом
                if (itemType && hexColor) {
                    // Если включена опция "только одежда", проверяем тип предмета
                    if (onlyClotheCheck.checked && !validItemTypes.includes(itemType)) {
                        continue;
                    }
                    
                    // Преобразуем hex в верхний регистр
                    hexColor = hexColor.toUpperCase();
                    
                    // Добавляем в список разобранных предметов
                    parsedItems.push({
                        type: itemType,
                        hexColor: hexColor,
                        location: location || 'Unknown',
                        timestamp: new Date().toISOString()
                    });
                }
            } catch (lineError) {
                console.error('Error parsing line:', lineError, line);
            }
        }
        
        if (parsedItems.length === 0) {
            throw new Error('No valid items found in the input text. Make sure the format is correct.');
        }
        
        console.log('Successfully parsed items:', parsedItems);
        
        // Сохранить проанализированные предметы в localStorage для последующего импорта
        localStorage.setItem('parsedItems', JSON.stringify(parsedItems));
        
        // Показать предварительный просмотр
        importPreview.style.display = 'block';
        importPreviewContent.innerHTML = '';
        
        // Создаем таблицу предварительного просмотра
        const previewTable = document.createElement('table');
        previewTable.className = 'color-table';
        
        // Создаем заголовок таблицы
        const tableHeader = document.createElement('thead');
        tableHeader.innerHTML = `
            <tr>
                <th>Item Type</th>
                <th>Color</th>
                <th>HEX</th>
                <th>Location</th>
            </tr>
        `;
        previewTable.appendChild(tableHeader);
        
        // Создаем тело таблицы
        const tableBody = document.createElement('tbody');
        
        parsedItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.type}</td>
                <td>
                    <div class="color-preview" style="background-color: #${item.hexColor};"></div>
                </td>
                <td>#${item.hexColor}</td>
                <td>${item.location}</td>
            `;
            tableBody.appendChild(row);
        });
        
        previewTable.appendChild(tableBody);
        importPreviewContent.appendChild(previewTable);
        
        // Добавляем информацию о количестве предметов по типам
        const itemTypeCounts = {};
        parsedItems.forEach(item => {
            itemTypeCounts[item.type] = (itemTypeCounts[item.type] || 0) + 1;
        });
        
        const statsDiv = document.createElement('div');
        statsDiv.className = 'import-stats';
        statsDiv.innerHTML = `
            <p><strong>Parsed Items by Type:</strong></p>
            <ul>
                ${Object.entries(itemTypeCounts).map(([type, count]) => `<li>${type}: ${count}</li>`).join('')}
            </ul>
        `;
        importPreviewContent.appendChild(statsDiv);
        
        // Показать сообщение об успехе
        importMessage.textContent = `Successfully parsed ${parsedItems.length} items. Review preview above and click "Import to Database" to add them.`;
        importMessage.className = 'message success';
        importMessage.style.display = 'block';
        
        // Включить кнопку импорта
        importItemsButton.disabled = false;
        
    } catch (error) {
        // Показать сообщение об ошибке
        console.error('Error parsing items:', error);
        importMessage.textContent = error.message;
        importMessage.className = 'message error';
        importMessage.style.display = 'block';
    } finally {
        // Скрыть загрузчик
        importLoader.style.display = 'none';
    }
}

// Функция для импорта разобранных предметов в базу данных
async function importParsedItems() {
    const importUserId = document.getElementById('importUserId');
    const importMessage = document.getElementById('importMessage');
    const importLoader = document.getElementById('importLoader');
    const importItemsButton = document.getElementById('importItemsButton');
    
    // Проверяем, указан ли идентификатор пользователя
    const userId = importUserId.value.trim();
    if (!userId) {
        importMessage.textContent = 'Please enter your User ID';
        importMessage.className = 'message error';
        importMessage.style.display = 'block';
        return;
    }
    
    // Получаем сохраненные предметы
    const parsedItems = JSON.parse(localStorage.getItem('parsedItems') || '[]');
    if (parsedItems.length === 0) {
        importMessage.textContent = 'No items to import. Please parse items first.';
        importMessage.className = 'message error';
        importMessage.style.display = 'block';
        return;
    }
    
    // Показать загрузчик и отключить кнопку
    importLoader.style.display = 'block';
    importItemsButton.disabled = true;
    importMessage.style.display = 'none';
    
    try {
        let successCount = 0;
        let failCount = 0;
        
        // При большом количестве предметов разбиваем их на группы по 10
        // чтобы избежать проблем с ограничениями Google Apps Script и не перегружать сервер
        const batchSize = 10;
        const totalBatches = Math.ceil(parsedItems.length / batchSize);
        
        // Показываем информацию о прогрессе
        const progressMessage = document.createElement('div');
        progressMessage.className = 'import-progress';
        progressMessage.textContent = `Importing batch 1 of ${totalBatches}...`;
        importMessage.parentNode.insertBefore(progressMessage, importMessage);
        progressMessage.style.display = 'block';
        
        for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
            // Обновляем сообщение о прогрессе
            progressMessage.textContent = `Importing batch ${batchIndex + 1} of ${totalBatches}...`;
            
            // Получаем текущую партию предметов
            const batchStart = batchIndex * batchSize;
            const batchEnd = Math.min((batchIndex + 1) * batchSize, parsedItems.length);
            const batch = parsedItems.slice(batchStart, batchEnd);
            
            console.log(`Processing batch ${batchIndex + 1}/${totalBatches}, items ${batchStart + 1}-${batchEnd}`);
            
            // Запускаем импорт партии предметов
            for (const item of batch) {
                try {
                    // Определить тип брони на основе типа предмета
                    let armorType = 'all';
                    if (item.type === 'CASHMERE_JACKET') {
                        armorType = 'chestplate';
                    } else if (item.type === 'OXFORD_SHOES') {
                        armorType = 'boots';
                    } else if (item.type === 'SATIN_TROUSERS') {
                        armorType = 'leggings';
                    } else if (item.type === 'VELVET_TOP_HAT') {
                        armorType = 'helmet';
                    }
                    
                    // Отправляем данные в базу
                    const response = await addItemToDatabase({
                        userId: userId,
                        hexColor: item.hexColor,
                        armorType: armorType,
                        location: item.location,
                        timestamp: item.timestamp
                    });
                    
                    if (response.status === 'success') {
                        successCount++;
                    } else {
                        failCount++;
                        console.error('Error importing item:', item, response);
                    }
                } catch (itemError) {
                    failCount++;
                    console.error('Error processing item:', item, itemError);
                }
            }
            
            // Делаем паузу между партиями, чтобы не перегружать сервер
            if (batchIndex < totalBatches - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        
        // Удаляем сообщение о прогрессе
        progressMessage.remove();
        
        // Показать сообщение о результате
        let messageText = '';
        let messageClass = '';
        
        if (successCount > 0 && failCount === 0) {
            messageText = `Successfully imported all ${successCount} items to the database.`;
            messageClass = 'message success';
        } else if (successCount > 0 && failCount > 0) {
            messageText = `Imported ${successCount} items but failed to import ${failCount} items.`;
            messageClass = 'message warning';
        } else {
            messageText = `Failed to import all ${failCount} items. Check the error message in the browser console (F12).`;
            messageClass = 'message error';
        }
        
        importMessage.textContent = messageText;
        importMessage.className = messageClass;
        importMessage.style.display = 'block';
        
        // Если успешно, очистить сохраненные данные
        if (successCount > 0) {
            localStorage.removeItem('parsedItems');
        }
        
    } catch (error) {
        importMessage.textContent = 'Error importing items: ' + error.message;
        importMessage.className = 'message error';
        importMessage.style.display = 'block';
    } finally {
        // Скрыть загрузчик и включить кнопку
        importLoader.style.display = 'none';
        importItemsButton.disabled = false;
    }
}

// Функция для добавления предмета в базу данных
async function addItemToDatabase(data) {
    try {
        const { userId, hexColor, armorType, location, timestamp } = data;
        console.log('Adding item to database:', data);
        
        // Определяем источник запроса и проверяем на CORS-проблемы
        const usingHostedVersion = window.location.href.includes('github.io') || window.location.protocol === 'https:';
        let response;
        
        if (usingHostedVersion) {
            // Для хостинга используем GET запрос с параметрами, чтобы обойти CORS для POST
            const apiUrl = getApiUrl();
            const params = new URLSearchParams({
                action: 'addItem',
                userId: userId,
                hexColor: hexColor,
                armorType: armorType,
                location: location || '',
                timestamp: timestamp || new Date().toISOString()
            });
            
            const url = `${apiUrl}?${params.toString()}`;
            console.log('Using GET request with URL:', url);
            
            response = await fetch(url);
        } else {
            // Для локальной версии используем обычный POST
            response = await fetch(getApiUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'addItem',
                    userId: userId,
                    hexColor: hexColor,
                    armorType: armorType,
                    location: location,
                    timestamp: timestamp
                }),
            });
        }
        
        // Check if response is OK
        if (!response.ok) {
            console.error('Server returned error:', response.status, response.statusText);
            return { status: 'error', message: `Server error: ${response.status} ${response.statusText}` };
        }
        
        const text = await response.text();
        console.log('Add item response:', text);
        
        // Try to parse JSON
        try {
            const result = JSON.parse(text);
            return result;
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError, 'Text:', text);
            return { status: 'error', message: 'Invalid JSON response from server' };
        }
    } catch (error) {
        console.error('Error adding item to database:', error);
        return { status: 'error', message: 'Server connection error: ' + error.message };
    }
}

// Функция для вычисления дельты и тира предмета
function calculateItemTier(hex) {
    // Получаем все данные о цветах
    let armorData = JSON.parse(localStorage.getItem('armorData')) || [];
    if (!armorData || armorData.length === 0) {
        // Если данные не найдены в localStorage, используем стандартные данные, если они доступны
        if (typeof window.armorData !== 'undefined') {
            armorData = window.armorData;
        } else {
            console.error('Armor data not found');
            return { deltaE: null, tier: null };
        }
    }
    
    // Преобразуем HEX в RGB
    const targetRgb = hexToRgb(hex);
    const targetLab = rgbToLab(targetRgb);
    
    let minDistance = Infinity;
    let closestColor = null;
    
    // Находим ближайший известный цвет
    for (const color of armorData) {
        const colorRgb = hexToRgb(color.color);
        const distance = getDistance(targetRgb, colorRgb);
        
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = color;
        }
    }
    
    // Вычисляем дельту и тир
    if (closestColor) {
        const closestRgb = hexToRgb(closestColor.color);
        const closestLab = rgbToLab(closestRgb);
        const deltaE = calculateDeltaE2000(targetLab, closestLab);
        const tier = getRank(deltaE);
        
        return { deltaE, tier, closestColor };
    }
    
    return { deltaE: null, tier: null, closestColor: null };
}

// Вспомогательные функции для расчета дельты
function hexToRgb(hex) {
    // Проверяем формат HEX
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    const bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function getDistance(rgb1, rgb2) {
    const lab1 = rgbToLab(rgb1);
    const lab2 = rgbToLab(rgb2);

    const deltaL = lab1.l - lab2.l;
    const deltaA = lab1.a - lab2.a;
    const deltaB = lab1.b - lab2.b;

    return Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);
}

function rgbToLab(rgb) {
    // Преобразование RGB в XYZ
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;

    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    // Матрица преобразования для sRGB
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;

    // Преобразование XYZ в Lab
    const xr = x / 0.95047;
    const yr = y / 1.00000;
    const zr = z / 1.08883;

    const fx = xr > 0.008856 ? Math.pow(xr, 1/3) : (7.787 * xr) + (16/116);
    const fy = yr > 0.008856 ? Math.pow(yr, 1/3) : (7.787 * yr) + (16/116);
    const fz = zr > 0.008856 ? Math.pow(zr, 1/3) : (7.787 * zr) + (16/116);

    const l = (116 * fy) - 16;
    const a = 500 * (fx - fy);
    const bValue = 200 * (fy - fz);

    return { l, a, b: bValue };
}

function calculateDeltaE2000(lab1, lab2) {
    // Константы
    const kL = 1;
    const kC = 1;
    const kH = 1;
    
    // Расчет для DeltaE2000
    const L1 = lab1.l;
    const a1 = lab1.a;
    const b1 = lab1.b;
    
    const L2 = lab2.l;
    const a2 = lab2.a;
    const b2 = lab2.b;
    
    // Шаг 1: Расчет C и h
    const C1 = Math.sqrt(a1 * a1 + b1 * b1);
    const C2 = Math.sqrt(a2 * a2 + b2 * b2);
    
    const meanC = (C1 + C2) / 2;
    const G = 0.5 * (1 - Math.sqrt(Math.pow(meanC, 7) / (Math.pow(meanC, 7) + Math.pow(25, 7))));
    
    const a1Prime = a1 * (1 + G);
    const a2Prime = a2 * (1 + G);
    
    const C1Prime = Math.sqrt(a1Prime * a1Prime + b1 * b1);
    const C2Prime = Math.sqrt(a2Prime * a2Prime + b2 * b2);
    
    let h1Prime = Math.atan2(b1, a1Prime) * 180 / Math.PI;
    if (h1Prime < 0) h1Prime += 360;
    
    let h2Prime = Math.atan2(b2, a2Prime) * 180 / Math.PI;
    if (h2Prime < 0) h2Prime += 360;
    
    // Шаг 2: Расчет dL', dC', dH'
    const deltaLPrime = L2 - L1;
    const deltaCPrime = C2Prime - C1Prime;
    
    let deltahPrime;
    if (C1Prime * C2Prime === 0) {
        deltahPrime = 0;
    } else if (Math.abs(h2Prime - h1Prime) <= 180) {
        deltahPrime = h2Prime - h1Prime;
    } else if (h2Prime - h1Prime > 180) {
        deltahPrime = h2Prime - h1Prime - 360;
    } else {
        deltahPrime = h2Prime - h1Prime + 360;
    }
    
    const deltaHPrime = 2 * Math.sqrt(C1Prime * C2Prime) * Math.sin(deltahPrime * Math.PI / 360);
    
    // Шаг 3: Расчет CIEDE2000
    const meanLPrime = (L1 + L2) / 2;
    const meanCPrime = (C1Prime + C2Prime) / 2;
    
    let meanHPrime;
    if (C1Prime * C2Prime === 0) {
        meanHPrime = h1Prime + h2Prime;
    } else if (Math.abs(h1Prime - h2Prime) <= 180) {
        meanHPrime = (h1Prime + h2Prime) / 2;
    } else if (h1Prime + h2Prime < 360) {
        meanHPrime = (h1Prime + h2Prime + 360) / 2;
    } else {
        meanHPrime = (h1Prime + h2Prime - 360) / 2;
    }
    
    const T = 1 - 0.17 * Math.cos((meanHPrime - 30) * Math.PI / 180) 
              + 0.24 * Math.cos((2 * meanHPrime) * Math.PI / 180) 
              + 0.32 * Math.cos((3 * meanHPrime + 6) * Math.PI / 180) 
              - 0.20 * Math.cos((4 * meanHPrime - 63) * Math.PI / 180);
    
    const SL = 1 + (0.015 * Math.pow(meanLPrime - 50, 2)) / Math.sqrt(20 + Math.pow(meanLPrime - 50, 2));
    const SC = 1 + 0.045 * meanCPrime;
    const SH = 1 + 0.015 * meanCPrime * T;
    
    const RT = -2 * Math.sqrt(Math.pow(meanCPrime, 7) / (Math.pow(meanCPrime, 7) + Math.pow(25, 7))) 
               * Math.sin((60 * Math.exp(-Math.pow((meanHPrime - 275) / 25, 2))) * Math.PI / 180);
    
    const deltaE = Math.sqrt(
        Math.pow(deltaLPrime / (kL * SL), 2) + 
        Math.pow(deltaCPrime / (kC * SC), 2) + 
        Math.pow(deltaHPrime / (kH * SH), 2) + 
        RT * (deltaCPrime / (kC * SC)) * (deltaHPrime / (kH * SH))
    );
    
    return deltaE;
}

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

// Функция для отображения коллекции пользователя
function displayUserCollection(collection, discordId) {
    const collectionResults = document.getElementById('collectionResults');
    collectionResults.innerHTML = '';
    
    console.log('Displaying collection for', discordId, collection);
    
    // Создаем счетчики для статистики
    const stats = {
        total: collection.length,
        helmet: 0,
        chestplate: 0,
        leggings: 0,
        boots: 0,
        tiers: {
            'T0': 0,
            'T1': 0,
            'T2': 0,
            'T3': 0,
            'T4': 0
        }
    };
    
    // Создаем контейнер для статистики
    const statsContainer = document.createElement('div');
    statsContainer.className = 'stat-card collection-stats';
    statsContainer.innerHTML = `
        <h3>Collection Statistics for ${discordId}</h3>
        <div class="basic-stats-container">
            <div class="basic-stat">
                <div class="value" id="totalItems">${collection.length}</div>
                <div class="label">Total Items</div>
            </div>
        </div>
        <div class="tier-stats" id="tierStats"></div>
    `;
    collectionResults.appendChild(statsContainer);
    
    // Создаем таблицу для коллекции
    const table = document.createElement('table');
    table.className = 'color-table';
    
    // Заголовок таблицы
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Color</th>
            <th>HEX</th>
            <th>Armor Type</th>
            <th>Delta E</th>
            <th>Tier</th>
            <th>Location</th>
            <th>Added Date</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Тело таблицы
    const tbody = document.createElement('tbody');
    
    // Проверяем, что коллекция - это массив
    if (!Array.isArray(collection)) {
        console.error('Collection is not an array:', collection);
        const errorMsg = document.createElement('div');
        errorMsg.className = 'message error';
        errorMsg.textContent = 'Ошибка загрузки коллекции. Получены некорректные данные.';
        collectionResults.innerHTML = '';
        collectionResults.appendChild(errorMsg);
        return;
    }
    
    // Сортируем коллекцию по дате добавления (от новых к старым)
    try {
        collection.sort((a, b) => {
            const dateA = a.dateTime ? new Date(a.dateTime) : new Date(0);
            const dateB = b.dateTime ? new Date(b.dateTime) : new Date(0);
            return dateB - dateA;
        });
    } catch (e) {
        console.error('Error sorting collection:', e);
    }
    
    collection.forEach(item => {
        try {
            // Вычисляем дельту и тир
            const { deltaE, tier } = calculateItemTier(item.color);
            
            // Проверка на корректность типа брони
            const armorType = item.armorType || 'all';
            
            // Обновляем статистику
            if (stats[armorType] !== undefined) {
                stats[armorType]++;
            }
            
            if (tier && stats.tiers[tier] !== undefined) {
                stats.tiers[tier]++;
            }
            
            const row = document.createElement('tr');
            
            // Создаем ячейку для цвета
            const colorCell = document.createElement('td');
            const colorPreview = document.createElement('span');
            colorPreview.className = 'color-preview';
            colorPreview.style.backgroundColor = item.color;
            colorCell.appendChild(colorPreview);
            
            // Создаем ячейку для HEX кода
            const hexCell = document.createElement('td');
            hexCell.textContent = item.color;
            
            // Создаем ячейку для типа брони
            const armorTypeCell = document.createElement('td');
            armorTypeCell.innerHTML = `${getArmorTypeIcon(armorType)} ${getArmorTypeName(armorType)}`;
            
            // Создаем ячейку для Delta E
            const deltaECell = document.createElement('td');
            deltaECell.textContent = deltaE !== null ? deltaE.toFixed(2) : 'N/A';
            
            // Создаем ячейку для тира
            const tierCell = document.createElement('td');
            tierCell.textContent = tier || 'N/A';
            tierCell.className = tier ? `tier-${tier.substring(1)}` : '';
            
            // Создаем ячейку для местоположения
            const locationCell = document.createElement('td');
            locationCell.textContent = item.location || 'N/A';
            
            // Создаем ячейку для даты добавления
            const dateCell = document.createElement('td');
            try {
                const date = item.dateTime ? new Date(item.dateTime) : null;
                dateCell.textContent = date ? formatDate(date) : 'N/A';
            } catch (dateError) {
                console.error('Error formatting date:', dateError, item.dateTime);
                dateCell.textContent = 'Invalid Date';
            }
            
            // Добавляем все ячейки в строку
            row.appendChild(colorCell);
            row.appendChild(hexCell);
            row.appendChild(armorTypeCell);
            row.appendChild(deltaECell);
            row.appendChild(tierCell);
            row.appendChild(locationCell);
            row.appendChild(dateCell);
            
            tbody.appendChild(row);
        } catch (itemError) {
            console.error('Error processing collection item:', itemError, item);
        }
    });
    
    table.appendChild(tbody);
    collectionResults.appendChild(table);
    
    // Обновляем статистику
    updateCollectionStats(stats);
}

// Функция для обновления статистики коллекции
function updateCollectionStats(stats) {
    // Обновляем статистику по типам брони
    const basicStatsContainer = document.querySelector('.basic-stats-container');
    
    if (basicStatsContainer) {
        // Добавляем статистику по типам брони
        basicStatsContainer.innerHTML += `
            <div class="basic-stat">
                <div class="value">${stats.helmet}</div>
                <div class="label">Helmets</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.chestplate}</div>
                <div class="label">Chestplates</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.leggings}</div>
                <div class="label">Leggings</div>
            </div>
            <div class="basic-stat">
                <div class="value">${stats.boots}</div>
                <div class="label">Boots</div>
            </div>
        `;
    }
    
    // Обновляем статистику по тирам
    const tierStats = document.getElementById('tierStats');
    if (tierStats) {
        tierStats.innerHTML = `
            <h4>Tier Distribution</h4>
            <div class="basic-stats-container">
                <div class="basic-stat tier-stat tier-0">
                    <div class="value">${stats.tiers.T0}</div>
                    <div class="label">T0</div>
                </div>
                <div class="basic-stat tier-stat tier-1">
                    <div class="value">${stats.tiers.T1}</div>
                    <div class="label">T1</div>
                </div>
                <div class="basic-stat tier-stat tier-2">
                    <div class="value">${stats.tiers.T2}</div>
                    <div class="label">T2</div>
                </div>
                <div class="basic-stat tier-stat tier-3">
                    <div class="value">${stats.tiers.T3}</div>
                    <div class="label">T3</div>
                </div>
                <div class="basic-stat tier-stat tier-4">
                    <div class="value">${stats.tiers.T4}</div>
                    <div class="label">T4</div>
                </div>
            </div>
        `;
        
        // Добавляем стили для тиров
        const style = document.createElement('style');
        style.textContent = `
            .tier-stats {
                margin-top: 20px;
                padding-top: 10px;
                border-top: 1px solid var(--border-color);
            }
            .tier-stats h4 {
                margin-top: 0;
                margin-bottom: 10px;
                font-size: 16px;
                color: var(--accent-color);
            }
            .tier-stat.tier-0 .value { color: #9d03fc; }
            .tier-stat.tier-1 .value { color: #fc0303; }
            .tier-stat.tier-2 .value { color: #fcba03; }
            .tier-stat.tier-3 .value { color: #03fc6f; }
            .tier-stat.tier-4 .value { color: #03bafc; }
        `;
        document.head.appendChild(style);
    }
} 