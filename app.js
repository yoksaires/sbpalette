// Устанавливаем язык по умолчанию
const currentLanguage = 'en';
localStorage.setItem('selectedLanguage', currentLanguage);

// Данные из CSV (предварительно обработаны)
const armorData = [
    {"name":"Bat Person Chestplate & Leggings & Boots \nNecromancer Lord Chestplate \nObsidian Chestplate \nPure Black Dye \nRancher's Boots \nShadow Assassin Chestplate & Leggings & Boots \nSquid Boots \nTarantula Helmet & Chestplate & Leggings & Boots \nWatcher Chestplate & Leggings & Boots \nWither Chestplate & Leggings & Boots \nSnorkeling Vest & Pants & Shoes (Chestplate & Leggings & Boots)","color":"#000000","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lapis Armor Chestplate & Leggings & Boots","color":"#0000ff","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pure Blue Dye","color":"#0013FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Shark Scale Chestplate & Leggings & Boots","color":"#002ca6","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Bingo Blue Dye","color":"#002FA7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Jade Dye","color":"#00A86B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Helmet & Chestplate & Leggings & Boots of Growth","color":"#00be00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Cactus Helmet & Chestplate & Leggings & Boots \nEmerald Armor Helmet & Chestplate & Leggings & Boots \nParty Top Hat","color":"#00ff00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rotten Chestplate & Leggings \nBackwater Armor Chestplate & Leggings & Boots","color":"#017d31","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Squash Chestplate","color":"#03430e","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Glacite Chestplate & Leggings & Boots","color":"#03fcf8","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Stereo Pants","color":"#04cfd3","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Shimmering Light Tunic & Trousers & Slippers (Chestplate & Leggings & Boots)","color":"#07031b","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Fervor Boots","color":"#07a674","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Frostbitten Dye","color":"#09D8EB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Final Destination Chestplate & Boots","color":"#0a0011","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"1"},
    {"name":"Angler Chestplate & Leggings & Boots","color":"#0b004f","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Burned Pants","color":"#0c0c96","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Squash Leggings","color":"#0c4a16","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Water Hydra Chestplate & Leggings & Boots","color":"#101555","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sea Walker Chestplate & Leggings & Boots","color":"#10616e","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pearlescent Dye","color":"#115555","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Guardian Chestplate","color":"#117391","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Squash Boots","color":"#13561e","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Wyld Boots","color":"#154918","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Storm's Chestplate","color":"#1793c4","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Storm's Leggings","color":"#17a8c4","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Fervor Leggings","color":"#17bf89","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Elegant Tuxedo Jacket & Oxfords (Chestplate & Boots) \nExotic Pure Black","color":"#191919","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snake-in-a-Boot","color":"#1a004c","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Reaper Chestplate & Leggings & Boots","color":"#1b1b1b","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Storm's Boots","color":"#1cd4e4","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Werewolf Chestplate & Leggings & Boots","color":"#1d1105","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Dark Purple","color":"#1F0030","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Thunder Chestplate & Leggings & Boots","color":"#24dde5","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Skeleton Lord Chestplate & Leggings & Boots","color":"#268105","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Slug Boots","color":"#276114","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Aurora Chestplate","color":"#2841f1","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Wise Dragon Chestplate & Leggings & Boots","color":"#29f0e9","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Dark Purple Dye","color":"#301934","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Minos Hunter Boots","color":"#304b4e","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Tentacle Dye","color":"#324D6C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Dark Purple","color":"#46085E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Fancy Tuxedo Jacket & Oxfords (Chestplate & Boots)","color":"#332a2a","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"1"},
    {"name":"Ugly Boots","color":"#3333ff","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Exotic Pure Dark Blue","color":"#334CB2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Vanguard Chestplate & Leggings & Boots","color":"#3588ff","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Wyld Leggings","color":"#35b73b","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Necromancer Lord Leggings","color":"#370147","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Goblin Chestplate & Leggings & Boots","color":"#37b042","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exceedingly Comfy Sneakers","color":"#380024","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Cheap Tuxedo Jacket & Oxfords (Chestplate & Boots)","color":"#383838","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"1"},
    {"name":"Holly Dye","color":"#3C6746","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Terror Chestplate","color":"#3e05af","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Aurora Leggings","color":"#3f56fb","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Necromancer Lord Boots","color":"#400352","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Crypt Witherlord Helmet & Chestplate & Leggings & Boots","color":"#450101","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Goldor's Chestplate","color":"#45413c","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"CRYSTAL Dark Purple","color":"#54146E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Nutcracker Boots","color":"#46343a","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Holy Dragon Chestplate & Leggings & Boots","color":"#47d147","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Femurgrowth Leggings","color":"#48ff00","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Maxor's Chestplate","color":"#4a14b7","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"CRYSTAL Dark Purple","color":"#5D1C78","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Dark Grey","color":"#4C4C4C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Cyan","color":"#4C7F99","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Leaflet Tunic & Pants & Sandals (Chestplate & Leggings & Boots)","color":"#4dcc4d","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Gunther's Sneakers","color":"#4f2886","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Dung Dye","color":"#4F2A2A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Midnight Dye","color":"#50216C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pelt Dye","color":"#50414C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Emerald Dye","color":"#50C878","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Crystal Helmet & Chestplate & Leggings & Boots","color":"#fcf3ff","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Squire Boots","color":"#545454","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Fallen Star Chestplate & Leggings & Boots","color":"#586158","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Fermento Chestplate","color":"#58890c","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Super Heavy Chestplate & Leggings","color":"#5a6464","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"0"},
    {"name":"Glossy Mineral Chestplate & Leggings & Boots","color":"#5b0dae","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Lavender","color":"#9C64B3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Terror Leggings","color":"#5d23d1","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Maxor's Leggings","color":"#5d2fb9","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Spooky Chestplate & Leggings & Boots","color":"#606060","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Boots","color":"#6184fc","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"CRYSTAL Lavender","color":"#A875BD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Goldor's Leggings","color":"#65605a","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"CRYSTAL Lavender","color":"#B88BC9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Lavender","color":"#C6A3D4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Offwhite","color":"#D9C1E3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Brown","color":"#664C33","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Dark Green","color":"#667F33","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Light Blue","color":"#6699D8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Offwhite","color":"#E5D1ED","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Fermento Leggings","color":"#6a9c1b","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Magma Lord Chestplate & Leggings & Boots","color":"#6f0f08","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Byzantium Dye","color":"#702963","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Iceberg Dye","color":"#71A6D2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Matcha Dye","color":"#74A12E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Cropie Chestplate","color":"#7a2900","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Prospecting Helmet & Chestplate & Leggings & Boots","color":"#7a7964","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Creeper Pants","color":"#7ae82c","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Chocolate Dye","color":"#7B3F00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Terror Boots","color":"#7c44ec","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Secret Dye","color":"#7D7D7D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Offwhite","color":"#EFE1F5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Offwhite","color":"#FCF3FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Purple","color":"#7F3FB2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Lime","color":"#7FCC19","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aquamarine Dye","color":"#7FFFD4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ghostly Boots","color":"#808080","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Heavy Chestplate & Leggings","color":"#828282","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"0"},
    {"name":"Fermento Boots","color":"#83b03b","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Fossil Dye","color":"#866F12","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Goldor's Boots","color":"#88837e","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Maxor's Boots","color":"#8969c8","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Melon Chestplate & Leggings & Boots","color":"#899e20","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Arachne's Chestplate & Leggings & Boots","color":"#8b0000","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Purple","color":"#63237D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Cropie Leggings","color":"#94451f","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Carmine Dye","color":"#960018","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Mocha Dye","color":"#967969","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Purple","color":"#6A2C82","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Purple","color":"#7E4196","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Emperor Robes & Leggings & Shoes (Chestplate & Leggings & Boots)","color":"#990d00","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Red","color":"#993333","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Great Spook Helmet & Chestplate & Leggings & Boots","color":"#993399","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"CRYSTAL Purple","color":"#8E51A6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Protector Dragon Chestplate & Leggings & Boots","color":"#99978b","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Light Grey","color":"#999999","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Zombie Lord Chestplate & Leggings & Boots","color":"#9b01c1","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"FAIRY Dark Pink Helmet \nOG FAIRY+ Chestplate & Leggings & Boots","color":"#660033","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rotten Helmet & Boots","color":"#9e7003","isHelmet":"1","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Boots of the Rising Sun","color":"#9f8609","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Frozen Blaze Chestplate & Leggings & Boots","color":"#a0daef","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Salmon Chestplate & Leggings","color":"#a82b76","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"0"},
    {"name":"FAIRY Dark Pink Helmet & Chestplate \nOG FAIRY+ Leggings & Boots","color":"#99004C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Celadon Dye","color":"#ACE1AF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Bouncy Helmet & Chestplate & Leggings & Boots","color":"#adff2f","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Unstable Dragon Chestplate & Leggings & Boots","color":"#b212e3","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Magenta","color":"#B24CD8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"FAIRY Hot Pink Helmet & Chestplate & Leggings \nOG FAIRY+ Boots","color":"#CC0066","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Celeste Dye","color":"#B2FFFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Heat Helmet & Chestplate & Leggings & Boots","color":"#b3b3b3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Archfiend Dye","color":"#B80036","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Copper Dye","color":"#B87333","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"FAIRY Hot Pink Helmet & Chestplate & Leggings & Boots","color":"#FF007F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Cropie Boots","color":"#bb6535","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Adaptive Chestplate & Leggins & Boots","color":"#bfbcb2","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"1"},
    {"name":"Spirit Boots","color":"#bfbfbf","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Salmon Helmet & Boots","color":"#c13c0f","isHelmet":"1","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"FAIRY Pink Chestplate & Leggings & Boots","color":"#FF66B2","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Cheap Tuxedo Pants","color":"#c7c7c7","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Yog Helmet & Chestplate & Leggings & Boots","color":"#c83200","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Brick Red Dye","color":"#CB4154","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rabbit Helmet & Chestplate & Leggings & Boots","color":"#cbd2db","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Fairy's Fedora \nFAIRY Pink Helmet & Chestplate & Leggings & Boots","color":"#ff3399","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Fairy's Galoshes \nFAIRY Pastel Pink Boots \nOG FAIRY+ Helmet & Chestplate & Leggings","color":"#ffcce5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Farmer Boots","color":"#cc5500","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Fairy's Polo \nOG FAIRY+ Helmet","color":"#ff66b2","isHelmet":"1","isChestplate":"0","isLeggings":"0","isBoots":"0"},
    {"name":"Periwinkle Dye","color":"#CCCCFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Mineral Chestplate & Leggings & Boots","color":"#cce5ff","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Moogma Leggings","color":"#ce2c2c","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Livid Dye","color":"#CEB7AA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Zombie Soldier Helmet & Chestplate & Leggings & Boots","color":"#d07f00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Starlight Chestplate & Boots","color":"#d400ff","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"1"},
    {"name":"Sangria Dye","color":"#D40808","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Celeste Helmet","color":"#d48ef2","isHelmet":"1","isChestplate":"0","isLeggings":"0","isBoots":"0"},
    {"name":"Fancy Tuxedo Pants","color":"#d4d4d4","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Zombie Commander Helmet & Chestplate & Leggings & Boots","color":"#d51230","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Orange","color":"#D87F33","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Strong Dragon Chestplate","color":"#d91e41","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Fairy's Trousers \nFAIRY Pastel Pink & Leggings & Boots  \nOG FAIRY+ Helmet & Chestplate","color":"#ff99cc","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Metal / Steel / Stone Chestplate","color":"#d9d9d9","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Young Dragon Chestplate & Leggings & Boots","color":"#dde4f0","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Leggings of the Rising Sun","color":"#debc15","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Rampart Chestplate & Leggings & Boots","color":"#df2e06","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Strong Dragon Leggings","color":"#e09419","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Mercenary Boots \nSpeedster Helmet & Chestplate & Leggings & Boots","color":"#e0fcf7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Skeleton Grunt Helmet & Chestplate & Leggings & Boots","color":"#e1eb34","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Flame Dye","color":"#E25822","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Bone Dye","color":"#E3DAC9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Hollow Boots","color":"#e3fffa","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"OG FAIRY Magenta","color":"#660066","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Magenta","color":"#990099","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Exotic Pure Yellow","color":"#E5E533","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Crimson Boots","color":"#e65300","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Crimson Leggings","color":"#e66105","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Super Heavy Helmet & Boots","color":"#e6e6e6","isHelmet":"1","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Necron Dye","color":"#E7413C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Necron's Chestplate","color":"#e7413c","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Necron's Leggings","color":"#e75c3c","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Necron's Boots","color":"#e76e3c","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Nyanza Dye","color":"#E9FFDB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Flaming Chestplate","color":"#ed6612","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Pumpkin Helmet & Chestplate & Leggings & Boots","color":"#edaa36","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Magenta","color":"#CC00CC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Fervor Chestplate","color":"#f04729","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Strong Dragon Boots","color":"#f0d124","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Old Dragon Chestplate & Leggings & Boots","color":"#f0e6aa","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Superior Dragon Boots","color":"#f25d18","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Exotic Pure Pink","color":"#F27FA5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Superior Dragon Chestplate & Leggings","color":"#f2df11","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"0"},
    {"name":"Cyclamen Dye","color":"#F56FA1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Nadeshiko Dye","color":"#F6ADC6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Blaze Chestplate & Leggings & Boots","color":"#f7da33","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Nutcracker Chestplate","color":"#fc2f3c","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"OG FAIRY Magenta","color":"#FF00FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Magenta","color":"#FF33FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Mango Dye","color":"#FDBE02","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Elegant Tuxedo Pants","color":"#fefdfc","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Chestplate of the Pack /nMushroom Helmet & Chestplate & Leggings & Boots","color":"#ff0000","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Magenta","color":"#FF66FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Pastel Magenta","color":"#FF99FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Minos Hunter Chestplate & Leggings","color":"#ff0a0a","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"0"},
    {"name":"OG FAIRY Pastel Magenta","color":"#FFCCFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Pastel Purple","color":"#CC99FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Wild Strawberry Dye","color":"#FF43A4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Orange Chestplate","color":"#ff4600","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"OG FAIRY Pastel Purple","color":"#E5CCFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Purple","color":"#330066","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Purple","color":"#4C0099","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Skeleton Master Helmet & Chestplate & Leggings & Boots","color":"#ff6b0b","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Crimson Chestplate","color":"#ff6f0c","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Final Destination Leggings","color":"#ff75ff","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Celeste Boots","color":"#ff8eb6","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Celeste Leggings","color":"#ff8eca","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Celeste Chestplate","color":"#ff8ede","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Armor of Magma Helmet & Chestplate & Leggings & Boots","color":"#ff9300","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Purple","color":"#6600CC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Purple","color":"#7F00FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Berserker Chestplate","color":"#ffa33b","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Biohazard Suit & Leggings & Boots","color":"#ffac00","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"1"},
    {"name":"Berserker Leggings","color":"#ffb727","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Skeleton Soldier Helmet & Chestplate & Leggings & Boots","color":"#ffbc0b","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Hollow Chestplate","color":"#ffcb0d","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"OG FAIRY Purple","color":"#9933FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"OG FAIRY Purple","color":"#B266FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Berserker Boots","color":"#ffd427","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Eleanor's Cap & Tunic & Trousers & Slippers (Helmet & Chestplate & Leggings & Boots) \nW Logo","color":"#ffd700","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sponge Chestplate & Leggings & Boots","color":"#ffdc51","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Chicken Leggs","color":"#fff200","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Hollow Leggings","color":"#fff6a3","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Pure Yellow Dye","color":"#FFF700","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Nutcracker Leggings","color":"#fff9eb","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Farm Suit Helmet & Chestplate & Leggings & Boots","color":"#ffff00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Heavy Helmet & Boots \nHelmet of the Pack \nPure White Dye \nSnow Suit Chestplate & Leggings & Boots \nExotic Pure White\nTrue White\n Kelly`s T-Shirt","color":"#ffffff","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Red","color":"#FF0000","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Orange","color":"#FFA500","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Yellow","color":"#FFFF00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Lime","color":"#32CD32","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Dark Green","color":"#006400","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Dark Blue","color":"#00008B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Dark Grey","color":"#A9A9A9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Cyan","color":"#00FFFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Brown","color":"#964B00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Light Blue","color":"#ADD8E6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Purple","color":"#A020F0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Light Grey","color":"#D3D3D3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Magenta","color":"#ff00ff","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Black","color":"#000000","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"True Pink","color":"#FFC0CB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Treasure Dye","color":"#FCD12A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Kuudra Follower Chestplate & Leggings & Boots","color":"#35530A","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Abyssal Chestplate & Leggings & Boots","color":"#35530A","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Figmail, Fig Trousers, Fig Striders (Chestplate & Leggings & Boots)","color":"#1C9759","isHelmet":"0","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Charlie's Trousers (Leggings)","color":"#f6de51","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Melody's Shoes (Boots)","color":"#8d3592","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"},
    {"name":"Canopy Shirt (Chestplate)","color":"#006633","isHelmet":"0","isChestplate":"1","isLeggings":"0","isBoots":"0"},
    {"name":"Canopy Pants (Leggings)","color":"#006600","isHelmet":"0","isChestplate":"0","isLeggings":"1","isBoots":"0"},
    {"name":"Canopy Sandals (Boots)","color":"#331900","isHelmet":"0","isChestplate":"0","isLeggings":"0","isBoots":"1"}

];
window.armorData = armorData;

// База данных анимированных цветов (пример)
const animatedColorsData = [
    {"name":"Aurora Dye (Animated) Stage 1","color":"#048F95","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 2","color":"#0E9696","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 3","color":"#189D98","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 4","color":"#22A798","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 5","color":"#2CB299","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 6","color":"#37BE99","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 7","color":"#42C99A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 8","color":"#4BD69A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 9","color":"#54E19B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 10","color":"#5DEB9C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 11","color":"#64F49D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 12","color":"#68FBA0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 13","color":"#6DFFA3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 14","color":"#6CFEA7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 15","color":"#69FEB0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 16","color":"#61FBB8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 17","color":"#57F6C0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 18","color":"#4AEFCA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 19","color":"#3EE7D2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 20","color":"#33DEDA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 21","color":"#2CD5E1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 22","color":"#2ECCE7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 23","color":"#37C3ED","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 24","color":"#45BBF1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 25","color":"#57B3F5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 26","color":"#6FABF8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 27","color":"#87A2FB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 28","color":"#9E97FD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 29","color":"#B38DFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 30","color":"#C780FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 31","color":"#D772FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 32","color":"#E463FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 33","color":"#EC53FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 34","color":"#EF42FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 35","color":"#EE3AFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 36","color":"#E934FD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 37","color":"#E62EFA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 38","color":"#E127F8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 39","color":"#DB20F6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 40","color":"#D41DF2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 41","color":"#CD1AEF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 42","color":"#C519EB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 43","color":"#BB18E8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 44","color":"#B319E4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 45","color":"#AB1AE1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 46","color":"#A11BDD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 47","color":"#981CD9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 48","color":"#901DD6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 49","color":"#871DD2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 50","color":"#801FD0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 51","color":"#791FCD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 52","color":"#7320C9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 53","color":"#6E21C7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 54","color":"#6926C6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 55","color":"#622FC4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 56","color":"#5B35C3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 57","color":"#543BC1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 58","color":"#4D40BE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 59","color":"#4646BA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 60","color":"#3E4BB6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 61","color":"#364FB1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 62","color":"#2F55AF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 63","color":"#295BAC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 64","color":"#2361AA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 65","color":"#1D68A7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 66","color":"#1870A4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 67","color":"#1476A2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 68","color":"#107D9E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 69","color":"#0D839C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 70","color":"#0B8899","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Aurora Dye (Animated) Stage 71","color":"#088D97","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 1","color":"#0B2031","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 2","color":"#0A1E2E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 3","color":"#081C2B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 4","color":"#061926","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 5","color":"#051521","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 6","color":"#04121C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 7","color":"#030F18","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 8","color":"#010C13","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 9","color":"#020A11","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 10","color":"#01090E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 11","color":"#02080E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 12","color":"#010810","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 13","color":"#030911","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 14","color":"#030A14","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 15","color":"#030C17","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 16","color":"#040E1B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 17","color":"#06101E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 18","color":"#071322","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 19","color":"#0A1627","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 20","color":"#0C1A2B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 21","color":"#0E1F30","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 22","color":"#112437","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 23","color":"#132A3D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 24","color":"#163045","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 25","color":"#18374B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 26","color":"#1B3E53","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 27","color":"#1E445A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 28","color":"#204A60","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 29","color":"#224F65","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 30","color":"#235369","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 31","color":"#24546A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 32","color":"#23546A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 33","color":"#225268","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 34","color":"#235269","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 35","color":"#245269","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 36","color":"#245368","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 37","color":"#27566C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 38","color":"#35657B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 39","color":"#467991","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 40","color":"#588DA6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 41","color":"#679DB6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 42","color":"#6CA3BC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 43","color":"#6A9FB9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 44","color":"#6597B1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 45","color":"#5D8CA5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 46","color":"#547F98","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 47","color":"#4A7089","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 48","color":"#3F6079","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 49","color":"#345269","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 50","color":"#2A445A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 51","color":"#21374D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 52","color":"#1A2C41","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 53","color":"#142439","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 54","color":"#101E32","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 55","color":"#0D1A2D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 56","color":"#0B1629","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 57","color":"#0A1425","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 58","color":"#091323","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 59","color":"#091221","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 60","color":"#091220","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 61","color":"#09121F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 62","color":"#091321","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 63","color":"#091624","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 64","color":"#091827","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Black Ice Dye (Animated) Stage 65","color":"#091B2C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 1","color":"#CA3B00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 2","color":"#CD4300","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 3","color":"#D14D01","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 4","color":"#D55901","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 5","color":"#DB6601","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 6","color":"#E07302","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 7","color":"#E68003","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 8","color":"#EA8D04","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 9","color":"#EF9A04","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 10","color":"#F3A605","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 11","color":"#F7B106","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 12","color":"#FABB06","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 13","color":"#FDC306","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 14","color":"#FFC807","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 15","color":"#FFC607","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 16","color":"#FFC102","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 17","color":"#FFBA01","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 18","color":"#FFB400","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 19","color":"#FFAC00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 20","color":"#FFA200","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 21","color":"#FF9700","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 22","color":"#FF8900","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 23","color":"#FB7D01","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 24","color":"#F56F02","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 25","color":"#EC6604","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 26","color":"#E35F05","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 27","color":"#DA5707","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 28","color":"#CF4E08","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 29","color":"#C44709","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 30","color":"#B93E0A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 31","color":"#AE3509","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 32","color":"#A32D09","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 33","color":"#992409","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 34","color":"#901C09","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 35","color":"#881408","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 36","color":"#810C07","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 37","color":"#770407","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 38","color":"#6D0006","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 39","color":"#640005","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 40","color":"#5D0004","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 41","color":"#580002","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 42","color":"#560202","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 43","color":"#5A0401","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 44","color":"#5F0602","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 45","color":"#640901","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 46","color":"#6B0D02","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 47","color":"#721102","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 48","color":"#7A1502","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 49","color":"#831A02","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 50","color":"#8C1E02","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 51","color":"#962301","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 52","color":"#9F2702","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 53","color":"#A82C02","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 54","color":"#B02F01","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 55","color":"#B93300","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 56","color":"#BF3601","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lava Dye (Animated) Stage 57","color":"#C63900","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 1","color":"#87FF37","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 2","color":"#84FC39","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 3","color":"#81F83C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 4","color":"#7DF43F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 5","color":"#79EF42","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 6","color":"#73E944","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 7","color":"#6FE547","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 8","color":"#69DF49","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 9","color":"#64D84B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 10","color":"#5DD24D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 11","color":"#57CC4E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 12","color":"#52C551","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 13","color":"#4ABE52","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 14","color":"#44B752","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 15","color":"#3DB153","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 16","color":"#36AB53","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 17","color":"#30A553","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 18","color":"#299F54","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 19","color":"#239954","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 20","color":"#1D9553","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 21","color":"#179153","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 22","color":"#0F8C52","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 23","color":"#098852","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 24","color":"#008350","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 25","color":"#007D4F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 26","color":"#00774D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 27","color":"#00734B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 28","color":"#006F49","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 29","color":"#006C47","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Lucky Dye (Animated) Stage 30","color":"#006944","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 1","color":"#BAFF81","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 2","color":"#B7FF85","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 3","color":"#B4FF89","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 4","color":"#B1FF8D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 5","color":"#ADFF92","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 6","color":"#A8FF97","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 7","color":"#A3FF9D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 8","color":"#9EFFA2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 9","color":"#98FFA8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 10","color":"#93FFAE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 11","color":"#8FFFB4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 12","color":"#8AFFB9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 13","color":"#85FFBF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 14","color":"#80FFC3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 15","color":"#7DFCC7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 16","color":"#7BFACC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 17","color":"#79F8D0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 18","color":"#78F4D5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 19","color":"#77F0D9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 20","color":"#75EDDE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 21","color":"#73E9E2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 22","color":"#73E5E6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 23","color":"#72E0EA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 24","color":"#72DCEE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 25","color":"#70DAF1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 26","color":"#70D6F5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 27","color":"#70D3F7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 28","color":"#6FD0F9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 29","color":"#6ECFFC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 30","color":"#6ECEFE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 31","color":"#6DCDFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 32","color":"#6CCEFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 33","color":"#6BCFFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 34","color":"#68D1FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 35","color":"#66D4FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 36","color":"#63D6FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 37","color":"#5FD9FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 38","color":"#5CDEFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 39","color":"#59E1FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 40","color":"#56E5FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 41","color":"#53E8FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 42","color":"#50ECFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 43","color":"#4DF0FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 44","color":"#4BF3FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 45","color":"#48F6FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 46","color":"#48F8FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 47","color":"#48FAFE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 48","color":"#4AFBFB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 49","color":"#4FFDF8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 50","color":"#55FDF4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 51","color":"#5AFEF0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 52","color":"#5FFEEB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 53","color":"#64FEE6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 54","color":"#69FFE0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 55","color":"#6EFEDB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 56","color":"#71FED6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 57","color":"#76FED1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 58","color":"#7AFECC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 59","color":"#7DFFC7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 60","color":"#81FFC2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 61","color":"#86FFBD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 62","color":"#8CFFB8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 63","color":"#91FFB1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 64","color":"#97FFAC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 65","color":"#9DFFA6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 66","color":"#A1FFA0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 67","color":"#A7FF9A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 68","color":"#ACFF94","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 69","color":"#B0FF8F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Oasis Dye (Animated) Stage 70","color":"#B7FF84","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 1","color":"#064DC3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 2","color":"#0B4EC9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 3","color":"#124FD0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 4","color":"#1351D9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 5","color":"#1754E3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 6","color":"#1D5BEA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 7","color":"#2163F1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 8","color":"#206DF4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 9","color":"#1D77F7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 10","color":"#1983F9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 11","color":"#1390FB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 12","color":"#0E9DFD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 13","color":"#07A9FD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 14","color":"#03B4FE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 15","color":"#00BEFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 16","color":"#00C6FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 17","color":"#00CEFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 18","color":"#00D6FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 19","color":"#00DDFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 20","color":"#00E4FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 21","color":"#00EAFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 22","color":"#00F0FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 23","color":"#00F3FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 24","color":"#00F5FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 25","color":"#00F6FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 26","color":"#00F4FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 27","color":"#00F1FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 28","color":"#00ECFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 29","color":"#00E7FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 30","color":"#00E0FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 31","color":"#00D9FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 32","color":"#00D2FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 33","color":"#00CBFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 34","color":"#00C5FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 35","color":"#01BFFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 36","color":"#01B9FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 37","color":"#03B1FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 38","color":"#05AAFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 39","color":"#06A3FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 40","color":"#099DFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 41","color":"#0D98FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 42","color":"#0E96FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 43","color":"#1097FE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 44","color":"#0F99FC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 45","color":"#0F9EFB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 46","color":"#10A4F8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 47","color":"#12AAF6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 48","color":"#15B0F3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 49","color":"#18B6F0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 50","color":"#1BBCEE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 51","color":"#1EC0EC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 52","color":"#1FC3EB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 53","color":"#1FC2EB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 54","color":"#20C2EB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 55","color":"#20C3EB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 56","color":"#1BBDEF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 57","color":"#19B9F3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 58","color":"#16B4F7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 59","color":"#14AFFB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 60","color":"#12A8FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 61","color":"#10A2FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 62","color":"#0F9BFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 63","color":"#0E94FE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 64","color":"#0B8AF8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 65","color":"#097FEF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 66","color":"#0773E6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 67","color":"#0668DB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 68","color":"#055DD1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Ocean Dye (Animated) Stage 69","color":"#0554C9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 1","color":"#FB87FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 2","color":"#F78FFE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 3","color":"#F299FC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 4","color":"#EAA4F8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 5","color":"#E1B0F5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 6","color":"#D7BDF2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 7","color":"#CAC9EE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 8","color":"#BED3EB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 9","color":"#B0DDE8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 10","color":"#A1E6E5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 11","color":"#94EDE3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 12","color":"#89F2E2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 13","color":"#89F3E2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 14","color":"#89F2E3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 15","color":"#87F3E7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 16","color":"#84F2EC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 17","color":"#80F2F0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 18","color":"#7FF1F6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 19","color":"#86F0FD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 20","color":"#87ECFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 21","color":"#87E8FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 22","color":"#87E2FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 23","color":"#87DDFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 24","color":"#85D6FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 25","color":"#84CEFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 26","color":"#84C7FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 27","color":"#83BFFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 28","color":"#82B7FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 29","color":"#82AFFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 30","color":"#83A8FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 31","color":"#83A0FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 32","color":"#8599FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 33","color":"#8693FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 34","color":"#888EFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 35","color":"#8B89FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 36","color":"#9086FE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 37","color":"#9783FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 38","color":"#9F81FE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 39","color":"#A980FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 40","color":"#B681FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 41","color":"#C182FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 42","color":"#CD83FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 43","color":"#D884FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 44","color":"#E486FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Pastel Sky Dye (Animated) Stage 45","color":"#ED87FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 1","color":"#5909C1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 2","color":"#560ABA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 3","color":"#520CB1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 4","color":"#4D0DA7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 5","color":"#490F9C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 6","color":"#440F92","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 7","color":"#3F0F8A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 8","color":"#3C1081","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 9","color":"#38107B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 10","color":"#361076","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 11","color":"#371078","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 12","color":"#390F7C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 13","color":"#3A1080","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 14","color":"#3C0F85","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 15","color":"#3E0E8C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 16","color":"#400D92","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 17","color":"#430B9A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 18","color":"#450AA1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 19","color":"#4909A8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 20","color":"#4C08AF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 21","color":"#5107B5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 22","color":"#5608BC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 23","color":"#5C0AC1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 24","color":"#620DC5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 25","color":"#680FC9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 26","color":"#6F12CE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 27","color":"#7814D1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 28","color":"#8117D5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 29","color":"#8A18D9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 30","color":"#9419DC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 31","color":"#9E1ADF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 32","color":"#A71AE3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 33","color":"#B01AE5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 34","color":"#B919E7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 35","color":"#C117EA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 36","color":"#C816EC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 37","color":"#CF14EF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Portal Dye (Animated) Stage 38","color":"#D412F0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 1","color":"#F06766","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 2","color":"#EE6364","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 3","color":"#EB5E61","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 4","color":"#E8595E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 5","color":"#E45359","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 6","color":"#E04D55","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 7","color":"#DB4650","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 8","color":"#D3404C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 9","color":"#CB3947","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 10","color":"#C43043","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 11","color":"#BD2B40","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 12","color":"#B8293E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 13","color":"#B3263D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 14","color":"#AE243B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 15","color":"#A8223A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 16","color":"#A32038","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 17","color":"#9C1E36","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 18","color":"#961C34","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 19","color":"#901A32","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 20","color":"#881731","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 21","color":"#81162E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 22","color":"#881830","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 23","color":"#7B142D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 24","color":"#74122B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 25","color":"#6D1029","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 26","color":"#650E27","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 27","color":"#5E0D24","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 28","color":"#560B22","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 29","color":"#500A20","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 30","color":"#49081F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 31","color":"#44061D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 32","color":"#3E061B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 33","color":"#39041A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Rose Dye (Animated) Stage 34","color":"#310417","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 1","color":"#ACE5FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 2","color":"#B2E7FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 3","color":"#B8E8FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 4","color":"#C0ECFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 5","color":"#C9EEFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 6","color":"#D3F1FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 7","color":"#DCF4FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 8","color":"#E5F7FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 9","color":"#EEF9FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 10","color":"#F6FCFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 11","color":"#FBFEFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 12","color":"#FFFFFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 13","color":"#FFFEFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 14","color":"#FFFBFD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 15","color":"#FFF7FA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 16","color":"#FFF1F8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 17","color":"#FFECF6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 18","color":"#FFE8F4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 19","color":"#FFE3F2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 20","color":"#FCE1F2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 21","color":"#F8DDF4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 22","color":"#F4DAF6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 23","color":"#EED7F8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 24","color":"#E9D5FA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 25","color":"#E2D3FC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 26","color":"#DDD2FE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 27","color":"#D9D2FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 28","color":"#D4D4FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 29","color":"#CFD6FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 30","color":"#C9D7FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 31","color":"#C3DAFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 32","color":"#BEDDFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 33","color":"#BAE0FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 34","color":"#B9E3FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 35","color":"#B9E7FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 36","color":"#BCE9FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 37","color":"#C2ECFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 38","color":"#CAEFFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 39","color":"#D4F3FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 40","color":"#DEF6FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 41","color":"#E8F9FF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 42","color":"#F2FBFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 43","color":"#F9FDFF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 44","color":"#FFFFFB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 45","color":"#FFFFF7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 46","color":"#FFFFF3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 47","color":"#FFFFEE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 48","color":"#FFFFEA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 49","color":"#FFFFE6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 50","color":"#FFFFE2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 51","color":"#FFFFDF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 52","color":"#FDFFDF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 53","color":"#F8FFE0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 54","color":"#F0FFE3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 55","color":"#E8FFE7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 56","color":"#DFFFEC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 57","color":"#D6FFF1","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 58","color":"#CFFFF5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 59","color":"#C9FDF6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 60","color":"#C5FAF8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 61","color":"#BFF7FA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 62","color":"#B9F3FB","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 63","color":"#B5EEFD","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Snowflake Dye (Animated) Stage 64","color":"#B2EAFE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 1","color":"#FFCC00","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 2","color":"#FFC91A","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 3","color":"#FFC429","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 4","color":"#FFBE35","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 5","color":"#FFB83F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 6","color":"#FFB047","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 7","color":"#FFA84F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 8","color":"#FFA157","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 9","color":"#FF995F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 10","color":"#FF9267","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 11","color":"#FF8C6E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 12","color":"#FF8676","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 13","color":"#FF837D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 14","color":"#FD8184","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 15","color":"#FA808C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 16","color":"#F78195","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 17","color":"#F5819F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 18","color":"#F083AA","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 19","color":"#EC85B4","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 20","color":"#E686BE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 21","color":"#E288C9","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 22","color":"#DC89D2","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 23","color":"#D78BDC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 24","color":"#D18BE5","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 25","color":"#CD8CED","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 26","color":"#C98DF3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 27","color":"#C68DF8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 28","color":"#C48DFC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 29","color":"#C38DFE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 30","color":"#C48CFE","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 31","color":"#C68BFC","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 32","color":"#C88BF7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 33","color":"#CB8AF3","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 34","color":"#CF88ED","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 35","color":"#D387E6","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 36","color":"#D785DF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 37","color":"#DB84D8","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 38","color":"#E082D0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 39","color":"#E480C7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 40","color":"#E97EBF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 41","color":"#EE7DB7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 42","color":"#F17BAF","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 43","color":"#F579A7","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 44","color":"#F978A0","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 45","color":"#FB7799","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 46","color":"#FE7593","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 47","color":"#FF758E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 48","color":"#FF7587","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 49","color":"#FF7682","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 50","color":"#FF777D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 51","color":"#FF7978","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 52","color":"#FF7A74","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 53","color":"#FF7D70","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 54","color":"#FF7F6C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 55","color":"#FF8167","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 56","color":"#FF8563","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 57","color":"#FF8860","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 58","color":"#FF8A5C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 59","color":"#FF8D58","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 60","color":"#FF9155","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 61","color":"#FF9351","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 62","color":"#FF974B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 63","color":"#FF9C45","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 64","color":"#FFA23F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 65","color":"#FFA939","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 66","color":"#FFB032","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 67","color":"#FFB72B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 68","color":"#FFBE24","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 69","color":"#FFC41B","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Sunset Dye (Animated) Stage 70","color":"#FFC910","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 1","color":"#034150","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 2","color":"#03404F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 3","color":"#024554","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 4","color":"#004A59","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 5","color":"#004F5E","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 6","color":"#005463","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 7","color":"#005A68","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 8","color":"#005F6D","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 9","color":"#006472","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 10","color":"#006A76","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 11","color":"#00757F","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 12","color":"#007A84","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 13","color":"#008088","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 14","color":"#00868C","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 15","color":"#008B90","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 16","color":"#009194","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"},
    {"name":"Warden Dye (Animated) Stage 17","color":"#009295","isHelmet":"1","isChestplate":"1","isLeggings":"1","isBoots":"1"}
    // Добавь свои анимированные цвета сюда
];
window.animatedColorsData = animatedColorsData;

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

// Глобальные переменные
let animationEnabled = localStorage.getItem('sbpalette-animation-enabled') !== 'false'; // По умолчанию включено

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Загрузка темы и языка
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    document.body.className = `${savedTheme}-theme`;
    
    // Установка переключателя анимации в правильное положение
    const toggleButton = document.getElementById('animationToggle');
    const toggleText = document.getElementById('animationToggleText');
    
    if (toggleButton && toggleText) {
        if (animationEnabled) {
            toggleButton.classList.add('active');
            toggleText.textContent = currentLanguage === 'ru' ? 'Анимация ВКЛ' : 'Animation ON';
        } else {
            toggleButton.classList.remove('active');
            toggleText.textContent = currentLanguage === 'ru' ? 'Анимация ВЫКЛ' : 'Animation OFF';
        }
    }
    
    // Создание кнопок для типов брони
    createArmorTypeButtons();
    
    // Удаляем существующую кнопку Share из HTML, если она есть
    const existingShareButtonInHtml = document.querySelector('.button-container #shareButton');
    if (existingShareButtonInHtml) {
        existingShareButtonInHtml.parentNode.removeChild(existingShareButtonInHtml);
    }
    
    // Добавляем все стили для элементов интерфейса
    addStyles();
    
    // Проверка наличия цветов в URL для сравнения
    getColorsFromUrl();
});

// Функция для добавления всех стилей
function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .armor-buttons-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px; /* Значительно увеличиваем расстояние между кнопками */
            margin-top: 15px;
            margin-bottom: 15px;
        }
        
        .armor-type-button {
            padding: 12px 20px; /* Увеличиваем паддинги для лучшего вида */
            border: 2px solid #3498db;
            background-color: #fff;
            color: #3498db;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 120px; /* Минимальная ширина кнопки */
            position: relative;
            overflow: hidden;
        }
        
        .armor-type-button::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #3498db;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
        }
        
        .armor-type-button:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
        
        .armor-type-button.active::after {
            transform: scaleX(1);
        }
        
        .armor-type-button:hover {
            background-color: #3498db;
            color: #fff;
        }
        
        /* Стиль для активной кнопки */
        .armor-type-button.active {
            background-color: #3498db;
            color: #fff;
            font-weight: bold;
            box-shadow: 0 6px 12px rgba(52, 152, 219, 0.3);
            transform: translateY(-3px);
        }
        
        /* Стили для иконок в кнопках */
        .armor-type-button i, 
        .armor-type-button span {
            margin-right: 8px;
            font-size: 18px;
        }
        
        /* Стили для тёмной темы */
        .dark-theme .armor-type-button {
            background-color: #2c3e50;
            color: #3498db;
            border-color: #3498db;
        }
        
        .dark-theme .armor-type-button:hover,
        .dark-theme .armor-type-button.active {
            background-color: #3498db;
            color: #2c3e50;
        }
        
        /* Стили для контейнера введенного цвета */
        .entered-color-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 15px 0;
            padding: 10px;
            border-radius: 8px;
            background-color: rgba(52, 152, 219, 0.1);
        }
        
        /* Стили для кнопки Share в результатах */
        #shareButton.share-button {
            position: static;
            padding: 8px 16px;
            background-color: #27ae60;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            margin-left: 15px;
        }
        
        #shareButton.share-button::before {
            content: "📋 ";
            margin-right: 5px;
        }
        
        #shareButton.share-button:hover {
            background-color: #2ecc71;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transform: translateY(-2px);
        }
        
        .dark-theme #shareButton.share-button {
            background-color: #2ecc71;
        }
        
        .dark-theme #shareButton.share-button:hover {
            background-color: #27ae60;
        }
        
        /* Стили для кнопок копирования в таблице */
        .copy-button {
            padding: 6px 12px;
            background-color: #27ae60;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        
        .copy-button:hover {
            background-color: #2ecc71;
            transform: translateY(-2px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .dark-theme .copy-button {
            background-color: #2ecc71;
        }
        
        .dark-theme .copy-button:hover {
            background-color: #27ae60;
        }
        
        /* Стили для улучшения вида таблицы */
        #colorTable {
            border-collapse: collapse;
            width: 100%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        
        #colorTable th {
            background-color: #3498db;
            color: white;
            padding: 12px;
            text-align: left;
        }
        
        #colorTable td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        
        #colorTable tr:hover {
            background-color: rgba(52, 152, 219, 0.1);
        }
        
        .dark-theme #colorTable th {
            background-color: #2c3e50;
        }
        
        .dark-theme #colorTable td {
            border-bottom: 1px solid #444;
        }
        
        .dark-theme #colorTable tr:hover {
            background-color: rgba(52, 152, 219, 0.2);
        }
        
        /* Адаптивность для мобильных устройств */
        @media (max-width: 768px) {
            .armor-buttons-container {
                gap: 15px;
            }
            
            .armor-type-button {
                min-width: unset;
                padding: 10px 14px;
                font-size: 14px;
            }
            
            .entered-color-container {
                flex-direction: column;
                align-items: flex-start;
            }
            
            #shareButton.share-button {
                margin-left: 0;
                margin-top: 10px;
                align-self: flex-end;
            }
        }
    `;
    document.head.appendChild(style);
}

// Функция для создания кнопок типов брони
function createArmorTypeButtons() {
    const findButton = document.getElementById('findButton');
    if (!findButton) return;
    
    // Получаем родительский элемент кнопки поиска
    const buttonContainer = findButton.parentNode;
    
    // Удаляем старую кнопку поиска
    buttonContainer.removeChild(findButton);
    
    // Создаем контейнер для кнопок типов брони
    const armorButtonsContainer = document.createElement('div');
    armorButtonsContainer.className = 'armor-buttons-container';
    
    // Создаем кнопки для каждого типа брони
    const armorTypes = [
        { id: 'all', icon: '👤', text: currentLanguage === 'ru' ? 'Все' : 'All' },
        { id: 'helmet', icon: '🎩', text: currentLanguage === 'ru' ? 'Шлем' : 'Helmet' },
        { id: 'chestplate', icon: '👔', text: currentLanguage === 'ru' ? 'Нагрудник' : 'Chestplate' },
        { id: 'leggings', icon: '👖', text: currentLanguage === 'ru' ? 'Поножи' : 'Leggings' },
        { id: 'boots', icon: '👞', text: currentLanguage === 'ru' ? 'Ботинки' : 'Boots' }
    ];
    
    armorTypes.forEach(type => {
        const button = document.createElement('button');
        button.id = `find${type.id.charAt(0).toUpperCase() + type.id.slice(1)}Button`;
        button.className = 'armor-type-button';
        button.innerHTML = `${type.icon} ${type.text}`;
        button.onclick = () => checkColor(type.id);
        
        // Добавляем обработчики для анимации при наведении
        button.addEventListener('mouseenter', () => {
            if (!button.classList.contains('active')) {
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 4px 8px rgba(52, 152, 219, 0.2)';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('active')) {
                button.style.transform = '';
                button.style.boxShadow = '';
            }
        });
        
        armorButtonsContainer.appendChild(button);
    });
    
    // Добавляем контейнер с кнопками в родительский элемент
    buttonContainer.appendChild(armorButtonsContainer);
    
    // Устанавливаем кнопку "Все" как активную по умолчанию
    setActiveArmorButton('all');
}

// Объект с переводами
const translations = {
    'ru': {
        'title': 'SB Палитра - Подбор ближайших цветов',
        'checkColor': 'Проверить цвет',
        'invalidColor': 'Неверный формат цвета',
        'hexInputPlaceholder': 'Введите HEX цвет',
        'history': 'История',
        'results': 'Результаты',
        'clearHistory': 'Очистить историю',
        'noHistory': 'История пуста',
        'compareColors': 'Сравнение цветов',
        'armor': 'Броня',
        'hexCode': 'HEX код',
        'color': 'Цвет',
        'difference': 'Разница',
        'similarColors': 'Похожие цвета',
        'animationOn': 'Анимация включена',
        'animationOff': 'Анимация выключена',
        'compareButton': 'Сравнить с другими цветами',
        'goBack': 'Вернуться назад',
        'themeToggle': 'Сменить тему',
        'share': 'Поделиться',
        'copied': 'Скопировано!',
        'rank': 'Ранг',
        'name': 'Название',
        'rgbCode': 'RGB код',
        'enteredColor': 'Введенный цвет:',
        // Строки для типов брони
        'allArmor': 'Все',
        'helmet': 'Шлем',
        'chestplate': 'Нагрудник',
        'leggings': 'Поножи',
        'boots': 'Ботинки',
        'historyCleared': 'История очищена',
        // Строки для базы данных цветов
        'addToCollection': 'Добавить в коллекцию',
        'addingColor': 'Добавление цвета',
        'armorType': 'Тип брони',
        'discordId': 'Discord ID (например, Username#1234)',
        'enterDiscordId': 'Пожалуйста, введите Discord ID',
        'colorAdded': 'Цвет добавлен в коллекцию!',
        'searchCollection': 'Поиск в коллекции',
        'myCollection': 'Моя коллекция',
        'collectors': 'Коллекционеры',
        'collectorsCount': 'Кол-во коллекционеров',
        'database': 'База данных',
        'iHaveThisColor': 'У меня есть этот цвет'
    },
    'en': {
        'title': 'SB Palette - Find Closest Colors',
        'checkColor': 'Check Color',
        'invalidColor': 'Invalid color format',
        'hexInputPlaceholder': 'Enter HEX color',
        'history': 'History',
        'results': 'Results',
        'clearHistory': 'Clear history',
        'noHistory': 'No history',
        'compareColors': 'Color Comparison',
        'armor': 'Armor',
        'hexCode': 'HEX code',
        'color': 'Color',
        'difference': 'Difference',
        'similarColors': 'Similar Colors',
        'animationOn': 'Animation enabled',
        'animationOff': 'Animation disabled',
        'compareButton': 'Compare with other colors',
        'goBack': 'Go back',
        'themeToggle': 'Toggle theme',
        'share': 'Share',
        'copied': 'Copied!',
        'rank': 'Rank',
        'name': 'Name',
        'rgbCode': 'RGB code',
        'enteredColor': 'Entered color:',
        // Строки для типов брони
        'allArmor': 'All',
        'helmet': 'Helmet',
        'chestplate': 'Chestplate',
        'leggings': 'Leggings',
        'boots': 'Boots',
        'historyCleared': 'History cleared',
        // Строки для базы данных цветов
        'addToCollection': 'Add to Collection',
        'addingColor': 'Adding color',
        'armorType': 'Armor Type',
        'discordId': 'Discord ID (e.g. Username#1234)',
        'enterDiscordId': 'Please enter Discord ID',
        'colorAdded': 'Color added to collection!',
        'searchCollection': 'Search in collection',
        'myCollection': 'My Collection',
        'collectors': 'Collectors',
        'collectorsCount': 'Collectors count',
        'database': 'Database',
        'iHaveThisColor': 'I have this color',
        'clearHistoryButton': 'Clear History',
        'copySettingsTitle': 'Copy Settings',
        'fieldSelection': 'Field Selection',
        'fieldOrder': 'Field Order',
        'orderInstructions': 'Drag fields to change the copy order:',
        'resetButton': 'Reset',
        'saveButton': 'Save',
        'dragHint': 'Hold ≡ and drag to change order',
        'dragHandleTitle': 'Drag to change position',
        'middle': 'Middle',
        'linkCopied': 'Link copied to clipboard!',
        'themes': {
            light: 'Light',
            dark: 'Dark',
            cosmic: 'Cosmic',
            drinwater: 'Drinwater',
            colors: 'Colors'
        }
    }
};

// Обновим функцию checkColor для добавления кнопки Share после ввода цвета
function checkColor(armorType = 'all') {
    let hex = document.getElementById('hexInput').value.trim().toUpperCase();
    const resultDiv = document.getElementById('resultContainer');

    // Автоматическое добавление #, если его нет
    if (!hex.startsWith('#')) {
        hex = '#' + hex;
    }

    if (hex.length !== 7 || !/^#[0-9A-F]{6}$/.test(hex)) {
        resultDiv.textContent = translations[currentLanguage].invalidColor;
        updateColorPreview('');
        return;
    }

    // Подсветим активную кнопку
    setActiveArmorButton(armorType);

    // Обновить цвет превью
    updateColorPreview(hex);

    // --- ВАЖНО: определяем, включён ли чекбокс анимированных цветов ---
    let dataToSearch = window.armorData;
    const animatedSwitch = document.getElementById('includeAnimatedColorsSwitch');
    if (animatedSwitch && animatedSwitch.checked && Array.isArray(window.animatedColorsData)) {
        dataToSearch = window.armorData.concat(window.animatedColorsData);
    }
    // --------------------------------------------------------------

    // Найти пять ближайших цветов, фильтруя по типу брони
    const closestColors = findClosestColorsByType(hex, dataToSearch, 5, armorType);
    
    // Добавляем надпись с цветом и кнопку Share
    const enteredColorText = `${translations[currentLanguage].enteredColor} ${hex}`;
    resultDiv.innerHTML = `
        <div class="entered-color-container">
            <p>${enteredColorText} <span class="color-preview" style="background-color: ${hex};"></span></p>
            <button id="shareButton" class="share-button">${translations[currentLanguage].share || 'Share'}</button>
        </div>
    `;
    
    // Добавляем обработчик события для кнопки Share
    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', shareUrl);
    }

    // Заполнить таблицу
    fillTable(closestColors, armorType);

    // Сохранить запрос в историю с типом брони
    saveToHistory(hex, armorType);
    loadHistory();
}

function findClosestColorsByType(targetHex, armorData, count, armorType) {
    const targetRGB = hexToRgb(targetHex);
    const targetLAB = rgbToLab(targetRGB);

    // Отфильтровать данные в зависимости от типа брони
    let filteredData = armorData;
    if (armorType !== 'all') {
        filteredData = armorData.filter(item => {
            switch (armorType) {
                case 'helmet': return item.isHelmet === "1";
                case 'chestplate': return item.isChestplate === "1";
                case 'leggings': return item.isLeggings === "1";
                case 'boots': return item.isBoots === "1";
                default: return true;
            }
        });
    }

    const colorDistances = filteredData.map(item => {
        const itemRGB = hexToRgb(item.color);
        const itemLAB = rgbToLab(itemRGB);

        const deltaL = targetLAB.l - itemLAB.l;
        const deltaA = targetLAB.a - itemLAB.a;
        const deltaB = targetLAB.b - itemLAB.b;

        const distance = Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);

        return {
            name: item.name,
            color: item.color,
            distance: distance,
            isHelmet: item.isHelmet === "1",
            isChestplate: item.isChestplate === "1",
            isLeggings: item.isLeggings === "1",
            isBoots: item.isBoots === "1"
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

function fillTable(colors, armorType) {
    const tableBody = document.getElementById('colorTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    colors.forEach((item, index) => {
        const row = tableBody.insertRow();
        const cellArmor = row.insertCell(0);
        const cellHex = row.insertCell(1);
        const cellColor = row.insertCell(2);
        const cellDifference = row.insertCell(3);
        const cellTier = row.insertCell(4);
        const cellCopy = row.insertCell(5);

        cellArmor.textContent = item.name;
        cellHex.textContent = item.color;
        cellColor.style.backgroundColor = item.color;
        cellDifference.textContent = item.distance.toFixed(3);
        cellTier.textContent = getRank(item.distance);

        // Кнопка копирования без селектора типа брони
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '📋';
        copyButton.className = 'copy-button';
        copyButton.onclick = () => {
            const hex = document.getElementById('hexInput').value.trim().toUpperCase();
            copyRowToClipboard(hex, item, armorType);
        };

        cellCopy.appendChild(copyButton);
    });
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

// Функция для сброса настроек копирования
function resetCopySettings() {
    const defaultSettings = getDefaultSettings();
    localStorage.setItem('copySettings', JSON.stringify(defaultSettings));
    
    // Перезагружаем модальное окно для применения новых настроек
    closeSettingsModal();
    openSettingsModal();
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

    // Определение типа брони на основе выбранной категории
    let armorTypeName;
    switch (armorType) {
        case 'helmet': armorTypeName = 'Velvet Top Hat'; break;
        case 'chestplate': armorTypeName = 'Cashmere Jacket'; break;
        case 'leggings': armorTypeName = 'Satin Trousers'; break;
        case 'boots': armorTypeName = 'Oxford Shoes'; break;
        default: armorTypeName = 'Armor'; break;
    }
    
    // Создаем объект со всеми возможными полями
    const fieldValues = {
        'hexInput': hexInput,
        'hexWithX': hexWithX,
        'armorType': armorTypeName,
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

// Модифицируем функцию saveToHistory, чтобы она сохраняла также тип брони
function saveToHistory(hex, armorType = 'all') {
    let history = JSON.parse(localStorage.getItem('colorHistory')) || [];
    
    // Проверяем, есть ли уже такой цвет в истории
    const existingIndex = history.findIndex(item => 
        typeof item === 'object' ? item.hex === hex : item === hex
    );
    
    // Создаем объект с данными о запросе
    const historyItem = {
        hex: hex,
        armorType: armorType,
        timestamp: Date.now()
    };
    
    if (existingIndex !== -1) {
        // Если такой цвет уже есть, обновляем запись
        history.splice(existingIndex, 1);
    }
    
    // Добавляем новый запрос в начало истории
    history.unshift(historyItem);
    
    // Ограничиваем историю до 30 записей
    if (history.length > 30) {
        history = history.slice(0, 30);
    }
    
    localStorage.setItem('colorHistory', JSON.stringify(history));
}

// Модифицируем функцию loadHistory для отображения смайликов типов брони
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('colorHistory')) || [];
    const historyContainer = document.getElementById('historyContainer');
    
    if (history.length === 0) {
        historyContainer.innerHTML = `<div class="no-history-message">${translations[currentLanguage].noHistory}</div>`;
        return;
    }
    
    // Получаем смайлики для типов брони
    const armorTypeIcons = {
        'all': '👤',
        'helmet': '🎩',
        'chestplate': '👔',
        'leggings': '👖',
        'boots': '👞'
    };
    
    // Формируем HTML для истории
    historyContainer.innerHTML = history.map(item => {
        // Проверяем, является ли элемент истории объектом с информацией о типе брони
        if (typeof item === 'object' && item.hex) {
            const armorIcon = armorTypeIcons[item.armorType] || armorTypeIcons.all;
            return `<span class="history-tag" data-armor-type="${item.armorType}" onclick="checkColorFromHistory('${item.hex}', '${item.armorType}')">
                    <span class="armor-type-icon">${armorIcon}</span> ${item.hex}
                   </span>`;
        } else {
            // Обратная совместимость со старым форматом истории
            return `<span class="history-tag" data-armor-type="all" onclick="checkColorFromHistory('${item}', 'all')">
                    <span class="armor-type-icon">${armorTypeIcons.all}</span> ${item}
                   </span>`;
        }
    }).join(' ');
    
    // Добавляем стили для тегов истории
    const style = document.createElement('style');
    if (!document.getElementById('history-styles')) {
        style.id = 'history-styles';
        style.textContent = `
            .history-tag {
                display: inline-flex;
                align-items: center;
                margin: 5px;
                padding: 5px 10px;
                background-color: rgba(52, 152, 219, 0.1);
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .history-tag:hover {
                background-color: rgba(52, 152, 219, 0.3);
                transform: translateY(-2px);
            }
            
            .armor-type-icon {
                margin-right: 5px;
                font-size: 16px;
            }
            
            .dark-theme .history-tag {
                background-color: rgba(52, 152, 219, 0.2);
            }
            
            .dark-theme .history-tag:hover {
                background-color: rgba(52, 152, 219, 0.4);
            }
        `;
        document.head.appendChild(style);
    }
}

// Обновляем функцию checkColorFromHistory, чтобы она принимала тип брони
function checkColorFromHistory(hex, armorType = 'all') {
    document.getElementById('hexInput').value = hex;
    checkColor(armorType);
}

function toggleLanguage() {
    // Language selection is disabled, we're using English only
    return;
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

// Удаляем второе определение функции handleKeyPress отсюда

function openChangelog() {
    // Можно открыть в новой вкладке
    window.open('changelog.html', '_blank');
}

function shareUrl() {
    const hex = document.getElementById('hexInput').value.trim();
    // Получаем активный тип брони
    const activeArmorType = getActiveArmorType();
    const baseUrl = 'https://yoksaires.github.io/sbpalette/main.html';
    const urlWithParam = `${baseUrl}?color=${encodeURIComponent(hex)}&type=${activeArmorType}`;
    
    navigator.clipboard.writeText(urlWithParam).then(() => {
        // Показываем уведомление о копировании
        const shareButton = document.getElementById('shareButton');
        if (shareButton) {
            const originalText = shareButton.innerHTML;
            shareButton.innerHTML = translations[currentLanguage].copied || 'Copied!';
            
            // Возвращаем оригинальный текст через некоторое время
            setTimeout(() => {
                if (shareButton.classList.contains('share-button')) {
                    shareButton.innerHTML = `📋 ${translations[currentLanguage]['share'] || 'Share'}`;
                } else {
                    shareButton.innerHTML = originalText;
                }
            }, 2000);
        } else {
            alert(translations[currentLanguage].copied || 'Link copied to clipboard!');
        }
    }, (err) => {
        console.error('Error copying: ', err);
        alert('Error copying link: ' + err);
    });
}

// Функция для определения активного типа брони
function getActiveArmorType() {
    // Проверяем, есть ли активная кнопка
    const armorTypes = ['all', 'helmet', 'chestplate', 'leggings', 'boots'];
    
    for (const type of armorTypes) {
        const buttonId = `find${type.charAt(0).toUpperCase() + type.slice(1)}Button`;
        const button = document.getElementById(buttonId);
        
        if (button && button.classList.contains('active')) {
            return type;
        }
    }
    
    // По умолчанию возвращаем 'all'
    return 'all';
}

// Добавляем функциональность подсветки активной кнопки типа брони
function setActiveArmorButton(armorType) {
    // Сначала убираем класс active у всех кнопок
    const armorTypes = ['all', 'helmet', 'chestplate', 'leggings', 'boots'];
    
    armorTypes.forEach(type => {
        const buttonId = `find${type.charAt(0).toUpperCase() + type.slice(1)}Button`;
        const button = document.getElementById(buttonId);
        
        if (button) {
            button.classList.remove('active');
            button.style.transform = '';
            button.style.boxShadow = '';
        }
    });
    
    // Добавляем класс active к активной кнопке и визуальные эффекты
    const activeButtonId = `find${armorType.charAt(0).toUpperCase() + armorType.slice(1)}Button`;
    const activeButton = document.getElementById(activeButtonId);
    
    if (activeButton) {
        activeButton.classList.add('active');
        activeButton.style.transform = 'translateY(-3px)';
        activeButton.style.boxShadow = '0 6px 12px rgba(52, 152, 219, 0.3)';
    }
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
                <button type="button" onclick="resetCopySettings()" class="reset-button">🔄 ${translations[currentLanguage].resetButton}</button>
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

// Color comparison page functions
function compareColors() {
    let color1 = document.getElementById('color1Input').value.trim().toUpperCase();
    let color2 = document.getElementById('color2Input').value.trim().toUpperCase();
    const resultDiv = document.getElementById('comparisonResult');
    
    // Add # if missing
    if (!color1.startsWith('#')) {
        color1 = '#' + color1;
    }
    
    if (!color2.startsWith('#')) {
        color2 = '#' + color2;
    }
    
    // Validate inputs
    if (color1.length !== 7 || !/^#[0-9A-F]{6}$/.test(color1) || 
        color2.length !== 7 || !/^#[0-9A-F]{6}$/.test(color2)) {
        resultDiv.textContent = translations[currentLanguage].invalidHex || "Invalid HEX color format";
        return;
    }
    
    // Update color previews
    updateComparisonPreviews(color1, color2);
    
    // Calculate color difference
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const lab1 = rgbToLab(rgb1);
    const lab2 = rgbToLab(rgb2);
    
    // Calculate middle color (using Lab space for perceptual accuracy)
    const middleColor = calculateMiddleColor(lab1, lab2);
    const middleColorHex = labToHex(middleColor);
    
    const deltaE = calculateDeltaE(lab1, lab2);
    const deltaE2000 = calculateDeltaE2000(lab1, lab2);
    const rank = getRank(deltaE);
    const rank2000 = getRank(deltaE2000);
    
    // Display results
    resultDiv.innerHTML = `
        <p>${translations[currentLanguage].deltaE || "Delta E"} (CIE76): <strong>${deltaE.toFixed(2)}</strong> (${rank})</p>
        <p>${translations[currentLanguage].deltaE2000 || "Delta E 2000"}: <strong>${deltaE2000.toFixed(2)}</strong> (${rank2000})</p>
        <p>${translations[currentLanguage].middleColor || "Middle color"}: 
           <strong>${middleColorHex}</strong> 
           <span class="color-preview" style="background-color: ${middleColorHex}; display: inline-block; vertical-align: middle;"></span>
        </p>
    `;
    
    // Fill comparison table
    fillComparisonTable(color1, color2, rgb1, rgb2, lab1, lab2, deltaE, middleColorHex);
    
    // Анимируем трапеции с выбранными цветами
    animateColorRectangles(color1, color2);
}

function updateComparisonPreviews(color1, color2) {
    const color1Preview = document.getElementById('color1Preview');
    const color2Preview = document.getElementById('color2Preview');
    
    if (color1Preview && color1.length === 7 && /^#[0-9A-F]{6}$/i.test(color1)) {
        color1Preview.style.backgroundColor = color1;
    }
    
    if (color2Preview && color2.length === 7 && /^#[0-9A-F]{6}$/i.test(color2)) {
        color2Preview.style.backgroundColor = color2;
    }
}

function calculateDeltaE(lab1, lab2) {
    const deltaL = lab1.l - lab2.l;
    const deltaA = lab1.a - lab2.a;
    const deltaB = lab1.b - lab2.b;
    
    return Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);
}

// Функция для расчета DeltaE2000
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

function fillComparisonTable(color1, color2, rgb1, rgb2, lab1, lab2, deltaE, middleColorHex) {
    const tableBody = document.querySelector('#comparisonTable tbody');
    tableBody.innerHTML = '';
    
    // Вычисляем DeltaE2000
    const deltaE2000 = calculateDeltaE2000(lab1, lab2);
    
    // Add rows for each property
    addComparisonRow(tableBody, 'HEX', color1, color2, middleColorHex);
    addComparisonRow(tableBody, 'RGB', 
        `R: ${rgb1.r}, G: ${rgb1.g}, B: ${rgb1.b}`, 
        `R: ${rgb2.r}, G: ${rgb2.g}, B: ${rgb2.b}`,
        `${translations[currentLanguage].middle || "Middle"}`
    );
    
    // Add Lab components
    addComparisonRow(tableBody, 'L (Lightness)', 
        lab1.l.toFixed(2), 
        lab2.l.toFixed(2),
        Math.abs(lab1.l - lab2.l).toFixed(2)
    );
    
    addComparisonRow(tableBody, 'a (Red/Green)', 
        lab1.a.toFixed(2), 
        lab2.a.toFixed(2),
        Math.abs(lab1.a - lab2.a).toFixed(2)
    );
    
    addComparisonRow(tableBody, 'b (Yellow/Blue)', 
        lab1.b.toFixed(2), 
        lab2.b.toFixed(2),
        Math.abs(lab1.b - lab2.b).toFixed(2)
    );
    
    // Add total differences
    addComparisonRow(tableBody, 'Delta E (CIE76)', 
        '-', 
        '-',
        `${deltaE.toFixed(2)} (${getRank(deltaE)})`
    );
    
    // Добавляем DeltaE2000
    addComparisonRow(tableBody, 'Delta E 2000', 
        '-', 
        '-',
        `${deltaE2000.toFixed(2)} (${getRank(deltaE2000)})`
    );
}

function addComparisonRow(tableBody, property, value1, value2, difference) {
    const row = document.createElement('tr');
    
    const propCell = document.createElement('td');
    propCell.textContent = property;
    row.appendChild(propCell);
    
    const value1Cell = document.createElement('td');
    if (property === 'HEX') {
        value1Cell.innerHTML = `${value1} <span class="color-preview" style="background-color: ${value1};"></span>`;
    } else {
        value1Cell.textContent = value1;
    }
    row.appendChild(value1Cell);
    
    const value2Cell = document.createElement('td');
    if (property === 'HEX') {
        value2Cell.innerHTML = `${value2} <span class="color-preview" style="background-color: ${value2};"></span>`;
    } else {
        value2Cell.textContent = value2;
    }
    row.appendChild(value2Cell);
    
    const diffCell = document.createElement('td');
    if (property === 'HEX') {
        diffCell.innerHTML = `${difference} <span class="color-preview" style="background-color: ${difference};"></span>`;
    } else {
        diffCell.textContent = difference;
    }
    row.appendChild(diffCell);
    
    tableBody.appendChild(row);
}

function handleCompareKeyPress(event) {
    if (event.key === 'Enter') {
        compareColors();
    } else {
        // Сбрасываем анимацию при вводе новых данных
        resetColorRectangles();
    }
}

function shareComparisonUrl() {
    const color1 = document.getElementById('color1Input').value.trim();
    const color2 = document.getElementById('color2Input').value.trim();
    const baseUrl = 'https://yoksaires.github.io/sbpalette/compare.html';
    const urlWithParams = `${baseUrl}?c1=${encodeURIComponent(color1)}&c2=${encodeURIComponent(color2)}`;
    
    navigator.clipboard.writeText(urlWithParams).then(() => {
        alert(translations[currentLanguage].linkCopied || 'Link copied to clipboard!');
    }, (err) => {
        console.error('Error copying: ', err);
    });
}

function getColorsFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check if we're on the main page
    if (document.getElementById('hexInput')) {
        const color = urlParams.get('color');
        if (color) {
            const hexInput = document.getElementById('hexInput');
            hexInput.value = color;
            checkColor();
        }
    } 
    // Check if we're on the comparison page
    else if (document.getElementById('color1Input') && document.getElementById('color2Input')) {
        const color1 = urlParams.get('c1');
        const color2 = urlParams.get('c2');
        
        if (color1) {
            document.getElementById('color1Input').value = color1;
        }
        
        if (color2) {
            document.getElementById('color2Input').value = color2;
        }
        
        if (color1 && color2) {
            compareColors();
            
            // Небольшая задержка перед анимацией, чтобы DOM успел обновиться
            setTimeout(() => {
                // Дополнительно запускаем анимацию для лучшего эффекта
                let formattedColor1 = color1;
                let formattedColor2 = color2;
                
                if (!formattedColor1.startsWith('#')) {
                    formattedColor1 = '#' + formattedColor1;
                }
                
                if (!formattedColor2.startsWith('#')) {
                    formattedColor2 = '#' + formattedColor2;
                }
                
                animateColorRectangles(formattedColor1, formattedColor2);
            }, 500);
        }
    }
}

// Глобальная переменная для отслеживания состояния анимации
animationEnabled = true;

// Функция для анимации цветных трапеций
function animateColorRectangles(color1, color2) {
    // Если анимация отключена, не показываем трапеции
    if (!animationEnabled) return;
    
    const leftRect = document.getElementById('leftRectangle');
    const rightRect = document.getElementById('rightRectangle');
    
    if (!leftRect || !rightRect) return;
    
    // Сначала сбросим стили, если анимация уже была запущена
    leftRect.classList.remove('show-left', 'pulsate');
    rightRect.classList.remove('show-right', 'pulsate');
    
    // Небольшая задержка для сброса анимации
    setTimeout(() => {
        // Установим цвета трапеций
        leftRect.style.backgroundColor = color1;
        rightRect.style.backgroundColor = color2;
        
        // Запускаем анимацию
        leftRect.classList.add('show-left');
        rightRect.classList.add('show-right');
    }, 50);
}

// Функция для сброса анимации трапеций
function resetColorRectangles() {
    const leftRect = document.getElementById('leftRectangle');
    const rightRect = document.getElementById('rightRectangle');
    
    if (leftRect && rightRect) {
        leftRect.classList.remove('show-left', 'pulsate');
        rightRect.classList.remove('show-right', 'pulsate');
    }
}

// Функция для включения/выключения анимации
function toggleAnimation() {
    const toggleButton = document.getElementById('animationToggle');
    const toggleText = document.getElementById('animationToggleText');
    
    if (!toggleButton || !toggleText) return;
    
    // Переключаем состояние анимации
    animationEnabled = !animationEnabled;
    
    // Добавляем эффект пульсации при нажатии
    toggleButton.classList.add('pulse-animation');
    setTimeout(() => {
        toggleButton.classList.remove('pulse-animation');
    }, 300);
    
    // Обновляем класс кнопки и текст в зависимости от состояния
    if (animationEnabled) {
        toggleButton.classList.add('active');
        toggleText.textContent = currentLanguage === 'ru' ? 'Анимация ВКЛ' : 'Animation ON';
        
        // Если есть цвета, запускаем анимацию
        const color1Input = document.getElementById('color1Input');
        const color2Input = document.getElementById('color2Input');
        
        if (color1Input && color2Input && 
            color1Input.value.trim() !== '' && 
            color2Input.value.trim() !== '') {
            animateColorRectangles(color1Input.value, color2Input.value);
        }
    } else {
        toggleButton.classList.remove('active');
        toggleText.textContent = currentLanguage === 'ru' ? 'Анимация ВЫКЛ' : 'Animation OFF';
        resetColorRectangles();
    }
    
    // Сохраняем состояние в localStorage
    localStorage.setItem('sbpalette-animation-enabled', animationEnabled ? 'true' : 'false');
}

// Функция для расчета среднего цвета в пространстве Lab
function calculateMiddleColor(lab1, lab2) {
    return {
        l: (lab1.l + lab2.l) / 2,
        a: (lab1.a + lab2.a) / 2,
        b: (lab1.b + lab2.b) / 2
    };
}

// Функция для конвертации Lab в RGB
function labToRgb(lab) {
    // Lab в XYZ
    let y = (lab.l + 16) / 116;
    let x = lab.a / 500 + y;
    let z = y - lab.b / 200;
    
    x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16/116) / 7.787);
    y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16/116) / 7.787);
    z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16/116) / 7.787);
    
    // XYZ в RGB
    let r = x *  3.2406 + y * -1.5372 + z * -0.4986;
    let g = x * -0.9689 + y *  1.8758 + z *  0.0415;
    let b = x *  0.0557 + y * -0.2040 + z *  1.0570;
    
    r = (r > 0.0031308) ? (1.055 * Math.pow(r, 1/2.4) - 0.055) : 12.92 * r;
    g = (g > 0.0031308) ? (1.055 * Math.pow(g, 1/2.4) - 0.055) : 12.92 * g;
    b = (b > 0.0031308) ? (1.055 * Math.pow(b, 1/2.4) - 0.055) : 12.92 * b;
    
    return {
        r: Math.max(0, Math.min(255, Math.round(r * 255))),
        g: Math.max(0, Math.min(255, Math.round(g * 255))),
        b: Math.max(0, Math.min(255, Math.round(b * 255)))
    };
}

// Функция для конвертации Lab в HEX
function labToHex(lab) {
    const rgb = labToRgb(lab);
    return rgbToHex(rgb);
}

// Функция для конвертации RGB в HEX
function rgbToHex(rgb) {
    return '#' + [rgb.r, rgb.g, rgb.b]
        .map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        })
        .join('');
}

// Функция для обновления текстов в настройках копирования
function updateCopySettingsLabels() {
    const copySettingsForm = document.getElementById('copySettingsForm');
    if (!copySettingsForm) return;
    
    // Обновляем заголовок
    const settingsTitle = copySettingsForm.querySelector('.settings-title');
    if (settingsTitle) {
        settingsTitle.textContent = translations[currentLanguage].copySettingsTitle;
    }
    
    // Обновляем метки чекбоксов
    const labels = copySettingsForm.querySelectorAll('label');
    labels.forEach(label => {
        const dataKey = label.getAttribute('data-translation-key');
        if (dataKey && translations[currentLanguage][dataKey]) {
            label.textContent = translations[currentLanguage][dataKey];
        }
    });
    
    // Обновляем кнопку закрытия
    const closeButton = copySettingsForm.querySelector('.close-button');
    if (closeButton) {
        closeButton.textContent = translations[currentLanguage].closeButton || 'X';
    }
}

// Функция для обновления текста кнопок типов брони
function updateArmorTypeButtons() {
    const armorTypes = [
        { id: 'all', icon: '👤', text: translations[currentLanguage]['allArmor'] },
        { id: 'helmet', icon: '🎩', text: translations[currentLanguage]['helmet'] },
        { id: 'chestplate', icon: '👔', text: translations[currentLanguage]['chestplate'] },
        { id: 'leggings', icon: '👖', text: translations[currentLanguage]['leggings'] },
        { id: 'boots', icon: '👞', text: translations[currentLanguage]['boots'] }
    ];
    
    armorTypes.forEach(type => {
        const button = document.getElementById(`find${type.id.charAt(0).toUpperCase() + type.id.slice(1)}Button`);
        if (button) {
            button.innerHTML = `${type.icon} ${type.text}`;
        }
    });
}

// Мобильное меню
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const sideMenu = document.getElementById('sideMenu');
const mobileLangToggle = document.getElementById('mobileLangToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const mobileAnimationToggle = document.getElementById('mobileAnimationToggle');
const mobileClearHistory = document.getElementById('mobileClearHistory');

// Обработчики для мобильного меню
mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenuButton.classList.remove('active');
        sideMenu.classList.remove('active');
    }
});

// Обработчики для кнопок мобильного меню
mobileLangToggle.addEventListener('click', () => {
    toggleLanguage();
    updateMobileMenuText();
    mobileMenuButton.classList.remove('active');
    sideMenu.classList.remove('active');
});

mobileThemeToggle.addEventListener('click', () => {
    toggleTheme();
    updateMobileMenuText();
    mobileMenuButton.classList.remove('active');
    sideMenu.classList.remove('active');
});

mobileAnimationToggle.addEventListener('click', () => {
    toggleAnimation();
    updateMobileMenuText();
    mobileMenuButton.classList.remove('active');
    sideMenu.classList.remove('active');
});

mobileClearHistory.addEventListener('click', () => {
    clearHistory();
    mobileMenuButton.classList.remove('active');
    sideMenu.classList.remove('active');
});

function updateMobileMenuText() {
    mobileLangToggle.textContent = currentLanguage === 'ru' ? 'English' : 'Русский';
    mobileThemeToggle.textContent = currentLanguage === 'ru' ? 
        (isDarkTheme ? 'Светлая тема' : 'Темная тема') : 
        (isDarkTheme ? 'Light theme' : 'Dark theme');
    mobileAnimationToggle.textContent = currentLanguage === 'ru' ? 
        (animationEnabled ? 'Отключить анимацию' : 'Включить анимацию') : 
        (animationEnabled ? 'Disable animation' : 'Enable animation');
    mobileClearHistory.textContent = currentLanguage === 'ru' ? 'Очистить историю' : 'Clear history';
}

// Обновляем текст кнопок при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateMobileMenuText();
});

// После секции с кнопкой "Поделиться" добавляем кнопку для перехода в базу данных
function initializeButtons() {
    const shareButton = document.createElement("button");
    shareButton.className = "share-button";
    shareButton.setAttribute("data-share", strings.shareButton[lang]);
    shareButton.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg> ${strings.shareButton[lang]}`;
    
    shareButton.addEventListener("click", function() {
        const type = getActiveArmorType();
        const hex = document.getElementById("color").value.toUpperCase();
        const url = window.location.href.split('?')[0] + '?color=' + hex.replace('#', '') + '&type=' + type;
        
        navigator.clipboard.writeText(url).then(function() {
            showNotification(strings.linkCopied[lang]);
        }).catch(function() {
            showNotification(strings.copyError[lang]);
        });
    });
    
    // Создаем кнопку для перехода в базу данных
    const databaseButton = document.createElement("button");
    databaseButton.className = "database-button";
    databaseButton.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg> ${strings.databaseButton[lang]}`;
    
    databaseButton.addEventListener("click", function() {
        window.location.href = "database.html";
    });
    
    // Добавляем обе кнопки в контейнер
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    buttonContainer.appendChild(shareButton);
    buttonContainer.appendChild(databaseButton);
    
    // Заменяем существующую кнопку "Поделиться" на контейнер с кнопками
    const buttonsContainer = document.querySelector(".buttons-container");
    if (buttonsContainer) {
        const oldShareButton = buttonsContainer.querySelector(".share-button");
        if (oldShareButton) {
            oldShareButton.replaceWith(buttonContainer);
        } else {
            buttonsContainer.appendChild(buttonContainer);
        }
    }
}

// Добавляем строки для базы данных в объект strings
const strings = {
    title: {
        ru: "SB палитра цветов",
        en: "SB color palette"
    },
    enteredColor: {
        ru: "Введенный цвет",
        en: "Entered color"
    },
    copyButton: {
        ru: "Скопировать",
        en: "Copy"
    },
    shareButton: {
        ru: "Поделиться",
        en: "Share"
    },
    databaseButton: {
        ru: "База данных",
        en: "Database"
    },
    linkCopied: {
        ru: "Ссылка скопирована!",
        en: "Link copied!"
    },
    copyError: {
        ru: "Ошибка при копировании",
        en: "Copy error"
    },
    helmet: {
        ru: "Шлем",
        en: "Helmet"
    },
    chestplate: {
        ru: "Нагрудник",
        en: "Chestplate"
    },
    leggings: {
        ru: "Поножи",
        en: "Leggings"
    },
    boots: {
        ru: "Ботинки",
        en: "Boots"
    },
    allArmor: {
        ru: "Все",
        en: "All"
    },
    rgbLabel: {
        ru: "RGB",
        en: "RGB"
    },
    hsvLabel: {
        ru: "HSV",
        en: "HSV"
    },
    similarColors: {
        ru: "Похожие цвета",
        en: "Similar colors"
    },
    similarPaletteItem: {
        ru: "Похожий цвет",
        en: "Similar color"
    },
    enterColorPlaceholder: {
        ru: "Введите HEX цвет",
        en: "Enter HEX color"
    },
    calculateButton: {
        ru: "Рассчитать",
        en: "Calculate"
    },
    loadingColors: {
        ru: "Загрузка цветов...",
        en: "Loading colors..."
    },
    historyEmpty: {
        ru: "История пуста",
        en: "History is empty"
    },
    historyCleared: {
        ru: "История очищена",
        en: "History cleared"
    },
    error: {
        ru: "Ошибка",
        en: "Error"
    },
    invalidHex: {
        ru: "Неверный HEX формат",
        en: "Invalid HEX format"
    }
};

// Функция для очистки истории
function clearHistory() {
    localStorage.removeItem('colorHistory');
    document.getElementById('historyContainer').innerHTML = `<div class="no-history-message">${translations[currentLanguage].noHistory}</div>`;
    
    // Show temporary notification
    const clearButton = document.getElementById('clearHistoryButton');
    if (clearButton) {
        const originalText = clearButton.textContent;
        clearButton.textContent = translations[currentLanguage].historyCleared;
        
        // Return original text after 2 seconds
        setTimeout(() => {
            clearButton.textContent = originalText;
        }, 2000);
    }
}

// Function to handle Enter key press in the input field
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkColor('all');
    }
}

// Function to toggle between themes
function toggleTheme() {
    const themeSelect = document.getElementById('themeSelect');
    const selectedTheme = themeSelect.value;
    document.body.className = '';
    document.body.classList.add(`${selectedTheme}-theme`);
    localStorage.setItem('selectedTheme', selectedTheme);
}

// Initialize theme and other settings on page load
window.onload = function() {
    // Set theme from localStorage
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    document.body.className = '';
    document.body.classList.add(`${savedTheme}-theme`);
    
    // Update theme select dropdown
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        themeSelect.value = savedTheme;
    }
    
    // Initialize other components
    loadHistory();
    getColorsFromUrl();
    
    // Update armor type buttons if they exist
    const armorTypeButtons = document.querySelectorAll('.armor-type-button');
    if (armorTypeButtons.length > 0) {
        updateArmorTypeButtons();
    }
};

// Function to update color preview
function updateColorPreview(hex) {
    const preview = document.getElementById('colorPreview');
    if (preview) {
        if (hex) {
            preview.style.backgroundColor = hex;
            preview.style.display = 'block';
        } else {
            preview.style.backgroundColor = '';
            preview.style.display = 'none';
        }
    }
}
