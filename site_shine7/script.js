let slideIndex = 0;
// pega todas as classes ".mySlides" com getElementsByClassName(pegar elementos por classe)
const slides = document.getElementsByClassName("mySlides");
// pega todas as classes ".dot"
const dots = document.getElementsByClassName("dot");

function showSlides() {
    //cria variável indice
    let i;

    //faz um looping FOR para ocultar todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    //Se o valor da variável slideIndex for maior que o numero de imagens, reinicia em 1;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    //tira a classe ".active" de todos as classes ".dot"
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //define o display como "block" para exibir a primeira imagem (as outras permanecem com display: none;)
    slides[slideIndex - 1].style.display = "block";
    //adiciona classe ".active" a classe ".dot" da imagem que está sendo exibida
    dots[slideIndex - 1].className += " active";
    //a cada 3 segundos repete a função "showSlides" para exibir uma imagem diferente
    setTimeout(showSlides, 3000);
}
showSlides();