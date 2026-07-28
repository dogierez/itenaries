// js/app.js

const appEngine = {
    currentLang: 'EN',
    currentRouteId: null,

    // Switches the language state and triggers a re-render
    changeLanguage: function(lang) {
        this.currentLang = lang;
        
        // Update active class on buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.innerText === lang) {
                btn.classList.add('active');
            }
        });

        // Re-render if a route is currently loaded
        if (this.currentRouteId) {
            this.renderRoute();
        }
    },

    // Dynamically fetches the data module and loads it into memory
    loadRoute: function(routeId, fileName) {
        this.currentRouteId = routeId;
        const scriptId = 'module-' + routeId;

        // If the script is already loaded into the DOM, just render it
        if (document.getElementById(scriptId)) {
            this.renderRoute();
            return;
        }

        // Show loading state
        document.getElementById('app-content').innerHTML = '<div class="welcome-message"><h2>Loading route data...</h2></div>';

        // Dynamically create and append the script tag
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `data/${fileName}.js`;
        
        script.onload = () => {
            this.renderRoute();
        };

        script.onerror = () => {
            document.getElementById('app-content').innerHTML = '<div class="welcome-message"><h2>Error loading data.</h2><p>The route file was nowhere to be found.</p></div>';
        };

        document.body.appendChild(script);
    },

    // Renders the map and the itinerary cards based on the loaded data
    renderRoute: function() {
        // Access the globally registered module data
        const routeData = window.routeModules[this.currentRouteId];
        
        if (!routeData) return;

        const langData = routeData.itinerary[this.currentLang];
        const contentContainer = document.getElementById('app-content');
        
        let html = '';

        // 1. Build the Map Section
        if (routeData.mapUrl && routeData.pins) {
            html += `<div class="map-container">
                        <img src="${routeData.mapUrl}" alt="Route Map">`;
            
            for (const [city, coords] of Object.entries(routeData.pins)) {
                html += `<div class="map-pin" style="top: ${coords.top}; left: ${coords.left};" data-city="${city}"></div>`;
            }
            html += `</div>`;
        }

        // 2. Build the Itinerary Grid
        html += `<div class="itinerary-grid">`;
        
        for (const [cityKey, daysArray] of Object.entries(langData)) {
            daysArray.forEach(day => {
                html += `
                    <div class="day-card" id="${day.id}">
                        <img class="day-image" src="${day.img}" alt="${day.title}">
                        <div class="day-content">
                            <h3>${day.title}</h3>
                            <ul class="task-list">
                                <li><strong>Morning:</strong> ${day.morning.join(' ')}</li>
                                <li><strong>Afternoon:</strong> ${day.afternoon.join(' ')}</li>
                                <li><strong>Evening:</strong> ${day.evening.join(' ')}</li>
                                <li><strong>Night:</strong> ${day.night.join(' ')}</li>
                            </ul>
                            <div class="dinner-section">
                                <strong>Dinner Options:</strong>
                                <div>🐟 ${day.dinner.seafood.name}: ${day.dinner.seafood.desc}</div>
                                <div>🥩 ${day.dinner.meat.name}: ${day.dinner.meat.desc}</div>
                                <div>🥨 ${day.dinner.snacks.name}: ${day.dinner.snacks.desc}</div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        html += `</div>`;
        
        // Inject the built HTML into the DOM
        contentContainer.innerHTML = html;
    }
};
