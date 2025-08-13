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

window.onload = getDate;

realTimeClock();

setInterval(realTimeClock, 1000);