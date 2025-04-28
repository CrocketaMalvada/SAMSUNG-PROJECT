const body = document.body;

function aplicarModoOscuro() {
    body.classList.add('dark-mode');
    const darkModeToggle = document.getElementById('botonFlotante');
    if (darkModeToggle) {
        darkModeToggle.textContent = 'Desactivar Modo Oscuro';
    }
}

function aplicarModoClaro() {
    body.classList.remove('dark-mode');
    const darkModeToggle = document.getElementById('botonFlotante');
    if (darkModeToggle) {
        darkModeToggle.textContent = 'Activar Modo Oscuro';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const isDarkModeStored = localStorage.getItem('darkMode');
    if (isDarkModeStored === 'true') {
        aplicarModoOscuro();
    } else {
        aplicarModoClaro();
    }

    const darkModeToggle = document.getElementById('botonFlotante');
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
        });
    }
});