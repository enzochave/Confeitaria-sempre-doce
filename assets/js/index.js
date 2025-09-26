// criar a lista de imagem
let imagens = [
    'assets/img/bolo-capa-1-.webp',
    'assets/img/bolo-capa-2.jpg',
    'assets/img/bolo-capa-3.webp'
]
let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrosel = document
    .getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}
// logica para exibir as imagems a
// cada 5 seg
setInterval(function () {
    exibirImagem()
    indiceAtualListaImagens++

    if (indiceAtualListaImagens > 2) {
    indiceAtualListaImagens = 0
 }
}, 5000);

exibirImagem()
 indiceAtualListaImagens++

 

