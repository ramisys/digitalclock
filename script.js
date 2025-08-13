function realTimeClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerHTML = timeString;
}

function getDate() {
    const date = document.getElementById('date');
    const today = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    date.textContent = today.toLocaleDateString('en-US', options);
}

function initTheme() {
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    }
}

function setupToggle() {
    const toggleBtn = document.getElementById('toggle');
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save the new preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Run once when page loads
window.onload = () => {
    getDate();
    realTimeClock();
    initTheme();
    setupToggle();
    setInterval(realTimeClock, 1000);
};