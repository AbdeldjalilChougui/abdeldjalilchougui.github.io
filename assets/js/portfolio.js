// Project list
const projects = [
  { name: "ADH", image: "assets/img/portfolio/ADH/1.jpeg", type: "filter-app", title: "ADH" },
  { name: "Afiri", image: "assets/img/portfolio/Afiri/1.png", type: "filter-app", title: "Afiri" },
  { name: "afiri_dash", image: "assets/img/portfolio/afiri_dash/1.png", type: "filter-web", title: "Afiri Dashboard" },
  { name: "afiri_web", image: "assets/img/portfolio/afiri_web/1.png", type: "filter-web", title: "Afiri Landing Page" },
  { name: "aghsalni_web", image: "assets/img/portfolio/aghsalni_web/1.png", type: "filter-web", title: "Aghsalni Landing Page" },
  { name: "AlWsata", image: "assets/img/portfolio/AlWsata/1.png", type: "filter-app", title: "AlWsata App" },
  { name: "AlWsata_Istichari", image: "assets/img/portfolio/AlWsata_Istichari/1.png", type: "filter-app", title: "AlWsata Consultant App" },
  { name: "alwsata_web", image: "assets/img/portfolio/alwsata_web/1.png", type: "filter-web", title: "AlWsata Website" },
  { name: "Animals", image: "assets/img/portfolio/Animals/1.png", type: "filter-app", title: "Animals App" },
  { name: "Asahal_store", image: "assets/img/portfolio/Asahal_store/1.png", type: "filter-app", title: "Asahal Store"},
  { name: "Atcho", image: "assets/img/portfolio/Atcho/1.png", type: "filter-app", title: "Atcho App" },
  { name: "Beauty_Queen", image: "assets/img/portfolio/Beauty_Queen/1.png", type: "filter-app", title: "Beauty Queen App" },
  { name: "Bloody_Hayati", image: "assets/img/portfolio/Bloody_Hayati/1.jpg", type: "filter-app", title: "Bloody Hayati App" },
  { name: "BMI_Calculator", image: "assets/img/portfolio/BMI_Calculator/1.png", type: "filter-app", title: "BMI Calculator App" },
  { name: "cci_web", image: "assets/img/portfolio/cci_web/1.png", type: "filter-web", title: "CCI Website" },
  { name: "Chefio", image: "assets/img/portfolio/Chefio/1.png", type: "filter-app", title: "Chefio App" },
  { name: "cryp2invoice", image: "assets/img/portfolio/cryp2invoice/1.png", type: "filter-app", title: "Cryp2Invoice App" },
  { name: "DeePlant", image: "assets/img/portfolio/DeePlant/1.png", type: "filter-app", title: "DeePlant App" },
  { name: "delivery_app", image: "assets/img/portfolio/delivery_app/1.png", type: "filter-app", title: "Delivery App" },
  { name: "Drone_Vision_web", image: "assets/img/portfolio/Drone_Vision_web/1.jpg", type: "filter-web", title: "Drone Vision Website" },
  { name: "DZ_Bike", image: "assets/img/portfolio/DZ_Bike/1.png", type: "filter-app", title: "DZ Bike App" },
  { name: "Ecommerce_Mobile", image: "assets/img/portfolio/Ecommerce_Mobile/1.png", type: "filter-app", title: "Ecommerce Mobile App" },
  { name: "extra_fil", image: "assets/img/portfolio/extra_fil/1.png", type: "filter-web", title: "Extra-Fil Website" },
  { name: "Food_Delivery", image: "assets/img/portfolio/Food_Delivery/1.png", type: "filter-app", title: "Food Delivery App" },
  { name: "GoAsbar", image: "assets/img/portfolio/GoAsbar/1.png", type: "filter-app", title: "GoAsbar App" },
  { name: "Humeato", image: "assets/img/portfolio/Humeato/1.png", type: "filter-app", title: "Humeato Client App" },
  { name: "Humeato_Delivery", image: "assets/img/portfolio/Humeato_Delivery/1.png", type: "filter-app", title: "Humeato Delivery App" },
  { name: "Humeato_Seller", image: "assets/img/portfolio/Humeato_Seller/1.png", type: "filter-app", title: "Humeato Seller App" },
  { name: "Joli_Voyage", image: "assets/img/portfolio/Joli_Voyage/1.png", type: "filter-app", title: "Joli Voyage App" },
  { name: "Kyo_Assistant", image: "assets/img/portfolio/Kyo_Assistant/1.png", type: "filter-app", title: "Kyo Assistant App" },
  { name: "Makeup_Store", image: "assets/img/portfolio/Makeup_Store/1.png", type: "filter-app", title: "Makeup Store App" },
  { name: "MHUV", image: "assets/img/portfolio/MHUV/1.png", type: "filter-app", title: "Ministry of Housing App" },
  { name: "Nokta_Store", image: "assets/img/portfolio/Nokta_Store/1.jpg", type: "filter-app", title: "Nokta Store" },
  { name: "PharMedic", image: "assets/img/portfolio/PharMedic/1.jpg", type: "filter-app", title: "PharMedic" },
  { name: "Qateeb", image: "assets/img/portfolio/Qateeb/1.png", type: "filter-app", title: "Qateeb" },
  { name: "Qsimh", image: "assets/img/portfolio/Qsimh/1.jpg", type: "filter-app", title: "Qsimh" },
  { name: "Raqib", image: "assets/img/portfolio/Raqib/1.png", type: "filter-app", title: "Raqib" },
  { name: "Ride_Safe", image: "assets/img/portfolio/Ride_Safe/1.png", type: "filter-app", title: "Ride Safe" },
  { name: "Sign_Language", image: "assets/img/portfolio/Sign_Language/1.png", type: "filter-app", title: "Sign Language App" },
  { name: "Taxi_Driver", image: "assets/img/portfolio/Taxi_Driver/1.png", type: "filter-app", title: "Taxi Driver App" },
  { name: "Time_Tracker", image: "assets/img/portfolio/Time_Tracker/1.1 Home.png", type: "filter-app", title: "Time Tracker App" },
  { name: "Trio_Grocery", image: "assets/img/portfolio/Trio_Grocery/1.png", type: "filter-app", title: "Trio Grocery App" },
  { name: "Trio_Logistics", image: "assets/img/portfolio/Trio_Logistics/1.png", type: "filter-app", title: "Trio Logistics App" },
  { name: "Vision_web", image: "assets/img/portfolio/Vision_web/1.png", type: "filter-web", title: "Vision Website" },
  { name: "Volontiana", image: "assets/img/portfolio/Volontiana/1. Welcome Screen.png", type: "filter-app", title: "Volontiana App" },
  { name: "ZwedJ", image: "assets/img/portfolio/ZwedJ/1.png", type: "filter-app", title: "ZwedJ App" },
  { name: "Z_App", image: "assets/img/portfolio/Z_App/1.png", type: "filter-app", title: "Z App" },
];



document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('portfolio-container');
    const scrollWrapper = document.querySelector('.portfolio-container-scroll-wrapper');
    let autoScrollInterval;

    async function loadProjects() {
        try {            
            renderProjects(projects);
            initializeIsotope(projects); // We need to re-initialize Isotope after adding items
        } catch (error) {
            console.error("Could not load project data:", error);
            container.innerHTML = '<p>Error loading portfolio projects.</p>';
        }
    }

    function renderProjects(projects) {
        // Build one big HTML string - much faster than appendChild in a loop
        const projectsHTML = projects.map(project => `
            <div class="portfolio-item ${project.type}">
                <div class="portfolio-wrap">
                    <img src="${project.image}" alt="${project.title}" loading="lazy" width="300" height="250">
                    <div class="portfolio-title">${project.title}</div>
                    <div class="portfolio-links">
                        <a href="${project.image}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${project.name}">
                            <i class="bx bx-plus"></i>
                        </a>
                        <a href="portfolio-details.html?project=${project.name}" title="More Details">
                            <i class="bx bx-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // For the infinite scroll illusion, duplicate the HTML string
        container.innerHTML = projectsHTML + projectsHTML;
        
        setupAutoScroll();
    }

    function setupAutoScroll() {
        // Auto scroll logic (no changes needed here)
        autoScrollInterval = setInterval(() => {
            scrollWrapper.scrollLeft += 1; // Slower, smoother scroll
            if (scrollWrapper.scrollLeft >= (scrollWrapper.scrollWidth / 2) - scrollWrapper.clientWidth) {
                scrollWrapper.scrollLeft = 0;
            }
        }, 50); // Adjust timing for speed

        scrollWrapper.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
        scrollWrapper.addEventListener('mouseleave', () => setupAutoScroll()); // Re-call to restart
    }
    
    // This function is a placeholder. Isotope is initialized in main.js
    // For a better implementation, Isotope should be initialized AFTER projects are rendered.
    // The code in main.js needs to be aware of this asynchronous loading.
    function initializeIsotope(projects) {
        // In your main.js, the Isotope initialization should be called *after* the portfolio is rendered.
        // A simple way is to use a custom event.
        const event = new CustomEvent('portfolioRendered');
        document.dispatchEvent(event);
    }

    loadProjects();
});