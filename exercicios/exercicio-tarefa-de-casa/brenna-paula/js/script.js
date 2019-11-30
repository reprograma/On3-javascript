window.addEventListener('DOMContentLoaded', function() {

});
let pegaNomedoPais = document.getElementById('selecionaPais');
pegaNomedoPais.addEventListener('change', function() {
    let pegaValuedoPais = pegaNomedoPais.value;
    let pegaPaisBrasil = document.getElementById('selecionaPaisBrasil');
    let qualPresente = document.getElementById('mostraPresente');

    switch (pegaValuedoPais) {
        case 'brasil':
            qualPresente.innerHTML = '';
            pegaPaisBrasil.classList.remove('escondido');
            pegaPaisBrasil.addEventListener('change' , function() {
                let pegaValuePaisBrasil = pegaPaisBrasil.value;

                if (pegaValuePaisBrasil === 'gyn') {
                qualPresente.innerHTML = `<p> Migles, você vai ganhar uma camiseta branca.</p>`
                } else if (pegaValuePaisBrasil === 'poa') {
                    qualPresente.innerHTML = `<p> Migles, você vai ganhar uma camiseta azul.</p>`
                } else if (pegaValuePaisBrasil === 'sp') {
                    qualPresente.innerHTML = `<p> Migo, você vai ganhar uma camiseta amarela.</p>`
                } else {
                    qualPresente.innerHTML = '';
                }        
            });
            break;

        case 'australia':
            pegaPaisBrasil.classList.add('escondido');
            qualPresente.innerHTML = `<p> Miga, você vai ganhar uma camiseta verde.</p>`
            break;
        console.log(pegaValuedoPais);
        break;
        case 'estadosUnidos':
                pegaPaisBrasil.classList.add('escondido');
                qualPresente.innerHTML = `<p> Miga, você vai ganhar uma camiseta roxa.</p>`
        console.log(pegaValuedoPais);
        break;
        case 'inglaterra':
                pegaPaisBrasil.classList.add('escondido');
                qualPresente.innerHTML = `<p> Miga, você vai ganhar uma camiseta preta.</p>`
        console.log(pegaValuedoPais);
        break;
    default:
        pegaPaisBrasil.classList.add('escondido');
        qualPresente.innerHTML = '';
    }
        
});