

// Funciones para guardar y recuperar datos del usuario de localStorage
function saveUserData(userData) {
    localStorage.setItem('pokimonUser', JSON.stringify(userData));
}

function getUserData() {
    const userData = localStorage.getItem('pokimonUser');
    return userData ? JSON.parse(userData) : null;
}

// Función para renderizar los pokimones en la grid
function renderPokimon(container, pokimonArray) {
    if (!container) return;
    
    container.innerHTML = '';
    
    pokimonArray.forEach(pokimon => {
        const pokimonCard = document.createElement('div');
        pokimonCard.classList.add('pokimon-card');
        
        pokimonCard.innerHTML = `
            <img src="${pokimon.image}" alt="${pokimon.name}" class="pokimon-img">
            <div class="pokimon-info">
                <h3 class="pokimon-name">${pokimon.name}</h3>
                <p class="pokimon-type">Tipo: ${pokimon.type}</p>
                <p class="pokimon-desc">${pokimon.description}</p>
            </div>
        `;
        
        container.appendChild(pokimonCard);
    });
}

// Verificar si el usuario está autenticado


// Inicializar la página según su tipo
function initPage() {
    // Verificar autenticación
    checkAuth();
    
    // Página principal
    const pokimonGrid = document.getElementById('pokimonGrid');
    if (pokimonGrid) {
        renderPokimon(pokimonGrid, pokimonData);
    }
    
    // Página de perfil de entrenador
    const trainerProfile = document.getElementById('trainerProfile');
    if (trainerProfile) {
        const currentUser = getUserData();
        if (currentUser) {
            document.getElementById('trainerName').textContent = currentUser.username;
            document.getElementById('trainerLevel').textContent = currentUser.level;
        }
    }
}

function checkAuth() {
    const currentUser = getUserData();
    
    // Si estamos en entrenador.html y no hay usuario autenticado, redirigir al inicio de sesión
    if (window.location.pathname.includes('entrenador.html') && !currentUser) {
        window.location.href = 'inicio_sesion.html';
    }
    
    // Si estamos en inicio_sesion.html o registro.html y ya hay un usuario autenticado, redirigir al perfil
    if ((window.location.pathname.includes('inicio_sesion.html') || window.location.pathname.includes('registro.html')) && currentUser) {
        window.location.href = 'entrenador.html';
    }
}

// Función para obtener los datos del usuario desde localStorage
function getUserData() {
    const userData = localStorage.getItem('pokimonUser');
    return userData ? JSON.parse(userData) : null;
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', checkAuth);

