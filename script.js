// Função para calcular a contagem regressiva
function updateCountdown() {
    const formaturaDate = new Date("2024-12-03T19:00:00").getTime(); // Data de formatura
    const now = new Date().getTime();
    const distance = formaturaDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "A formatura chegou!";
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Atualiza a contagem regressiva a cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
