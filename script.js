/* ===================================================
   NESTDIRECT — REAL ESTATE FRONTEND SCRIPT
   =================================================*/

/* ── Dummy Property Data ─────────────────────── */
const properties = [
  {
    id: 1,
    title: "Spacious 3 BHK in Baner with Modern Interiors",
    price: 8500000,
    priceLabel: "₹85 Lac",
    location: "Baner, Pune",
    bhk: 3,
    sqft: 1450,
    type: "apartment",
    furnishing: "semi",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    owner: "Rajesh Mehta",
    ownerInitials: "RM",
    tag: "Owner",
    mode: "buy",
    premium: false,
  },
  {
    id: 2,
    title: "Premium 2 BHK Flat for Rent in Koregaon Park",
    price: 35000,
    priceLabel: "₹35,000",
    location: "Koregaon Park, Pune",
    bhk: 2,
    sqft: 1100,
    type: "apartment",
    furnishing: "furnished",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    owner: "Priya Joshi",
    ownerInitials: "PJ",
    tag: "Owner",
    mode: "rent",
    premium: true,
  },
  {
    id: 3,
    title: "4 BHK Independent Villa with Garden & Pool",
    price: 25000000,
    priceLabel: "₹2.5 Cr",
    location: "Kalyani Nagar, Pune",
    bhk: 4,
    sqft: 3200,
    type: "house",
    furnishing: "furnished",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    owner: "Anand Sharma",
    ownerInitials: "AS",
    tag: "Owner",
    mode: "buy",
    premium: true,
  },
  {
    id: 4,
    title: "Cozy 1 BHK Studio Near IT Park",
    price: 18000,
    priceLabel: "₹18,000",
    location: "Hinjewadi, Pune",
    bhk: 1,
    sqft: 620,
    type: "apartment",
    furnishing: "furnished",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    owner: "Sunil Patil",
    ownerInitials: "SP",
    tag: "Owner",
    mode: "rent",
    premium: false,
  },
  {
    id: 5,
    title: "Commercial Office Space in Magarpatta",
    price: 6500000,
    priceLabel: "₹65 Lac",
    location: "Magarpatta, Pune",
    bhk: null,
    sqft: 2100,
    type: "commercial",
    furnishing: "semi",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    owner: "Vikram Desai",
    ownerInitials: "VD",
    tag: "Owner",
    mode: "commercial",
    premium: false,
  },
  {
    id: 6,
    title: "PG Accommodation with AC Rooms Near MG Road",
    price: 12000,
    priceLabel: "₹12,000",
    location: "MG Road, Pune",
    bhk: null,
    sqft: 220,
    type: "pg",
    furnishing: "furnished",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    owner: "Kavya Naik",
    ownerInitials: "KN",
    tag: "Owner",
    mode: "rent",
    premium: false,
  },
  {
    id: 7,
    title: "Luxurious 3 BHK in High-Rise Tower with City View",
    price: 12000000,
    priceLabel: "₹1.2 Cr",
    location: "Viman Nagar, Pune",
    bhk: 3,
    sqft: 1680,
    type: "apartment",
    furnishing: "semi",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    owner: "Deepak Kulkarni",
    ownerInitials: "DK",
    tag: "Owner",
    mode: "buy",
    premium: true,
  },
  {
    id: 8,
    title: "2 BHK Row House with Private Garden",
    price: 42000,
    priceLabel: "₹42,000",
    location: "Wakad, Pune",
    bhk: 2,
    sqft: 1250,
    type: "house",
    furnishing: "unfurnished",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80",
    owner: "Sneha Gaikwad",
    ownerInitials: "SG",
    tag: "Owner",
    mode: "rent",
    premium: false,
  },
  {
    id: 9,
    title: "Budget-Friendly 1 BHK in Kothrud",
    price: 4200000,
    priceLabel: "₹42 Lac",
    location: "Kothrud, Pune",
    bhk: 1,
    sqft: 580,
    type: "apartment",
    furnishing: "unfurnished",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    owner: "Amit Landge",
    ownerInitials: "AL",
    tag: "Owner",
    mode: "buy",
    premium: false,
  },
  {
    id: 10,
    title: "Semi-Furnished 2 BHK Near Pune University",
    price: 24000,
    priceLabel: "₹24,000",
    location: "Aundh, Pune",
    bhk: 2,
    sqft: 950,
    type: "apartment",
    furnishing: "semi",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    owner: "Rohit Bhosale",
    ownerInitials: "RB",
    tag: "Owner",
    mode: "rent",
    premium: false,
  },
  {
    id: 11,
    title: "Modern 4 BHK Penthouse — Panoramic City Views",
    price: 38000000,
    priceLabel: "₹3.8 Cr",
    location: "Boat Club Road, Pune",
    bhk: 4,
    sqft: 4200,
    type: "apartment",
    furnishing: "furnished",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    owner: "Neeraj Kapoor",
    ownerInitials: "NK",
    tag: "Owner",
    mode: "buy",
    premium: true,
  },
  {
    id: 12,
    title: "Retail Shop Space in Busy Market Area",
    price: 3500000,
    priceLabel: "₹35 Lac",
    location: "Camp, Pune",
    bhk: null,
    sqft: 400,
    type: "commercial",
    furnishing: "unfurnished",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    owner: "Ganesh More",
    ownerInitials: "GM",
    tag: "Owner",
    mode: "commercial",
    premium: false,
  },
  {
    id: 13,
    title: "Affordable 3 BHK with Gym & Club House",
    price: 7200000,
    priceLabel: "₹72 Lac",
    location: "Hadapsar, Pune",
    bhk: 3,
    sqft: 1350,
    type: "apartment",
    furnishing: "semi",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    owner: "Prashant Wagh",
    ownerInitials: "PW",
    tag: "Owner",
    mode: "buy",
    premium: false,
  },
  {
    id: 14,
    title: "Executive PG for Working Professionals",
    price: 15000,
    priceLabel: "₹15,000",
    location: "Shivajinagar, Pune",
    bhk: null,
    sqft: 250,
    type: "pg",
    furnishing: "furnished",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    owner: "Meera Iyer",
    ownerInitials: "MI",
    tag: "Owner",
    mode: "rent",
    premium: false,
  },
  {
    id: 15,
    title: "5 BHK Heritage Bungalow with Lawns",
    price: 65000000,
    priceLabel: "₹6.5 Cr",
    location: "Pune Cantonment",
    bhk: 5,
    sqft: 6500,
    type: "house",
    furnishing: "semi",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    owner: "Col. Arjun Singh",
    ownerInitials: "AS",
    tag: "Owner",
    mode: "buy",
    premium: true,
  }
];

/* ── Testimonials Data ─────────────────────────*/
const testimonials = [
  {
    text: "Found my dream 2 BHK in Koregaon Park within a week! No broker, no drama. Saved almost ₹70,000 in brokerage. NestDirect is a game changer!",
    author: "Ananya Sharma",
    city: "Pune",
    initials: "AS",
    stars: 5,
  },
  {
    text: "As an owner, I listed my flat and got genuine inquiries within 24 hours. Rented it out at my asking price. The platform is truly transparent.",
    author: "Vikram Malhotra",
    city: "Mumbai",
    initials: "VM",
    stars: 5,
  },
  {
    text: "The verified listings feature gave me confidence. Every property I visited matched its photos exactly. Highly recommend NestDirect to everyone!",
    author: "Priya Nair",
    city: "Bangalore",
    initials: "PN",
    stars: 5,
  },
  {
    text: "Relocated from Delhi to Pune for a job. NestDirect helped me find a furnished flat in 3 days. Spoke directly to the owner. Zero hassles!",
    author: "Rohan Gupta",
    city: "Pune",
    initials: "RG",
    stars: 5,
  },
];

/* ── State ─────────────────────────────────────*/
const state = {
  searchQuery: "",
  mode: "buy",
  typeFilter: "all",
  bhkFilter: "all",
  furnishFilter: "all",
  budget: 20000000,
  sort: "default",
  testimonialIndex: 0,
};

let wishlist = new Set();

/* ── Helper: Format Price ──────────────────────*/
function formatPrice(price, mode) {
  if (mode === "rent" || mode === "pg") return `₹${price.toLocaleString("en-IN")}<span class="card-price-label">/mo</span>`;
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)} Cr`;
  if (price >= 100000) return `₹${(price / 100000).toFixed(0)} Lac`;
  return `₹${price.toLocaleString("en-IN")}`;
}

function formatBudgetLabel(val) {
  if (val >= 20000000) return "Any";
  if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`;
  if (val >= 100000) return `₹${(val / 100000).toFixed(0)} Lac`;
  return `₹${val.toLocaleString("en-IN")}`;
}

/* ── Build Property Card HTML ──────────────────*/
function buildCard(prop, featured = false) {
  const isRent = prop.mode === "rent" || prop.mode === "pg";
  const priceHTML = isRent
    ? `₹${prop.price.toLocaleString("en-IN")}<span class="card-price-label">/mo</span>`
    : (prop.price >= 10000000 ? `₹${(prop.price / 10000000).toFixed(2)} Cr` : `₹${(prop.price / 100000).toFixed(0)} Lac`);

  const furnishBadge = prop.furnishing === "furnished"
    ? `<span class="badge badge-furnished">Furnished</span>` : "";
  const premiumBadge = prop.premium
    ? `<span class="badge badge-premium">⭐ Premium</span>` : "";
  const bhkStr = prop.bhk ? `${prop.bhk} BHK` : prop.type === "pg" ? "PG" : "Shop";
  const liked = wishlist.has(prop.id);

  return `
    <div class="property-card ${featured ? 'featured-card' : ''}" data-id="${prop.id}">
      <div class="card-img-wrap">
        <img src="${prop.image}" alt="${prop.title}" loading="lazy" />
        <div class="card-badges">
          <span class="badge badge-type">${prop.type === "pg" ? "PG" : prop.type.charAt(0).toUpperCase() + prop.type.slice(1)}</span>
          <span class="badge badge-owner">🔑 Direct Owner</span>
          ${premiumBadge}
          ${furnishBadge}
        </div>
        <button class="card-wishlist ${liked ? 'liked' : ''}" data-id="${prop.id}" title="Save to wishlist">
          ${liked ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-price">${priceHTML}</div>
        <p class="card-title">${prop.title}</p>
        <p class="card-location">${prop.location}</p>
        <div class="card-specs">
          ${prop.bhk ? `<span class="spec">🛏 ${bhkStr}</span>` : `<span class="spec">🏢 ${bhkStr}</span>`}
          <span class="spec">📐 ${prop.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-owner">
          <div class="owner-avatar">${prop.ownerInitials}</div>
          <div class="owner-info">
            <span class="owner-name">${prop.owner}</span>
            <span class="owner-tag">✓ Verified Owner</span>
          </div>
        </div>
        <button class="btn-contact" onclick="handleContact(${prop.id})">Contact Owner</button>
      </div>
    </div>`;
}

/* ── Skeleton Loader ───────────────────────────*/
function renderSkeletons(count = 6) {
  const grid = document.getElementById("propertyGrid");
  grid.innerHTML = Array.from({ length: count }, () => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton skeleton-line w-40"></div>
        <div class="skeleton skeleton-line w-70"></div>
        <div class="skeleton skeleton-line w-55"></div>
      </div>
    </div>`).join("");
}

/* ── Filter + Render Listings ──────────────────*/
function getFiltered() {
  return properties.filter(p => {
    const q = state.searchQuery.toLowerCase();
    if (q && !p.title.toLowerCase().includes(q) && !p.location.toLowerCase().includes(q)) return false;
    if (state.mode !== "all" && p.mode !== state.mode) return false;
    if (state.typeFilter !== "all" && p.type !== state.typeFilter) return false;
    if (state.bhkFilter !== "all") {
      if (state.bhkFilter === "4") { if (!p.bhk || p.bhk < 4) return false; }
      else { if (String(p.bhk) !== state.bhkFilter) return false; }
    }
    if (state.furnishFilter !== "all" && p.furnishing !== state.furnishFilter) return false;
    if (p.price > state.budget) return false;
    return true;
  });
}

function getSorted(list) {
  const sorted = [...list];
  if (state.sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
  else if (state.sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
  return sorted;
}

function renderListings() {
  const grid = document.getElementById("propertyGrid");
  const noResults = document.getElementById("noResults");
  const countEl = document.getElementById("resultCount");

  const filtered = getSorted(getFiltered());
  countEl.textContent = `Showing ${filtered.length} propert${filtered.length !== 1 ? "ies" : "y"}`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noResults.classList.remove("hidden");
  } else {
    noResults.classList.add("hidden");
    grid.innerHTML = filtered.map(p => buildCard(p)).join("");
    attachWishlistListeners();
  }
}

/* ── Render Featured ───────────────────────────*/
function renderFeatured() {
  const track = document.getElementById("featuredTrack");
  const featured = properties.filter(p => p.premium);
  track.innerHTML = featured.map(p => buildCard(p, true)).join("");
  attachWishlistListeners();

  // Drag to scroll
  let isDown = false, startX, scrollLeft;
  const wrapper = track.parentElement;
  wrapper.addEventListener("mousedown", e => { isDown = true; startX = e.pageX - wrapper.offsetLeft; scrollLeft = wrapper.scrollLeft; });
  wrapper.addEventListener("mouseleave", () => isDown = false);
  wrapper.addEventListener("mouseup", () => isDown = false);
  wrapper.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    wrapper.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
}

/* ── Wishlist ──────────────────────────────────*/
function attachWishlistListeners() {
  document.querySelectorAll(".card-wishlist").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const id = Number(btn.dataset.id);
      if (wishlist.has(id)) {
        wishlist.delete(id);
        btn.innerHTML = "🤍";
        btn.classList.remove("liked");
      } else {
        wishlist.add(id);
        btn.innerHTML = "❤️";
        btn.classList.add("liked");
        btn.style.transform = "scale(1.35)";
        setTimeout(() => btn.style.transform = "", 300);
      }
    });
  });
}

/* ── Contact Handler ───────────────────────────*/
function handleContact(id) {
  const prop = properties.find(p => p.id === id);
  if (!prop) return;
  alert(`📞 Contact ${prop.owner}\n\n🏠 ${prop.title}\n📍 ${prop.location}\n\n✅ Owner verified — No brokerage charges!`);
}
window.handleContact = handleContact;

/* ── Testimonials Slider ───────────────────────*/
function renderTestimonials() {
  const track = document.getElementById("testimonialTrack");
  const dots = document.getElementById("sliderDots");

  track.innerHTML = testimonials.map(t => `
    <div class="testimonial-slide">
      <div class="testimonial-card">
        <div class="stars">${"★".repeat(t.stars)}</div>
        <p class="testimonial-text">${t.text}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.initials}</div>
          <div>
            <div class="author-name">${t.author}</div>
            <div class="author-city">${t.city}</div>
          </div>
        </div>
      </div>
    </div>`).join("");

  dots.innerHTML = testimonials.map((_, i) =>
    `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
  ).join("");

  dots.querySelectorAll(".dot").forEach(d => {
    d.addEventListener("click", () => goToSlide(Number(d.dataset.index)));
  });
}

function goToSlide(index) {
  state.testimonialIndex = (index + testimonials.length) % testimonials.length;
  document.getElementById("testimonialTrack").style.transform = `translateX(-${state.testimonialIndex * 100}%)`;
  document.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i === state.testimonialIndex));
}

let autoSlide = setInterval(() => goToSlide(state.testimonialIndex + 1), 5000);

/* ── Navbar Scroll ─────────────────────────────*/
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 10);
});

/* ── Hamburger ─────────────────────────────────*/
document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  document.getElementById("navLinks").classList.toggle("open");
});

/* ── Search Mode Tabs ──────────────────────────*/
document.querySelectorAll(".search-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".search-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    state.mode = tab.dataset.mode;
    renderListings();
  });
});

/* ── Search Input ──────────────────────────────*/
document.getElementById("searchBtn").addEventListener("click", () => {
  state.searchQuery = document.getElementById("searchInput").value.trim();
  document.querySelector("#listings").scrollIntoView({ behavior: "smooth" });
  renderListings();
});
document.getElementById("searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("searchBtn").click();
});

/* ── Pill Filters ──────────────────────────────*/
function initPillGroup(groupId, stateKey) {
  document.getElementById(groupId).addEventListener("click", e => {
    const pill = e.target.closest(".pill");
    if (!pill) return;
    document.querySelectorAll(`#${groupId} .pill`).forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    state[stateKey] = pill.dataset.value;
    renderListings();
  });
}
initPillGroup("typeFilter", "typeFilter");
initPillGroup("bhkFilter", "bhkFilter");
initPillGroup("furnishFilter", "furnishFilter");

/* ── Budget Slider ─────────────────────────────*/
document.getElementById("budgetSlider").addEventListener("input", function () {
  state.budget = Number(this.value);
  document.getElementById("budgetLabel").textContent = formatBudgetLabel(state.budget);
  renderListings();
});

/* ── Sort ──────────────────────────────────────*/
document.getElementById("sortSelect").addEventListener("change", function () {
  state.sort = this.value;
  renderListings();
});

/* ── Clear Filters ─────────────────────────────*/
document.getElementById("clearFilters").addEventListener("click", () => {
  state.searchQuery = "";
  state.mode = "buy";
  state.typeFilter = "all";
  state.bhkFilter = "all";
  state.furnishFilter = "all";
  state.budget = 20000000;
  state.sort = "default";

  document.getElementById("searchInput").value = "";
  document.getElementById("budgetSlider").value = 20000000;
  document.getElementById("budgetLabel").textContent = "Any";
  document.getElementById("sortSelect").value = "default";

  ["typeFilter", "bhkFilter", "furnishFilter"].forEach(id => {
    document.querySelectorAll(`#${id} .pill`).forEach(p => {
      p.classList.toggle("active", p.dataset.value === "all");
    });
  });
  document.querySelectorAll(".search-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.mode === "buy");
  });
  renderListings();
});

/* ── Testimonial Controls ──────────────────────*/
document.getElementById("prevBtn").addEventListener("click", () => {
  clearInterval(autoSlide);
  goToSlide(state.testimonialIndex - 1);
});
document.getElementById("nextBtn").addEventListener("click", () => {
  clearInterval(autoSlide);
  goToSlide(state.testimonialIndex + 1);
});

/* ── Smooth Scroll Nav Links ───────────────────*/
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu
      document.getElementById("navLinks").classList.remove("open");
      document.getElementById("hamburger").classList.remove("open");
    }
  });
});

/* ── Init ──────────────────────────────────────*/
function init() {
  renderSkeletons(6);
  renderFeatured();
  renderTestimonials();

  setTimeout(() => {
    renderListings();
  }, 800); // Simulate loading delay for skeleton effect
}

document.addEventListener("DOMContentLoaded", init);
