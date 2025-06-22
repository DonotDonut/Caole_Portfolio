// highlight current nav link for the current page

const links = document.querySelectorAll('.navigation a');  
const currentPage = window.location.pathname.split("/").pop();  

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    }
});

// filter for experience webpage through 
// Grab all buttons that have a data-category attribute (the category filters)
const categoryButtons = document.querySelectorAll('.filter-buttons button[data-category]');

// Grab all buttons that have a data-date attribute (the date filters)
const dateButtons     = document.querySelectorAll('.filter-buttons button[data-date]');

// Grab all the resume items we’ll show/hide
const items           = document.querySelectorAll('.resume-item');

// Track the currently selected category & date
let activeCategory = 'all';
let activeDate     = 'all';

// Main filtering function: shows items matching BOTH activeCategory and activeDate
function filterItems() {
  items.forEach(item => {
    // Check category match (or “all” always matches)
    const okCat  = activeCategory === 'all' || item.dataset.category === activeCategory;
    // Check date match (or “all” always matches)
    const okDate = activeDate     === 'all' || item.dataset.date     === activeDate;
    // Show if both match; otherwise hide
    item.style.display = (okCat && okDate) ? 'block' : 'none';
  });
}

// ——— CATEGORY BUTTON CLICK HANDLING ———
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // 1) Remove “active” class from all category buttons
    categoryButtons.forEach(b => b.classList.remove('active'));
    // 2) Mark the clicked one as active
    btn.classList.add('active');
    // 3) Update our filter state
    activeCategory = btn.dataset.category;
    // 4) Re-run the filter
    filterItems();
  });
});

// ——— DATE BUTTON CLICK HANDLING ———
dateButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // 1) Remove “active” class from all date buttons
    dateButtons.forEach(b => b.classList.remove('active'));
    // 2) Mark the clicked one as active
    btn.classList.add('active');
    // 3) Update our filter state
    activeDate = btn.dataset.date;
    // 4) Re-run the filter
    filterItems();
  });
});

// Run once on page load to set initial visibility
filterItems();

