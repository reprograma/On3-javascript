
let pegaNomedoPais = document.getElementById('selecionaPais');

pegaNomedoPais.addEventListener('change', function() {
    let pegaValuedoPais = pegaNomedoPais.value;
    let pegaPaisBrasil = document.getElementById('selecionaPaisBrasil');
    let qualPresente = document.getElementById('mostraPresente');
   
//console.log(pegaNomedoPais.value);
switch (pegaValuedoPais) {
    case 'brasil':
        qualPresente.innerText = '';
        pegaPaisBrasil.classList.remove('escondido');
       // console.log(pegaValuedoPais);

       pegaPaisBrasil.addEventListener('change', function () {
       let pegaValuePaisBrasil = pegaPaisBrasil.value;
       
       if (pegaValuePaisBrasil === 'caxias') {
           qualPresente.innerText = 'Esssa pessoa vai ganhar uma camiseta branca.'
       } else if (pegaValuePaisBrasil === 'poa') {
           qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta azul.'
       } else if (pegaValuePaisBrasil === 'sampa') {
           qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta amarela.'
       } else {
           qualPresente.innerText = '';
       }
    });
     break;
    case 'australia' :
        qualPresente.innerText = 'Essa pessoa vai ganhar camiseta verde.'
       // console.log(pegaValuedoPais);
        break;
    case 'eua':
            qualPresente.innerText = 'Essa pessoa vai ganhar camiseta roxa.'
       // console.log(pegaValuedoPais)
        break;
    case 'londres':
            qualPresente.innerText = 'Essa pessoa vai ganhar camiseta preta.'
        break;
        default:
            qualPresente.innerText = '';
}
});
