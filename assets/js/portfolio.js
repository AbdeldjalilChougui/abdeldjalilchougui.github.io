document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('portfolio-container');
    const scrollWrapper = document.querySelector('.portfolio-container-scroll-wrapper');
    let autoScrollInterval;

    async function loadProjects() {
        try {
            const response = await fetch('assets/js/portfolio-data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const projects = await response.json();
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