const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', ()=> {
    mostrarSkins();

    escoderBotao();
});

function escoderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarSkins() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
