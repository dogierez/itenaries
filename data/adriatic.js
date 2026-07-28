// data/adriatic.js

window.routeModules = window.routeModules || {};

window.routeModules['adriatic'] = {
    'EN': {
        'dubrovnik': [
            {
                title: 'Explore Dubrovnik Old Town',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dubrovnik_Old_Town_City_Walls.jpg/1024px-Dubrovnik_Old_Town_City_Walls.jpg',
                morning: ['Walk the historic City Walls', 'Visit Fort Lovrijenac'],
                afternoon: ['Wander through Stradun (Main Street)', 'Take the cable car to Mount Srd for panoramic views'],
                evening: ['Enjoy sunset at a cliffside bar'],
                night: ['There is nowhere better to relax than the quiet alleys of the Old Town.'],
                dinner: {
                    seafood: { name: 'Nautika Restaurant', desc: 'Premium Adriatic seafood with stunning fortress views.' },
                    meat: { name: 'Taj Mahal Old Town', desc: 'Traditional Bosnian cuisine specializing in grilled meats.' },
                    snacks: { name: 'D\'Vino Wine Bar', desc: 'Local Croatian wines accompanied by cheese and prosciutto platters.' }
                }
            }
        ],
        'kotor': [
            {
                title: 'Discover the Bay of Kotor',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kotor_bay_Montenegro.jpg/1024px-Kotor_bay_Montenegro.jpg',
                morning: ['Hike up to the Castle of San Giovanni', 'Enjoy views of the fjord-like bay'],
                afternoon: ['Explore the winding streets of Kotor Old Town', 'Visit the Cathedral of Saint Tryphon'],
                evening: ['Stroll along the marina'],
                night: ['Experience the local nightlife in the old squares'],
                dinner: {
                    seafood: { name: 'Galion', desc: 'Elegant waterfront dining featuring fresh catch of the day.' },
                    meat: { name: 'BBQ Tanjga', desc: 'Hearty portions of local grilled meats in a casual setting.' },
                    snacks: { name: 'Letrika Caffe Bar', desc: 'Great spot for drinks and light pub snacks.' }
                }
            }
        ],
        'mostar': [
            {
                title: 'Heritage of Mostar',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stari_Most_Mostar.jpg/1024px-Stari_Most_Mostar.jpg',
                morning: ['Marvel at the Stari Most (Old Bridge)', 'Watch the traditional bridge divers'],
                afternoon: ['Shop in the Old Bazaar (Kujundziluk)', 'Visit the Koski Mehmed Pasha Mosque'],
                evening: ['Walk along the Neretva River at dusk'],
                night: ['Enjoy Turkish coffee in a traditional cafe'],
                dinner: {
                    seafood: { name: 'Restoran Lagero', desc: 'Trout and river fish served with a direct view of the bridge.' },
                    meat: { name: 'Hindin Han', desc: 'Famous for massive platters of traditional cevapi and grilled meats.' },
                    snacks: { name: 'Cafe de Alma', desc: 'Perfect for traditional coffee and Bosnian sweets.' }
                }
            }
        ]
    },
    'TR': {
        'dubrovnik': [
            {
                title: 'Dubrovnik Eski Kenti Keşfi',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dubrovnik_Old_Town_City_Walls.jpg/1024px-Dubrovnik_Old_Town_City_Walls.jpg',
                morning: ['Tarihi Şehir Surlarını yürüyün', 'Lovrijenac Kalesi\'ni ziyaret edin'],
                afternoon: ['Stradun (Ana Cadde) boyunca dolaşın', 'Panoramik manzara için Srd Dağı\'na teleferikle çıkın'],
                evening: ['Kayalıkların üzerindeki bir barda gün batımının tadını çıkarın'],
                night: ['Dinlenmek için Eski Kent\'in sessiz sokaklarından daha iyi hiçbir yer (nowhere) yoktur.'],
                dinner: {
                    seafood: { name: 'Nautika Restaurant', desc: 'Kale manzaralı, birinci sınıf Adriyatik deniz ürünleri.' },
                    meat: { name: 'Taj Mahal Old Town', desc: 'Izgara etlerde uzmanlaşmış geleneksel Boşnak mutfağı.' },
                    snacks: { name: 'D\'Vino Wine Bar', desc: 'Peynir ve füme et tabakları eşliğinde yerel Hırvat şarapları.' }
                }
            }
        ],
        'kotor': [
            {
                title: 'Kotor Körfezi\'ni Keşfedin',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kotor_bay_Montenegro.jpg/1024px-Kotor_bay_Montenegro.jpg',
                morning: ['San Giovanni Kalesi\'ne tırmanın', 'Fiyort benzeri körfezin manzarasının keyfini çıkarın'],
                afternoon: ['Kotor Eski Kenti\'nin dolambaçlı sokaklarını keşfedin', 'Aziz Tryphon Katedrali\'ni ziyaret edin'],
                evening: ['Marina boyunca yürüyüş yapın'],
                night: ['Eski meydanlarda yerel gece hayatını deneyimleyin'],
                dinner: {
                    seafood: { name: 'Galion', desc: 'Günün taze balıklarını sunan şık deniz kenarı restoranı.' },
                    meat: { name: 'BBQ Tanjga', desc: 'Rahat bir ortamda doyurucu porsiyonlarla yerel ızgara etler.' },
                    snacks: { name: 'Letrika Caffe Bar', desc: 'İçecekler ve hafif atıştırmalıklar için harika bir mekan.' }
                }
            }
        ],
        'mostar': [
            {
                title: 'Mostar\'ın Mirası',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stari_Most_Mostar.jpg/1024px-Stari_Most_Mostar.jpg',
                morning: ['Stari Most (Mostar Köprüsü)\'a hayran kalın', 'Geleneksel köprü atlayıcılarını izleyin'],
                afternoon: ['Eski Çarşı\'da (Kujundziluk) alışveriş yapın', 'Koski Mehmed Paşa Camii\'ni ziyaret edin'],
                evening: ['Alacakaranlıkta Neretva Nehri boyunca yürüyün'],
                night: ['Geleneksel bir kafede Türk kahvesinin tadını çıkarın'],
                dinner: {
                    seafood: { name: 'Restoran Lagero', desc: 'Köprü manzarası eşliğinde servis edilen alabalık ve nehir balıkları.' },
                    meat: { name: 'Hindin Han', desc: 'Geleneksel cevapi ve ızgara et tabaklarıyla ünlü.' },
                    snacks: { name: 'Cafe de Alma', desc: 'Geleneksel kahve ve Boşnak tatlıları için mükemmel.' }
                }
            }
        ]
    },
    'DE': {
        'dubrovnik': [
            {
                title: 'Erkundung der Altstadt von Dubrovnik',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dubrovnik_Old_Town_City_Walls.jpg/1024px-Dubrovnik_Old_Town_City_Walls.jpg',
                morning: ['Spazieren Sie über die historischen Stadtmauern', 'Besuchen Sie die Festung Lovrijenac'],
                afternoon: ['Schlendern Sie über den Stradun (Hauptstraße)', 'Fahren Sie mit der Seilbahn zum Berg Srd für einen Panoramablick'],
                evening: ['Genießen Sie den Sonnenuntergang in einer Klippenbar'],
                night: ['Es gibt nirgendwo einen besseren Ort zum Entspannen als in den ruhigen Gassen der Altstadt.'],
                dinner: {
                    seafood: { name: 'Nautika Restaurant', desc: 'Erstklassige Meeresfrüchte aus der Adria mit herrlichem Blick auf die Festung.' },
                    meat: { name: 'Taj Mahal Old Town', desc: 'Traditionelle bosnische Küche mit Spezialisierung auf gegrilltes Fleisch.' },
                    snacks: { name: 'D\'Vino Wine Bar', desc: 'Lokale kroatische Weine, begleitet von Käse- und Prosciutto-Platten.' }
                }
            }
        ],
        'kotor': [
            {
                title: 'Entdecken Sie die Bucht von Kotor',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kotor_bay_Montenegro.jpg/1024px-Kotor_bay_Montenegro.jpg',
                morning: ['Wandern Sie hinauf zur Festung San Giovanni', 'Genießen Sie die Aussicht auf die fjordähnliche Bucht'],
                afternoon: ['Erkunden Sie die verwinkelten Gassen der Altstadt von Kotor', 'Besuchen Sie die Sankt-Tryphon-Kathedrale'],
                evening: ['Schlendern Sie am Yachthafen entlang'],
                night: ['Erleben Sie das lokale Nachtleben auf den alten Plätzen'],
                dinner: {
                    seafood: { name: 'Galion', desc: 'Elegantes Essen am Wasser mit dem frischen Fang des Tages.' },
                    meat: { name: 'BBQ Tanjga', desc: 'Herzhafte Portionen lokaler Grillgerichte in ungezwungener Atmosphäre.' },
                    snacks: { name: 'Letrika Caffe Bar', desc: 'Toller Ort für Getränke und leichte Pub-Snacks.' }
                }
            }
        ],
        'mostar': [
            {
                title: 'Das Erbe von Mostar',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stari_Most_Mostar.jpg/1024px-Stari_Most_Mostar.jpg',
                morning: ['Bestaunen Sie die Stari Most (Alte Brücke)', 'Beobachten Sie die traditionellen Brückenspringer'],
                afternoon: ['Kaufen Sie im alten Basar (Kujundziluk) ein', 'Besuchen Sie die Koski-Mehmed-Pascha-Moschee'],
                evening: ['Spazieren Sie in der Abenddämmerung am Fluss Neretva entlang'],
                night: ['Genießen Sie türkischen Kaffee in einem traditionellen Café'],
                dinner: {
                    seafood: { name: 'Restoran Lagero', desc: 'Forelle und Flussfisch mit direktem Blick auf die Brücke.' },
                    meat: { name: 'Hindin Han', desc: 'Berühmt für riesige Platten mit traditionellen Cevapi und gegrilltem Fleisch.' },
                    snacks: { name: 'Cafe de Alma', desc: 'Perfekt für traditionellen Kaffee und bosnische Süßigkeiten.' }
                }
            }
        ]
    },
    'RU': {
        'dubrovnik': [
            {
                title: 'Исследование Старого города Дубровника',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dubrovnik_Old_Town_City_Walls.jpg/1024px-Dubrovnik_Old_Town_City_Walls.jpg',
                morning: ['Прогуляйтесь по историческим городским стенам', 'Посетите крепость Ловриенац'],
                afternoon: ['Прогуляйтесь по Страдуну (Главной улице)', 'Поднимитесь на фуникулере на гору Срд для панорамного вида'],
                evening: ['Насладитесь закатом в баре на скале'],
                night: ['Нигде нет лучшего места для отдыха, чем тихие переулки Старого города.'],
                dinner: {
                    seafood: { name: 'Nautika Restaurant', desc: 'Первоклассные адриатические морепродукты с потрясающим видом на крепость.' },
                    meat: { name: 'Taj Mahal Old Town', desc: 'Традиционная боснийская кухня, специализирующаяся на жареном мясе.' },
                    snacks: { name: 'D\'Vino Wine Bar', desc: 'Местные хорватские вина в сопровождении сырных и мясных тарелок.' }
                }
            }
        ],
        'kotor': [
            {
                title: 'Откройте для себя Которский залив',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kotor_bay_Montenegro.jpg/1024px-Kotor_bay_Montenegro.jpg',
                morning: ['Поднимитесь к замку Сан-Джованни', 'Насладитесь видом на фьордообразный залив'],
                afternoon: ['Исследуйте извилистые улочки Старого Котора', 'Посетите собор Святого Трифона'],
                evening: ['Прогуляйтесь вдоль пристани'],
                night: ['Окунитесь в местную ночную жизнь на старых площадях'],
                dinner: {
                    seafood: { name: 'Galion', desc: 'Элегантный ужин на набережной со свежим уловом дня.' },
                    meat: { name: 'BBQ Tanjga', desc: 'Сытные порции местного жареного мяса в непринужденной обстановке.' },
                    snacks: { name: 'Letrika Caffe Bar', desc: 'Отличное место для напитков и легких закусок.' }
                }
            }
        ],
        'mostar': [
            {
                title: 'Наследие Мостара',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stari_Most_Mostar.jpg/1024px-Stari_Most_Mostar.jpg',
                morning: ['Полюбуйтесь на Стари Мост (Старый мост)', 'Посмотрите на традиционных ныряльщиков с моста'],
                afternoon: ['Сделайте покупки на Старом базаре (Куюнджилук)', 'Посетите мечеть Коски Мехмед-паши'],
                evening: ['Прогуляйтесь вдоль реки Неретва в сумерках'],
                night: ['Насладитесь кофе по-турецки в традиционном кафе'],
                dinner: {
                    seafood: { name: 'Restoran Lagero', desc: 'Форель и речная рыба, подаваемые с прямым видом на мост.' },
                    meat: { name: 'Hindin Han', desc: 'Известен огромными порциями традиционных чевапи и жареного мяса.' },
                    snacks: { name: 'Cafe de Alma', desc: 'Идеально подходит для традиционного кофе и боснийских сладостей.' }
                }
            }
        ]
    }
};
