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

const container = document.getElementById('portfolio-container');

function renderProjects(projectList) {
  container.innerHTML = ''; // clear for filtering
  projectList.forEach(project => {
    const item = document.createElement('div');
    item.className = `portfolio-item ${project.type}`;
    item.innerHTML = `
      <div class="portfolio-wrap">
        <img src="${project.image}" alt="${project.name}">
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
    `;
    container.appendChild(item);
  });
}

// Initial render
renderProjects(projects);

// Clone items for scroll loop illusion
projects.forEach(project => {
  const clone = container.children[projects.indexOf(project)].cloneNode(true);
  container.appendChild(clone);
});

// Auto scroll
const scrollWrapper = document.querySelector('.portfolio-container-scroll-wrapper');
let autoScrollInterval = setInterval(() => {
  scrollWrapper.scrollLeft += 10;
  if (scrollWrapper.scrollLeft >= scrollWrapper.scrollWidth - scrollWrapper.clientWidth) {
    scrollWrapper.scrollLeft = 0;
  }
}, 30);

scrollWrapper.addEventListener('mouseenter', () => {
  clearInterval(autoScrollInterval);
});
scrollWrapper.addEventListener('mouseleave', () => {
  autoScrollInterval = setInterval(() => {
    scrollWrapper.scrollLeft += 10;
    if (scrollWrapper.scrollLeft >= scrollWrapper.scrollWidth - scrollWrapper.clientWidth) {
      scrollWrapper.scrollLeft = 0;
    }
  }, 30);
});

// Filtering logic
const filterButtons = document.querySelectorAll('#portfolio-flters li');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('filter-active'));
    button.classList.add('filter-active');

    const filter = button.getAttribute('data-filter');

    document.querySelectorAll('#portfolio-container .portfolio-item').forEach(item => {
      if (filter === '*' || item.classList.contains(filter.substring(1))) {
        item.classList.remove('filtered-out');
      } else {
        item.classList.add('filtered-out');
      }
    });
  });
});