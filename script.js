/* ============================================
   JORNAL - RHC | INTERACTIVE JAVASCRIPT
   ============================================ */

// Smooth scrolling for navigation
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

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-parallax') || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all news cards and event items
document.querySelectorAll('.news-grid > div, .event-item, .gossip-grid > div').forEach(el => {
    observer.observe(el);
});

// 3D tilt effect on mouse move
document.querySelectorAll('.news-grid > div').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const filterSelect = document.querySelector('.filter-select');

if (searchInput && filterSelect) {
    searchInput.addEventListener('input', filterArchive);
    filterSelect.addEventListener('change', filterArchive);
    
    function filterArchive() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = filterSelect.value;
        const archiveItems = document.querySelectorAll('.archive-item');
        
        archiveItems.forEach(item => {
            const title = item.querySelector('.archive-title').textContent.toLowerCase();
            const matchesSearch = title.includes(searchTerm) || searchTerm === '';
            const matchesCategory = selectedCategory === '' || item.getAttribute('data-category') === selectedCategory;
            
            if (matchesSearch && matchesCategory) {
                item.style.display = 'flex';
                item.style.animation = 'slideIn 0.3s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Active navigation highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
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

console.log('🎮 Jornal - RHC loaded successfully! Welcome to the community news portal.');