
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function(){

    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartoesSelecionados();
    cartaoAtual++;
    MostrarCartao();
});

btnVoltar.addEventListener("click", function() {
    if(cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado")

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");

});

function MostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionados() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
