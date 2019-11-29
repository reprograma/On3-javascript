let selecionaPais = document.getElementById('seleceionaPais');
let selecionaCidade = document.getElementById('selecionaCidade');
let mostraMensagem = document.getElementById('mostraMensagem');


selecionaPais.addEventListener('change', function () {
    let getOpcao = selecionaPais.value;

    switch (getOpcao) {
        case 'opcaoUm':
            selecionaCidade.classList.remove('esconde');
            mostraMensagem.innerHTML = '';
            mostraMensagem.style.background = 'none';
            break;
        case 'opcaoDois':
            selecionaCidade.classList.add('esconde');
            mostraMensagem.innerHTML = '&#127873; Uma camiseta verde';
            mostraMensagem.style.background = '#4b8a63';
            break;
        case 'opcaoTres':
            selecionaCidade.classList.add('esconde');
            mostraMensagem.innerHTML = '&#127873; Uma camiseta roxa';
            mostraMensagem.style.background = '#85397e';
            break;
        case 'opcaoQuatro':
            selecionaCidade.classList.add('esconde');
            mostraMensagem.innerHTML = '&#127873; Uma camiseta preta';
            mostraMensagem.style.background = 'black';
            break;
        default:
            selecionaCidade.classList.add('esconde');
            mostraMensagem.innerText = '';
            mostraMensagem.style.background = 'none';

    }
});

selecionaCidade.addEventListener('change', function () {
    let pegaCidade = selecionaCidade.value;

    switch (pegaCidade) {
        case 'opcaoCxS':
            mostraMensagem.innerHTML = '&#127873; Uma camiseta branca';
            mostraMensagem.style.background = 'white';
            break;
        case 'opcaoPoA':
            mostraMensagem.innerHTML = '&#127873; Uma camiseta azul';
            mostraMensagem.style.background = '#0099cc';
            break;
        case 'opcaoSP':
            mostraMensagem.innerHTML = '&#127873; Uma camiseta amarela';
            mostraMensagem.style.background = '#ffff80';
            break;
        default:
            mostraMensagem.innerHTML = '';
            mostraMensagem.style.background = 'none';
            console.log(pegaCidade)

    }
});