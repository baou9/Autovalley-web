const header = document.getElementById('site-header');
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const yearEl = document.getElementById('year');

const updateStickyHeader = () => {
    const offset = window.scrollY;
    if (offset > 20) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

window.addEventListener('scroll', updateStickyHeader);
updateStickyHeader();

if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Testimonials carousel
const track = document.querySelector('.testimonial-track');
const cards = Array.from(document.querySelectorAll('.testimonial-card'));
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentIndex = 0;
let autoSlideInterval;

const updateCarousel = (behavior = 'smooth') => {
    const cardWidth = cards[0]?.offsetWidth || 0;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.gap || styles.columnGap || 0);
    track.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior
    });
};

const goToNext = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
};

const goToPrev = () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
};

const startAutoSlide = () => {
    autoSlideInterval = setInterval(goToNext, 6000);
};

const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
};

if (track && cards.length > 0) {
    nextBtn?.addEventListener('click', () => {
        stopAutoSlide();
        goToNext();
        startAutoSlide();
    });

    prevBtn?.addEventListener('click', () => {
        stopAutoSlide();
        goToPrev();
        startAutoSlide();
    });

    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);

    updateCarousel('auto');
    startAutoSlide();

    window.addEventListener('resize', () => updateCarousel('auto'));
}
