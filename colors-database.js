/* SB Palette - Database API Functions */

// URL Google Apps Script 
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwzZRCdzRmbB6unpVpiCG9XcJMh6ccheS2mrbqeWnJq2H-JQS2-8F0lZVdOgUpfk4RGWQ/exec';

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
        console.error('Error adding color:', error);
        return { status: 'error', message: 'Server connection error' };
    }
}

// Function to search for color in database
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
        console.error('Error searching for color:', error);
        return { status: 'error', message: 'Server connection error' };
    }
}

// Function to get user collection
async function getUserCollection(discordId) {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getUserCollection');
        url.searchParams.append('discordId', discordId);
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting collection:', error);
        return { status: 'error', message: 'Server connection error' };
    }
}

// Function to get basic statistics
async function getBasicStatistics() {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getBasicStats');
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting statistics:', error);
        return { status: 'error', message: 'Server connection error' };
    }
}

// Function to get rare colors
async function getRareColors() {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getRareColors');
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting rare colors:', error);
        return { status: 'error', message: 'Server connection error' };
    }
}

// Function to get popular colors
async function getPopularColors() {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getPopularColors');
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting popular colors:', error);
        return { status: 'error', message: 'Server connection error' };
    }
}

// Function to get top collectors
async function getTopCollectors() {
    try {
        const url = new URL(GOOGLE_SCRIPT_URL);
        url.searchParams.append('action', 'getTopCollectors');
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting top collectors:', error);
        return { status: 'error', message: 'Server connection error' };
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
        // Load all data in parallel
        const [basicStatsResult, rareColorsResult, popularColorsResult, topCollectorsResult] = await Promise.all([
            getBasicStatistics(),
            getRareColors(),
            getPopularColors(),
            getTopCollectors()
        ]);
        
        // Check results and display data
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
            statsMessage.textContent = 'No data to display';
            statsMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading statistics:', error);
        statsMessage.textContent = 'An error occurred while loading statistics';
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
        const result = await searchColorInDatabase(formattedColor);
        
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
            searchMessage.textContent = result.message || 'Error searching for color';
            searchMessage.className = 'message error';
            searchMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Error searching for color:', error);
        searchMessage.textContent = 'An error occurred during search';
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
        collectionMessage.textContent = 'Please enter your Discord ID';
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
                // Create table for results
                const table = document.createElement('table');
                table.className = 'color-table';
                table.innerHTML = `
                    <thead>
                        <tr>
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
                collectionMessage.textContent = `User ${discordId} has no colors in their collection`;
                collectionMessage.className = 'message';
                collectionMessage.style.display = 'block';
            }
        } else {
            collectionMessage.textContent = result.message || 'Error loading collection';
            collectionMessage.className = 'message error';
            collectionMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading collection:', error);
        collectionMessage.textContent = 'An error occurred while loading collection';
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
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return date.toLocaleDateString('en-US', options);
} 