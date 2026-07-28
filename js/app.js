// js/app.js

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
    'west-north-europe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Western_Europe_%28orthographic_projection%29.svg/1024px-Western_Europe_%28orthographic_projection%29.svg.png',
    'germany-inside-out': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Western_Europe_%28orthographic_projection%29.svg/1024px-Western_Europe_%28orthographic_projection%29.svg.png',
    'lake-constance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bodensee_Meersburg_Hafen_01.jpg/1024px-Bodensee_Meersburg_Hafen_01.jpg',
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
    'germany-inside-out': { mapUrl: backgroundImages['germany-inside-out'], pins: { hamburg: {top: '15%', left: '45%'}, bremen: {top: '25%', left: '20%'}, cologne: {top: '50%', left: '15%'}, frankfurt: {top: '65%', left: '30%'}, stuttgart: {top: '85%', left: '35%'}, munich: {top: '85%', left: '70%'}, nuremberg: {top: '65%', left: '65%'}, leipzig: {top: '40%', left: '75%'}, berlin: {top: '20%', left: '75%'} } },
    'lake-constance': { mapUrl: backgroundImages['lake-constance'], pins: { zurich: {top: '55%', left: '15%'}, constance: {top: '15%', left: '35%'}, ravensburg: {top: '15%', left: '75%'}, liechtenstein: {top: '50%', left: '85%'}, weesen: {top: '85%', left: '75%'}, freienbach: {top: '85%', left: '50%'}, horgen: {top: '85%', left: '25%'} } }
};

const i18n = {
    'EN': {
        appTitle: 'Europe Itineraries', regionTitle: 'Select Your Route', setupTitle: 'Select Starting Point',
        backRegion: 'Back to Routes', backBase: 'Back to Map', backSetup: 'Go Back',
        center: 'Center', north: 'North', south: 'South', east: 'East', west: 'West',
        seafood: 'Seafood', meat: 'Meat', snacks: 'Snacks/Meze',
        morning: 'Morning (09:00 - 12:00)', afternoon: 'Noon/Afternoon (12:00 - 17:00)', 
        evening: 'Evening (17:00 - 21:00)', night: 'Night (21:00 onwards)', dinnerSuggest: 'Dinner Suggestions', day: 'DAY',
        regions: { 
            'greek': 'Greek Islands Itinerary', 'central-europe': 'Central Europe Itinerary', 'west-north-europe': 'West North Europe Itinerary', 
            'germany-inside-out': 'Germany Inside Out Itinerary', 'lake-constance': 'Lake Constance Itinerary', 'central-balkans': 'Central Balkans Itinerary', 
            'balkans': 'East Balkans Itinerary', 'adriatic': 'South Adriatic Itinerary' 
        },
        buttons: { 
            'greek': 'Greek Islands', 'central-europe': 'Central Europe', 'west-north-europe': 'West North Europe', 
            'germany-inside-out': 'Germany Inside Out', 'lake-constance': 'Lake Constance', 'central-balkans': 'Central Balkans', 
            'balkans': 'East Balkans', 'adriatic': 'South Adriatic' 
        },
        cities: { berlin: 'Berlin', hamburg: 'Hamburg', bremen: 'Bremen', cologne: 'Cologne', frankfurt: 'Frankfurt', stuttgart: 'Stuttgart', munich: 'Munich', nuremberg: 'Nuremberg', leipzig: 'Leipzig' }
    },
    'TR': {
        appTitle: 'Avrupa Rotaları', regionTitle: 'Rotanızı Seçin', setupTitle: 'Başlangıç Seçin',
        backRegion: 'Rotalara Dön', backBase: 'Haritaya Dön', backSetup: 'Geri Dön',
        center: 'Merkez', north: 'Kuzey', south: 'Güney', east: 'Doğu', west: 'Batı',
        seafood: 'Deniz Ürünleri', meat: 'Et', snacks: 'Meze/Atıştırmalık',
        morning: 'Sabah (09:00 - 12:00)', afternoon: 'Öğle/Öğleden Sonra (12:00 - 17:00)', 
        evening: 'Akşam (17:00 - 21:00)', night: 'Gece (21:00 ve sonrası)', dinnerSuggest: 'Akşam Yemeği Önerileri', day: 'GÜN',
        regions: { 
            'greek': 'Yunan Adaları Rotası', 'central-europe': 'Orta Avrupa Rotası', 'west-north-europe': 'Batı Kuzey Avrupa Rotası', 
            'germany-inside-out': 'Almanya İçten Dışa Rotası', 'lake-constance': 'Konstanz Gölü Rotası', 'central-balkans': 'Orta Balkanlar Rotası', 
            'balkans': 'Doğu Balkanlar Rotası', 'adriatic': 'Güney Adriyatik Turu' 
        },
        buttons: { 
            'greek': 'Yunan Adaları', 'central-europe': 'Orta Avrupa', 'west-north-europe': 'Batı Kuzey Avrupa', 
            'germany-inside-out': 'Almanya İçten Dışa', 'lake-constance': 'Konstanz Gölü', 'central-balkans': 'Orta Balkanlar', 
            'balkans': 'Doğu Balkanlar', 'adriatic': 'Güney Adriyatik' 
        },
        cities: { berlin: 'Berlin', hamburg: 'Hamburg', bremen: 'Bremen', cologne: 'Köln', frankfurt: 'Frankfurt', stuttgart: 'Stuttgart', munich: 'Münih', nuremberg: 'Nürnberg', leipzig: 'Leipzig' }
    },
    'DE': {
        appTitle: 'Europa Reiserouten', regionTitle: 'Route Wählen', setupTitle: 'Startpunkt Wählen',
        backRegion: 'Zurück', backBase: 'Zurück', backSetup: 'Zurück',
        center: 'Zentrum', north: 'Norden', south: 'Süden', east: 'Osten', west: 'Westen',
        seafood: 'Meeresfrüchte', meat: 'Fleisch', snacks: 'Snacks',
        morning: 'Morgen', afternoon: 'Nachmittag', evening: 'Abend', night: 'Nacht', dinnerSuggest: 'Abendessen', day: 'TAG',
        regions: { 
            'greek': 'Griechische Inseln Route', 'central-europe': 'Mitteleuropa Route', 'west-north-europe': 'Westnordeuropa Route', 
            'germany-inside-out': 'Deutschland von Innen Route', 'lake-constance': 'Bodensee Route', 'central-balkans': 'Zentralbalkan Route', 
            'balkans': 'Ostbalkan Route', 'adriatic': 'Südadria Route' 
        },
        buttons: { 
            'greek': 'Griechische Inseln', 'central-europe': 'Mitteleuropa', 'west-north-europe': 'Westnordeuropa', 
            'germany-inside-out': 'Deutschland von Innen', 'lake-constance': 'Bodensee', 'central-balkans': 'Zentralbalkan', 
            'balkans': 'Ostbalkan', 'adriatic': 'Südadria' 
        },
        cities: { berlin: 'Berlin', hamburg: 'Hamburg', bremen: 'Bremen', cologne: 'Köln', frankfurt: 'Frankfurt', stuttgart: 'Stuttgart', munich: 'München', nuremberg: 'Nürnberg', leipzig: 'Leipzig' }
    },
    'RU': {
        appTitle: 'Маршруты по Европе', regionTitle: 'Выберите маршрут', setupTitle: 'Начальная точка',
        backRegion: 'Назад', backBase: 'Назад', backSetup: 'Назад',
        center: 'Центр', north: 'Север', south: 'Юг', east: 'Восток', west: 'Запад',
        seafood: 'Морепродукты', meat: 'Мясо', snacks: 'Закуски',
        morning: 'Утро', afternoon: 'День', evening: 'Вечер', night: 'Ночь', dinnerSuggest: 'Ужин', day: 'ДЕНЬ',
        regions: { 
            'greek': 'Маршрут: Греческие Острова', 'central-europe': 'Маршрут: Центральная Европа', 'west-north-europe': 'Маршрут: Западная и Северная Европа', 
            'germany-inside-out': 'Маршрут: Германия изнутри', 'lake-constance': 'Маршрут: Боденское озеро', 'central-balkans': 'Маршрут: Центральные Балканы', 
            'balkans': 'Маршрут: Восточные Балканы', 'adriatic': 'Маршрут: Южная Адриатика' 
        },
        buttons: { 
            'greek': 'Греческие Острова', 'central-europe': 'Центральная Европа', 'west-north-europe': 'Западная и Северная Европа', 
            'germany-inside-out': 'Германия изнутри', 'lake-constance': 'Боденское озеро', 'central-balkans': 'Центральные Балканы', 
            'balkans': 'Восточные Балканы', 'adriatic': 'Южная Адриатика' 
        },
        cities: { berlin: 'Берлин', hamburg: 'Гамбург', bremen: 'Бремен', cologne: 'Кёльн', frankfurt: 'Франкфурт', stuttgart: 'Штутгарт', munich: 'Мюнхен', nuremberg: 'Нюрнберг', leipzig: 'Лейпциг' }
    }
};

const regionClasses = {
    'greek': 'bg-btn-greek',
    'central-europe': 'bg-btn-ce',
    'west-north-europe': 'bg-btn-wne',
    'germany-inside-out': 'bg-btn-germany',
    'lake-constance': 'bg-btn-constance',
    'central-balkans': 'bg-btn-central-balkans',
    'balkans': 'bg-btn-balkans',
    'adriatic': 'bg-btn-adriatic'
};

function renderAlphabeticalMenu() {
    const container = document.getElementById('region-menu-container');
    if (!container) return;

    const langButtons = i18n[currentLang].buttons;
    const localeCode = currentLang === 'TR' ? 'tr' : currentLang === 'DE' ? 'de' : currentLang === 'RU' ? 'ru' : 'en';

    // Sort alphabetically based on the translated button text in the chosen language
    const sortedKeys = Object.keys(langButtons).sort((a, b) => {
        return langButtons[a].localeCompare(langButtons[b], localeCode, { sensitivity: 'base' });
    });

    let html = '';
    sortedKeys.forEach(key => {
        let text = langButtons[key];
        let className = regionClasses[key] || 'bg-btn-greek';
        html += `<button class="${className}" onclick="appEngine.selectRegion('${key}')">${text}</button>`;
    });

    container.innerHTML = html;
}

const appEngine = {
    currentLang: 'TR',

    changeLanguage: function(lang) {
        this.currentLang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`btn-lang-${lang.toLowerCase()}`).classList.add('active');

        const appTitle = document.getElementById('app-title');
        if (selectedRegion) {
            appTitle.textContent = i18n[lang].regions[selectedRegion] || i18n[lang].appTitle;
        } else {
            appTitle.textContent = i18n[lang].appTitle;
        }

        document.getElementById('region-title').textContent = i18n[lang].regionTitle;
        document.getElementById('setup-title').textContent = i18n[lang].setupTitle;
        document.getElementById('btn-back-region').textContent = i18n[lang].backRegion;
        document.getElementById('btn-back-base').textContent = i18n[lang].backBase;
        document.getElementById('btn-back-setup').textContent = i18n[lang].backSetup;

        renderAlphabeticalMenu();

        if (!document.getElementById('setup-screen').classList.contains('hidden')) renderMap();
        if (!document.getElementById('itinerary-container').classList.contains('hidden')) renderItinerary();
    },

    selectRegion: function(region) {
        selectedRegion = region;
        hideAll();
        const appTitle = document.getElementById('app-title');
        appTitle.textContent = i18n[currentLang].regions[region];
        appTitle.className = 'neon-yellow';

        selectedIsland = region;
        
        let dataFileName = region;
        if(region === 'germany-inside-out') dataFileName = 'germany';

        const scriptId = 'module-' + region;
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `data/${dataFileName}.js`;
            script.onload = () => {
                document.getElementById('setup-screen').classList.remove('hidden');
                document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('${backgroundImages[region] || backgroundImages['home']}')`;
                renderMap();
            };
            document.body.appendChild(script);
        } else {
            document.getElementById('setup-screen').classList.remove('hidden');
            document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('${backgroundImages[region] || backgroundImages['home']}')`;
            renderMap();
        }
    },

    goBack: function(targetId) {
        hideAll();
        document.getElementById(targetId).classList.remove('hidden');
        taskHistoryStack = []; 
        if(targetId === 'region-screen') {
            selectedRegion = '';
            document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.8)), url('${backgroundImages['home']}')`;
            const appTitle = document.getElementById('app-title');
            appTitle.textContent = i18n[currentLang].appTitle;
            appTitle.className = 'neon-blue';
        }
    },

    goBackFromSetup: function() {
        this.goBack('region-screen');
    }
};

function hideAll() {
    document.getElementById('region-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('itinerary-container').classList.add('hidden');
}

function renderMap() {
    const container = document.getElementById('base-options-container');
    if (!selectedIsland || !mapPins[selectedIsland]) return;
    const pinData = mapPins[selectedIsland];
    let pinsHTML = '';
    
    for (let key in pinData.pins) {
        let cityObj = pinData.pins[key];
        let translatedCity = i18n[currentLang].cities[key] || key;
        pinsHTML += `<button class="map-pin-btn" style="top: ${cityObj.top}; left: ${cityObj.left};" onclick="startApp('${key}')">${translatedCity}</button>`;
    }
    
    container.innerHTML = `<div class="real-map-wrapper" style="background-image: url('${pinData.mapUrl}');"><div style="position: absolute; inset: 0; background: rgba(0,0,0,0.15);"></div>${pinsHTML}</div>`;
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
    
    const regionData = window.routeModules?.[selectedRegion]?.[currentLang] || window.routeModules?.[selectedRegion]?.['EN'];
    if(!regionData) { wrapper.innerHTML = `<h2 style="color:white;text-align:center;">[Content Coming Soon...]</h2>`; return; }
    
    let finalItinerary = [];
    let orderArray = Object.keys(regionData);
    let startIndex = orderArray.indexOf(currentBaseLocation);
    if(startIndex === -1) startIndex = 0;
    
    let rotatedCities = [];
    for (let i = 0; i < orderArray.length; i++) {
        rotatedCities.push(orderArray[(startIndex + i) % orderArray.length]);
    }

    rotatedCities.forEach(city => {
        if(regionData[city]) {
            let dayObjects = regionData[city].map(day => JSON.parse(JSON.stringify(day)));
            finalItinerary.push(...dayObjects);
        }
    });

    let lastDay = finalItinerary[finalItinerary.length - 1];
    let translatedCity = i18n[currentLang].cities[currentBaseLocation] || currentBaseLocation;
    const depTitle = { 'EN': `Return to ${translatedCity}`, 'TR': `${translatedCity}'a Dönüş`, 'DE': `Rückkehr nach ${translatedCity}`, 'RU': `Возврат в ${translatedCity}` };
    if(lastDay) {
        lastDay.title = depTitle[currentLang];
        lastDay.afternoon.push(currentLang === 'TR' ? 'Yolculuğu sonlandırmak için başlangıç noktasına dön.' : 'Return to starting point to conclude the road trip.');
    }

    currentItineraryData = finalItinerary;

    finalItinerary.forEach((day, index) => {
        let dayNum = index + 1;
        let imageUrl = day.img || backgroundImages['lake-constance'];
        let titleHtml = `<span class="title-city">${day.title}</span>`;

        let tasksHTML = '';
        const periods = [ { title: i18n[currentLang].morning, items: day.morning }, { title: i18n[currentLang].afternoon, items: day.afternoon }, { title: i18n[currentLang].evening, items: day.evening }, { title: i18n[currentLang].night, items: day.night } ];

        periods.forEach((p, periodIndex) => {
            if(!p.items || p.items.length === 0) return;
            tasksHTML += `<h3>${p.title}</h3><ul class="task-list">`;
            p.items.forEach((task, taskIndex) => {
                let taskId = `task-${index}-${periodIndex}-${taskIndex}`;
                let isChecked = completedTasks.has(taskId) ? 'checked' : '';
                let completedClass = completedTasks.has(taskId) ? 'completed' : '';
                tasksHTML += `<li class="task-item ${completedClass}" id="${taskId}" onclick="toggleTask('${taskId}')"><input type="checkbox" id="check-${taskId}" ${isChecked}><span class="task-text">${task}</span></li>`;
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

        let cardHTML = `<div class="day-card"><div class="day-image" style="background-image: url('${imageUrl}');"><div class="day-badge">${i18n[currentLang].day} ${dayNum}</div><div class="day-image-overlay">${titleHtml}</div></div><div class="day-content">${tasksHTML}${dinnerHTML}</div></div>`;
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

function showDinner(event, displayId, type, dayIndex) {
    const displayDiv = document.getElementById(`${displayId}-display`);
    const parentBtns = event.target.parentElement.querySelectorAll('button');
    parentBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const dayData = currentItineraryData[dayIndex];
    if(!dayData || !dayData.dinner) return;
    const restData = dayData.dinner[type];
    let query = encodeURIComponent(`${restData.name} restaurant`);
    let displayHtml = `<a href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank">${restData.name}</a>`;

    displayDiv.innerHTML = `<div class="rest-name">${displayHtml}</div><div class="rest-desc">${restData.desc}</div>`;
    displayDiv.classList.remove('hidden');
}

// Initial render on load
document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.8)), url('${backgroundImages['home']}')`;
renderAlphabeticalMenu();
