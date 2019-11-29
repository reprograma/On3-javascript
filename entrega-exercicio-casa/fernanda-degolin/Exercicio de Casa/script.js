
let nomePais = document.getElementById('selecionaPais');

nomePais.addEventListener('change', function () {
  let valuePais = nomePais.value;
  let paisBrasil = document.getElementById('selecionaBrasil'); //pegaPaisBrasil 
  let nomePresente = document.getElementById('aparecePresente'); //qualPresente 
  let qualCamiseta = document.getElementById('imagemCamiseta');

  switch (valuePais) {
    case 'brasil':
      nomePresente.innerText = '';
      paisBrasil.classList.remove('escondido');
      paisBrasil.addEventListener('change', function () {

        let pegaValuePaisBrasil = paisBrasil.value;
        if (pegaValuePaisBrasil === 'caxias') {
          nomePresente.innerText = 'Camiseta branca'
        } else if (pegaValuePaisBrasil === 'poa') {
          nomePresente.innerText = 'Camiseta azul'
        } else if (pegaValuePaisBrasil === 'sp') {
          nomePresente.innerText = 'Camiseta amarela'
        } else{
          nomePresente.innerText = '';
        }
      });
      break;

    case 'australia':
      paisBrasil.classList.add('escondido');
      nomePresente.innerText = 'Camiseta roxa'
      break;

    case 'eua':
      paisBrasil.classList.add('escondido');
      nomePresente.innerText = 'Camiseta preta'
      break;

    case 'inglaterra':
      paisBrasil.classList.add('escondido');
      nomePresente.innerText = 'Camiseta vermelha'
      break;

    default:
      paisBrasil.classList.add('escondido');
      nomePresente.innerText = '';
      
  }

});