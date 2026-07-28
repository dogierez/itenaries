let currentLang = 'TR'; 
let selectedRegion = '';
let selectedIsland = '';
let currentBaseLocation = '';

let currentItineraryData = []; 
let taskHistoryStack = []; 
let completedTasks = new Set(); 

const backgroundImages = {
    'home': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Europe_1890_map.jpg/1280px-Europe_1890_map.jpg',
    'central-europe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Central_Europe_%28orthographic_projection%29.svg/1024px-Central_Europe_%28orthographic_projection%29.svg.png',
    'balkans': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Balkans_topographic_map-fr.svg/1024px-Balkans_topographic_map-fr.svg.png',
    'central-balkans': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Balkans_topographic_map-fr.svg/1024px-Balkans_topographic_map-fr.svg.png',
    'adriatic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Balkans_topographic_map-fr.svg/1024px-Balkans_topographic_map-fr.svg.png',
    'chios': 'https://dogierez.github.io/greek-islands/chios.jpg',
    'kos': 'https://dogierez.github.io/greek-islands/kos.jpg',
    'lesbos': 'https://dogierez.github.io/greek-islands/lesbos.jpg',
    'meis': 'https://dogierez.github.io/greek-islands/meis.jpg',
    'rhodes': 'https://dogierez.github.io/greek-islands/rhodes.jpg',
    'samos': 'https://dogierez.github.io/greek-islands/samos.jpg'
};

const mapPins = {
    'chios': { mapUrl: 'https://dogierez.github.io/greek-islands/chios-map.jpg', pins: { north: {top: '15%', left: '50%'}, south: {top: '85%', left: '50%'}, east: {top: '50%', left: '80%'}, west: {top: '50%', left: '20%'}, center: {top: '50%', left: '50%'} } },
    'kos': { mapUrl: 'https://dogierez.github.io/greek-islands/kos-map.jpg', pins: { north: {top: '30%', left: '60%'}, south: {top: '80%', left: '20%'}, east: {top: '30%', left: '85%'}, west: {top: '60%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'lesbos': { mapUrl: 'https://dogierez.github.io/greek-islands/lesbos-map.jpg', pins: { north: {top: '15%', left: '50%'}, south: {top: '85%', left: '50%'}, east: {top: '50%', left: '85%'}, west: {top: '50%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'meis': { mapUrl: 'https://dogierez.github.io/greek-islands/meis-map.jpg', pins: { north: {top: '15%', left: '50%'}, south: {top: '85%', left: '50%'}, east: {top: '50%', left: '85%'}, west: {top: '50%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'rhodes': { mapUrl: 'https://dogierez.github.io/greek-islands/rhodes-map.jpg', pins: { north: {top: '15%', left: '50%'}, south: {top: '85%', left: '50%'}, east: {top: '40%', left: '85%'}, west: {top: '60%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'samos': { mapUrl: 'https://dogierez.github.io/greek-islands/samos-map.jpg', pins: { north: {top: '20%', left: '50%'}, south: {top: '80%', left: '50%'}, east: {top: '50%', left: '85%'}, west: {top: '50%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'central-europe': { 
        mapUrl: backgroundImages['central-europe'], 
        pins: { 
            prague: {top: '25%', left: '40%'}, 
            munich: {top: '60%', left: '30%'}, 
            salzburg: {top: '65%', left: '50%'}, 
            vienna: {top: '50%', left: '65%'}, 
            bratislava: {top: '40%', left: '72%'}, 
            budapest: {top: '60%', left: '80%'} 
        } 
    },
    'central-balkans': { 
        mapUrl: backgroundImages['central-balkans'], 
        pins: { 
            belgrade: {top: '25%', left: '55%'},
            sarajevo: {top: '40%', left: '35%'},
            mostar: {top: '55%', left: '30%'},
            kotor: {top: '65%', left: '20%'},
            budva: {top: '75%', left: '32%'},
            podgorica: {top: '85%', left: '45%'},
            nis: {top: '45%', left: '70%'}
        } 
    },
    'balkans': { 
        mapUrl: backgroundImages['balkans'], 
        pins: { 
            tirana: {top: '60%', left: '25%'}, 
            shkoder: {top: '30%', left: '15%'}, 
            prizren: {top: '15%', left: '45%'}, 
            pristina: {top: '20%', left: '65%'}, 
            skopje: {top: '50%', left: '75%'}, 
            ohrid: {top: '80%', left: '60%'},
            elbasan: {top: '75%', left: '40%'} 
        } 
    },
    'adriatic': {
        mapUrl: backgroundImages['adriatic'],
        pins: {
            tirana: {top: '60%', left: '35%'},
            durres: {top: '50%', left: '25%'},
            ksamil: {top: '90%', left: '30%'},
            bar: {top: '38%', left: '20%'},
            budva: {top: '28%', left: '15%'},
            kotor: {top: '20%', left: '10%'}
        }
    }
};

const moduleImages = {
    arrival: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Sea_and_rocks.jpg/800px-Sea_and_rocks.jpg",
    south: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Greek_beach.jpg/800px-Greek_beach.jpg",
    west: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Aegean_sunset.jpg/800px-Aegean_sunset.jpg",
    north: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Greek_church_domes.jpg/800px-Greek_church_domes.jpg",
    northeast: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Olive_trees_Greece.jpg/800px-Olive_trees_Greece.jpg",
    east: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Greek_harbor.jpg/800px-Greek_harbor.jpg",
    departure: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ferry_boat_Greece.jpg/800px-Ferry_boat_Greece.jpg"
};

const nearestBeaches = {
    'chios': { center: 'Karfas', north: 'Lefkathia', south: 'Komi', east: 'Megas Limnionas', west: 'Lithi' },
    'kos': { center: 'Town Beach', north: 'Tigaki', south: 'Kefalos', east: 'Psalidi', west: 'Mastichari' },
    'lesbos': { center: 'Tsamakia', north: 'Petra', south: 'Vatera', east: 'Skala', west: 'Sigri' },
    'meis': { center: 'Megisti Waters', north: 'Mandraki Cove', south: 'Blue Cave Waters', east: 'Ro Islet', west: 'St George Beach' },
    'rhodes': { center: 'Elli Beach', north: 'Ialysos', south: 'Prasonisi', east: 'Faliraki', west: 'Monolithos Coast' },
    'samos': { center: 'Gagou', north: 'Kokkari', south: 'Pythagoreion Beach', east: 'Mykali', west: 'Potami' }
};

const i18n = {
    'EN': {
        appTitle: 'Europe Itineraries', regionTitle: 'Select Your Route', islandTitle: 'Select Your Island', setupTitle: 'Select Starting Point',
        backRegion: 'Back to Routes', backIsland: 'Back to Islands', backBase: 'Back to Map', backSetup: 'Go Back',
        center: 'Center', north: 'North', south: 'South', east: 'East', west: 'West',
        seafood: 'Seafood', meat: 'Meat', snacks: 'Snacks/Meze',
        morning: 'Morning (09:00 - 12:00)', afternoon: 'Noon/Afternoon (12:00 - 17:00)', 
        evening: 'Evening (17:00 - 21:00)', night: 'Night (21:00 onwards)', dinnerSuggest: 'Dinner Suggestions',
        day: 'DAY',
        islands: { chios: 'Chios', kos: 'Kos', lesbos: 'Lesbos', meis: 'Meis', rhodes: 'Rhodes', samos: 'Samos' },
        regions: { 'greek': 'Greek Islands Itinerary', 'central-europe': 'Central Europe Itinerary', 'central-balkans': 'Central Balkans Itinerary', 'balkans': 'East Balkans Itinerary', 'adriatic': 'Adriatic Itinerary' },
        buttons: { 'greek': 'Greek Islands', 'central-europe': 'Central Europe', 'central-balkans': 'Central Balkans', 'balkans': 'East Balkans', 'adriatic': 'Visa-Free Adriatic' },
        cities: { 
            prague: 'Prague', munich: 'Munich', salzburg: 'Salzburg', vienna: 'Vienna', bratislava: 'Bratislava', budapest: 'Budapest', 
            belgrade: 'Belgrade', sarajevo: 'Sarajevo', mostar: 'Mostar', kotor: 'Kotor', budva: 'Budva', nis: 'Niš', podgorica: 'Podgorica',
            tirana: 'Tirana', shkoder: 'Shkodër', prizren: 'Prizren', pristina: 'Pristina', skopje: 'Skopje', ohrid: 'Ohrid', elbasan: 'Elbasan',
            ksamil: 'Ksamil', durres: 'Durrës', bar: 'Bar', tivat: 'Tivat'
        }
    },
    'TR': {
        appTitle: 'Avrupa Rotaları', regionTitle: 'Rotanızı Seçin', islandTitle: 'Adanızı Seçin', setupTitle: 'Başlangıç Seçin',
        backRegion: 'Rotalara Dön', backIsland: 'Adalara Dön', backBase: 'Haritaya Dön', backSetup: 'Geri Dön',
        center: 'Merkez', north: 'Kuzey', south: 'Güney', east: 'Doğu', west: 'Batı',
        seafood: 'Deniz Ürünleri', meat: 'Et', snacks: 'Meze/Atıştırmalık',
        morning: 'Sabah (09:00 - 12:00)', afternoon: 'Öğle/Öğleden Sonra (12:00 - 17:00)', 
        evening: 'Akşam (17:00 - 21:00)', night: 'Gece (21:00 ve sonrası)', dinnerSuggest: 'Akşam Yemeği Önerileri',
        day: 'GÜN',
        islands: { chios: 'Sakız', kos: 'Kos', lesbos: 'Midilli', meis: 'Meis', rhodes: 'Rodos', samos: 'Sisam' },
        regions: { 'greek': 'Yunan Adaları Rotası', 'central-europe': 'Orta Avrupa Rotası', 'central-balkans': 'Orta Balkanlar Rotası', 'balkans': 'Doğu Balkanlar Rotası', 'adriatic': 'Schengensiz Adriyatik Turu' },
        buttons: { 'greek': 'Yunan Adaları', 'central-europe': 'Orta Avrupa', 'central-balkans': 'Orta Balkanlar', 'balkans': 'Doğu Balkanlar', 'adriatic': 'Schengensiz Adriyatik' },
        cities: { 
            prague: 'Prag', munich: 'Münih', salzburg: 'Salzburg', vienna: 'Viyana', bratislava: 'Bratislava', budapest: 'Budapeşte', 
            belgrade: 'Belgrad', sarajevo: 'Saraybosna', mostar: 'Mostar', kotor: 'Kotor', budva: 'Budva', nis: 'Niş', podgorica: 'Podgoriça',
            tirana: 'Tiran', shkoder: 'İşkodra', prizren: 'Prizren', pristina: 'Priştine', skopje: 'Üsküp', ohrid: 'Ohri', elbasan: 'Elbasan',
            ksamil: 'Ksamil', durres: 'Dıraç', bar: 'Bar', tivat: 'Tivat'
        }
    },
    'DE': {
        appTitle: 'Europa Reiserouten', regionTitle: 'Route Wählen', islandTitle: 'Wählen Sie Ihre Insel', setupTitle: 'Startpunkt Wählen',
        backRegion: 'Zurück zu Routen', backIsland: 'Zurück zu Inseln', backBase: 'Zurück zur Karte', backSetup: 'Zurück',
        center: 'Zentrum', north: 'Norden', south: 'Süden', east: 'Osten', west: 'Westen',
        seafood: 'Meeresfrüchte', meat: 'Fleisch', snacks: 'Snacks/Mezze',
        morning: 'Morgen (09:00 - 12:00)', afternoon: 'Nachmittag (12:00 - 17:00)', 
        evening: 'Abend (17:00 - 21:00)', night: 'Nacht (ab 21:00)', dinnerSuggest: 'Abendessen Vorschläge',
        day: 'TAG',
        islands: { chios: 'Chios', kos: 'Kos', lesbos: 'Lesbos', meis: 'Kastelorizo', rhodes: 'Rhodos', samos: 'Samos' },
        regions: { 'greek': 'Griechische Inseln Route', 'central-europe': 'Mitteleuropa Route', 'central-balkans': 'Zentralbalkan Route', 'balkans': 'Ostbalkan Route', 'adriatic': 'Adria Route' },
        buttons: { 'greek': 'Griechische Inseln', 'central-europe': 'Mitteleuropa', 'central-balkans': 'Zentralbalkan', 'balkans': 'Ostbalkan', 'adriatic': 'Visafreie Adria' },
        cities: { 
            prague: 'Prag', munich: 'München', salzburg: 'Salzburg', vienna: 'Wien', bratislava: 'Bratislava', budapest: 'Budapest', 
            belgrade: 'Belgrad', sarajevo: 'Sarajevo', mostar: 'Mostar', kotor: 'Kotor', budva: 'Budva', nis: 'Niš', podgorica: 'Podgorica',
            tirana: 'Tirana', shkoder: 'Shkodra', prizren: 'Prizren', pristina: 'Pristina', skopje: 'Skopje', ohrid: 'Ohrid', elbasan: 'Elbasan',
            ksamil: 'Ksamil', durres: 'Durrës', bar: 'Bar', tivat: 'Tivat'
        }
    },
    'RU': {
        appTitle: 'Маршруты по Европе', regionTitle: 'Выберите маршрут', islandTitle: 'Выберите остров', setupTitle: 'Начальная точка',
        backRegion: 'К маршрутам', backIsland: 'К островам', backBase: 'К карте', backSetup: 'Назад',
        center: 'Центр', north: 'Север', south: 'Юг', east: 'Восток', west: 'Запад',
        seafood: 'Морепродукты', meat: 'Мясо', snacks: 'Закуски',
        morning: 'Утро (09:00 - 12:00)', afternoon: 'День (12:00 - 17:00)', 
        evening: 'Вечер (17:00 - 21:00)', night: 'Ночь (с 21:00)', dinnerSuggest: 'Ужин',
        day: 'ДЕНЬ',
        islands: { chios: 'Хиос', kos: 'Кос', lesbos: 'Лесбос', meis: 'Мейсти', rhodes: 'Родос', samos: 'Самос' },
        regions: { 'greek': 'Маршрут: Греческие Острова', 'central-europe': 'Маршрут: Центральная Европа', 'central-balkans': 'Маршрут: Центральные Балканы', 'balkans': 'Маршрут: Восточные Балканы', 'adriatic': 'Маршрут: Адриатика' },
        buttons: { 'greek': 'Греческие Острова', 'central-europe': 'Центральная Европа', 'central-balkans': 'Центральные Балканы', 'balkans': 'Восточные Балканы', 'adriatic': 'Безвизовая Адриатика' },
        cities: { 
            prague: 'Прага', munich: 'Мюнхен', salzburg: 'Зальцбург', vienna: 'Вена', bratislava: 'Братислава', budapest: 'Будапешт', 
            belgrade: 'Белград', sarajevo: 'Сараево', mostar: 'Мостар', kotor: 'Котор', budva: 'Будва', nis: 'Ниш', podgorica: 'Подгорица',
            tirana: 'Тирана', shkoder: 'Шкодер', prizren: 'Призрен', pristina: 'Приштина', skopje: 'Скопье', ohrid: 'Охрид', elbasan: 'Эльбасан',
            ksamil: 'Ксамил', durres: 'Дуррес', bar: 'Бар', tivat: 'Тиват'
        }
    }
};

const regionStyles = {
    'greek': { bg: '#33A1FD', text: '#000000' }, 
    'central-europe': { bg: '#F1C40F', text: '#000000' }, 
    'central-balkans': { bg: '#9E150B', text: '#FFFFFF' }, 
    'balkans': { bg: '#066DBE', text: '#FFFFFF' }, 
    'adriatic': { bg: '#8F165A', text: '#FFFFFF' } 
};

window.routeModules = window.routeModules || {};

function renderAlphabeticalMenu() {
    const container = document.getElementById('region-menu-container');
    if (!container) return; 

    const langButtons = i18n[currentLang].buttons;
    const localeCode = currentLang === 'TR' ? 'tr' : currentLang === 'DE' ? 'de' : currentLang === 'RU' ? 'ru' : 'en';

    const sortedKeys = Object.keys(langButtons).sort((a, b) => {
        return langButtons[a].localeCompare(langButtons[b], localeCode, { sensitivity: 'base' });
    });

    let html = '';
    sortedKeys.forEach(key => {
        let text = langButtons[key];
        let style = regionStyles[key] || { bg: '#333333', text: '#FFFFFF' };
        
        html += `<button onclick="selectRegion('${key}')" 
                style="background-color: ${style.bg}; color: ${style.text}; 
                border: none; border-radius: 15px; aspect-ratio: 1 / 1; 
                display: flex; align-items: center; justify-content: center; 
                text-align: center; font-weight: 700; font-family: 'Montserrat', sans-serif; 
                cursor: pointer; padding: 10px; font-size: clamp(12px, 3.5vw, 16px); 
                box-shadow: 0 4px 6px rgba(0,0,0,0.3); transition: transform 0.2s, opacity 0.2s;"
                onmouseover="this.style.opacity='0.8'; this.style.transform='scale(1.05)';"
                onmouseout="this.style.opacity='1'; this.style.transform='scale(1)';">
                ${text}
                </button>`;
    });

    container.innerHTML = html;
}

function hideAll() {
    if(document.getElementById('region-screen')) document.getElementById('region-screen').classList.add('hidden');
    if(document.getElementById('island-screen')) document.getElementById('island-screen').classList.add('hidden');
    if(document.getElementById('setup-screen')) document.getElementById('setup-screen').classList.add('hidden');
    if(document.getElementById('itinerary-container')) document.getElementById('itinerary-container').classList.add('hidden');
}

function goBack(targetId) {
    hideAll();
    const target = document.getElementById(targetId);
    if(target) target.classList.remove('hidden');
    taskHistoryStack = []; 
    
    if(targetId === 'region-screen') {
        selectedRegion = '';
        document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.8)), url('${backgroundImages['home']}')`;
        const appTitle = document.getElementById('app-title');
        appTitle.textContent = i18n[currentLang].appTitle;
        appTitle.className = 'neon-blue';
    } else if(targetId === 'island-screen') {
        selectedIsland = '';
        document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('${backgroundImages['chios']}')`; 
        const appTitle = document.getElementById('app-title');
        appTitle.textContent = i18n[currentLang].regions['greek'];
        appTitle.className = 'neon-yellow';
    }
}

function goBackFromSetup() {
    if (selectedRegion === 'greek') {
        if(document.getElementById('island-screen')) {
            goBack('island-screen');
        } else {
            goBack('region-screen'); 
        }
    } else {
        goBack('region-screen');
    }
}

function selectRegion(region) {
    selectedRegion = region;
    hideAll();
    
    const appTitle = document.getElementById('app-title');
    appTitle.textContent = i18n[currentLang].regions[region];
    appTitle.className = 'neon-yellow';

    if (region === 'greek') {
        const islandScreen = document.getElementById('island-screen');
        if (islandScreen) {
            islandScreen.classList.remove('hidden');
        } else {
            document.getElementById('setup-screen').classList.remove('hidden');
            document.getElementById('setup-title').textContent = i18n[currentLang].islandTitle || 'Select Island';
            const container = document.getElementById('base-options-container');
            let html = '<div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; width:100%; max-width:400px; margin:auto;">';
            const islands = ['chios', 'kos', 'lesbos', 'meis', 'rhodes', 'samos'];
            const colors = {chios: '#304D63', kos: '#43634B', lesbos: '#9B870C', meis: '#800080', rhodes: '#800000', samos: '#CC5500'};
            islands.forEach(isl => {
                html += `<button style="background:${colors[isl]}; padding:30px 10px; font-size:1.2rem; font-weight:800; color:#fff; border-radius:20px; border:none; cursor:pointer;" onclick="selectIsland('${isl}')">🇬🇷 ${i18n[currentLang].islands[isl]}</button>`;
            });
            html += '</div>';
            container.innerHTML = html;
        }
        document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('${backgroundImages['chios']}')`; 
    } else {
        selectedIsland = region;
        loadDataAndShowSetup(region);
    }
}

function selectIsland(island) {
    selectedIsland = island;
    document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('${backgroundImages[island]}')`;
    hideAll();
    loadDataAndShowSetup('greek'); 
}

function loadDataAndShowSetup(dataFileName) {
    const scriptId = 'module-' + dataFileName;
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `data/${dataFileName}.js`;
        script.onload = () => {
            document.getElementById('setup-screen').classList.remove('hidden');
            document.getElementById('setup-title').textContent = i18n[currentLang].setupTitle;
            if(dataFileName !== 'greek') {
                document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('${backgroundImages[dataFileName]}')`;
            }
            renderMap();
        };
        script.onerror = () => {
            document.getElementById('setup-screen').classList.remove('hidden');
            renderMap();
        };
        document.body.appendChild(script);
    } else {
        document.getElementById('setup-screen').classList.remove('hidden');
        document.getElementById('setup-title').textContent = i18n[currentLang].setupTitle;
        renderMap();
    }
}

function renderMap() {
    const container = document.getElementById('base-options-container');
    if (!selectedIsland || !mapPins[selectedIsland]) return;
    
    const pinData = mapPins[selectedIsland];
    const mapImageUrl = pinData.mapUrl;
    
    let pinsHTML = '';
    if (selectedRegion === 'greek') {
        const langData = i18n[currentLang];
        pinsHTML = `
            <button class="map-pin-btn" style="top: ${pinData.pins.north.top}; left: ${pinData.pins.north.left};" onclick="startApp('north')">${langData.north}</button>
            <button class="map-pin-btn" style="top: ${pinData.pins.south.top}; left: ${pinData.pins.south.left};" onclick="startApp('south')">${langData.south}</button>
            <button class="map-pin-btn" style="top: ${pinData.pins.west.top}; left: ${pinData.pins.west.left};" onclick="startApp('west')">${langData.west}</button>
            <button class="map-pin-btn" style="top: ${pinData.pins.east.top}; left: ${pinData.pins.east.left};" onclick="startApp('east')">${langData.east}</button>
            <button class="map-pin-btn" style="top: ${pinData.pins.center.top}; left: ${pinData.pins.center.left};" onclick="startApp('center')">${langData.center}</button>
        `;
    } else {
        for (let key in pinData.pins) {
            let cityObj = pinData.pins[key];
            let translatedCity = i18n[currentLang].cities[key] || key;
            pinsHTML += `<button class="map-pin-btn" style="top: ${cityObj.top}; left: ${cityObj.left};" onclick="startApp('${key}')">${translatedCity}</button>`;
        }
    }
    
    container.innerHTML = `
        <div class="real-map-wrapper" style="background-image: url('${mapImageUrl}');">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.15);"></div>
            ${pinsHTML}
        </div>
    `;
}

function startApp(baseLocation) {
    currentBaseLocation = baseLocation;
    hideAll();
    document.getElementById('itinerary-container').classList.remove('hidden');
    renderItinerary();
}

function renderItinerary() {
    const wrapper = document.getElementById('days-wrapper');
    wrapper.innerHTML = ''; 

    const regionData = window.routeModules && window.routeModules[selectedRegion] ? window.routeModules[selectedRegion][currentLang] : null;

    if(!regionData) { 
        wrapper.innerHTML = `<h2 style="color:white;text-align:center;">Error Loading Itinerary Data</h2>`; 
        return; 
    }
    
    let finalItinerary = [];

    if (selectedRegion === 'greek') {
        const data = regionData[selectedIsland];
        if (!data) return;
        const middleModules = [data.south, data.west, data.north, data.northeast, data.east];

        let startIndex = 0;
        if (currentBaseLocation === 'south') startIndex = 0;
        else if (currentBaseLocation === 'west') startIndex = 1;
        else if (currentBaseLocation === 'north') startIndex = 2;
        else if (currentBaseLocation === 'east') startIndex = 3; 
        else if (currentBaseLocation === 'center') startIndex = 4;

        let rotatedMiddle = [];
        for (let i = 0; i < 5; i++) {
            rotatedMiddle.push(middleModules[(startIndex + i) % 5]);
        }
        finalItinerary = [data.arrival, ...rotatedMiddle, data.departure];

    } else {
        let routeOrder = [];
        if (selectedRegion === 'central-europe') {
            routeOrder = ['prague', 'munich', 'salzburg', 'vienna', 'bratislava', 'budapest'];
        } else if (selectedRegion === 'central-balkans') {
            routeOrder = ['belgrade', 'sarajevo', 'mostar', 'kotor', 'budva', 'nis'];
            if (currentBaseLocation === 'podgorica') {
                routeOrder = ['budva', 'kotor', 'mostar', 'sarajevo', 'belgrade', 'nis'];
            }
        } else if (selectedRegion === 'balkans') {
            routeOrder = ['tirana', 'shkoder', 'prizren', 'pristina', 'skopje', 'ohrid', 'elbasan'];
        } else if (selectedRegion === 'adriatic') {
            routeOrder = ['tirana', 'durres', 'ksamil', 'bar', 'budva', 'kotor'];
        }

        let startIndex = routeOrder.indexOf(currentBaseLocation);
        if(startIndex === -1) startIndex = 0;
        
        let rotatedCities = [];
        for (let i = 0; i < routeOrder.length; i++) {
            rotatedCities.push(routeOrder[(startIndex + i) % routeOrder.length]);
        }

        rotatedCities.forEach(city => {
            if(regionData[city]) {
                finalItinerary.push(...regionData[city]);
            }
        });
    }

    if(finalItinerary.length === 0) return;

    currentItineraryData = finalItinerary;

    finalItinerary.forEach((day, index) => {
        let dayNum = index + 1;
        
        let imageUrl = '';
        if (selectedRegion === 'greek') {
            imageUrl = moduleImages[day.id]; 
        } else {
            imageUrl = day.img || moduleImages.arrival;
        }
        
        let titleHtml = '';
        let match = day.title.match(/^(.*?)\s*\((.*?)\)$/);
        if (match) {
            titleHtml = `<span class="title-city">${match[1]}</span> <span class="title-country">(${match[2]})</span>`;
        } else {
            titleHtml = `<span class="title-city">${day.title}</span>`;
        }

        let tasksHTML = '';
        const periods = [
            { title: i18n[currentLang].morning, items: day.morning },
            { title: i18n[currentLang].afternoon, items: day.afternoon },
            { title: i18n[currentLang].evening, items: day.evening },
            { title: i18n[currentLang].night, items: day.night }
        ];

        periods.forEach((p, periodIndex) => {
            if(!p.items || p.items.length === 0) return;
            tasksHTML += `<h3>${p.title}</h3><ul class="task-list">`;
            p.items.forEach((task, taskIndex) => {
                let taskText = task;
                if (selectedRegion === 'greek' && day.id === 'arrival' && taskText.includes('{beach}')) {
                    taskText = taskText.replace('{beach}', nearestBeaches[selectedIsland][currentBaseLocation]);
                }

                let taskId = `task-${index}-${periodIndex}-${taskIndex}`;
                let isChecked = completedTasks.has(taskId) ? 'checked' : '';
                let completedClass = completedTasks.has(taskId) ? 'completed' : '';

                tasksHTML += `
                    <li class="task-item ${completedClass}" id="${taskId}" onclick="toggleTask('${taskId}')">
                        <input type="checkbox" id="check-${taskId}" ${isChecked}>
                        <span class="task-text">${taskText}</span>
                    </li>
                `;
            });
            tasksHTML += `</ul>`;
        });

        let dinnerId = `dinner-${index}`;
        let dinnerHTML = '';
        
        if(day.dinner) {
            dinnerHTML = `
                <div class="dinner-toggle-container">
                    <h3 style="margin-top: 0; border: none; color: #fff;">${i18n[currentLang].dinnerSuggest}</h3>
                    <div class="dinner-buttons">
                        <button onclick="showDinner(event, '${dinnerId}', 'seafood', ${index})">${i18n[currentLang].seafood}</button>
                        <button onclick="showDinner(event, '${dinnerId}', 'meat', ${index})">${i18n[currentLang].meat}</button>
                        <button onclick="showDinner(event, '${dinnerId}', 'snacks', ${index})">${i18n[currentLang].snacks}</button>
                    </div>
                    <div id="${dinnerId}-display" class="restaurant-card hidden"></div>
                </div>
            `;
        }

        let cardHTML = `
            <div class="day-card">
                <div class="day-image" style="background-image: url('${imageUrl}');">
                    <div class="day-badge">${i18n[currentLang].day} ${dayNum}</div>
                    <div class="day-image-overlay">
                        ${titleHtml}
                    </div>
                </div>
                <div class="day-content">
                    ${tasksHTML}
                    ${dinnerHTML}
                </div>
            </div>
        `;
        
        wrapper.innerHTML += cardHTML;
    });
}

function toggleTask(taskId) {
    const li = document.getElementById(taskId);
    const checkbox = document.getElementById(`check-${taskId}`);
    
    if (li.classList.contains('completed')) {
        li.classList.remove('completed');
        checkbox.checked = false;
        completedTasks.delete(taskId);
        taskHistoryStack = taskHistoryStack.filter(id => id !== taskId);
    } else {
        li.classList.add('completed');
        checkbox.checked = true;
        completedTasks.add(taskId);
        taskHistoryStack.push(taskId);
    }
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowDown') {
        e.preventDefault(); 
        if(taskHistoryStack.length > 0) {
            let lastTaskId = taskHistoryStack.pop();
            const li = document.getElementById(lastTaskId);
            const checkbox = document.getElementById(`check-${lastTaskId}`);
            if(li && checkbox) {
                li.classList.remove('completed');
                checkbox.checked = false;
                completedTasks.delete(lastTaskId);
            } else {
                completedTasks.delete(lastTaskId);
            }
        }
    }
});

function showDinner(event, displayId, type, dayIndex) {
    const displayDiv = document.getElementById(`${displayId}-display`);
    const parentBtns = event.target.parentElement.querySelectorAll('button');
    parentBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const dayData = currentItineraryData[dayIndex];
    if(!dayData || !dayData.dinner) return;
    const restData = dayData.dinner[type];

    let cleanName = restData.name;
    const extractRegex = /<a[^>]*>(.*?)<\/a>/;
    if (extractRegex.test(cleanName)) {
        cleanName = cleanName.match(extractRegex)[1];
    }

    let displayHtml = cleanName;
    
    if (cleanName !== "N/A" && !cleanName.includes("Ferry") && !cleanName.includes("Feribot")) {
        let locationString = '';
        if(selectedRegion === 'greek') {
            locationString = i18n['EN'].islands[selectedIsland] + ' Greece';
        } else {
            let match = dayData.title.match(/^(.*?)\s*\((.*?)\)$/);
            if(match) locationString = match[1] + ' ' + match[2];
        }
        const googleMapsQuery = encodeURIComponent(`${cleanName} restaurant ${locationString}`);
        displayHtml = `<a href="https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}" target="_blank" style="color:#00d2ff;text-decoration:underline;">${cleanName}</a>`;
    }

    displayDiv.innerHTML = `
        <div class="rest-name">${displayHtml}</div>
        <div class="rest-desc" style="color:#aaa;margin-top:5px;">${restData.desc}</div>
    `;
    displayDiv.classList.remove('hidden');
}

function changeLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if(document.getElementById(`btn-lang-${lang.toLowerCase()}`)) {
        document.getElementById(`btn-lang-${lang.toLowerCase()}`).classList.add('active');
    }

    const appTitle = document.getElementById('app-title');
    if (selectedRegion) {
        appTitle.textContent = i18n[lang].regions[selectedRegion] || i18n[lang].appTitle;
    } else {
        appTitle.textContent = i18n[lang].appTitle;
    }

    if(document.getElementById('region-title')) document.getElementById('region-title').textContent = i18n[lang].regionTitle;
    if(document.getElementById('island-title')) document.getElementById('island-title').textContent = i18n[lang].islandTitle;
    if(document.getElementById('setup-title')) document.getElementById('setup-title').textContent = i18n[lang].setupTitle;
    
    if(document.getElementById('btn-back-region')) document.getElementById('btn-back-region').textContent = i18n[lang].backRegion;
    if(document.getElementById('btn-back-island')) document.getElementById('btn-back-island').textContent = i18n[lang].backIsland;
    if(document.getElementById('btn-back-base')) document.getElementById('btn-back-base').textContent = i18n[lang].backBase;
    if(document.getElementById('btn-back-setup')) document.getElementById('btn-back-setup').textContent = i18n[lang].backSetup;

    if(document.getElementById('btn-route-greek')) document.getElementById('btn-route-greek').innerHTML = "🇬🇷 " + i18n[lang].buttons['greek'];
    if(document.getElementById('btn-route-central-europe')) document.getElementById('btn-route-central-europe').innerHTML = "🏰 " + i18n[lang].buttons['central-europe'];
    if(document.getElementById('btn-route-central-balkans')) document.getElementById('btn-route-central-balkans').innerHTML = "⛰️ " + i18n[lang].buttons['central-balkans'];
    if(document.getElementById('btn-route-balkans')) document.getElementById('btn-route-balkans').innerHTML = "🌄 " + i18n[lang].buttons['balkans'];
    if(document.getElementById('btn-route-adriatic')) document.getElementById('btn-route-adriatic').innerHTML = "🌊 " + i18n[lang].buttons['adriatic'];

    if(document.getElementById('btn-chios')) document.getElementById('btn-chios').textContent = "🇬🇷 " + i18n[lang].islands.chios;
    if(document.getElementById('btn-kos')) document.getElementById('btn-kos').textContent = "🇬🇷 " + i18n[lang].islands.kos;
    if(document.getElementById('btn-lesbos')) document.getElementById('btn-lesbos').textContent = "🇬🇷 " + i18n[lang].islands.lesbos;
    if(document.getElementById('btn-meis')) document.getElementById('btn-meis').textContent = "🇬🇷 " + i18n[lang].islands.meis;
    if(document.getElementById('btn-rhodes')) document.getElementById('btn-rhodes').textContent = "🇬🇷 " + i18n[lang].islands.rhodes;
    if(document.getElementById('btn-samos')) document.getElementById('btn-samos').textContent = "🇬🇷 " + i18n[lang].islands.samos;

    renderAlphabeticalMenu();

    if (document.getElementById('setup-screen') && !document.getElementById('setup-screen').classList.contains('hidden')) {
        if (selectedRegion === 'greek' && !selectedIsland) {
            selectRegion('greek');
        } else {
            renderMap(); 
        }
    }

    if (document.getElementById('itinerary-container') && !document.getElementById('itinerary-container').classList.contains('hidden')) {
        renderItinerary();
    }
}

// Ensure appEngine object exists to prevent modular HTML buttons from breaking
window.appEngine = {
    changeLanguage: changeLanguage,
    selectRegion: selectRegion,
    selectIsland: selectIsland,
    goBack: goBack,
    goBackFromSetup: goBackFromSetup
};

// Initialization
document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.8)), url('${backgroundImages['home']}')`;
renderAlphabeticalMenu();
