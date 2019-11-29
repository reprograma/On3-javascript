// Nesse natal eu gostaria de enviar presentes para meus amigos.
// O único problema é a logística, pois tenho amigos que moram em
// outras cidades e países.

// A relação dos lugares/presentes é:
//
// Brasil
  // Caxias do Sul: Uma camiseta branca
  // Porto Alegre: Uma camiseta azul
  // São Paulo: Uma camiseta amarela
// Austrália: Uma camiseta verde
// Estados Unidos: Uma camiseta roxa
// Inglaterra: Uma camiseta preta

let pegaNomedoPais = document.getElementById('selecionaPais');

pegaNomedoPais.addEventListener('change', function() {
  let pegaValuedoPais = pegaNomedoPais.value;
  let pegaPaisBrasil = document.getElementById('selecionaPaisBrasil');
  let qualPresente = document.getElementById('mostraPresente');
  let qualCamiseta = document.getElementById('imagemCamiseta');

  let camisetas = ['camiseta-azul', 'camiseta-amarela', 'camiseta-verde'];

  switch (pegaValuedoPais) {
    case 'brasil':
      qualPresente.innerText = '';
      pegaPaisBrasil.classList.remove('escondido');

      pegaPaisBrasil.addEventListener('change', function() {
        let pegaValuePaisBrasil = pegaPaisBrasil.value;

        if (pegaValuePaisBrasil === 'caxias') {
          qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta branca.'
        } else if (pegaValuePaisBrasil === 'poa') {
          qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta azul.'
        } else if (pegaValuePaisBrasil === 'sp') {
          qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta amarela.'
        } else {
          qualPresente.innerText = '';
        }
      });
      break;
    case 'australia':
      pegaPaisBrasil.classList.add('escondido');
      qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta verde.'
      qualCamiseta.classList.remove('escondido');
      break;
    case 'eua':
      pegaPaisBrasil.classList.add('escondido');
      qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta roxa.'
      break;
    case 'inglaterra':
      pegaPaisBrasil.classList.add('escondido');
      qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta preta.'
      break;
    default:
      pegaPaisBrasil.classList.add('escondido');
      qualPresente.innerText = '';
  }
});