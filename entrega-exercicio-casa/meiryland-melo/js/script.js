let pegaNomedoPais = document.getElementById('selecionaPais');

pegaNomedoPais.addEventListener('change', function () {
  let pegaValuedoPais = pegaNomedoPais.value;
  let pegaPaisBrasil = document.getElementById('selecionaPaisBrasil');
  let qualPresente = document.getElementById('mostraPresente');
  let qualCamiseta = document.getElementById('imagemCamiseta');

  let camisetas = ['camiseta-azul', 'camiseta-amarela', 'camiseta-verde', 'camiseta-branca', 'camiseta-roxa', 'camiseta-preta'];

  switch (pegaValuedoPais) {
    case 'brasil':
      qualPresente.innerText = '';
      pegaPaisBrasil.classList.remove('escondido');

      pegaPaisBrasil.addEventListener('change', function () {
        let pegaValuePaisBrasil = pegaPaisBrasil.value;

        if (pegaValuePaisBrasil === 'caxias') {
          qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta branca.'
          qualCamiseta.classList.remove('escondido');
          qualCamiseta.src = `image/${camisetas[3]}.jpg`;
        } else if (pegaValuePaisBrasil === 'poa') {
          qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta azul.'
          qualCamiseta.classList.remove('escondido');
          qualCamiseta.src = `image/${camisetas[0]}.jpeg`;
        } else if (pegaValuePaisBrasil === 'sp') {
          qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta amarela.'
          qualCamiseta.classList.remove('escondido');
          qualCamiseta.src = `image/${camisetas[1]}.png`;
        } else {
          qualPresente.innerText = '';
        }
      });
      break;
    case 'australia':
      pegaPaisBrasil.classList.add('escondido');
      qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta verde.'
      qualCamiseta.classList.remove('escondido');
      qualCamiseta.src = `image/${camisetas[2]}.png`;
      break;
    case 'eua':
      pegaPaisBrasil.classList.add('escondido');
      qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta roxa.'
      qualCamiseta.classList.remove('escondido');
      qualCamiseta.src = `image/${camisetas[4]}.jpg`;
      break;
    case 'inglaterra':
      pegaPaisBrasil.classList.add('escondido');
      qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta preta.'
      qualCamiseta.classList.remove('escondido');
      qualCamiseta.src = `image/${camisetas[5]}.jpeg`;
      break;
    default:
      pegaPaisBrasil.classList.add('escondido');
      qualPresente.innerText = '';
  }
});
