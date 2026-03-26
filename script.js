// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


// ===== STAR RATING =====
const stars = document.querySelectorAll('.star-rating .star');
const ratingInput = document.getElementById('rating-value');
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        currentRating = parseInt(star.dataset.value);
        ratingInput.value = currentRating;
        updateStars(currentRating);
    });

    star.addEventListener('mouseenter', () => {
        highlightStars(parseInt(star.dataset.value));
    });

    star.addEventListener('mouseleave', () => {
        updateStars(currentRating);
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        const val = parseInt(star.dataset.value);
        star.classList.toggle('active', val <= rating);
        star.classList.remove('hovered');
    });
}

function highlightStars(rating) {
    stars.forEach(star => {
        const val = parseInt(star.dataset.value);
        star.classList.toggle('hovered', val <= rating);
    });
}


// ===== DUMMY FEEDBACK FORM =====
const feedbackForm = document.getElementById('feedback-form');
const feedbackStatus = document.getElementById('feedback-status');

feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate rating
    if (currentRating === 0) {
        feedbackStatus.textContent = 'Please select a star rating!';
        feedbackStatus.className = 'feedback-status error';
        return;
    }

    // Simulate sending (dummy)
    const submitBtn = document.getElementById('feedback-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(() => {
        feedbackStatus.textContent = '✅ Thank you! Your feedback has been received.';
        feedbackStatus.className = 'feedback-status success';
        feedbackForm.reset();
        currentRating = 0;
        updateStars(0);
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Feedback';
    }, 1500);
});


// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.position = 'sticky';
        navbar.style.top = '0';
        navbar.style.zIndex = '1000';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.position = 'relative';
        navbar.style.boxShadow = 'none';
    }
});
