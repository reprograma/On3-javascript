window.addEventListener('DOMContentLoaded', function(event) {

let pegaNomedoPais = document.getElementById ('selecionaPais');

pegaNomedoPais.addEventListener('change', function() {
    let pegaValuedoPais = pegaNomedoPais.value;
    let pegaPaisBrasil = document.getElementById ('selecionaBrasil');
    let qualpresente = document.getElementById ('mostraPresente');
    let removeadd = document.getElementById ('removeadd');

    switch (pegaValuedoPais) {
        case 'brasil':
            qualpresente.innerText = '';
            removeadd.classList.remove('escondido'); 

            pegaPaisBrasil.addEventListener('change', function() {
                let pegaValuePaisBrasil = pegaPaisBrasil.value;

                if (pegaValuePaisBrasil === 'caxias') {
                    qualpresente.innerText = 'Essa pessoa vai ganhar uma camisa branca.';
                } else if (pegaValuePaisBrasil === 'poa') {
                    qualpresente.innerText = 'Essa pessoa vai ganhar uma camisa azul.';
                } else if (pegaValuePaisBrasil === "sp") {
                    qualpresente.innerText = 'Essa pessoa vai ganhar uma camisa amarela.';
                } else {
                    qualpresente.innerText = '';
                }
            });

        break;
        case 'australia':
            removeadd.classList.add ('escondido');
            qualpresente.innerText = 'Essa pessoa vai ganhar uma camisa verde.'
            break;
        case 'eua':
            removeadd.classList.add ('escondido');
            qualpresente.innerText = 'Essa pessoa vai ganhar uma camisa roxa.'
            break;
        case 'inglaterra':
            removeadd.classList.add ('escondido');
            qualpresente.innerText = 'Essa pessoa vai ganhar uma camisa preta.'
            break;
        default:
            removeadd.classList.add ('escondido');
            qualpresente.innerText = '';
    }


});

});