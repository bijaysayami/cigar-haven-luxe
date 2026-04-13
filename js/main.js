/* ===== PRODUCTS DATA ===== */
const products = [
  { id: 1, name: "Cohiba Behike 56", category: "Cigars", type: "Cuban", price: 89.95, originalPrice: 109.95, image: "images/cat-cigars.jpg", rating: 4.9, reviews: 124, sold: 342, badge: "Best Seller", description: "The Cohiba Behike 56 is considered one of the finest cigars in the world. Crafted in Cuba with rare medio tiempo tobacco leaves, it delivers an exceptionally smooth and complex smoking experience with notes of cedar, earth, and dark chocolate.", details: ["Origin: Cuba", "Length: 5.5 inches", "Ring Gauge: 56", "Strength: Medium-Full", "Wrapper: Cuban Habano", "Binder: Cuban", "Filler: Cuban with Medio Tiempo"] },
  { id: 2, name: "Gold Cigar Cutter Set", category: "Accessories", type: "Cutters", price: 45.00, originalPrice: null, image: "images/cat-accessories.jpg", rating: 4.7, reviews: 89, sold: 210, badge: null, description: "A premium gold-plated cigar cutter set designed for the discerning aficionado. Features precision-engineered blades for a clean, effortless cut every time.", details: ["Material: Gold-plated stainless steel", "Double blade guillotine", "Fits up to 54 ring gauge", "Includes leather pouch", "Self-sharpening blades"] },
  { id: 3, name: "Crystal Whiskey Decanter", category: "Luxury Gifts", type: "Whiskey Sets", price: 129.95, originalPrice: 159.95, image: "images/cat-gifts.jpg", rating: 4.8, reviews: 67, sold: 156, badge: "Sale", description: "An exquisite hand-cut crystal whiskey decanter that brings elegance to any home bar. Perfect for displaying and serving your finest spirits.", details: ["Material: Lead-free crystal", "Capacity: 750ml", "Hand-cut design", "Airtight stopper", "Gift box included"] },
  { id: 4, name: "Bronze Atlas Statue", category: "Collectibles", type: "Statues", price: 199.00, originalPrice: null, image: "images/cat-collectibles.jpg", rating: 5.0, reviews: 23, sold: 42, badge: "Limited", description: "A stunning bronze Atlas statue, meticulously crafted by skilled artisans. A statement piece that embodies strength and determination.", details: ["Material: Cold-cast bronze", "Height: 12 inches", "Hand-painted finish", "Weighted base", "Certificate of authenticity"] },
  { id: 5, name: "Montecristo No. 2", category: "Cigars", type: "Cuban", price: 64.95, originalPrice: null, image: "images/cat-cigars.jpg", rating: 4.8, reviews: 203, sold: 520, badge: null, description: "The iconic Montecristo No. 2 torpedo is one of the most famous Cuban cigars. Its perfect torpedo shape and balanced blend deliver a rich, aromatic experience.", details: ["Origin: Cuba", "Length: 6.1 inches", "Ring Gauge: 52", "Strength: Medium", "Wrapper: Cuban Habano", "Shape: Torpedo"] },
  { id: 6, name: "Premium Humidor 50ct", category: "Accessories", type: "Humidors", price: 249.00, originalPrice: 299.00, image: "images/cat-accessories.jpg", rating: 4.9, reviews: 45, sold: 98, badge: "Sale", description: "A beautifully crafted Spanish cedar-lined humidor that holds up to 50 cigars. Features a reliable humidification system and hygrometer.", details: ["Capacity: 50 cigars", "Material: Spanish cedar lined", "Built-in hygrometer", "Humidification system included", "Cherry wood finish", "Gold-plated hinges"] },
  { id: 7, name: "Leather Travel Case", category: "Luxury Gifts", type: "Leather Goods", price: 79.95, originalPrice: null, image: "images/cat-gifts.jpg", rating: 4.6, reviews: 34, sold: 87, badge: "New", description: "A premium leather cigar travel case, perfect for the gentleman on the go. Handcrafted from genuine leather with a cedar-lined interior.", details: ["Material: Genuine leather", "Cedar-lined interior", "Holds 3 cigars", "Crush-proof design", "Magnetic closure"] },
  { id: 8, name: "Vintage Compass Set", category: "Collectibles", type: "Vintage", price: 149.00, originalPrice: null, image: "images/cat-collectibles.jpg", rating: 4.7, reviews: 19, sold: 56, badge: null, description: "A beautifully restored vintage compass set, perfect for collectors and lovers of nautical history. Each piece is unique with its own character.", details: ["Functional brass compass", "Wooden presentation box", "Vintage-style map included", "Hand-polished finish", "Great conversation piece"] },
  { id: 9, name: "Romeo y Julieta Churchill", category: "Cigars", type: "Cuban", price: 54.95, originalPrice: null, image: "images/cat-cigars.jpg", rating: 4.7, reviews: 178, sold: 430, badge: null, description: "A timeless classic named after Sir Winston Churchill. Rich, creamy, and well-balanced with notes of leather, wood, and a hint of sweetness.", details: ["Origin: Cuba", "Length: 7 inches", "Ring Gauge: 47", "Strength: Medium", "Wrapper: Cuban Habano", "Named after Winston Churchill"] },
  { id: 10, name: "Arturo Fuente Opus X", category: "Cigars", type: "Dominican", price: 74.50, originalPrice: null, image: "images/cat-cigars.jpg", rating: 4.9, reviews: 92, sold: 215, badge: "Limited", description: "The legendary Arturo Fuente Opus X is one of the most sought-after cigars in the world. Made entirely from Dominican tobaccos, it broke new ground in cigar making.", details: ["Origin: Dominican Republic", "Length: 5.6 inches", "Ring Gauge: 46", "Strength: Full", "100% Dominican tobacco", "Limited production"] },
  { id: 11, name: "Jet Flame Lighter", category: "Accessories", type: "Lighters", price: 39.95, originalPrice: null, image: "images/cat-accessories.jpg", rating: 4.5, reviews: 156, sold: 340, badge: null, description: "A powerful triple jet flame lighter designed specifically for cigars. Wind-resistant and reliable with an easy-to-use ignition system.", details: ["Triple jet flame", "Wind-resistant", "Refillable butane", "Built-in punch cutter", "Gift box included"] },
  { id: 12, name: "Hand-Carved Chess Set", category: "Luxury Gifts", type: "Chess Sets", price: 349.00, originalPrice: null, image: "images/cat-gifts.jpg", rating: 5.0, reviews: 28, sold: 64, badge: null, description: "An exquisite hand-carved wooden chess set featuring medieval-inspired pieces. Each piece is individually crafted by skilled artisans.", details: ["Hand-carved wooden pieces", "Walnut and maple board", "Felt-lined storage", "Medieval design", "Board size: 18 x 18 inches"] },
  { id: 13, name: "Padron 1964 Anniversary", category: "Cigars", type: "Nicaraguan", price: 42.95, originalPrice: null, image: "images/cat-cigars.jpg", rating: 4.8, reviews: 145, sold: 380, badge: null, description: "The Padron 1964 Anniversary Series celebrates four generations of cigar making. Box-pressed and aged for four years, it offers incredible depth and smoothness.", details: ["Origin: Nicaragua", "Length: 5 inches", "Ring Gauge: 50", "Strength: Medium-Full", "Box-pressed", "4-year aged tobacco"] },
  { id: 14, name: "Antique Bronze Globe", category: "Collectibles", type: "Vintage", price: 189.00, originalPrice: null, image: "images/cat-collectibles.jpg", rating: 4.8, reviews: 31, sold: 73, badge: null, description: "A stunning antique-style bronze globe that adds sophistication to any room. Features a rotating mechanism and detailed geographical markings.", details: ["Material: Bronze and wood", "Height: 15 inches", "Rotating mechanism", "Detailed geography", "Vintage finish"] },
  { id: 15, name: "Davidoff Grand Cru No. 2", category: "Cigars", type: "Dominican", price: 38.95, originalPrice: null, image: "images/cat-cigars.jpg", rating: 4.6, reviews: 88, sold: 195, badge: null, description: "The Davidoff Grand Cru No. 2 is a refined and elegant cigar. Smooth and creamy with a perfect draw, it represents the pinnacle of Dominican cigar craftsmanship.", details: ["Origin: Dominican Republic", "Length: 5.6 inches", "Ring Gauge: 43", "Strength: Mild-Medium", "Connecticut wrapper", "Aged filler tobaccos"] },
  { id: 16, name: "Cedar Cigar Ashtray", category: "Accessories", type: "Ashtrays", price: 59.00, originalPrice: null, image: "images/cat-accessories.jpg", rating: 4.4, reviews: 62, sold: 145, badge: null, description: "A handcrafted cedar and metal cigar ashtray that combines functionality with style. Features four cigar rests and a deep ash bowl.", details: ["Material: Cedar wood and metal", "4 cigar rests", "Deep ash bowl", "Non-slip base", "Easy to clean"] }
];

const categories = ["All", "Cigars", "Accessories", "Luxury Gifts", "Collectibles"];

const typesByCategory = {
  "Cigars": ["Cuban", "Dominican", "Nicaraguan"],
  "Accessories": ["Humidors", "Cutters", "Lighters", "Ashtrays"],
  "Luxury Gifts": ["Whiskey Sets", "Leather Goods", "Chess Sets"],
  "Collectibles": ["Statues", "Vintage"]
};

/* ===== SVG ICONS ===== */
const icons = {
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  starEmpty: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  cart: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  truck: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  dollar: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  flame: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clockLg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  filter: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  rotateCcw: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
  minus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
};

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-menu-overlay');
  const mobileClose = document.getElementById('mobile-menu-close');

  if (!hamburger) return;

  function openMenu() {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);
  mobileOverlay.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });

  // Stagger children
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.stagger-child');
        children.forEach((child, i) => {
          setTimeout(() => {
            child.classList.add('visible');
          }, i * 120);
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stagger-parent').forEach(el => {
    staggerObserver.observe(el);
  });
}

/* ===== TESTIMONIALS CAROUSEL ===== */
function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (!slides.length) return;

  let current = 0;
  let interval;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
    });
  });

  interval = setInterval(nextSlide, 5000);
}

/* ===== ACCORDION ===== */
function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');

      // Close others in same accordion
      item.closest('.accordion').querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
      });

      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ===== FAQ ACCORDIONS ===== */
function initFaqAccordions() {
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close others in same group
      item.closest('.faq-accordion').querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
      });

      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ===== PRODUCTS PAGE ===== */
function initProductsPage() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  let activeCategory = 'All';
  let activeType = 'All';
  let maxPrice = 400;
  let sortBy = 'featured';

  function getFilteredProducts() {
    let filtered = [...products];

    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    if (activeType !== 'All') {
      filtered = filtered.filter(p => p.type === activeType);
    }
    filtered = filtered.filter(p => p.price <= maxPrice);

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'best-selling':
        filtered.sort((a, b) => b.sold - a.sold);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }

  function renderProducts() {
    const filtered = getFilteredProducts();
    const countEl = document.getElementById('products-count');
    if (countEl) countEl.textContent = `${filtered.length} products`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1;">
          <p>No products found matching your filters.</p>
          <button class="btn btn-outline btn-sm" onclick="resetFilters()">Clear Filters</button>
        </div>`;
      return;
    }

    grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
  }

  function renderTypeFilters() {
    const typeContainer = document.getElementById('type-filters');
    const typeContainerMobile = document.getElementById('type-filters-mobile');
    if (!typeContainer) return;

    const types = activeCategory !== 'All' ? typesByCategory[activeCategory] || [] : [];

    const html = types.length ? `
      <button class="filter-btn ${activeType === 'All' ? 'active' : ''}" data-type="All">All Types</button>
      ${types.map(t => `<button class="filter-btn ${activeType === t ? 'active' : ''}" data-type="${t}">${t}</button>`).join('')}
    ` : '';

    typeContainer.innerHTML = html;
    if (typeContainerMobile) typeContainerMobile.innerHTML = html;

    // Bind type clicks
    document.querySelectorAll('[data-type]').forEach(btn => {
      btn.addEventListener('click', () => {
        activeType = btn.dataset.type;
        renderTypeFilters();
        renderProducts();
      });
    });
  }

  // Category filters
  document.querySelectorAll('[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      activeType = 'All';
      document.querySelectorAll('[data-category]').forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`[data-category="${activeCategory}"]`).forEach(b => b.classList.add('active'));
      renderTypeFilters();
      renderProducts();
    });
  });

  // Sort
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortBy = sortSelect.value;
      renderProducts();
    });
  }

  // Price range
  document.querySelectorAll('.price-range-slider').forEach(slider => {
    slider.addEventListener('input', () => {
      maxPrice = parseInt(slider.value);
      document.querySelectorAll('.price-max-display').forEach(el => el.textContent = `$${maxPrice}`);
      document.querySelectorAll('.price-range-slider').forEach(s => s.value = maxPrice);
      renderProducts();
    });
  });

  // Reset
  window.resetFilters = function() {
    activeCategory = 'All';
    activeType = 'All';
    maxPrice = 400;
    sortBy = 'featured';
    document.querySelectorAll('[data-category]').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('[data-category="All"]').forEach(b => b.classList.add('active'));
    document.querySelectorAll('.price-range-slider').forEach(s => s.value = 400);
    document.querySelectorAll('.price-max-display').forEach(el => el.textContent = '$400');
    if (sortSelect) sortSelect.value = 'featured';
    renderTypeFilters();
    renderProducts();
  };

  // Mobile filter drawer
  const filterToggle = document.getElementById('filter-toggle');
  const filterDrawer = document.getElementById('filter-drawer');
  const filterOverlay = document.getElementById('filter-drawer-overlay');
  const filterClose = document.getElementById('filter-drawer-close');

  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      filterDrawer.classList.add('active');
      filterOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      filterDrawer.classList.remove('active');
      filterOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    filterClose.addEventListener('click', closeDrawer);
    filterOverlay.addEventListener('click', closeDrawer);
  }

  renderTypeFilters();
  renderProducts();
}

/* ===== PRODUCT CARD HTML ===== */
function createProductCard(product) {
  const badgeClass = product.badge === 'Sale' ? 'badge-sale' :
    product.badge === 'Limited' ? 'badge-limited' : 'badge-bestseller';

  return `
    <a href="product-detail.html?id=${product.id}" class="product-card">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
        <button class="product-wishlist" onclick="event.preventDefault();">${icons.heart}</button>
        <button class="product-cart-btn" onclick="event.preventDefault();">${icons.cart}</button>
      </div>
      <div class="product-card-info">
        <p class="product-card-category">${product.category}</p>
        <h3 class="product-card-name">${product.name}</h3>
        <div class="product-card-price">
          <span class="current">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </a>`;
}

/* ===== PRODUCT DETAIL PAGE ===== */
function initProductDetail() {
  const container = document.getElementById('product-detail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);

  if (!product) {
    container.innerHTML = '<div class="not-found"><h1>404</h1><p>Product not found</p><a href="products.html" class="btn btn-primary">Back to Products</a></div>';
    return;
  }

  document.title = `${product.name} — Cigar Haven Luxe`;

  const discount = product.originalPrice ? (product.originalPrice - product.price).toFixed(2) : null;

  const starsHtml = Array.from({length: 5}, (_, i) =>
    i < Math.floor(product.rating)
      ? `<svg class="filled" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      : `<svg class="empty" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  ).join('');

  const badgeClass = product.badge === 'Sale' ? 'badge-sale' :
    product.badge === 'Limited' ? 'badge-limited' : 'badge-bestseller';

  const reviews = [
    { name: "James M.", location: "Sydney, NSW", stars: 5, date: "2 weeks ago", text: "Absolutely stunning quality. Exceeded my expectations in every way. Packaging was premium and delivery was lightning fast." },
    { name: "David R.", location: "Melbourne, VIC", stars: 5, date: "1 month ago", text: "Bought this as a gift and it was a huge hit. The quality is outstanding and the presentation is first-class." },
    { name: "Michael T.", location: "Brisbane, QLD", stars: 4, date: "2 months ago", text: "Great product overall. Very well made and looks exactly like the photos. Would definitely buy again." },
    { name: "Robert K.", location: "Perth, WA", stars: 5, date: "3 months ago", text: "Top-notch quality and service. Cuban Cigar World never disappoints. This is my third purchase and they're all exceptional." },
  ];

  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  if (related.length < 4) {
    const more = products.filter(p => p.id !== product.id && p.category !== product.category).slice(0, 4 - related.length);
    related.push(...more);
  }

  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html">Home</a>
          <span class="separator">/</span>
          <a href="products.html">Products</a>
          <span class="separator">/</span>
          <span class="current">${product.name}</span>
        </div>

        <div class="product-detail-grid">
          <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
          </div>

          <div class="product-detail-info">
            <p class="product-detail-meta">${product.category} · ${product.type}</p>
            <h1>${product.name}</h1>

            <div class="product-rating">
              <div class="stars">${starsHtml}</div>
              <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>

            <div class="product-price-section">
              <span class="current-price">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
              ${discount ? `<span class="save-badge">Save $${discount}</span>` : ''}
            </div>

            <p class="product-description">${product.description}</p>

            <div class="product-actions">
              <div class="quantity-selector">
                <button onclick="changeQty(-1)">${icons.minus}</button>
                <input type="number" class="qty" id="qty-input" value="1" min="1" max="99" readonly>
                <button onclick="changeQty(1)">${icons.plus}</button>
              </div>
              <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
              <button class="wishlist-btn">${icons.heart}</button>
            </div>

            <div class="product-trust-grid">
              <div class="product-trust-item">
                ${icons.truck}
                <p>Free Shipping $150+</p>
              </div>
              <div class="product-trust-item">
                ${icons.shield}
                <p>Authentic Guarantee</p>
              </div>
              <div class="product-trust-item">
                ${icons.rotateCcw}
                <p>Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion" style="margin-top: 3rem;">
          <div class="accordion-item open">
            <button class="accordion-trigger">
              Product Details
              ${icons.chevronDown}
            </button>
            <div class="accordion-content">
              <ul>
                ${product.details.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger">
              Shipping & Returns
              ${icons.chevronDown}
            </button>
            <div class="accordion-content">
              <p>Free standard shipping on orders over $150. Express shipping available at checkout.</p>
              <p>Delivery within 3-7 business days Australia-wide. Express orders ship within 1-2 business days.</p>
              <p>30-day return policy on unopened items. Please contact us for return authorisation.</p>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger">
              Reviews (${product.reviews})
              ${icons.chevronDown}
            </button>
            <div class="accordion-content">
              <div class="review-summary">
                <span class="big-number">${product.rating}</span>
                <div>
                  <div class="review-stars">${starsHtml}</div>
                  <span style="font-size:0.75rem;color:var(--muted-foreground)">${product.reviews} reviews</span>
                </div>
              </div>
              ${reviews.map(r => `
                <div class="review-item">
                  <div class="review-header">
                    <div>
                      <span class="review-author">${r.name}</span>
                      <span class="review-location"> · ${r.location}</span>
                    </div>
                    <span class="review-date">${r.date}</span>
                  </div>
                  <div class="review-stars">
                    ${Array.from({length: r.stars}, () => icons.star).join('')}
                  </div>
                  <p class="review-text">${r.text}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt section-bordered">
      <div class="container">
        <h2 class="section-title" style="text-align:center;margin-bottom:2rem;">You May Also Like</h2>
        <div class="products-grid grid-4">
          ${related.map(p => createProductCard(p)).join('')}
        </div>
      </div>
    </section>
  `;

  initAccordions();
}

/* Quantity helper */
window.changeQty = function(delta) {
  const input = document.getElementById('qty-input');
  if (!input) return;
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
};

/* ===== NEWSLETTER ===== */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    form.reset();
  });
}

/* ===== CONTACT FORM ===== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    form.reset();
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
  initTestimonials();
  initAccordions();
  initFaqAccordions();
  initProductsPage();
  initProductDetail();
  initNewsletter();
  initContactForm();
});
