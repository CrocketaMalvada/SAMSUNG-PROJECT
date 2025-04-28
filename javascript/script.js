const darkModeToggle = document.getElementById('botonFlotante');
const body = document.body;
let timeoutId;

function aplicarModoOscuro() {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Desactivar Modo Oscuro';
}

function aplicarModoClaro() {
    body.classList.remove('dark-mode');
    darkModeToggle.textContent = 'Activar Modo Oscuro';
}

function resetTimeout() {
    clearTimeout(timeoutId);
    darkModeToggle.classList.remove('hidden');
    timeoutId = setTimeout(() => {
        darkModeToggle.classList.add('hidden');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const isDarkModeStored = localStorage.getItem('darkMode');
    if (isDarkModeStored === 'true') {
        aplicarModoOscuro();
    } else {
        aplicarModoClaro();
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            if (isDarkMode) {
                darkModeToggle.textContent = 'Desactivar Modo Oscuro';
            } else {
                darkModeToggle.textContent = 'Activar Modo Oscuro';
            }
            resetTimeout();
        });

        resetTimeout();
        document.addEventListener('mousemove', resetTimeout);
        document.addEventListener('keydown', resetTimeout);
        document.addEventListener('touchstart', resetTimeout);
    }
});