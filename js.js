
document.addEventListener('DOMContentLoaded', (event) => {
    const logoutBtn = document.getElementById('logout-btn');
    const logoutMessage = document.getElementById('logout-message');
    const confirmLogout = document.getElementById('confirm-logout');
    const cancelLogout = document.getElementById('cancel-logout');

    // Mostrar mensagem de saída
    logoutBtn.addEventListener('click', () => {
        logoutMessage.style.display = 'block';
    });

    // Confirmar saída
    confirmLogout.addEventListener('click', () => {
        // Redirecionar ou executar a ação de logout
        window.location.href = 'sair.html'; // Substitua pelo URL real de logout
    });

    // Cancelar saída
    cancelLogout.addEventListener('click', () => {
        logoutMessage.style.display = 'none';
    });
});


/*receitas*/
function showRecipe(recipeId) {
    // Esconde todos os detalhes das receitas
    var recipes = document.getElementsByClassName('recipe-content');
    for (var i = 0; i < recipes.length; i++) {
        recipes[i].parentElement.style.display = 'none';
    }

    // Mostra a receita selecionada
    document.getElementById(recipeId).parentElement.style.display = 'block';
}

/*imagens delicias*/
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let currentIndex = 0;
    const totalImages = images.length;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Troca a imagem a cada 3 segundos
});
