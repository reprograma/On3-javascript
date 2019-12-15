let getNomedoPais=document.getElementById('selecionaPais');
getNomedPais.addEventListener('change', function(){
let getPaisBrasil= document.getElementById('selecionaPaisBrasil');
let getValuePaisBrasil=document.getElementById('selecionaPaisBrasil').value;
let qualPresente= document.getElementById('exibePresente');

switch (getValuedoPais){
    case 'brasil':
    qualPresente.innerText='';
    getPaisBrasil.classList.remove('escondido');
    getValuePaisBrasil.addEventListener('change', function() {
    
    if(getValuePaisBrasil==='caxias') {
        qualPresente.innerText='Essa pessoa vai ganhar uma camisa branca.'
    } else if (getValuePaisBrasil==='poa') {
        qualPresente.innerText='Essa pessoa vai ganhar uma camisa azul.'
    } else if (getValuePaisBrasil==='sampa') {
        qualPresente.innerText='Essa pessoa vai ganhar uma camisa amarela.'   
    } else {
        qualPresente.innerText='';  
    }
    })
    break;
    case 'australia':
    getPaisBrasil.classList.add('escondido');
    qualpresente.innerText='Essa pessoa vai ganhar uma camiseta verde';
    break;
    case 'eua':
    getPaisBrasil.classList.add('escondido');
    qualPresente.innerText='Essa pessoa vai ganhar uma camiseta roxa';
    break;
    case 'inglaterra':
    getPaisBrasil.classList.add('escondido');
    qualPresente.innerText='Essa pessoa vai ganhar uma camiseta preta';
    break;
    default:
    getPaisBrasil.classList.add('escondido');
    qualPresente.innerText='';

    
}
});
