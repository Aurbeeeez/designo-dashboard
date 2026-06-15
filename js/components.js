const sidebarHTML = `
<div class="sidebar d-flex flex-column py-4">
    <div class="sidebar-brand px-4 mb-4 d-flex align-items-center gap-2">
        <img src="assets/image001.png" alt="Silver Touch" style="max-height: 35px;">
    </div>
    <ul class="nav flex-column mb-auto">
        <li class="nav-item"><a href="index.html" id="nav-dashboard" class="nav-link d-flex align-items-center gap-3"><i class="bi bi-pie-chart"></i> Dashboard</a></li>
        <li class="nav-item"><a href="assignments.html" id="nav-assignments" class="nav-link d-flex align-items-center gap-3"><i class="bi bi-journal-text"></i> Assignments</a></li>
        <li class="nav-item"><a href="schedule.html" id="nav-schedule" class="nav-link d-flex align-items-center gap-3"><i class="bi bi-calendar3"></i> Schedule</a></li>
        <li class="nav-item"><a href="recordings.html" id="nav-recordings" class="nav-link d-flex align-items-center gap-3"><i class="bi bi-camera-video"></i> Recordings</a></li>
        <li class="nav-item"><a href="notes.html" id="nav-notes" class="nav-link d-flex align-items-center gap-3"><i class="bi bi-file-earmark-text"></i> Notes</a></li>
        <li class="nav-item mt-3"><span class="nav-link fw-bold text-uppercase small" style="pointer-events:none;">Admin Tools</span></li>
        <li class="nav-item"><a href="users.html" id="nav-users" class="nav-link d-flex align-items-center gap-3"><i class="bi bi-people"></i> User Management</a></li>
        <li class="nav-item"><a href="analytics.html" id="nav-analytics" class="nav-link d-flex align-items-center gap-3"><i class="bi bi-graph-up-arrow"></i> Analytics</a></li>
        <li class="nav-item"><a href="settings.html" id="nav-settings" class="nav-link d-flex align-items-center gap-3"><i class="bi bi-gear"></i> Settings</a></li>
    </ul>
</div>
`;

const navbarHTML = `
<div class="d-flex justify-content-between align-items-center mb-4">
    <div class="d-flex align-items-center gap-3 w-100">
        <button class="btn btn-light d-md-none rounded-2 border shadow-sm px-2 py-1" id="mobile-menu-btn">
            <i class="bi bi-list fs-4"></i>
        </button>
        
        <div class="search-wrapper flex-grow-1" style="max-width: 400px;">
            <i class="bi bi-search"></i>
            <input type="text" class="form-control" placeholder="Search workflow components..." onchange="alert('Searching platform for: ' + this.value)">
            <span class="shortcut d-none d-md-block">⌘ F</span>
        </div>
    </div>
    
    <div class="d-flex align-items-center gap-3 mt-3 mt-md-0">
        <button class="btn btn-light rounded-circle shadow-sm" id="theme-toggle" style="width: 38px; height: 38px;">
            <i class="bi bi-moon-stars" id="theme-icon"></i>
        </button>
        
        <div class="dropdown">
            <div class="d-flex align-items-center gap-2 border rounded-pill px-2 py-1 bg-white shadow-sm" role="button" data-bs-toggle="dropdown">
                <img src="https://ui-avatars.com/api/?name=Harsh&background=random" class="rounded-circle" width="32" height="32">
                <span class="fw-semibold">Harsh</span>
                <i class="bi bi-chevron-down text-muted small"></i>
            </div>
            <ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2 p-2" style="border-radius: 12px; min-width: 200px;">
                <li><a class="dropdown-item py-2 rounded" href="settings.html"><i class="bi bi-gear me-2"></i> Settings</a></li>
                <li><hr class="dropdown-divider my-1"></li>
                <li><a class="dropdown-item py-2 rounded text-danger" href="login.html"><i class="bi bi-box-arrow-right me-2"></i> Logout</a></li>
            </ul>
        </div>
    </div>
</div>
`;

// ==========================================
// THEME ENGINE (DARK/LIGHT MODE)
// ==========================================

function initTheme() {
    // 1. Check if the user previously saved a theme preference
    const savedTheme = localStorage.getItem('designo-theme') || 'light';
    applyTheme(savedTheme);

    // 2. Bind the click event to our new toggle button
    setTimeout(() => {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });
        }
    }, 100); // Slight delay to ensure the HTML is fully injected first
}

function applyTheme(theme) {
    // Apply the data attribute to the highest level HTML tag
    document.documentElement.setAttribute('data-theme', theme);
    // Save it so the browser remembers
    localStorage.setItem('designo-theme', theme);

    // Swap the icon visually
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.classList.remove('bi-moon-stars');
            themeIcon.classList.add('bi-sun-fill');
            themeIcon.style.color = '#ffb703'; // Make the sun yellow
        } else {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-stars');
            themeIcon.style.color = 'inherit';
        }
    }
}

// ==========================================
// UPDATE YOUR EXISTING LOAD FUNCTION
// ==========================================
function loadComponents(activeTabId) {
    if (document.getElementById('sidebar-container')) document.getElementById('sidebar-container').innerHTML = sidebarHTML;
    if (document.getElementById('navbar-container')) document.getElementById('navbar-container').innerHTML = navbarHTML;
    if (activeTabId && document.getElementById(activeTabId)) {
        document.getElementById(activeTabId).classList.add('active');
    }

    // TRIGGER THE THEME ENGINE ON LOAD
    initTheme();
}

// ==========================================
// GLOBAL PROTOTYPE INTERACTION CATCHER
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    // Wait a brief moment to ensure all HTML is injected via components.js
    setTimeout(() => {
        // Target all buttons and links that don't have a specific ID or data-bs-toggle
        const interactiveElements = document.querySelectorAll('button:not([data-bs-toggle]):not(#theme-toggle):not([type="submit"]), a[href="#"]');

        interactiveElements.forEach(element => {
            // Only add the click event if it doesn't already have custom logic attached
            element.addEventListener('click', function (e) {
                const actionName = this.innerText.trim() || "This feature";
            });
        });
    }, 500);
});

// Mobile Menu Toggle Logic
    setTimeout(() => {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.querySelector('.sidebar');
        if (menuBtn && sidebar) {
            menuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('mobile-open');
            });
        }
    }, 500);