function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('nl-BE', {
        hour: '2-digit',
        minute: '2-digit'
    });
    const date = now.toLocaleDateString('nl-BE');
    document.getElementById('clock').textContent = `${time} | ${date}`;
}

function loadProgressBars() {
    document.querySelectorAll('.progress').forEach(bar => {
        const value = bar.getAttribute('data-progress');
        bar.style.width = value + '%';
    });
}


updateClock();
loadProgressBars();
setInterval(updateClock, 1000);
