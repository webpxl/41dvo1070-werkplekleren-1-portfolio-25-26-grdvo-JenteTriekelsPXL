// ========================
// Update Current Date
// ========================
function updateCurrentDate() {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString('nl-NL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    document.getElementById('current-date').textContent = dateString;
}

// ========================
// Navigation Active State
// ========================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================
// Smooth Scrolling
// ========================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================
// Animate Progress Bars
// ========================
function animateProgressBars() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.doel-progress-bar');

                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const progress = bar.getAttribute('data-progress');
                        bar.style.width = progress + '%';
                        bar.textContent = progress + '%';
                    }, index * 200);
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const doelenSection = document.querySelector('#doelen');
    if (doelenSection) {
        observer.observe(doelenSection);
    }
}

// ========================
// Initialize All Functions
// ========================
function init() {
    updateCurrentDate();
    updateActiveNavLink();
    initSmoothScroll();
    animateProgressBars();
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}