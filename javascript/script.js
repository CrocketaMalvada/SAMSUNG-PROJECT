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
    }, 2000);
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

document.addEventListener('DOMContentLoaded', function() {
    const visitedLinks = getVisitedLinks();
    const trackableLinks = document.querySelectorAll('.enlace-enlace');
  
    trackableLinks.forEach(link => {
      if (visitedLinks.includes(link.href)) {
        link.classList.add('visited-custom');
      }
  
      link.addEventListener('click', function() {
        saveVisitedLink(link.href);
        link.classList.add('visited-custom');
      });
    });
  
    function getVisitedLinks() {
      const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)visitedLinks\s*=\s*([^;]*).*$)|^.*$/, "$1");
      return cookieValue ? cookieValue.split(',') : [];
    }
  
    function saveVisitedLink(url) {
      let visited = getVisitedLinks();
      if (!visited.includes(url)) {
        visited.push(url);
        document.cookie = `visitedLinks=${visited.join(',')}; expires=${getExpirationDate()}; path=/`;
      }
    }
  
    function getExpirationDate(days = 30) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      return date.toUTCString();
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const progress = document.querySelector('#loader .progress');
  if (progress) {
    progress.style.width = '90%';
    progress.style.transition = 'width 0.8s ease-in-out';
  }
});