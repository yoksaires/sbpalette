// Данные из CSV (предварительно обработаны)
const armorData = [
    
{"name":"Bat Person Chestplate & Leggings & Boots \nNecromancer Lord Chestplate \nObsidian Chestplate \nPure Black Dye \nRancher's Boots \nShadow Assassin Chestplate & Leggings & Boots \nSquid Boots \nTarantula Helmet & Chestplate & Leggings & Boots \nWatcher Chestplate & Leggings & Boots \nWither Chestplate & Leggings & Boots","color":"#000000"},
{"name":"Lapis Armor Chestplate & Leggings & Boots","color":"#0000ff"},
{"name":"Pure Blue Dye","color":"#0013FF"},
{"name":"Shark Scale Chestplate & Leggings & Boots","color":"#002ca6"},
{"name":"Bingo Blue Dye","color":"#002FA7"},
{"name":"Jade Dye","color":"#00A86B"},
{"name":"Helmet & Chestplate & Leggings & Boots of Growth","color":"#00be00"},
{"name":"Cactus Helmet & Chestplate & Leggings & Boots \nEmerald Armor Helmet & Chestplate & Leggings & Boots \nParty Top Hat","color":"#00ff00"},
{"name":"Rotten Chestplate & Leggings","color":"#017d31"},
{"name":"Squash Chestplate","color":"#03430e"},
{"name":"Glacite Chestplate & Leggings & Boots","color":"#03fcf8"},
{"name":"Stereo Pants","color":"#04cfd3"},
{"name":"Shimmering Light Tunic & Trousers & Slippers (Chestplate & Leggings & Boots)","color":"#07031b"},
{"name":"Infernal Fervor / Fervor / Burning Fervor / Hot Fervor / Fiery Fervor Boots","color":"#07a674"},
{"name":"Frostbitten Dye","color":"#09D8EB"},
{"name":"Final Destination Chestplate & Boots","color":"#0a0011"},
{"name":"Angler Chestplate & Leggings & Boots","color":"#0b004f"},
{"name":"Burned Pants","color":"#0c0c96"},
{"name":"Squash Leggings","color":"#0c4a16"},
{"name":"Water Hydra Chestplate & Leggings & Boots","color":"#101555"},
{"name":"Sea Walker Chestplate & Leggings & Boots","color":"#10616e"},
{"name":"Pearlescent Dye","color":"#115555"},
{"name":"Guardian Chestplate","color":"#117391"},
{"name":"Squash Boots","color":"#13561e"},
{"name":"Wyld Boots","color":"#154918"},
{"name":"Storm's Chestplate & Leggings","color":"#1793c4"},
{"name":"Infernal Fervor / Fervor / Burning Fervor / Hot Fervor / Fiery Fervor Leggings","color":"#17bf89"},
{"name":"Elegant Tuxedo Jacket & Oxfords (Chestplate & Boots) \nExotic Pure Black","color":"#191919"},
{"name":"Snake-in-a-Boot","color":"#1a004c"},
{"name":"Reaper Chestplate & Leggings & Boots","color":"#1b1b1b"},
{"name":"Storm's Boots","color":"#1cd4e4"},
{"name":"Werewolf Chestplate & Leggings & Boots","color":"#1d1105"},
{"name":"CRYSTAL Dark Purple","color":"#1F0030"},
{"name":"Thunder Chestplate & Leggings & Boots","color":"#24dde5"},
{"name":"Skeleton Lord Chestplate & Leggings & Boots","color":"#268105"},
{"name":"Slug Boots","color":"#276114"},
{"name":"Infernal Aurora / Aurora / Burning Aurora / Hot Aurora / Fiery Aurora Chestplate","color":"#2841f1"},
{"name":"Wise Dragon Chestplate & Leggings & Boots","color":"#29f0e9"},
{"name":"Dark Purple Dye","color":"#301934"},
{"name":"Minos Hunter Boots","color":"#304b4e"},
{"name":"Tentacle Dye","color":"#324D6C"},
{"name":"CRYSTAL Dark Purple","color":"#46085E"},
{"name":"Fancy Tuxedo Jacket & Oxfords (Chestplate & Boots)","color":"#332a2a"},
{"name":"Ugly Boots","color":"#3333ff"},
{"name":"Exotic Pure Dark Blue","color":"#334CB2"},
{"name":"Vanguard Chestplate & Leggings & Boots","color":"#3588ff"},
{"name":"Wyld Leggings","color":"#35b73b"},
{"name":"Necromancer Lord Leggings","color":"#370147"},
{"name":"Goblin Chestplate & Leggings & Boots","color":"#37b042"},
{"name":"Exceedingly Comfy Sneakers","color":"#380024"},
{"name":"Cheap Tuxedo Jacket & Oxfords (Chestplate & Boots)","color":"#383838"},
{"name":"Holly Dye","color":"#3C6746"},
{"name":"Burning Terror / Fiery Terror / Hot Terror / Infernal Terror / Terror Chestplate","color":"#3e05af"},
{"name":"Aurora / Burning Aurora / Fiery Aurora / Hot Aurora / Infernal Aurora Leggings","color":"#3f56fb"},
{"name":"Necromancer Lord Boots","color":"#400352"},
{"name":"Crypt Witherlord Helmet & Chestplate & Leggings & Boots","color":"#450101"},
{"name":"Goldor's Chestplate","color":"#45413c"},
{"name":"CRYSTAL Dark Purple","color":"#54146E"},
{"name":"Nutcracker Boots","color":"#46343a"},
{"name":"Holy Dragon Chestplate & Leggings & Boots","color":"#47d147"},
{"name":"Femurgrowth Leggings","color":"#48ff00"},
{"name":"Maxor's Chestplate","color":"#4a14b7"},
{"name":"CRYSTAL Dark Purple","color":"#5D1C78"},
{"name":"Exotic Pure Dark Grey","color":"#4C4C4C"},
{"name":"Exotic Pure Cyan","color":"#4C7F99"},
{"name":"Leaflet Tunic & Pants & Sandals (Chestplate & Leggings & Boots)","color":"#4dcc4d"},
{"name":"Gunther's Sneakers","color":"#4f2886"},
{"name":"Dung Dye","color":"#4F2A2A"},
{"name":"Midnight Dye","color":"#50216C"},
{"name":"Pelt Dye","color":"#50414C"},
{"name":"Emerald Dye","color":"#50C878"},
{"name":"Crystal Helmet & Chestplate & Leggings & Boots","color":"#fcf3ff"},
{"name":"Squire Boots","color":"#545454"},
{"name":"Fallen Star Chestplate & Leggings & Boots","color":"#586158"},
{"name":"Fermento Chestplate","color":"#58890c"},
{"name":"Super Heavy Chestplate & Leggings","color":"#5a6464"},
{"name":"Glossy Mineral Chestplate & Leggings & Boots","color":"#5b0dae"},
{"name":"CRYSTAL Lavender","color":"#9C64B3"},
{"name":"Burning Terror / Fiery Terror / Hot Terror / Infernal Terror / Terror Leggings","color":"#5d23d1"},
{"name":"Maxor's Leggings","color":"#5d2fb9"},
{"name":"Spooky Chestplate & Leggings & Boots","color":"#606060"},
{"name":"Aurora / Burning Aurora / Fiery Aurora / Hot Aurora / Infernal Aurora Boots","color":"#6184fc"},
{"name":"CRYSTAL Lavender","color":"#A875BD"},
{"name":"Goldor's Leggings","color":"#65605a"},
{"name":"CRYSTAL Lavender","color":"#B88BC9"},
{"name":"CRYSTAL Lavender","color":"#C6A3D4"},
{"name":"CRYSTAL Offwhite","color":"#D9C1E3"},
{"name":"Exotic Pure Brown","color":"#664C33"},
{"name":"Exotic Pure Dark Green","color":"#667F33"},
{"name":"Exotic Pure Light Blue","color":"#6699D8"},
{"name":"CRYSTAL Offwhite","color":"#E5D1ED"},
{"name":"Fermento Leggings","color":"#6a9c1b"},
{"name":"Magma Lord Chestplate & Leggings & Boots","color":"#6f0f08"},
{"name":"Byzantium Dye","color":"#702963"},
{"name":"Iceberg Dye","color":"#71A6D2"},
{"name":"Matcha Dye","color":"#74A12E"},
{"name":"Cropie Chestplate","color":"#7a2900"},
{"name":"Prospecting Helmet & Chestplate & Leggings & Boots","color":"#7a7964"},
{"name":"Creeper Pants","color":"#7ae82c"},
{"name":"Chocolate Dye","color":"#7B3F00"},
{"name":"Burning Terror / Fiery Terror / Hot Terror / Infernal Terror / Terror Boots","color":"#7c44ec"},
{"name":"Secret Dye","color":"#7D7D7D"},
{"name":"CRYSTAL Offwhite","color":"#EFE1F5"},
{"name":"CRYSTAL Offwhite","color":"#FCF3FF"},
{"name":"Exotic Pure Purple","color":"#7F3FB2"},
{"name":"Exotic Pure Lime","color":"#7FCC19"},
{"name":"Aquamarine Dye","color":"#7FFFD4"},
{"name":"Ghostly Boots","color":"#808080"},
{"name":"Heavy Chestplate & Leggings","color":"#828282"},
{"name":"Fermento Boots","color":"#83b03b"},
{"name":"Fossil Dye","color":"#866F12"},
{"name":"Goldor's Boots","color":"#88837e"},
{"name":"Maxor's Boots","color":"#8969c8"},
{"name":"Melon Chestplate & Leggings & Boots","color":"#899e20"},
{"name":"Arachne's Chestplate & Leggings & Boots","color":"#8b0000"},
{"name":"CRYSTAL Purple","color":"#63237D"},
{"name":"Cropie Leggings","color":"#94451f"},
{"name":"Carmine Dye","color":"#960018"},
{"name":"Mocha Dye","color":"#967969"},
{"name":"CRYSTAL Purple","color":"#6A2C82"},
{"name":"CRYSTAL Purple","color":"#7E4196"},
{"name":"Emperor Robes & Leggings & Shoes (Chestplate & Leggings & Boots)","color":"#990d00"},
{"name":"Exotic Pure Red","color":"#993333"},
{"name":"Great Spook Helmet & Chestplate & Leggings & Boots","color":"#993399"},
{"name":"CRYSTAL Purple","color":"#8E51A6"},
{"name":"Protector Dragon Chestplate & Leggings & Boots","color":"#99978b"},
{"name":"Exotic Pure Light Grey","color":"#999999"},
{"name":"Zombie Lord Chestplate & Leggings & Boots","color":"#9b01c1"},
{"name":"FAIRY Dark Pink Helmet \nOG FAIRY+ Chestplate & Leggings & Boots","color":"#660033"},
{"name":"Rotten Helmet & Boots","color":"#9e7003"},
{"name":"Boots of the Rising Sun","color":"#9f8609"},
{"name":"Frozen Blaze Chestplate & Leggings & Boots","color":"#a0daef"},
{"name":"Salmon Chestplate & Leggings","color":"#a82b76"},
{"name":"FAIRY Dark Pink Helmet & Chestplate \nOG FAIRY+ Leggings & Boots","color":"#99004C"},
{"name":"Celadon Dye","color":"#ACE1AF"},
{"name":"Bouncy Helmet & Chestplate & Leggings & Boots","color":"#adff2f"},
{"name":"Unstable Dragon Chestplate & Leggings & Boots","color":"#b212e3"},
{"name":"Exotic Pure Magenta","color":"#B24CD8"},
{"name":"FAIRY Hot Pink Helmet & Chestplate & Leggings \nOG FAIRY+ Boots","color":"#CC0066"},
{"name":"Celeste Dye","color":"#B2FFFF"},
{"name":"Heat Helmet & Chestplate & Leggings & Boots","color":"#b3b3b3"},
{"name":"Archfiend Dye","color":"#B80036"},
{"name":"Copper Dye","color":"#B87333"},
{"name":"FAIRY Hot Pink Helmet & Chestplate & Leggings & Boots","color":"#FF007F"},
{"name":"Cropie Boots","color":"#bb6535"},
{"name":"Adaptive Chestplate & Leggins & Boots","color":"#bfbcb2"},
{"name":"Spirit Boots","color":"#bfbfbf"},
{"name":"Salmon Helmet & Boots","color":"#c13c0f"},
{"name":"FAIRY Pink Chestplate & Leggings & Boots","color":"#FF66B2"},
{"name":"Cheap Tuxedo Pants","color":"#c7c7c7"},
{"name":"Yog Helmet & Chestplate & Leggings & Boots","color":"#c83200"},
{"name":"Brick Red Dye","color":"#CB4154"},
{"name":"Rabbit Helmet & Chestplate & Leggings & Boots","color":"#cbd2db"},
{"name":"Fairy's Fedora \nFAIRY Pink Helmet & Chestplate & Leggings & Boots","color":"#ff3399"},
{"name":"Fairy's Galoshes \nFAIRY Pastel Pink Boots \nOG FAIRY+ Helmet & Chestplate & Leggings","color":"#ffcce5"},
{"name":"Farmer Boots","color":"#cc5500"},
{"name":"Fairy's Polo \nOG FAIRY+ Helmet","color":"#ff66b2"},
{"name":"Periwinkle Dye","color":"#CCCCFF"},
{"name":"Mineral Chestplate & Leggings & Boots","color":"#cce5ff"},
{"name":"Moogma Leggings","color":"#ce2c2c"},
{"name":"Livid Dye","color":"#CEB7AA"},
{"name":"Zombie Soldier Helmet & Chestplate & Leggings & Boots","color":"#d07f00"},
{"name":"Starlight Chestplate & Boots","color":"#d400ff"},
{"name":"Sangria Dye","color":"#D40808"},
{"name":"Celeste Helmet","color":"#d48ef2"},
{"name":"Fancy Tuxedo Pants","color":"#d4d4d4"},
{"name":"Zombie Commander Helmet & Chestplate & Leggings & Boots","color":"#d51230"},
{"name":"Exotic Pure Orange","color":"#D87F33"},
{"name":"Strong Dragon Chestplate","color":"#d91e41"},
{"name":"Fairy's Trousers \nFAIRY Pastel Pink & Leggings & Boots  \nOG FAIRY+ Helmet & Chestplate","color":"#ff99cc"},
{"name":"Metal / Steel / Stone Chestplate","color":"#d9d9d9"},
{"name":"Young Dragon Chestplate & Leggings & Boots","color":"#dde4f0"},
{"name":"Leggings of the Rising Sun","color":"#debc15"},
{"name":"Rampart Chestplate & Leggings & Boots","color":"#df2e06"},
{"name":"Strong Dragon Leggings","color":"#e09419"},
{"name":"Mercenary Boots \nSpeedster Helmet & Chestplate & Leggings & Boots","color":"#e0fcf7"},
{"name":"Skeleton Grunt Helmet & Chestplate & Leggings & Boots","color":"#e1eb34"},
{"name":"Flame Dye","color":"#E25822"},
{"name":"Bone Dye","color":"#E3DAC9"},
{"name":"Burning Hollow / Fiery Hollow / Hollow / Hot Hollow / Infernal Hollow Boots","color":"#e3fffa"},
{"name":"OG FAIRY Magenta","color":"#660066"},
{"name":"OG FAIRY Magenta","color":"#990099"},
{"name":"Exotic Pure Yellow","color":"#E5E533"},
{"name":"Burning Crimson / Crimson / Fiery Crimson / Hot Crimson / Infernal Crimson Boots","color":"#e65300"},
{"name":"Burning Crimson / Crimson / Fiery Crimson / Hot Crimson / Infernal Leggings","color":"#e66105"},
{"name":"Super Heavy Helmet & Boots","color":"#e6e6e6"},
{"name":"Necron Dye","color":"#E7413C"},
{"name":"Necron's Chestplate","color":"#e7413c"},
{"name":"Necron's Leggings","color":"#e75c3c"},
{"name":"Necron's Boots","color":"#e76e3c"},
{"name":"Nyanza Dye","color":"#E9FFDB"},
{"name":"Flaming Chestplate","color":"#ed6612"},
{"name":"Pumpkin Helmet & Chestplate & Leggings & Boots","color":"#edaa36"},
{"name":"OG FAIRY Magenta","color":"#CC00CC"},
{"name":"Infernal Fervor / Fervor / Burning Fervor / Hot Fervor / Fiery Fervor Chestplate","color":"#f04729"},
{"name":"Strong Dragon Boots","color":"#f0d124"},
{"name":"Old Dragon Chestplate & Leggings & Boots","color":"#f0e6aa"},
{"name":"Superior Dragon Boots","color":"#f25d18"},
{"name":"Exotic Pure Pink","color":"#F27FA5"},
{"name":"Superior Dragon Chestplate & Leggings","color":"#f2df11"},
{"name":"Cyclamen Dye","color":"#F56FA1"},
{"name":"Nadeshiko Dye","color":"#F6ADC6"},
{"name":"Blaze Chestplate & Leggings & Boots","color":"#f7da33"},
{"name":"Nutcracker Chestplate","color":"#fc2f3c"},
{"name":"OG FAIRY Magenta","color":"#FF00FF"},
{"name":"OG FAIRY Magenta","color":"#FF33FF"},
{"name":"Mango Dye","color":"#FDBE02"},
{"name":"Elegant Tuxedo Pants","color":"#fefdfc"},
{"name":"Chestplate of the Pack /nMushroom Helmet & Chestplate & Leggings & Boots","color":"#ff0000"},
{"name":"OG FAIRY Magenta","color":"#FF66FF"},
{"name":"OG FAIRY Pastel Magenta","color":"#FF99FF"},
{"name":"Minos Hunter Chestplate & Leggings","color":"#ff0a0a"},
{"name":"OG FAIRY Pastel Magenta","color":"#FFCCFF"},
{"name":"OG FAIRY Pastel Purple","color":"#CC99FF"},
{"name":"Wild Strawberry Dye","color":"#FF43A4"},
{"name":"Orange Chestplate","color":"#ff4600"},
{"name":"OG FAIRY Pastel Purple","color":"#E5CCFF"},
{"name":"OG FAIRY Purple","color":"#330066"},
{"name":"OG FAIRY Purple","color":"#4C0099"},
{"name":"Skeleton Master Helmet & Chestplate & Leggings & Boots","color":"#ff6b0b"},
{"name":"Burning Crimson / Crimson / Fiery Crimson / Hot Crimson / Infernal Crimson Chestplate","color":"#ff6f0c"},
{"name":"Final Destination Leggings","color":"#ff75ff"},
{"name":"Celeste Boots","color":"#ff8eb6"},
{"name":"Celeste Leggings","color":"#ff8eca"},
{"name":"Celeste Chestplate","color":"#ff8ede"},
{"name":"Armor of Magma Helmet & Chestplate & Leggings & Boots","color":"#ff9300"},
{"name":"OG FAIRY Purple","color":"#6600CC"},
{"name":"OG FAIRY Purple","color":"#7F00FF"},
{"name":"Berserker Chestplate","color":"#ffa33b"},
{"name":"Biohazard Suit & Leggings & Boots","color":"#ffac00"},
{"name":"Berserker Leggings","color":"#ffb727"},
{"name":"Skeleton Soldier Helmet & Chestplate & Leggings & Boots","color":"#ffbc0b"},
{"name":"Burning Hollow / Fiery Hollow / Hollow / Hot Hollow / Infernal Hollow Chestplate","color":"#ffcb0d"},
{"name":"OG FAIRY Purple","color":"#9933FF"},
{"name":"OG FAIRY Purple","color":"#B266FF"},
{"name":"Berserker Boots","color":"#ffd427"},
{"name":"Eleanor's Cap & Tunic & Trousers & Slippers (Chestplate & Leggings & Boots) \nW Logo","color":"#ffd700"},
{"name":"Sponge Chestplate & Leggings & Boots","color":"#ffdc51"},
{"name":"Chicken Leggs","color":"#fff200"},
{"name":"Burning Hollow / Fiery Hollow / Hollow / Hot Hollow / Infernal Hollow Leggings","color":"#fff6a3"},
{"name":"Pure Yellow Dye","color":"#FFF700"},
{"name":"Nutcracker Leggings","color":"#fff9eb"},
{"name":"Farm Suit Helmet & Chestplate & Leggings & Boots","color":"#ffff00"},
{"name":"Heavy Helmet & Boots \nHelmet of the Pack \nPure White Dye \nSnow Suit Chestplate & Leggings & Boots \nExotic Pure White","color":"#ffffff"}
];

function rgbToXyz(rgb) {
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;

    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    r *= 100;
    g *= 100;
    b *= 100;

    const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
    const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
    const z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;

    return { x, y, z };
}

function xyzToLab(xyz) {
    const x = xyz.x / 95.047;
    const y = xyz.y / 100.000;
    const z = xyz.z / 108.883;

    const fx = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
    const fy = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
    const fz = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

    const l = (116 * fy) - 16;
    const a = 500 * (fx - fy);
    const b = 200 * (fy - fz);

    return { l, a, b };
}

function rgbToLab(rgb) {
    const xyz = rgbToXyz(rgb);
    return xyzToLab(xyz);
}

let currentLanguage = 'en';

const translations = {
    ru: {
        title: 'SBPalette for Hypixel',
        findButton: 'Найти',
        clearHistoryButton: 'Сбросить историю',
        hexPlaceholder: 'Введите HEX код',
        historyTitle: 'История запросов:',
        tableTitle: 'Таблица ближайших цветов:',
        armorHeader: 'Ближайщая броня',
        hexHeader: 'HEX',
        colorHeader: 'Цвет ближайшей брони',
        differenceHeader: 'Дельта (Разница)',
        tierHeader: 'Ранг',
        invalidHex: 'Неверный формат HEX кода',
        enteredColor: 'Введённый цвет:',
        copySettingsTitle: 'Настройки копирования',
        saveButton: 'Сохранить',
        themes: {
            light: 'Светлая',
            dark: 'Темная',
            cosmic: 'Космическая',
            drinwater: 'Вода',
            colors: 'Цвета'
        },
        armorTypeHeader: 'Тип брони',
        fieldSelection: 'Выбор полей',
        fieldOrder: 'Порядок полей',
        orderInstructions: 'Перетащите поля для изменения порядка копирования:',
        dragHint: 'Удерживайте ≡ и перетаскивайте для изменения порядка',
        dragHandleTitle: 'Перетащите для изменения позиции'
    },
    en: {
        title: 'SBPalette for Hypixel',
        findButton: 'Find',
        clearHistoryButton: 'Clear History',
        hexPlaceholder: 'Enter HEX code',
        historyTitle: 'History of Requests:',
        tableTitle: 'Table of Closest Colors:',
        armorHeader: 'Closest armor',
        hexHeader: 'HEX',
        colorHeader: 'Color of the closest armor',
        differenceHeader: 'Delta (Difference)',
        tierHeader: 'Rank',
        invalidHex: 'Invalid HEX code format',
        enteredColor: 'Entered color:',
        copySettingsTitle: 'Copy Settings',
        saveButton: 'Save',
        themes: {
            light: 'Light',
            dark: 'Dark',
            cosmic: 'Cosmic',
            drinwater: 'Drinwater',
            colors: 'Colors'
        },
        armorTypeHeader: 'Armor Type',
        fieldSelection: 'Field Selection',
        fieldOrder: 'Field Order',
        orderInstructions: 'Drag fields to change copying order:',
        dragHint: 'Hold ≡ and drag to change order',
        dragHandleTitle: 'Drag to reorder'
    }
};

function checkColor() {
    let hex = document.getElementById('hexInput').value.trim().toUpperCase();
    const resultDiv = document.getElementById('result');

    // Автоматическое добавление #, если его нет
    if (!hex.startsWith('#')) {
        hex = '#' + hex;
    }

    if (hex.length !== 7 || !/^#[0-9A-F]{6}$/.test(hex)) {
        resultDiv.textContent = translations[currentLanguage].invalidHex;
        updateColorPreview('');
        return;
    }

    // Обновить цвет превью
    updateColorPreview(hex);

    // Найти пять ближайших цветов
    const closestColors = findClosestColors(hex, armorData, 5);
    resultDiv.innerHTML = `<p>${translations[currentLanguage].enteredColor} ${hex} <span class="color-preview" style="background-color: ${hex};"></span></p>`;

    // Заполнить таблицу
    fillTable(closestColors);

    // Сохранить запрос в историю
    saveToHistory(hex);
    loadHistory();
}

function findClosestColors(targetHex, armorData, count) {
    const targetRGB = hexToRgb(targetHex);
    const targetLAB = rgbToLab(targetRGB);

    const colorDistances = armorData.map(item => {
        const itemRGB = hexToRgb(item.color);
        const itemLAB = rgbToLab(itemRGB);

        const deltaL = targetLAB.l - itemLAB.l;
        const deltaA = targetLAB.a - itemLAB.a;
        const deltaB = targetLAB.b - itemLAB.b;

        const distance = Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);

        return {
            name: item.name,
            color: item.color,
            distance: distance
        };
    });

    colorDistances.sort((a, b) => a.distance - b.distance);
    return colorDistances.slice(0, count);
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
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

function fillTable(colors) {
    const tableBody = document.getElementById('colorTable').getElementsByTagName('tbody')[0];
    const copyTableBody = document.getElementById('copyTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Очистить таблицу
    copyTableBody.innerHTML = ''; // Очистить таблицу с кнопками

    const hexInputValue = document.getElementById('hexInput').value.trim().toUpperCase();

    colors.forEach((item, index) => {
        const row = tableBody.insertRow();
        const cellName = row.insertCell(0);
        const cellHex = row.insertCell(1);
        const cellColor = row.insertCell(2);
        const cellDistance = row.insertCell(3);
        const cellRank = row.insertCell(4);

        cellName.textContent = item.name;
        cellHex.textContent = item.color;
        cellColor.className = 'color-cell';
        cellColor.style.backgroundColor = item.color;
        cellDistance.textContent = item.distance.toFixed(2);
        cellRank.textContent = getRank(item.distance); // Получить ранг

        //условный класс к ячейкам
        cellName.className = `cell-name-${index}`;
        cellHex.className = `cell-hex-${index}`;
        cellColor.className = `cell-color-${index}`;
        cellDistance.className = `cell-distance-${index}`;
        cellRank.className = `cell-rank-${index}`;

        // Добавляем кнопку копирования и выпадающий список в отдельную таблицу
        const copyRow = copyTableBody.insertRow();
        const cellCopy = copyRow.insertCell(0);

        const armorTypeSelect = document.createElement('select');
        armorTypeSelect.innerHTML = `
            <option value="🎩">🎩</option>
            <option value="👔">👔</option>
            <option value="👖">👖</option>
            <option value="👞">👞</option>
        `;
        armorTypeSelect.className = 'armor-type-select';

        const copyButton = document.createElement('button');
        copyButton.innerHTML = '📋'; // Используем эмодзи буфера обмена
        copyButton.className = 'copy-button';
        copyButton.onclick = () => copyRowToClipboard(hexInputValue, item, armorTypeSelect.value);

        cellCopy.appendChild(armorTypeSelect);
        cellCopy.appendChild(copyButton);
    });

    // Убедимся, что заголовок таблицы копирования всегда создается
    const copyTable = document.getElementById('copyTable');
    if (!copyTable.tHead) {
        const copyTableHeader = copyTable.createTHead();
        const copyTableHeaderRow = copyTableHeader.insertRow(0);
        const copyTableHeaderCell = copyTableHeaderRow.insertCell(0);
        copyTableHeaderCell.innerHTML = '<span>Copy ⚙️</span>';
        copyTableHeaderCell.style.cursor = 'pointer';
        copyTableHeaderCell.onclick = () => openSettingsModal();
    }
}

// Показать вкладку настроек и заполнить ее
function showSettingsTab(tabName) {
    document.querySelectorAll('.settings-tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    document.getElementById(tabName + 'Tab').style.display = 'block';
    document.querySelector(`.tab-button[onclick="showSettingsTab('${tabName}')"]`).classList.add('active');
    
    // Если переключились на вкладку порядка полей, убедимся что список заполнен
    if (tabName === 'order') {
        // Убедимся, что список не пуст
        const orderList = document.getElementById('fieldOrderList');
        if (orderList && orderList.children.length === 0) {
            // Если список пуст, заполним его заново
            const settings = JSON.parse(localStorage.getItem('copySettings')) || getDefaultSettings();
            populateFieldOrderList(settings.order);
            // Реинициализируем сортировку
            initSortable();
        }
    }
}

// Создаём список полей для сортировки
function populateFieldOrderList(orderArray) {
    const orderList = document.getElementById('fieldOrderList');
    if (!orderList) return;
    
    // Очистим список
    orderList.innerHTML = '';
    
    // Проверим, есть ли у нас подсказка о drag-and-drop
    let dragHint = document.querySelector('.drag-hint');
    if (!dragHint) {
        // Если нет, создадим ее
        dragHint = document.createElement('div');
        dragHint.className = 'drag-hint';
        dragHint.innerHTML = `<div class="hint-icon">↕️</div><div>${translations[currentLanguage].dragHint || 'Удерживайте ≡ и перетаскивайте для изменения порядка'}</div>`;
        const orderContainer = document.getElementById('orderTab');
        if (orderContainer) {
            // Добавляем подсказку перед инструкциями
            const instructionsDiv = orderContainer.querySelector('.order-instructions');
            if (instructionsDiv) {
                orderContainer.insertBefore(dragHint, instructionsDiv.nextSibling);
            } else {
                orderContainer.insertBefore(dragHint, orderContainer.firstChild);
            }
        }
    }
    
    // Получаем текущие настройки
    const settings = JSON.parse(localStorage.getItem('copySettings')) || getDefaultSettings();
    
    // Используем сохранённый порядок или создаём стандартный
    let fieldOrder = orderArray && orderArray.length > 0 ? orderArray : getDefaultFieldOrder();
    
    // Фильтруем список порядка полей, чтобы показывать только выбранные поля
    // Поле hexInput всегда включено
    fieldOrder = fieldOrder.filter(field => field === 'hexInput' || settings.fields[field]);
    
    // Добавляем элементы в список
    fieldOrder.forEach(field => {
        const fieldName = getFieldDisplayName(field);
        const li = document.createElement('li');
        li.className = 'sortable-item';
        li.setAttribute('data-field', field);
        li.innerHTML = `
            <div class="drag-handle" title="${translations[currentLanguage].dragHandleTitle || 'Перетащите для изменения позиции'}">≡</div>
            <div class="field-name">${fieldName}</div>
        `;
        orderList.appendChild(li);
    });
    
    // Проверим, что список не пуст
    if (orderList.children.length === 0) {
        // Если почему-то список всё ещё пуст, явно заполним его стандартными значениями
        getDefaultFieldOrder().forEach(field => {
            if (field === 'hexInput' || settings.fields[field]) {
                const fieldName = getFieldDisplayName(field);
                const li = document.createElement('li');
                li.className = 'sortable-item';
                li.setAttribute('data-field', field);
                li.innerHTML = `
                    <div class="drag-handle" title="${translations[currentLanguage].dragHandleTitle || 'Перетащите для изменения позиции'}">≡</div>
                    <div class="field-name">${fieldName}</div>
                `;
                orderList.appendChild(li);
            }
        });
    }
    
    console.log('Создано элементов для сортировки:', orderList.children.length);
}

// Получаем понятное имя поля для отображения
function getFieldDisplayName(fieldKey) {
    const displayNames = {
        'ru': {
            'hexInput': 'HEX код',
            'hexWithX': 'HEX с X (Xx Xx Xx)',
            'armorType': translations[currentLanguage].armorTypeHeader || 'Тип брони',
            'enteredRedHex': 'Красный HEX (ввод)',
            'enteredGreenHex': 'Зелёный HEX (ввод)',
            'enteredBlueHex': 'Синий HEX (ввод)',
            'enteredRedRgb': 'Красный RGB (ввод)',
            'enteredGreenRgb': 'Зелёный RGB (ввод)',
            'enteredBlueRgb': 'Синий RGB (ввод)',
            'name': translations[currentLanguage].armorHeader || 'Броня',
            'color': translations[currentLanguage].colorHeader || 'Цвет',
            'closestRedHex': 'Красный HEX (ближ.)',
            'closestGreenHex': 'Зелёный HEX (ближ.)',
            'closestBlueHex': 'Синий HEX (ближ.)',
            'closestRedRgb': 'Красный RGB (ближ.)',
            'closestGreenRgb': 'Зелёный RGB (ближ.)',
            'closestBlueRgb': 'Синий RGB (ближ.)',
            'distance': translations[currentLanguage].differenceHeader || 'Разница',
            'rank': translations[currentLanguage].tierHeader || 'Ранг'
        },
        'en': {
            'hexInput': 'HEX code',
            'hexWithX': 'HEX with X (Xx Xx Xx)',
            'armorType': translations[currentLanguage].armorTypeHeader || 'Armor Type',
            'enteredRedHex': 'Red HEX (input)',
            'enteredGreenHex': 'Green HEX (input)',
            'enteredBlueHex': 'Blue HEX (input)',
            'enteredRedRgb': 'Red RGB (input)',
            'enteredGreenRgb': 'Green RGB (input)',
            'enteredBlueRgb': 'Blue RGB (input)',
            'name': translations[currentLanguage].armorHeader || 'Armor',
            'color': translations[currentLanguage].colorHeader || 'Color',
            'closestRedHex': 'Red HEX (closest)',
            'closestGreenHex': 'Green HEX (closest)',
            'closestBlueHex': 'Blue HEX (closest)',
            'closestRedRgb': 'Red RGB (closest)',
            'closestGreenRgb': 'Green RGB (closest)',
            'closestBlueRgb': 'Blue RGB (closest)',
            'distance': translations[currentLanguage].differenceHeader || 'Difference',
            'rank': translations[currentLanguage].tierHeader || 'Rank'
        }
    };
    
    return displayNames[currentLanguage][fieldKey] || fieldKey;
}

// Инициализация сортировки
function initSortable() {
    const orderList = document.getElementById('fieldOrderList');
    if (!orderList) return;
    
    // Здесь можно будет использовать библиотеку для drag-n-drop, 
    // но для простого примера используем собственную реализацию
    
    let dragItem = null;
    let placeholder = null;
    
    // Создаем плейсхолдер для отображения места вставки
    function createPlaceholder() {
        const ph = document.createElement('div');
        ph.className = 'sortable-placeholder';
        ph.style.height = '2px';
        ph.style.background = '#3498db';
        ph.style.margin = '5px 0';
        ph.style.transition = 'all 0.2s ease';
        ph.style.borderRadius = '2px';
        ph.style.position = 'relative';
        return ph;
    }
    
    // Обработчики для перетаскивания
    orderList.querySelectorAll('.sortable-item').forEach(item => {
        item.querySelector('.drag-handle').addEventListener('mousedown', function(e) {
            dragItem = item;
            dragItem.classList.add('dragging');
            
            // Создаем индикатор позиции
            if (!placeholder) {
                placeholder = createPlaceholder();
            }
            
            // Позиция начального нажатия для расчета смещения
            const initialY = e.clientY;
            const initialRect = item.getBoundingClientRect();
            const listRect = orderList.getBoundingClientRect();
            
            // Сохраняем начальную позицию для анимации
            const initialTop = item.offsetTop;
            const initialLeft = item.offsetLeft;
            
            // Визуальный стиль для перетаскиваемого элемента
            dragItem.style.position = 'absolute';
            dragItem.style.zIndex = '1000';
            dragItem.style.width = initialRect.width + 'px';
            dragItem.style.left = initialLeft + 'px';
            dragItem.style.top = initialTop + 'px';
            dragItem.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            dragItem.style.opacity = '0.8';
            dragItem.style.pointerEvents = 'none'; // Чтобы избежать мерцания
            
            // Вставляем плейсхолдер сразу после перетаскиваемого элемента
            orderList.insertBefore(placeholder, dragItem.nextSibling);
            
            // Обработчик движения мыши
            function mouseMoveHandler(e) {
                const newY = e.clientY;
                
                // Перемещаем элемент вслед за курсором
                const deltaY = newY - initialY;
                dragItem.style.top = `${initialTop + deltaY}px`;
                
                // Находим элемент под курсором
                const items = Array.from(orderList.querySelectorAll('.sortable-item:not(.dragging)'));
                let targetItem = null;
                
                // Определяем ближайший элемент для вставки
                for (let i = 0; i < items.length; i++) {
                    const box = items[i].getBoundingClientRect();
                    const boxCenter = box.top + box.height / 2;
                    
                    if (newY < boxCenter) {
                        targetItem = items[i];
                        break;
                    }
                }
                
                // Подсвечиваем границу элемента, перед которым будем вставлять
                items.forEach(el => {
                    el.style.borderTop = '';
                    el.style.marginTop = '';
                });
                
                // Перемещаем плейсхолдер
                if (targetItem) {
                    // Вставляем плейсхолдер перед целевым элементом
                    orderList.insertBefore(placeholder, targetItem);
                } else if (items.length > 0) {
                    // Если курсор внизу списка, вставляем после последнего элемента
                    orderList.insertBefore(placeholder, null);
                }
            }
            
            // Обработчик отпускания мыши
            function mouseUpHandler() {
                // Убираем стили перетаскивания
                dragItem.classList.remove('dragging');
                dragItem.style.position = '';
                dragItem.style.zIndex = '';
                dragItem.style.width = '';
                dragItem.style.left = '';
                dragItem.style.top = '';
                dragItem.style.boxShadow = '';
                dragItem.style.opacity = '';
                dragItem.style.pointerEvents = '';
                
                // Вставляем элемент на место плейсхолдера
                if (placeholder && placeholder.parentNode) {
                    orderList.insertBefore(dragItem, placeholder);
                    placeholder.parentNode.removeChild(placeholder);
                }
                
                // Сбрасываем переменные и убираем обработчики
                dragItem = null;
                placeholder = null;
                
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            }
            
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
            
            e.preventDefault();
        });
    });
}

// Получить стандартные настройки
function getDefaultSettings() {
    return {
        fields: {
            armorType: true,
            hexWithX: true,
            enteredRedHex: true,
            enteredGreenHex: true,
            enteredBlueHex: true,
            enteredRedRgb: true,
            enteredGreenRgb: true,
            enteredBlueRgb: true,
            name: true,
            color: true,
            closestRedHex: true,
            closestGreenHex: true,
            closestBlueHex: true,
            closestRedRgb: true,
            closestGreenRgb: true,
            closestBlueRgb: true,
            distance: true,
            rank: true
        },
        order: getDefaultFieldOrder()
    };
}

// Получить стандартный порядок полей
function getDefaultFieldOrder() {
    return [
        'hexInput',
        'hexWithX',
        'armorType',
        'enteredRedHex',
        'enteredGreenHex',
        'enteredBlueHex',
        'enteredRedRgb',
        'enteredGreenRgb',
        'enteredBlueRgb',
        'name',
        'color',
        'closestRedHex',
        'closestGreenHex',
        'closestBlueHex',
        'closestRedRgb',
        'closestGreenRgb',
        'closestBlueRgb',
        'distance',
        'rank'
    ];
}

// Функция для сохранения настроек копирования
function saveCopySettings() {
    const form = document.getElementById('copySettingsForm');
    const formData = new FormData(form);
    const settings = getDefaultSettings();
    
    // Сбрасываем все поля
    Object.keys(settings.fields).forEach(key => {
        settings.fields[key] = false;
    });
    
    // Устанавливаем выбранные поля
    formData.forEach((value, key) => {
        settings.fields[key] = true;
    });
    
    // Сохраняем порядок полей
    const orderList = document.getElementById('fieldOrderList');
    if (orderList) {
        settings.order = Array.from(orderList.querySelectorAll('.sortable-item')).map(item => 
            item.getAttribute('data-field')
        );
    }
    
    localStorage.setItem('copySettings', JSON.stringify(settings));
    closeSettingsModal();
}

// Обновление функции копирования с учётом типа брони и порядка полей
function copyRowToClipboard(hex, item, armorType) {
    const savedSettings = JSON.parse(localStorage.getItem('copySettings'));
    const settings = savedSettings || getDefaultSettings();

    const input = hex.startsWith('#') ? hex.slice(1) : hex;

    const rgb = hexToRgb(item.color);
    const enteredRedHex = input.slice(0, 2);
    const enteredGreenHex = input.slice(2, 4);
    const enteredBlueHex = input.slice(4, 6);
    const enteredRedRgb = parseInt(enteredRedHex, 16);
    const enteredGreenRgb = parseInt(enteredGreenHex, 16);
    const enteredBlueRgb = parseInt(enteredBlueHex, 16);
    const closestRedHex = item.color.slice(1, 3);
    const closestGreenHex = item.color.slice(3, 5);
    const closestBlueHex = item.color.slice(5, 7);
    const closestRedRgb = rgb.r;
    const closestGreenRgb = rgb.g;
    const closestBlueRgb = rgb.b;
    const hexWithX = `${enteredRedHex[0]}x ${enteredGreenHex[0]}x ${enteredBlueHex[0]}x`;
    const hexInput = input;

    // Добавление типа брони в строку копирования
    const armorTypeMap = {
        '🎩': 'Velvet Top Hat',
        '👔': 'Cashmere Jacket',
        '👖': 'Satin Trousers',
        '👞': 'Oxford Shoes'
    };
    
    // Создаем объект со всеми возможными полями
    const fieldValues = {
        'hexInput': hexInput,
        'hexWithX': hexWithX,
        'armorType': armorTypeMap[armorType],
        'enteredRedHex': enteredRedHex,
        'enteredGreenHex': enteredGreenHex,
        'enteredBlueHex': enteredBlueHex,
        'enteredRedRgb': enteredRedRgb,
        'enteredGreenRgb': enteredGreenRgb,
        'enteredBlueRgb': enteredBlueRgb,
        'name': item.name,
        'color': item.color,
        'closestRedHex': closestRedHex,
        'closestGreenHex': closestGreenHex,
        'closestBlueHex': closestBlueHex,
        'closestRedRgb': closestRedRgb,
        'closestGreenRgb': closestGreenRgb,
        'closestBlueRgb': closestBlueRgb,
        'distance': item.distance.toFixed(3),
        'rank': getRank(item.distance)
    };
    
    // Собираем значения в нужном порядке с учетом включенных полей
    let rowText = '';
    
    for (const field of settings.order) {
        // Проверяем, что поле 'hexInput' всегда включено, остальные - по настройке
        if (field === 'hexInput' || settings.fields[field]) {
            if (rowText) rowText += '\t';
            rowText += fieldValues[field];
        }
    }

    navigator.clipboard.writeText(rowText).then(() => {
        alert('Row copied to clipboard!');
    }, (err) => {
        console.error('Error copying row: ', err);
    });
}

function saveToHistory(hex) {
    let history = JSON.parse(localStorage.getItem('colorHistory')) || [];
    if (!history.includes(hex)) {
        history.unshift(hex); // Добавляем в начало массива
        localStorage.setItem('colorHistory', JSON.stringify(history));
    }
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('colorHistory')) || [];
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = history.map(hex => `<span class="history-tag" onclick="checkColorFromHistory('${hex}')">${hex}</span>`).join(' ');
}

function checkColorFromHistory(hex) {
    document.getElementById('hexInput').value = hex;
    checkColor();
}

function toggleLanguage() {
    const languageSelect = document.getElementById('languageSelect');
    currentLanguage = languageSelect.value;

    const title = document.getElementById('title');
    const findButton = document.querySelector('button[onclick="checkColor()"]');
    const clearHistoryButton = document.querySelector('button[onclick="clearHistory()"]');
    const hexInput = document.getElementById('hexInput');
    const historyTitle = document.getElementById('historyTitle');
    const tableTitle = document.getElementById('tableTitle');
    const armorHeader = document.getElementById('armorHeader');
    const hexHeader = document.getElementById('hexHeader');
    const colorHeader = document.getElementById('colorHeader');
    const differenceHeader = document.getElementById('differenceHeader');
    const tierHeader = document.getElementById('tierHeader');

    title.textContent = translations[currentLanguage].title;
    findButton.textContent = translations[currentLanguage].findButton;
    clearHistoryButton.textContent = translations[currentLanguage].clearHistoryButton;
    hexInput.placeholder = translations[currentLanguage].hexPlaceholder;
    historyTitle.textContent = translations[currentLanguage].historyTitle;
    tableTitle.textContent = translations[currentLanguage].tableTitle;
    armorHeader.textContent = translations[currentLanguage].armorHeader;
    hexHeader.textContent = translations[currentLanguage].hexHeader;
    colorHeader.textContent = translations[currentLanguage].colorHeader;
    differenceHeader.textContent = translations[currentLanguage].differenceHeader;
    tierHeader.textContent = translations[currentLanguage].tierHeader;
    armorTypeHeader.textContent = translations[currentLanguage].armorTypeHeader;

    checkColor(); // Перезапустить проверку цвета для обновления текста результата
    updateThemeSelectOptions();
}

function clearHistory() {
    localStorage.removeItem('colorHistory');
    document.getElementById('historyContainer').innerHTML = '';
}

function updateColorPreview(hex) {
    const colorPreview = document.getElementById('colorPreview');
    if (colorPreview) {
        if (hex.length === 7 && /^#[0-9A-F]{6}$/i.test(hex)) {
            colorPreview.style.backgroundColor = hex;
        } else {
            colorPreview.style.backgroundColor = '';
        }
    }
}

function toggleTheme() {
    const themeSelect = document.getElementById('themeSelect');
    const selectedTheme = themeSelect.value;
    const body = document.body;

    // Удаляем все классы тем
    body.classList.remove('light-theme', 'dark-theme', 'cosmic-theme', 'drinwater-theme', 'colors-theme');
    
    // Добавляем класс выбранной темы
    body.classList.add(`${selectedTheme}-theme`);

    // Сохраняем выбранную тему в localStorage
    localStorage.setItem('selectedTheme', selectedTheme);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkColor();
    }
}

function getColorFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const color = urlParams.get('color');
    if (color) {
        const hexInput = document.getElementById('hexInput');
        hexInput.value = color;
        checkColor();
    }
}

// Загрузка сохраненной темы при загрузке страницы
window.onload = function() {
    loadHistory();
    
    // Проверяем URL параметры
    getColorFromUrl();
    
    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    document.getElementById('themeSelect').value = savedTheme;
    document.body.classList.add(`${savedTheme}-theme`);
    
    // Обновление языковых настроек для селектора тем
    updateThemeSelectOptions();
}

function updateThemeSelectOptions() {
    const themeSelect = document.getElementById('themeSelect');
    const options = themeSelect.options;
    
    options[0].text = translations[currentLanguage].themes.light;
    options[1].text = translations[currentLanguage].themes.dark;
    options[2].text = translations[currentLanguage].themes.cosmic;
    options[3].text = translations[currentLanguage].themes.drinwater;
    options[4].text = translations[currentLanguage].themes.colors;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkColor();
    }
}

function openChangelog() {
    // Можно открыть в новой вкладке
    window.open('changelog.html', '_blank');
}

function shareUrl() {
    const hex = document.getElementById('hexInput').value.trim();
    const baseUrl = 'https://yoksaires.github.io/sbpalette/main.html';
    const urlWithParam = `${baseUrl}?color=${encodeURIComponent(hex)}`;
    navigator.clipboard.writeText(urlWithParam).then(() => {
        alert('Ссылка скопирована в буфер обмена!');
    }, (err) => {
        console.error('Ошибка при копировании: ', err);
    });
}

// Добавление события для сохранения настроек копирования при закрытии страницы
window.addEventListener('beforeunload', () => {
    const form = document.getElementById('copySettingsForm');
    if (form) {
        const formData = new FormData(form);
        const settings = {};
        formData.forEach((value, key) => {
            settings[key] = true;
        });
        localStorage.setItem('copySettings', JSON.stringify(settings));
    }
});

// Функция для закрытия модального окна
function closeSettingsModal() {
    const modal = document.querySelector('.settings-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

// Функция для открытия модального окна настроек
function openSettingsModal() {
    const modal = document.createElement('div');
    modal.className = 'settings-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="closeSettingsModal()">🔴</span>
            <h2>${translations[currentLanguage].copySettingsTitle}</h2>
            
            <div class="settings-tabs">
                <button class="tab-button active" onclick="showSettingsTab('fields')">${translations[currentLanguage].fieldSelection || 'Выбор полей'}</button>
                <button class="tab-button" onclick="showSettingsTab('order')">${translations[currentLanguage].fieldOrder || 'Порядок полей'}</button>
            </div>
            
            <div id="fieldsTab" class="settings-tab-content">
                <form id="copySettingsForm" onchange="updateFieldOrderBasedOnSelection()">
                    <!-- Всегда есть строка с введённым HEX -->
                    <label><input type="checkbox" name="armorType"> ${translations[currentLanguage].armorTypeHeader}</label><br>
                    <!-- Всегда есть строка с введённым типом брони -->
                    <label><input type="checkbox" name="hexWithX"> Hex with Xs (Xx Xx Xx)</label><br>

                    <!-- Строка с введённым HEX и RGB -->
                    <label><input type="checkbox" name="enteredRedHex"> ${getFieldDisplayName('enteredRedHex')}</label><br>
                    <label><input type="checkbox" name="enteredGreenHex"> ${getFieldDisplayName('enteredGreenHex')}</label><br>
                    <label><input type="checkbox" name="enteredBlueHex"> ${getFieldDisplayName('enteredBlueHex')}</label><br>
                    <label><input type="checkbox" name="enteredRedRgb"> ${getFieldDisplayName('enteredRedRgb')}</label><br>
                    <label><input type="checkbox" name="enteredGreenRgb"> ${getFieldDisplayName('enteredGreenRgb')}</label><br>
                    <label><input type="checkbox" name="enteredBlueRgb"> ${getFieldDisplayName('enteredBlueRgb')}</label><br>

                    <label><input type="checkbox" name="name"> ${translations[currentLanguage].armorHeader}</label><br>
                    <label><input type="checkbox" name="color"> ${translations[currentLanguage].colorHeader}</label><br>

                    <!-- Строка с ближайшим HEX и RGB -->
                    <label><input type="checkbox" name="closestRedHex"> ${getFieldDisplayName('closestRedHex')}</label><br>
                    <label><input type="checkbox" name="closestGreenHex"> ${getFieldDisplayName('closestGreenHex')}</label><br>
                    <label><input type="checkbox" name="closestBlueHex"> ${getFieldDisplayName('closestBlueHex')}</label><br>
                    <label><input type="checkbox" name="closestRedRgb"> ${getFieldDisplayName('closestRedRgb')}</label><br>
                    <label><input type="checkbox" name="closestGreenRgb"> ${getFieldDisplayName('closestGreenRgb')}</label><br>
                    <label><input type="checkbox" name="closestBlueRgb"> ${getFieldDisplayName('closestBlueRgb')}</label><br>

                    <label><input type="checkbox" name="distance"> ${translations[currentLanguage].differenceHeader}</label><br>
                    <label><input type="checkbox" name="rank"> ${translations[currentLanguage].tierHeader}</label><br>
                </form>
            </div>
            
            <div id="orderTab" class="settings-tab-content" style="display:none;">
                <div class="order-instructions">
                    ${translations[currentLanguage].orderInstructions || 'Перетащите поля для изменения порядка копирования:'}
                </div>
                <ul id="fieldOrderList" class="sortable-list">
                    <!-- Будет заполнен динамически -->
                </ul>
            </div>
            
            <div class="settings-footer">
                <button type="button" onclick="saveCopySettings()">${translations[currentLanguage].saveButton}</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Установить состояние чекбоксов в соответствии с сохранёнными настройками
    const settings = JSON.parse(localStorage.getItem('copySettings')) || getDefaultSettings();

    const form = document.getElementById('copySettingsForm');
    Object.keys(settings.fields).forEach(key => {
        const checkbox = form.querySelector(`input[name="${key}"]`);
        if (checkbox) {
            checkbox.checked = settings.fields[key];
        }
    });
    
    // Явно вызываем заполнение списка для сортировки
    populateFieldOrderList(settings.order);
    
    // Инициализируем сортировку после создания DOM-элементов
    setTimeout(() => {
        initSortable();
        console.log('Sortable инициализирован');
    }, 100);
}

// Обновление списка полей при изменении выбора
function updateFieldOrderBasedOnSelection() {
    const form = document.getElementById('copySettingsForm');
    if (!form) return;
    
    const settings = getDefaultSettings();
    const formData = new FormData(form);
    
    // Сбрасываем все поля
    Object.keys(settings.fields).forEach(key => {
        settings.fields[key] = false;
    });
    
    // Устанавливаем выбранные поля
    formData.forEach((value, key) => {
        settings.fields[key] = true;
    });
    
    // Обновляем список порядка полей
    const savedSettings = JSON.parse(localStorage.getItem('copySettings')) || getDefaultSettings();
    populateFieldOrderList(savedSettings.order);
    
    // Реинициализируем сортировку
    initSortable();
}
