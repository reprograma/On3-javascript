let getselecioneoPais = document.getElementById('selecioneoPais');
getselecioneoPais.addEventListener('change', function() {
  let getopcao = getselecioneoPais.value;
  let getpaisbrasil = document.getElementById ('paisbrasil');
  let getpresente = document.getElementById('presente');
    
  switch (getopcao) {
    case 'Brasil':
    getpresente.innerText = 'Escolha uma das cidades';
    getpaisbrasil.style.display = 'block';
    getpaisbrasil.addEventListener ('change', function() {
      let getcidades = getpaisbrasil.value;
      if (getcidades ==='CaxiasdoSul') {
        getpresente.innerText= 'Uma camiseta branca.'      
      } else if (getcidades === 'PortoAlegre') {
        getpresente.innerText = 'Uma camiseta azul.'
      } else if (getcidades === 'SaoPaulo') {
        getpresente.innerText = 'Uma camiseta amarela.'
      } else {
        getpresente.innerText = 'Selecione uma opção.'
      }

    });
    break;
    case 'Australia':
    getpresente.innerText = 'Uma camiseta verde';
    getpaisbrasil.style.display = 'none';
    getcorcamiseta.src = `colocar imagem da camiseta`;
    break;
   case 'EstadosUnidos':
   getpaisbrasil.style.display = 'none';
   getpresente.innerText = 'Uma camiseta roxa';
   break;
   case 'Londres':
   getpaisbrasil.style.display = 'none';
   getpresente.innerText = 'Uma camiseta preta';
   break;
   default:
   getpaisbrasil.style.display = 'none';
   getpresente.innerText = 'Selecione um país para ver os presentes';
  }
});