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
    'chios': { mapUrl: 'https://dogierez.github.io/greek-islands/chios-map.jpg', pins: { north: {top: '15%', left: '50%'}, south: {top: '85%', left: '50%'}, east: {top: '50%', left: '80%'}, west: {top: '50%', left: '20%'}, center: {top: '50%', left: '50%'} } },
    'kos': { mapUrl: 'https://dogierez.github.io/greek-islands/kos-map.jpg', pins: { north: {top: '30%', left: '60%'}, south: {top: '80%', left: '20%'}, east: {top: '30%', left: '85%'}, west: {top: '60%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'lesbos': { mapUrl: 'https://dogierez.github.io/greek-islands/lesbos-map.jpg', pins: { north: {top: '15%', left: '50%'}, south: {top: '85%', left: '50%'}, east: {top: '50%', left: '85%'}, west: {top: '50%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'meis': { mapUrl: 'https://dogierez.github.io/greek-islands/meis-map.jpg', pins: { north: {top: '15%', left: '50%'}, south: {top: '85%', left: '50%'}, east: {top: '50%', left: '85%'}, west: {top: '50%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'rhodes': { mapUrl: 'https://dogierez.github.io/greek-islands/rhodes-map.jpg', pins: { north: {top: '15%', left: '50%'}, south: {top: '85%', left: '50%'}, east: {top: '40%', left: '85%'}, west: {top: '60%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'samos': { mapUrl: 'https://dogierez.github.io/greek-islands/samos-map.jpg', pins: { north: {top: '20%', left: '50%'}, south: {top: '80%', left: '50%'}, east: {top: '50%', left: '85%'}, west: {top: '50%', left: '15%'}, center: {top: '50%', left: '50%'} } },
    'central-europe': { mapUrl: backgroundImages['central-europe'], pins: { prague: {top: '25%', left: '40%'}, munich: {top: '60%', left: '30%'}, salzburg: {top: '65%', left: '50%'}, vienna: {top: '50%', left: '65%'}, bratislava: {top: '40%', left: '72%'}, budapest: {top: '60%', left: '80%'} } },
    'west-north-europe': { mapUrl: backgroundImages['west-north-europe'], pins: { cologne: {top: '60%', left: '60%'}, brussels: {top: '65%', left: '30%'}, bruges: {top: '55%', left: '20%'}, rotterdam: {top: '45%', left: '35%'}, amsterdam: {top: '35%', left: '40%'}, dortmund: {top: '50%', left: '70%'} } },
    'germany-inside-out': { mapUrl: backgroundImages['germany-inside-out'], pins: { hamburg: {top: '15%', left: '45%'}, bremen: {top: '25%', left: '20%'}, cologne: {top: '50%', left: '15%'}, frankfurt: {top: '65%', left: '30%'}, stuttgart: {top: '85%', left: '35%'}, munich: {top: '85%', left: '70%'}, nuremberg: {top: '65%', left: '65%'}, leipzig: {top: '40%', left: '75%'}, berlin: {top: '20%', left: '75%'} } },
    'lake-constance': { mapUrl: backgroundImages['lake-constance'], pins: { zurich: {top: '55%', left: '15%'}, constance: {top: '15%', left: '35%'}, ravensburg: {top: '15%', left: '75%'}, liechtenstein: {top: '50%', left: '85%'}, weesen: {top: '85%', left: '75%'}, freienbach: {top: '85%', left: '50%'}, horgen: {top: '85%', left: '25%'} } },
    'central-balkans': { mapUrl: backgroundImages['central-balkans'], pins: { belgrade: {top: '25%', left: '55%'}, sarajevo: {top: '40%', left: '35%'}, mostar: {top: '55%', left: '30%'}, kotor: {top: '65%', left: '20%'}, budva: {top: '75%', left: '32%'}, podgorica: {top: '85%', left: '45%'}, nis: {top: '45%', left: '70%'} } },
    'balkans': { mapUrl: backgroundImages['balkans'], pins: { tirana: {top: '60%', left: '25%'}, shkoder: {top: '30%', left: '15%'}, prizren: {top: '15%', left: '45%'}, pristina: {top: '20%', left: '65%'}, skopje: {top: '50%', left: '75%'}, ohrid: {top: '80%', left: '60%'}, elbasan: {top: '75%', left: '40%'} } },
    'adriatic': { mapUrl: backgroundImages['balkans'], pins: { tirana: {top: '60%', left: '35%'}, durres: {top: '50%', left: '25%'}, ksamil: {top: '90%', left: '30%'}, bar: {top: '38%', left: '20%'}, budva: {top: '28%', left: '15%'}, kotor: {top: '20%', left: '10%'} } }
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
        evening: 'Evening (17:00 - 21:00)', night: 'Night (21:00 onwards)', dinnerSuggest: 'Dinner Suggestions', day: 'DAY',
        islands: { chios: 'Chios', kos: 'Kos', lesbos: 'Lesbos', meis: 'Meis', rhodes: 'Rhodes', samos: 'Samos' },
        regions: { 'greek': 'Greek Islands Itinerary', 'central-europe': 'Central Europe Itinerary', 'west-north-europe': 'West North Europe Itinerary', 'germany-inside-out': 'Germany Inside Out Itinerary', 'lake-constance': 'Lake Constance Itinerary', 'central-balkans': 'Central Balkans Itinerary', 'balkans': 'East Balkans Itinerary', 'adriatic': 'South Adriatic Itinerary' },
        buttons: { 'greek': 'Greek Islands', 'central-europe': 'Central Europe', 'west-north-europe': 'West North Europe', 'germany-inside-out': 'Germany Inside Out', 'lake-constance': 'Lake Constance', 'central-balkans': 'Central Balkans', 'balkans': 'East Balkans', 'adriatic': 'South Adriatic' },
        cities: { 
            prague: 'Prague', munich: 'Munich', salzburg: 'Salzburg', vienna: 'Vienna', bratislava: 'Bratislava', budapest: 'Budapest', 
            cologne: 'Cologne', brussels: 'Brussels', bruges: 'Bruges', rotterdam: 'Rotterdam', amsterdam: 'Amsterdam', dortmund: 'Dortmund',
            berlin: 'Berlin', hamburg: 'Hamburg', bremen: 'Bremen', frankfurt: 'Frankfurt', stuttgart: 'Stuttgart', nuremberg: 'Nuremberg', leipzig: 'Leipzig',
            zurich: 'Zürich', constance: 'Constance', ravensburg: 'Ravensburg', liechtenstein: 'Vaduz', weesen: 'Weesen', freienbach: 'Freienbach', horgen: 'Horgen',
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
        evening: 'Akşam (17:00 - 21:00)', night: 'Gece (21:00 ve sonrası)', dinnerSuggest: 'Akşam Yemeği Önerileri', day: 'GÜN',
        islands: { chios: 'Sakız', kos: 'Kos', lesbos: 'Midilli', meis: 'Meis', rhodes: 'Rodos', samos: 'Sisam' },
        regions: { 'greek': 'Yunan Adaları Rotası', 'central-europe': 'Orta Avrupa Rotası', 'west-north-europe': 'Batı Kuzey Avrupa Rotası', 'germany-inside-out': 'Almanya İçten Dışa Rotası', 'lake-constance': 'Konstanz Gölü Rotası', 'central-balkans': 'Orta Balkanlar Rotası', 'balkans': 'Doğu Balkanlar Rotası', 'adriatic': 'Güney Adriyatik Turu' },
        buttons: { 'greek': 'Yunan Adaları', 'central-europe': 'Orta Avrupa', 'west-north-europe': 'Batı Kuzey Avrupa', 'germany-inside-out': 'Almanya İçten Dışa', 'lake-constance': 'Konstanz Gölü', 'central-balkans': 'Orta Balkanlar', 'balkans': 'Doğu Balkanlar', 'adriatic': 'Güney Adriyatik' },
        cities: { 
            prague: 'Prag', munich: 'Münih', salzburg: 'Salzburg', vienna: 'Viyana', bratislava: 'Bratislava', budapest: 'Budapeşte', 
            cologne: 'Köln', brussels: 'Brüksel', bruges: 'Brugge', rotterdam: 'Rotterdam', amsterdam: 'Amsterdam', dortmund: 'Dortmund',
            berlin: 'Berlin', hamburg: 'Hamburg', bremen: 'Bremen', frankfurt: 'Frankfurt', stuttgart: 'Stuttgart', nuremberg: 'Nürnberg', leipzig: 'Leipzig',
            zurich: 'Zürih', constance: 'Konstanz', ravensburg: 'Ravensburg', liechtenstein: 'Lihtenştayn', weesen: 'Weesen', freienbach: 'Freienbach', horgen: 'Horgen',
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
        evening: 'Abend (17:00 - 21:00)', night: 'Nacht (ab 21:00)', dinnerSuggest: 'Abendessen Vorschläge', day: 'TAG',
        islands: { chios: 'Chios', kos: 'Kos', lesbos: 'Lesbos', meis: 'Kastelorizo', rhodes: 'Rhodos', samos: 'Samos' },
        regions: { 'greek': 'Griechische Inseln Route', 'central-europe': 'Mitteleuropa Route', 'west-north-europe': 'Westnordeuropa Route', 'germany-inside-out': 'Deutschland von Innen Route', 'lake-constance': 'Bodensee Route', 'central-balkans': 'Zentralbalkan Route', 'balkans': 'Ostbalkan Route', 'adriatic': 'Südadria Route' },
        buttons: { 'greek': 'Griechische Inseln', 'central-europe': 'Mitteleuropa', 'west-north-europe': 'Westnordeuropa', 'germany-inside-out': 'Deutschland von Innen', 'lake-constance': 'Bodensee', 'central-balkans': 'Zentralbalkan', 'balkans': 'Ostbalkan', 'adriatic': 'Südadria' },
        cities: { 
            prague: 'Prag', munich: 'München', salzburg: 'Salzburg', vienna: 'Wien', bratislava: 'Bratislava', budapest: 'Budapest', 
            cologne: 'Köln', brussels: 'Brüssel', bruges: 'Brügge', rotterdam: 'Rotterdam', amsterdam: 'Amsterdam', dortmund: 'Dortmund',
            berlin: 'Berlin', hamburg: 'Hamburg', bremen: 'Bremen', frankfurt: 'Frankfurt', stuttgart: 'Stuttgart', nuremberg: 'Nürnberg', leipzig: 'Leipzig',
            zurich: 'Zürich', constance: 'Konstanz', ravensburg: 'Ravensburg', liechtenstein: 'Vaduz', weesen: 'Weesen', freienbach: 'Freienbach', horgen: 'Horgen',
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
        evening: 'Вечер (17:00 - 21:00)', night: 'Ночь (с 21:00)', dinnerSuggest: 'Ужин', day: 'ДЕНЬ',
        islands: { chios: 'Хиос', kos: 'Кос', lesbos: 'Лесбос', meis: 'Мейсти', rhodes: 'Родос', samos: 'Самос' },
        regions: { 'greek': 'Маршрут: Греческие Острова', 'central-europe': 'Маршрут: Центральная Европа', 'west-north-europe': 'Маршрут: Западная и Северная Европа', 'germany-inside-out': 'Маршрут: Германия изнутри', 'lake-constance': 'Маршрут: Боденское озеро', 'central-balkans': 'Маршрут: Центральные Балканы', 'balkans': 'Маршрут: Восточные Балканы', 'adriatic': 'Маршрут: Южная Адриатика' },
        buttons: { 'greek': 'Греческие Острова', 'central-europe': 'Центральная Европа', 'west-north-europe': 'Западная и Северная Европа', 'germany-inside-out': 'Германия изнутри', 'lake-constance': 'Боденское озеро', 'central-balkans': 'Центральные Балканы', 'balkans': 'Восточные Балканы', 'adriatic': 'Южная Адриатика' },
        cities: { 
            prague: 'Прага', munich: 'Мюнхен', salzburg: 'Зальцбург', vienna: 'Вена', bratislava: 'Братислава', budapest: 'Будапешт', 
            cologne: 'Кёльн', brussels: 'Брюссель', bruges: 'Брюгге', rotterdam: 'Роттердам', amsterdam: 'Амстердам', dortmund: 'Дортмунд',
            berlin: 'Берлин', hamburg: 'Гамбург', bremen: 'Бремен', frankfurt: 'Франкфурт', stuttgart: 'Штутгарт', nuremberg: 'Нюрнберг', leipzig: 'Лейпциг',
            zurich: 'Цюрих', constance: 'Констанц', ravensburg: 'Равенсбург', liechtenstein: 'Вадуц', weesen: 'Веезен', freienbach: 'Фрайенбах', horgen: 'Хорген',
            belgrade: 'Белград', sarajevo: 'Сараево', mostar: 'Mostar', kotor: 'Котор', budva: 'Будва', nis: 'Ниш', podgorica: 'Подгорица',
            tirana: 'Тирана', shkoder: 'Шкодер', prizren: 'Призрен', pristina: 'Приштина', skopje: 'Скопье', ohrid: 'Охрид', elbasan: 'Эльбасан',
            ksamil: 'Ксамил', durres: 'Дуррес', bar: 'Бар', tivat: 'Тиват'
        }
    }
};

const allModules = {
    'EN': {
        'lake-constance': {
            zurich: [ { id: 'lc-zurich', title: 'Zürich (Switzerland)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Z%C3%BCrich_-_Grossm%C3%BCnster_und_M%C3%BCnsterbr%C3%BCcke_2019-09-24.jpg/800px-Z%C3%BCrich_-_Grossm%C3%BCnster_und_M%C3%BCnsterbr%C3%BCcke_2019-09-24.jpg', morning: ['Leave Zürich in the morning to maximize the afternoon by the expansive shores.'], afternoon: ['Drive ~85 km to Lake Constance.', 'Enjoy lakeside walks and water activities.'], evening: ['Settle in by the lake.'], night: ['Rest.'], dinner: { seafood: {name: 'Brasserie', desc: 'Seafood.'}, meat: {name: 'Zeughauskeller', desc: 'Meats.'}, snacks: {name: 'Bierhalle', desc: 'Snacks.'} } } ],
            constance: [ { id: 'lc-constance', title: 'Constance (Germany)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bodensee_Meersburg_Hafen_01.jpg/1024px-Bodensee_Meersburg_Hafen_01.jpg', morning: ['Explore the town of Constance on the lake.'], afternoon: ['Visit the Saurer vehicle museum in nearby Arbon to satisfy your interest in automotive engineering.'], evening: ['Lakeside stroll.'], night: ['Enjoy a keto-friendly dinner of Bodenseefelchen (local whitefish) with roasted greens.'], dinner: { seafood: {name: 'Seekeller', desc: 'Keto-friendly Bodenseefelchen.'}, meat: {name: 'Hafenrestaurant', desc: 'Meats.'}, snacks: {name: 'Biergarten am See', desc: 'Snacks.'} } } ],
            ravensburg: [ { id: 'lc-ravensburg', title: 'Ravensburg (Germany)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ravensburg_Marienplatz.jpg/800px-Ravensburg_Marienplatz.jpg', morning: ['Drive ~40 km inland to Ravensburg.'], afternoon: ['Visit Ravensburger Spieleland to easily entertain Deniz Dora for the day.'], evening: ['Explore the historic towers of the town.'], night: ['Quiet evening.'], dinner: { seafood: {name: 'Räuberhöhle', desc: 'Fish options.'}, meat: {name: 'Kupferle', desc: 'Traditional meat.'}, snacks: {name: 'Marktplatz Cafe', desc: 'Snacks.'} } } ],
            liechtenstein: [ { id: 'lc-liechtenstein', title: 'Vaduz (Liechtenstein)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Vaduz_Castle_Liechtenstein.jpg/800px-Vaduz_Castle_Liechtenstein.jpg', morning: ['Drive ~90 km south toward the Alps.'], afternoon: ['Arrive in Vaduz early enough to enjoy the mountain scenery and explore the capital center.'], evening: ['Alpine views.'], night: ['Relax.'], dinner: { seafood: {name: 'Mare', desc: 'Seafood.'}, meat: {name: 'Torkel', desc: 'Meats.'}, snacks: {name: 'Brasserie Burg', desc: 'Snacks.'} } } ],
            weesen: [ { id: 'lc-weesen', title: 'Weesen (Switzerland)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Walensee_from_Amden.jpg/800px-Walensee_from_Amden.jpg', morning: ['Drive ~45 km back into Switzerland to the Walensee.'], afternoon: ['Enjoy a highly scenic and peaceful afternoon directly by the water on this quiet lake.'], evening: ['Quiet lake evening.'], night: ['Rest.'], dinner: { seafood: {name: 'Fischerstube', desc: 'Fresh fish.'}, meat: {name: 'Park', desc: 'Meats.'}, snacks: {name: 'Seecafé', desc: 'Drinks.'} } } ],
            freienbach: [ { id: 'lc-freienbach', title: 'Freienbach (Switzerland)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Z%C3%BCrichsee_Rapperswil.jpg/800px-Z%C3%BCrichsee_Rapperswil.jpg', morning: ['Travel ~35 km from the Walensee to the upper part of Lake Zürich.'], afternoon: ['Lakeside relaxation and waterfront promenades.'], evening: ['Sunset over the water.'], night: ['Relax.'], dinner: { seafood: {name: 'Seerestaurant', desc: 'Fish.'}, meat: {name: 'Rößli', desc: 'Meat dishes.'}, snacks: {name: 'Uferbar', desc: 'Snacks.'} } } ],
            horgen: [ { id: 'lc-horgen', title: 'Horgen (Switzerland)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Horgen_ZH.jpg/800px-Horgen_ZH.jpg', morning: ['Take the brief ~20 km transit along Lake Zürich.'], afternoon: ['Leisurely afternoon taking in the views from Horgen.'], evening: ['Vibrant local atmosphere.'], night: ['One last evening by the lake.'], dinner: { seafood: {name: 'L\'O', desc: 'Lake dining.'}, meat: {name: 'Schwan', desc: 'Meats.'}, snacks: {name: 'Taube', desc: 'Snacks.'} } } ]
        }
    },
    'TR': {
        'lake-constance': {
            zurich: [ { id: 'lc-zurich', title: 'Zürih (İsviçre)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Z%C3%BCrich_-_Grossm%C3%BCnster_und_M%C3%BCnsterbr%C3%BCcke_2019-09-24.jpg/800px-Z%C3%BCrich_-_Grossm%C3%BCnster_und_M%C3%BCnsterbr%C3%BCcke_2019-09-24.jpg', morning: ['Geniş göl kıyısında öğleden sonrayı en iyi şekilde değerlendirmek için sabah yola çık.'], afternoon: ['Konstanz Gölü\'ne sür.', 'Göl kenarında yürüyüş yap.'], evening: ['Göl kıyısına yerleş.'], night: ['Dinlen.'], dinner: { seafood: {name: 'Brasserie', desc: 'Deniz ürünleri.'}, meat: {name: 'Zeughauskeller', desc: 'Etler.'}, snacks: {name: 'Bierhalle', desc: 'Atıştırmalık.'} } } ],
            constance: [ { id: 'lc-constance', title: 'Konstanz (Almanya)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bodensee_Meersburg_Hafen_01.jpg/1024px-Bodensee_Meersburg_Hafen_01.jpg', morning: ['Konstanz Gölü\'ne ~85 km (1 saat 15 dk) sür.'], afternoon: ['Konstanz kasabasını keşfet.', 'Otomotiv mühendisliğine olan ilgini tatmin etmek için yakındaki Arbon\'da Saurer araç müzesini ziyaret et.'], evening: ['Göl kenarında yürüyüş yap.'], night: ['Kavrulmuş sebzelerle birlikte keto dostu Bodenseefelchen (yerel beyaz balık) yemeğinin tadını çıkar.'], dinner: { seafood: {name: 'Seekeller', desc: 'Keto dostu Bodenseefelchen.'}, meat: {name: 'Hafenrestaurant', desc: 'Etler.'}, snacks: {name: 'Biergarten am See', desc: 'Atıştırmalıklar.'} } } ],
            ravensburg: [ { id: 'lc-ravensburg', title: 'Ravensburg (Almanya)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ravensburg_Marienplatz.jpg/800px-Ravensburg_Marienplatz.jpg', morning: ['İç kesimlere, Ravensburg\'a doğru ~40 km (40 dk) sür.'], afternoon: ['Deniz Dora\'yı gün boyu kolayca eğlendirmek için Ravensburger Spieleland\'ı ziyaret et.'], evening: ['Kasabanın tarihi kulelerini keşfet.'], night: ['Sessiz bir akşam.'], dinner: { seafood: {name: 'Räuberhöhle', desc: 'Balık seçenekleri.'}, meat: {name: 'Kupferle', desc: 'Geleneksel et.'}, snacks: {name: 'Marktplatz Cafe', desc: 'Atıştırmalıklar.'} } } ],
            liechtenstein: [ { id: 'lc-liechtenstein', title: 'Vaduz (Lihtenştayn)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Vaduz_Castle_Liechtenstein.jpg/800px-Vaduz_Castle_Liechtenstein.jpg', morning: ['Alplere doğru güneye sür.'], afternoon: ['Dağ manzarasının tadını çıkarmak ve başkenti keşfetmek için Vaduz\'a erken var.'], evening: ['Alp manzaraları.'], night: ['Dinlen.'], dinner: { seafood: {name: 'Mare', desc: 'Deniz ürünleri.'}, meat: {name: 'Torkel', desc: 'Etler.'}, snacks: {name: 'Brasserie Burg', desc: 'Atıştırmalıklar.'} } } ],
            weesen: [ { id: 'lc-weesen', title: 'Weesen (İsviçre)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Walensee_from_Amden.jpg/800px-Walensee_from_Amden.jpg', morning: ['İsviçre\'ye, Walensee kıyılarına doğru geri dön.'], afternoon: ['Bu sessiz gölde doğrudan su kenarında son derece doğal ve huzurlu bir öğleden sonrasının tadını çıkar.'], evening: ['Sessiz göl akşamı.'], night: ['Dinlen.'], dinner: { seafood: {name: 'Fischerstube', desc: 'Taze balık.'}, meat: {name: 'Park', desc: 'Etler.'}, snacks: {name: 'Seecafé', desc: 'İçecekler.'} } } ],
            freienbach: [ { id: 'lc-freienbach', title: 'Freienbach (İsviçre)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Z%C3%BCrichsee_Rapperswil.jpg/800px-Z%C3%BCrichsee_Rapperswil.jpg', morning: ['Walensee\'den Zürih Gölü\'nün üst kısmına seyahat et.'], afternoon: ['Göl kenarında dinlenme ve sahil gezintileri.'], evening: ['Su üzerinde gün batımı.'], night: ['Dinlen.'], dinner: { seafood: {name: 'Seerestaurant', desc: 'Balık.'}, meat: {name: 'Rößli', desc: 'Et yemekleri.'}, snacks: {name: 'Uferbar', desc: 'Atıştırmalıklar.'} } } ],
            horgen: [ { id: 'lc-horgen', title: 'Horgen (İsviçre)', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Horgen_ZH.jpg/800px-Horgen_ZH.jpg', morning: ['Zürih Gölü boyunca kısa bir geçiş yap.'], afternoon: ['Horgen\'den manzarayı izleyerek keyifli bir öğleden sonra geçir.'], evening: ['Canlı yerel atmosfer.'], night: ['Göl kenarında son bir akşam.'], dinner: { seafood: {name: 'L\'O', desc: 'Göl kenarı yemeği.'}, meat: {name: 'Schwan', desc: 'Etler.'}, snacks: {name: 'Taube', desc: 'Atıştırmalık.'} } } ]
        }
    }
};

function hideAll() {
    document.getElementById('region-screen').classList.add('hidden');
    document.getElementById('island-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('itinerary-container').classList.add('hidden');
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
        document.getElementById('island-title').textContent = i18n[lang].islandTitle;
        document.getElementById('setup-title').textContent = i18n[lang].setupTitle;
        document.getElementById('btn-back-region').textContent = i18n[lang].backRegion;
        document.getElementById('btn-back-base').textContent = i18n[lang].backBase;
        document.getElementById('btn-back-setup').textContent = i18n[lang].backSetup;

        document.getElementById('btn-route-greek').innerHTML = "🇬🇷 " + i18n[lang].buttons['greek'];
        document.getElementById('btn-route-germany').innerHTML = "🇩🇪 " + i18n[lang].buttons['germany-inside-out'];
        document.getElementById('btn-route-constance').innerHTML = "🇨🇭 " + i18n[lang].buttons['lake-constance'];
        document.getElementById('btn-route-central-europe').innerHTML = "🏰 " + i18n[lang].buttons['central-europe'];
        document.getElementById('btn-route-west-north-europe').innerHTML = "🇪🇺 " + i18n[lang].buttons['west-north-europe'];
        document.getElementById('btn-route-central-balkans').innerHTML = "⛰️ " + i18n[lang].buttons['central-balkans'];
        document.getElementById('btn-route-balkans').innerHTML = "🌄 " + i18n[lang].buttons['balkans'];
        document.getElementById('btn-route-adriatic').innerHTML = "🌊 " + i18n[lang].buttons['adriatic'];

        if (!document.getElementById('setup-screen').classList.contains('hidden')) renderMap();
        if (!document.getElementById('itinerary-container').classList.contains('hidden')) renderItinerary();
    },

    selectRegion: function(region) {
        selectedRegion = region;
        hideAll();
        const appTitle = document.getElementById('app-title');
        appTitle.textContent = i18n[currentLang].regions[region];
        appTitle.className = 'neon-yellow';

        if (region === 'greek') {
            document.getElementById('island-screen').classList.remove('hidden');
            document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('${backgroundImages['chios']}')`; 
        } else {
            selectedIsland = region;
            document.getElementById('setup-screen').classList.remove('hidden');
            document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('${backgroundImages[region]}')`;
            renderMap();
        }
    },

    selectIsland: function(island) {
        selectedIsland = island;
        document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('${backgroundImages[island]}')`;
        hideAll();
        document.getElementById('setup-screen').classList.remove('hidden');
        renderMap(); 
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
        if (selectedRegion === 'greek') {
            this.goBack('island-screen');
        } else {
            this.goBack('region-screen');
        }
    }
};

function renderMap() {
    const container = document.getElementById('base-options-container');
    if (!selectedIsland || !mapPins[selectedIsland]) return;
    const pinData = mapPins[selectedIsland];
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
    const regionData = allModules[currentLang]?.[selectedRegion] || allModules['EN'][selectedRegion];
    if(!regionData) { wrapper.innerHTML = `<h2 style="color:white;text-align:center;">[Content Coming Soon...]</h2>`; return; }
    
    let finalItinerary = [];

    if (selectedRegion === 'lake-constance') {
        const lcOrder = ['zurich', 'constance', 'ravensburg', 'liechtenstein', 'weesen', 'freienbach', 'horgen'];
        let startIndex = lcOrder.indexOf(currentBaseLocation);
        if(startIndex === -1) startIndex = 0;
        let rotatedCities = [];
        for (let i = 0; i < lcOrder.length; i++) { rotatedCities.push(lcOrder[(startIndex + i) % lcOrder.length]); }
        
        rotatedCities.forEach(city => {
            if(regionData[city]) {
                let dayObjects = regionData[city].map(day => JSON.parse(JSON.stringify(day)));
                finalItinerary.push(...dayObjects);
            }
        });

        // Close the loop back to starting city
        let lastDay = finalItinerary[finalItinerary.length - 1];
        let translatedCity = i18n[currentLang].cities[currentBaseLocation] || currentBaseLocation;
        const depTitle = { 'EN': `Return to ${translatedCity}`, 'TR': `${translatedCity}'a Dönüş`, 'DE': `Rückkehr nach ${translatedCity}`, 'RU': `Возврат в ${translatedCity}` };
        lastDay.title = depTitle[currentLang];
        lastDay.afternoon.push(currentLang === 'TR' ? 'Yolculuğu sonlandırmak için başlangıç noktasına dön.' : 'Return to starting point to conclude the road trip.');
    } else {
        // Fallback for demo
        for (const [cityKey, daysArray] of Object.entries(regionData)) {
            daysArray.forEach(day => finalItinerary.push(JSON.parse(JSON.stringify(day))));
        }
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

document.body.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.8)), url('${backgroundImages['home']}')`;
