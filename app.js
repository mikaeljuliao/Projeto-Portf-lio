// Pegamos os elementos de vídeo do HTML usando o ID de cada um.
// Esses IDs foram definidos no HTML como "projetoVideo1", "projetoVideo2", e "projetoVideo3".
const video1 = document.getElementById('projetoVideo1');
const video2 = document.getElementById('projetoVideo2');
const video3 = document.getElementById('projetoVideo3');
const hoverSign= document.querySelector(".hover-sign")


// elemento sidebar 
const sideBar = document.querySelector(".sidebar")
const menu = document.querySelector(".menu-icon")
const close = document.querySelector('.close-icon')




// Agora criamos uma lista (array) chamada "videolist" contendo todos os vídeos.
// Isso facilita aplicar o mesmo comportamento a todos os vídeos de uma só vez.
const videolist = [video1, video2, video3];

// Usamos um "forEach" para percorrer cada vídeo dentro da lista.
// A função passada dentro do forEach será executada para cada item do array.
videolist.forEach(function(video) {

    // A variável "video" (que é o parametro da função que usamos como argumento) aqui 
    // representa cada objeto de vídeo individual da lista.
    // Esse objeto corresponde a um elemento <video> do HTML.

    // Adicionamos um "event listener" para o evento de mouse passar por cima (mouseover).
    // Quando o mouse passar por cima do vídeo, ele começa a tocar automaticamente.
    video.addEventListener('mouseover', function() {
        // Chamamos o método play() do objeto video, que inicia a reprodução do vídeo.
        video.play();

        hoverSign.classList.add("active")
    });

    // Outro "event listener" para quando o mouse sair de cima do vídeo (mouseout).
    // Quando isso acontecer, o vídeo será pausado.
    video.addEventListener('mouseout', function() {
        // Chamamos o método pause() do objeto video, que pausa a reprodução do vídeo.
        video.pause();

        hoverSign.classList.remove("active")
    });
});


// Elemento sidebar 

menu.addEventListener('click', function(){
    sideBar.classList.remove("Close-sidebar")
    sideBar.classList.add('open-sidebar')

    

} )

close.addEventListener("click", function(){
    sideBar.classList.add("Close-sidebar")
    sideBar.classList.add('open-sidebar')
})