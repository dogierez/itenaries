// data/germany.js

// Initialize the global route modules object if it doesn't exist
window.routeModules = window.routeModules || {};

// Register the Germany Inside Out route
window.routeModules['germany-inside-out'] = {
    id: 'germany-inside-out',
    mapUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Western_Europe_%28orthographic_projection%29.svg/1024px-Western_Europe_%28orthographic_projection%29.svg.png',
    
    // Map pin coordinates specific to this route
    pins: {
        hamburg: { top: '15%', left: '45%' },
        bremen: { top: '25%', left: '20%' },
        cologne: { top: '50%', left: '15%' },
        frankfurt: { top: '65%', left: '30%' },
        stuttgart: { top: '85%', left: '35%' },
        munich: { top: '85%', left: '70%' },
        nuremberg: { top: '65%', left: '65%' },
        leipzig: { top: '40%', left: '75%' },
        berlin: { top: '20%', left: '75%' }
    },

    // Daily itinerary data categorized by language and city
    itinerary: {
        'EN': {
            berlin: [
                { 
                    id: 'berlin-1', title: 'Berlin', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/800px-Brandenburger_Tor_abends.jpg', 
                    morning: ['Get settled.'], afternoon: ['Explore.'], evening: ['Walk.'], night: ['Rest.'], 
                    dinner: { seafood: {name: 'Käfer', desc: 'Fish.'}, meat: {name: 'Grill', desc: 'Steaks.'}, snacks: {name: 'Wurst', desc: 'Local.'} } 
                }, 
                { 
                    id: 'berlin-2', title: 'Berlin', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Berlin_Museumsinsel_Fernsehturm.jpg/800px-Berlin_Museumsinsel_Fernsehturm.jpg', 
                    morning: ['Wall.'], afternoon: ['Island.'], evening: ['Mitte.'], night: ['Prepare.'], 
                    dinner: { seafood: {name: 'Fritz', desc: 'Fish.'}, meat: {name: 'House', desc: 'Meat.'}, snacks: {name: 'Kebab', desc: 'Portions.'} } 
                }
            ],
            hamburg: [
                { 
                    id: 'hamburg-1', title: 'Hamburg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Speicherstadt_Hamburg_2011.jpg/800px-Speicherstadt_Hamburg_2011.jpg', 
                    morning: ['Drive.'], afternoon: ['Harbor.'], evening: ['River.'], night: ['Atmos.'], 
                    dinner: { seafood: {name: 'Hafen', desc: 'Catch.'}, meat: {name: 'Estancia', desc: 'Steaks.'}, snacks: {name: '10', desc: 'Bites.'} } 
                }, 
                { 
                    id: 'hamburg-2', title: 'Hamburg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Speicherstadt_Hamburg_2011.jpg/800px-Speicherstadt_Hamburg_2011.jpg', 
                    morning: ['Speicher.'], afternoon: ['Miniatur Wunderland for Deniz Dora.'], evening: ['Alster.'], night: ['Hotel.'], 
                    dinner: { seafood: {name: 'Liman', desc: 'Fish.'}, meat: {name: 'Meatery', desc: 'Ribs.'}, snacks: {name: 'Perle', desc: 'Snacks.'} } 
                }
            ],
            bremen: [
                { 
                    id: 'bremen-1', title: 'Bremen', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bremen_Rathaus_und_Roland.jpg/800px-Bremen_Rathaus_und_Roland.jpg', 
                    morning: ['Drive.'], afternoon: ['Center.'], evening: ['Statue.'], night: ['Relax.'], 
                    dinner: { seafood: {name: 'Hahn', desc: 'Fish.'}, meat: {name: 'Schutt', desc: 'Pork.'}, snacks: {name: 'Gebel', desc: 'Sausages.'} } 
                }
            ],
            cologne: [
                { 
                    id: 'cologne-1', title: 'Cologne', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cologne_Cathedral_and_Hohenzollern_Bridge.jpg/800px-Cologne_Cathedral_and_Hohenzollern_Bridge.jpg', 
                    morning: ['Drive.'], afternoon: ['Hotel.'], evening: ['Cathedral.'], night: ['Keto.'], 
                    dinner: { seafood: {name: 'Poisson', desc: 'Seafood.'}, meat: {name: 'Fruh', desc: 'Bratwurst & Veggies.'}, snacks: {name: 'Sion', desc: 'Sausages.'} } 
                }
            ],
            frankfurt: [
                { 
                    id: 'frankfurt-1', title: 'Frankfurt', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Frankfurt_Skyline_at_night.jpg/800px-Frankfurt_Skyline_at_night.jpg', 
                    morning: ['Drive.'], afternoon: ['Skyline.'], evening: ['River.'], night: ['Rest.'], 
                    dinner: { seafood: {name: 'Oceans', desc: 'Seafood.'}, meat: {name: 'Grill', desc: 'Meats.'}, snacks: {name: 'Wagner', desc: 'Pork.'} } 
                }
            ],
            stuttgart: [
                { 
                    id: 'stuttgart-1', title: 'Stuttgart', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Stuttgart_Schlossplatz_mit_Jubil%C3%A4umss%C3%A4ule.jpg/800px-Stuttgart_Schlossplatz_mit_Jubil%C3%A4umss%C3%A4ule.jpg', 
                    morning: ['Drive.'], afternoon: ['Museums.'], evening: ['OEM components.'], night: ['Hotel.'], 
                    dinner: { seafood: {name: 'Kanzlei', desc: 'Fish.'}, meat: {name: 'Abacco', desc: 'Steak.'}, snacks: {name: 'Carls', desc: 'Meats.'} } 
                }
            ],
            munich: [
                { 
                    id: 'munich-1', title: 'Munich', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Marienplatz_Munich.jpg/800px-Marienplatz_Munich.jpg', 
                    morning: ['Drive.'], afternoon: ['Museum.'], evening: ['Walk.'], night: ['Dine.'], 
                    dinner: { seafood: {name: 'Keller', desc: 'Fish.'}, meat: {name: 'Keller', desc: 'Roast.'}, snacks: {name: 'Herz', desc: 'Sausages.'} } 
                }
            ],
            nuremberg: [
                { 
                    id: 'nuremberg-1', title: 'Nuremberg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/N%C3%BCrnberg_Burg_01.jpg/800px-N%C3%BCrnberg_Burg_01.jpg', 
                    morning: ['Drive.'], afternoon: ['Castle.'], evening: ['Streets.'], night: ['Town.'], 
                    dinner: { seafood: {name: 'Kuchn', desc: 'Fish.'}, meat: {name: 'Röslein', desc: 'Sausages.'}, snacks: {name: 'Haus', desc: 'Meats.'} } 
                }
            ],
            leipzig: [
                { 
                    id: 'leipzig-1', title: 'Leipzig', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Leipzig_Markt_mit_Altem_Rathaus.jpg/800px-Leipzig_Markt_mit_Altem_Rathaus.jpg', 
                    morning: ['Drive.'], afternoon: ['Center.'], evening: ['Walk.'], night: ['Rest.'], 
                    dinner: { seafood: {name: 'Keller', desc: 'Fish.'}, meat: {name: 'Hof', desc: 'Meat.'}, snacks: {name: 'Bahnhof', desc: 'Sausages.'} } 
                }
            ]
        },
        'TR': {
            berlin: [
                { 
                    id: 'berlin-1', title: 'Berlin', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/800px-Brandenburger_Tor_abends.jpg', 
                    morning: ['Yerleş.'], afternoon: ['Başkent.'], evening: ['Kapı.'], night: ['Dinlen.'], 
                    dinner: { seafood: {name: 'Käfer', desc: 'Balık.'}, meat: {name: 'Grill', desc: 'Biftek.'}, snacks: {name: 'Stand', desc: 'Sosis.'} } 
                }, 
                { 
                    id: 'berlin-2', title: 'Berlin', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Berlin_Museumsinsel_Fernsehturm.jpg/800px-Berlin_Museumsinsel_Fernsehturm.jpg', 
                    morning: ['Anıt.'], afternoon: ['Ada.'], evening: ['Mitte.'], night: ['Hazırlan.'], 
                    dinner: { seafood: {name: 'Fritz', desc: 'Balık.'}, meat: {name: 'House', desc: 'Et.'}, snacks: {name: 'Kebab', desc: 'Döner.'} } 
                }
            ],
            hamburg: [
                { 
                    id: 'hamburg-1', title: 'Hamburg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Speicherstadt_Hamburg_2011.jpg/800px-Speicherstadt_Hamburg_2011.jpg', 
                    morning: ['Sür.'], afternoon: ['Liman.'], evening: ['Nehir.'], night: ['Atmosfer.'], 
                    dinner: { seafood: {name: 'Hafen', desc: 'Av.'}, meat: {name: 'Estancia', desc: 'Restoran.'}, snacks: {name: 'Brucke', desc: 'Atıştırmalık.'} } 
                }, 
                { 
                    id: 'hamburg-2', title: 'Hamburg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Speicherstadt_Hamburg_2011.jpg/800px-Speicherstadt_Hamburg_2011.jpg', 
                    morning: ['Speicherstadt.'], afternoon: ['Miniatur Wunderland, Deniz Dora için.'], evening: ['Alster.'], night: ['Otel.'], 
                    dinner: { seafood: {name: 'Liman', desc: 'Balık.'}, meat: {name: 'Meatery', desc: 'Kaburga.'}, snacks: {name: 'Perle', desc: 'Atıştırmalık.'} } 
                }
            ],
            bremen: [
                { 
                    id: 'bremen-1', title: 'Bremen', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bremen_Rathaus_und_Roland.jpg/800px-Bremen_Rathaus_und_Roland.jpg', 
                    morning: ['Sür.'], afternoon: ['Merkez.'], evening: ['Heykel.'], night: ['Dinlen.'], 
                    dinner: { seafood: {name: 'Hahn', desc: 'Balık.'}, meat: {name: 'Schutt', desc: 'Domuz.'}, snacks: {name: 'Gebel', desc: 'Sosis.'} } 
                }
            ],
            cologne: [
                { 
                    id: 'cologne-1', title: 'Köln', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cologne_Cathedral_and_Hohenzollern_Bridge.jpg/800px-Cologne_Cathedral_and_Hohenzollern_Bridge.jpg', 
                    morning: ['Sür.'], afternoon: ['Otel.'], evening: ['Katedral.'], night: ['Keto.'], 
                    dinner: { seafood: {name: 'Poisson', desc: 'Balık.'}, meat: {name: 'Fruh', desc: 'Bratwurst & Sebze.'}, snacks: {name: 'Sion', desc: 'Sosis.'} } 
                }
            ],
            frankfurt: [
                { 
                    id: 'frankfurt-1', title: 'Frankfurt', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Frankfurt_Skyline_at_night.jpg/800px-Frankfurt_Skyline_at_night.jpg', 
                    morning: ['Sür.'], afternoon: ['Silüet.'], evening: ['Nehir.'], night: ['Dinlen.'], 
                    dinner: { seafood: {name: 'Oceans', desc: 'Balık.'}, meat: {name: 'Grill', desc: 'Et.'}, snacks: {name: 'Wagner', desc: 'Domuz.'} } 
                }
            ],
            stuttgart: [
                { 
                    id: 'stuttgart-1', title: 'Stuttgart', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Stuttgart_Schlossplatz_mit_Jubil%C3%A4umss%C3%A4ule.jpg/800px-Stuttgart_Schlossplatz_mit_Jubil%C3%A4umss%C3%A4ule.jpg', 
                    morning: ['Sür.'], afternoon: ['Müze.'], evening: ['Araçlar.'], night: ['Dinlen.'], 
                    dinner: { seafood: {name: 'Kanzlei', desc: 'Balık.'}, meat: {name: 'Abacco', desc: 'Et.'}, snacks: {name: 'Carls', desc: 'Et.'} } 
                }
            ],
            munich: [
                { 
                    id: 'munich-1', title: 'Münih', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Marienplatz_Munich.jpg/800px-Marienplatz_Munich.jpg', 
                    morning: ['Sür.'], afternoon: ['Müze.'], evening: ['Meydan.'], night: ['Yemek.'], 
                    dinner: { seafood: {name: 'Keller', desc: 'Balık.'}, meat: {name: 'Keller', desc: 'Et.'}, snacks: {name: 'Herz', desc: 'Sosis.'} } 
                }
            ],
            nuremberg: [
                { 
                    id: 'nuremberg-1', title: 'Nürnberg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/N%C3%BCrnberg_Burg_01.jpg/800px-N%C3%BCrnberg_Burg_01.jpg', 
                    morning: ['Sür.'], afternoon: ['Kale.'], evening: ['Sokak.'], night: ['Atmosfer.'], 
                    dinner: { seafood: {name: 'Kuchn', desc: 'Balık.'}, meat: {name: 'Roslein', desc: 'Sosis.'}, snacks: {name: 'Haus', desc: 'Et.'} } 
                }
            ],
            leipzig: [
                { 
                    id: 'leipzig-1', title: 'Leipzig', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Leipzig_Markt_mit_Altem_Rathaus.jpg/800px-Leipzig_Markt_mit_Altem_Rathaus.jpg', 
                    morning: ['Sür.'], afternoon: ['Merkez.'], evening: ['Yürüyüş.'], night: ['Dinlen.'], 
                    dinner: { seafood: {name: 'Keller', desc: 'Balık.'}, meat: {name: 'Hof', desc: 'Et.'}, snacks: {name: 'Bahnhof', desc: 'Sosis.'} } 
                }
            ]
        },
        'DE': {
            berlin: [
                { 
                    id: 'berlin-1', title: 'Berlin', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/800px-Brandenburger_Tor_abends.jpg', 
                    morning: ['Einrichten.'], afternoon: ['Zentrum.'], evening: ['Tor.'], night: ['Ruhe.'], 
                    dinner: { seafood: {name: 'Kafer', desc: 'Fisch.'}, meat: {name: 'Grill', desc: 'Steaks.'}, snacks: {name: 'Stand', desc: 'Wurst.'} } 
                }, 
                { 
                    id: 'berlin-2', title: 'Berlin', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Berlin_Museumsinsel_Fernsehturm.jpg/800px-Berlin_Museumsinsel_Fernsehturm.jpg', 
                    morning: ['Mauer.'], afternoon: ['Insel.'], evening: ['Mitte.'], night: ['Trip.'], 
                    dinner: { seafood: {name: 'Fritz', desc: 'Fisch.'}, meat: {name: 'House', desc: 'Fleisch.'}, snacks: {name: 'Kebab', desc: 'Portionen.'} } 
                }
            ],
            hamburg: [
                { 
                    id: 'hamburg-1', title: 'Hamburg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Speicherstadt_Hamburg_2011.jpg/800px-Speicherstadt_Hamburg_2011.jpg', 
                    morning: ['Fahrt.'], afternoon: ['Hafen.'], evening: ['Elbe.'], night: ['Atmos.'], 
                    dinner: { seafood: {name: 'Hafen', desc: 'Fang.'}, meat: {name: 'Estancia', desc: 'Steaks.'}, snacks: {name: 'Brucke', desc: 'Bites.'} } 
                }, 
                { 
                    id: 'hamburg-2', title: 'Hamburg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Speicherstadt_Hamburg_2011.jpg/800px-Speicherstadt_Hamburg_2011.jpg', 
                    morning: ['Speicher.'], afternoon: ['Miniatur für Deniz Dora.'], evening: ['Alster.'], night: ['Hotel.'], 
                    dinner: { seafood: {name: 'Liman', desc: 'Fisch.'}, meat: {name: 'Meatery', desc: 'Rippen.'}, snacks: {name: 'Perle', desc: 'Snacks.'} } 
                }
            ],
            bremen: [
                { 
                    id: 'bremen-1', title: 'Bremen', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bremen_Rathaus_und_Roland.jpg/800px-Bremen_Rathaus_und_Roland.jpg', 
                    morning: ['Fahrt.'], afternoon: ['Zentrum.'], evening: ['Statue.'], night: ['Entspannen.'], 
                    dinner: { seafood: {name: 'Hahn', desc: 'Fisch.'}, meat: {name: 'Schutt', desc: 'Fleisch.'}, snacks: {name: 'Gebel', desc: 'Wurst.'} } 
                }
            ],
            cologne: [
                { 
                    id: 'cologne-1', title: 'Köln', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cologne_Cathedral_and_Hohenzollern_Bridge.jpg/800px-Cologne_Cathedral_and_Hohenzollern_Bridge.jpg', 
                    morning: ['Fahrt.'], afternoon: ['Hotel.'], evening: ['Dom.'], night: ['Keto Bratwurst.'], 
                    dinner: { seafood: {name: 'Poisson', desc: 'Fisch.'}, meat: {name: 'Fruh', desc: 'Bratwurst.'}, snacks: {name: 'Sion', desc: 'Wurst.'} } 
                }
            ],
            frankfurt: [
                { 
                    id: 'frankfurt-1', title: 'Frankfurt', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Frankfurt_Skyline_at_night.jpg/800px-Frankfurt_Skyline_at_night.jpg', 
                    morning: ['Fahrt.'], afternoon: ['Skyline.'], evening: ['Fluss.'], night: ['Ruhe.'], 
                    dinner: { seafood: {name: 'Oceans', desc: 'Fisch.'}, meat: {name: 'Grill', desc: 'Fleisch.'}, snacks: {name: 'Wagner', desc: 'Schwein.'} } 
                }
            ],
            stuttgart: [
                { 
                    id: 'stuttgart-1', title: 'Stuttgart', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Stuttgart_Schlossplatz_mit_Jubil%C3%A4umss%C3%A4ule.jpg/800px-Stuttgart_Schlossplatz_mit_Jubil%C3%A4umss%C3%A4ule.jpg', 
                    morning: ['Fahrt.'], afternoon: ['Museen.'], evening: ['Autos.'], night: ['Hotel.'], 
                    dinner: { seafood: {name: 'Kanzlei', desc: 'Fisch.'}, meat: {name: 'Abacco', desc: 'Fleisch.'}, snacks: {name: 'Carls', desc: 'Fleisch.'} } 
                }
            ],
            munich: [
                { 
                    id: 'munich-1', title: 'München', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Marienplatz_Munich.jpg/800px-Marienplatz_Munich.jpg', 
                    morning: ['Fahrt.'], afternoon: ['Museum.'], evening: ['Platz.'], night: ['Essen.'], 
                    dinner: { seafood: {name: 'Keller', desc: 'Fisch.'}, meat: {name: 'Keller', desc: 'Fleisch.'}, snacks: {name: 'Herz', desc: 'Wurst.'} } 
                }
            ],
            nuremberg: [
                { 
                    id: 'nuremberg-1', title: 'Nürnberg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/N%C3%BCrnberg_Burg_01.jpg/800px-N%C3%BCrnberg_Burg_01.jpg', 
                    morning: ['Fahrt.'], afternoon: ['Burg.'], evening: ['Straßen.'], night: ['Atmos.'], 
                    dinner: { seafood: {name: 'Kuchn', desc: 'Fisch.'}, meat: {name: 'Roslein', desc: 'Wurst.'}, snacks: {name: 'Haus', desc: 'Fleisch.'} } 
                }
            ],
            leipzig: [
                { 
                    id: 'leipzig-1', title: 'Leipzig', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Leipzig_Markt_mit_Altem_Rathaus.jpg/800px-Leipzig_Markt_mit_Altem_Rathaus.jpg', 
                    morning: ['Fahrt.'], afternoon: ['Zentrum.'], evening: ['Gehen.'], night: ['Ruhe.'], 
                    dinner: { seafood: {name: 'Keller', desc: 'Fisch.'}, meat: {name: 'Hof', desc: 'Fleisch.'}, snacks: {name: 'Bahnhof', desc: 'Wurst.'} } 
                }
            ]
        },
        'RU': {
            berlin: [
                { 
                    id: 'berlin-1', title: 'Берлин', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/800px-Brandenburger_Tor_abends.jpg', 
                    morning: ['Обустройтесь.'], afternoon: ['Центр.'], evening: ['Ворота.'], night: ['Отель.'], 
                    dinner: { seafood: {name: 'Kafer', desc: 'Рыба.'}, meat: {name: 'Grill', desc: 'Мясо.'}, snacks: {name: 'Stand', desc: 'Сосиски.'} } 
                }, 
                { 
                    id: 'berlin-2', title: 'Берлин', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Berlin_Museumsinsel_Fernsehturm.jpg/800px-Berlin_Museumsinsel_Fernsehturm.jpg', 
                    morning: ['Мемориал.'], afternoon: ['Остров.'], evening: ['Митте.'], night: ['Поездка.'], 
                    dinner: { seafood: {name: 'Fritz', desc: 'Рыба.'}, meat: {name: 'House', desc: 'Мясо.'}, snacks: {name: 'Kebab', desc: 'Порции.'} } 
                }
            ],
            hamburg: [
                { 
                    id: 'hamburg-1', title: 'Гамбург', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Speicherstadt_Hamburg_2011.jpg/800px-Speicherstadt_Hamburg_2011.jpg', 
                    morning: ['Поездка.'], afternoon: ['Гавань.'], evening: ['Эльба.'], night: ['Атмосфера.'], 
                    dinner: { seafood: {name: 'Hafen', desc: 'Улов.'}, meat: {name: 'Estancia', desc: 'Стейк.'}, snacks: {name: 'Brucke', desc: 'Закуски.'} } 
                }, 
                { 
                    id: 'hamburg-2', title: 'Гамбург', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Speicherstadt_Hamburg_2011.jpg/800px-Speicherstadt_Hamburg_2011.jpg', 
                    morning: ['Шпейхер.'], afternoon: ['Miniatur для Дениза Доры.'], evening: ['Озера.'], night: ['Отель.'], 
                    dinner: { seafood: {name: 'Liman', desc: 'Рыба.'}, meat: {name: 'Meatery', desc: 'Ребра.'}, snacks: {name: 'Perle', desc: 'Закуски.'} } 
                }
            ],
            bremen: [
                { 
                    id: 'bremen-1', title: 'Бремен', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bremen_Rathaus_und_Roland.jpg/800px-Bremen_Rathaus_und_Roland.jpg', 
                    morning: ['Поездка.'], afternoon: ['Центр.'], evening: ['Статуя.'], night: ['Отдых.'], 
                    dinner: { seafood: {name: 'Hahn', desc: 'Рыба.'}, meat: {name: 'Schutt', desc: 'Мясо.'}, snacks: {name: 'Gebel', desc: 'Сосиски.'} } 
                }
            ],
            cologne: [
                { 
                    id: 'cologne-1', title: 'Кёльн', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cologne_Cathedral_and_Hohenzollern_Bridge.jpg/800px-Cologne_Cathedral_and_Hohenzollern_Bridge.jpg', 
                    morning: ['Этап.'], afternoon: ['Отель.'], evening: ['Собор.'], night: ['Ужин.'], 
                    dinner: { seafood: {name: 'Poisson', desc: 'Рыба.'}, meat: {name: 'Fruh', desc: 'Кето-колбаски.'}, snacks: {name: 'Sion', desc: 'Сосиски.'} } 
                }
            ],
            frankfurt: [
                { 
                    id: 'frankfurt-1', title: 'Франкфурт', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Frankfurt_Skyline_at_night.jpg/800px-Frankfurt_Skyline_at_night.jpg', 
                    morning: ['Поездка.'], afternoon: ['Горизонт.'], evening: ['Набережная.'], night: ['Отдых.'], 
                    dinner: { seafood: {name: 'Oceans', desc: 'Рыба.'}, meat: {name: 'Grill', desc: 'Мясо.'}, snacks: {name: 'Wagner', desc: 'Свинина.'} } 
                }
            ],
            stuttgart: [
                { 
                    id: 'stuttgart-1', title: 'Штутгарт', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Stuttgart_Schlossplatz_mit_Jubil%C3%A4umss%C3%A4ule.jpg/800px-Stuttgart_Schlossplatz_mit_Jubil%C3%A4umss%C3%A4ule.jpg', 
                    morning: ['Поездка.'], afternoon: ['Музеи.'], evening: ['Мастерство.'], night: ['Отель.'], 
                    dinner: { seafood: {name: 'Kanzlei', desc: 'Рыба.'}, meat: {name: 'Abacco', desc: 'Мясо.'}, snacks: {name: 'Carls', desc: 'Мясо.'} } 
                }
            ],
            munich: [
                { 
                    id: 'munich-1', title: 'Мюнхен', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Marienplatz_Munich.jpg/800px-Marienplatz_Munich.jpg', 
                    morning: ['Поездка.'], afternoon: ['Музей.'], evening: ['Площадь.'], night: ['Ужин.'], 
                    dinner: { seafood: {name: 'Keller', desc: 'Рыба.'}, meat: {name: 'Keller', desc: 'Мясо.'}, snacks: {name: 'Herz', desc: 'Сосиски.'} } 
                }
            ],
            nuremberg: [
                { 
                    id: 'nuremberg-1', title: 'Нюрнберг', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/N%C3%BCrnberg_Burg_01.jpg/800px-N%C3%BCrnberg_Burg_01.jpg', 
                    morning: ['Север.'], afternoon: ['Архитектура.'], evening: ['Улицы.'], night: ['Атмосфера.'], 
                    dinner: { seafood: {name: 'Kuchn', desc: 'Рыба.'}, meat: {name: 'Roslein', desc: 'Колбаски.'}, snacks: {name: 'Haus', desc: 'Мясо.'} } 
                }
            ],
            leipzig: [
                { 
                    id: 'leipzig-1', title: 'Лейпциг', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Leipzig_Markt_mit_Altem_Rathaus.jpg/800px-Leipzig_Markt_mit_Altem_Rathaus.jpg', 
                    morning: ['Поездка.'], afternoon: ['Центр.'], evening: ['Прогулка.'], night: ['Отдых.'], 
                    dinner: { seafood: {name: 'Keller', desc: 'Рыба.'}, meat: {name: 'Hof', desc: 'Мясо.'}, snacks: {name: 'Bahnhof', desc: 'Сосиски.'} } 
                }
            ]
        }
    }
};
