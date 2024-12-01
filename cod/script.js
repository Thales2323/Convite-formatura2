// Atualização da contagem regressiva
function updateCountdown() {
    const eventDate = new Date("2024-12-20T19:00:00");
    const currentDate = new Date();
    const timeDiff = eventDate - currentDate;

    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("countdown").textContent =
            `${days} dias, ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").textContent = "Chegou o grande dia!";
    }
}

// Atualiza a contagem a cada segundo
setInterval(updateCountdown, 1000);
