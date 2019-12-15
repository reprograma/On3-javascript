function limpaMensagem(){
  let getPresenteNatal = document.getElementById('presenteNatal');

  getPresenteNatal.innerText = '';

}

function defineCamiseta(numeroVetor){
  let qualCamiseta = document.getElementById('imagemCamiseta');

  let camisetas = ['camiseta-branca.jpg','camiseta-azul.jpg', 'camiseta-amarela.jpg', 'camiseta-verde.jpeg','camiseta-roxa.jpg','camiseta-preta.jpg','emotion.png'];

  qualCamiseta.classList.remove('escondido');
  qualCamiseta.src = `image/${camisetas[numeroVetor]}`;
}

function limpaImagem(){
  let qualCamiseta = document.getElementById('imagemCamiseta');
  qualCamiseta.classList.add('escondido');
}

function presenteCidade(){

  let getOptCidade= document.getElementById('optCidade');

  getOptCidade.addEventListener('change', function(){
      let optCidadeSelecionado = getOptCidade.value;

      let getPresenteNatal = document.getElementById('presenteNatal');

      switch(optCidadeSelecionado){
          case 'optCaxias': 
              getPresenteNatal.innerText = 'Parabéns! Você vai ganhar uma camiseta branca';
              defineCamiseta(0);
          break;
          case 'optPortoAlegre': 
              getPresenteNatal.innerText = 'Parabéns! Você vai ganhar uma camiseta azul';
              defineCamiseta(1);
          break;
          case 'optSaoPaulo': 
              getPresenteNatal.innerText = 'Parabéns! Você vai ganhar uma camiseta amarela';
              defineCamiseta(2);
          break;
          default:
              limpaMensagem();
              limpaImagem();
      }
  })
}

let getoptPais= document.getElementById('optPais');

getoptPais.addEventListener('change', function(){
  let optPaisSelecionado = getoptPais.value;

  let getOptCidade= document.getElementById('optCidade');

  let getPresenteNatal = document.getElementById('presenteNatal');

  switch(optPaisSelecionado){
      case 'optBrasil': 
          limpaMensagem();
          getOptCidade.classList.remove('escondido');
          presenteCidade();
          break;
      case 'optAustralia': 
          getPresenteNatal.innerText = 'Parabéns! Você vai ganhar uma camiseta verde';
          defineCamiseta(3);
          getOptCidade.classList.add('escondido');
          break;
      case 'optEUA': 
          getPresenteNatal.innerText = 'Parabéns! Você vai ganhar uma camiseta roxa';
          defineCamiseta(4);
          getOptCidade.classList.add('escondido');
          break;
      case 'optInglaterra': 
          getPresenteNatal.innerText = 'Parabéns! Você vai ganhar uma camiseta preta';
          defineCamiseta(5);
          getOptCidade.classList.add('escondido');
          break;
      default:
          limpaMensagem();
          getOptCidade.classList.add('escondido');
          limpaImagem();
  }
})

