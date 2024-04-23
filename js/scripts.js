// Seleciona todos os links pela classe
var links = document.querySelectorAll(".link");

// Adiciona um ouvinte de evento de clique a cada link
links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Remove a classe "active" de todos os links
        links.forEach(function(link) {
            link.classList.remove("active");
        });
        
        // Adiciona a classe "active" apenas ao link clicado
        this.classList.add("active");
    });
});