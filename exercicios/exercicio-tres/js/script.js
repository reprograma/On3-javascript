function mostraPrecoAptoDoisDorm() {
    let getBtnAptoDoisDorm = document.querySelector('#btnAptoDoisDorm'); // variavel do botao
  
    getBtnAptoDoisDorm.addEventListener('click', function(){
      let getPrecoAptoDoisDorm = document.querySelector('#precoAptoDoisDorm');
      getPrecoAptoDoisDorm.innerText = 'Preço do imóvel: R$ 500.000,00';
    })
  };
  
  function mostraPrecoAptoTresDorm() {
    let getBtnAptoTresDorm = document.querySelector('#btnAptoTresDorm');
  
    getBtnAptoTresDorm.addEventListener('click', function(){
      let getPrecoAptoTresDorm = document.querySelector('#precoAptoTresDorm');
      getPrecoAptoTresDorm.innerText = 'Preço do imóvel: R$ 600.000,00';
    })
  };
  
  mostraPrecoAptoDoisDorm();
  mostraPrecoAptoTresDorm();