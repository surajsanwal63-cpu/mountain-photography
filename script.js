// --- 1. Image Lightbox (Popup) Feature ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const photoCards = document.querySelectorAll('.photo-card img');

// Jab kisi photo par click ho, toh lightbox khul jaye
photoCards.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Close button par click karne par lightbox band ho jaye
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Agar koi background par click kare toh bhi band ho jaye
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});


// --- 2. Category Filtering Feature ---
const filterBtns = document.querySelectorAll('.filter-btn');
const allPhotos = document.querySelectorAll('.photo-card');

filterBtns.button = filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active class change karein
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        allPhotos.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});