//exercicio 01
//function mostraPrecoAptoDoisDorm() {
   // let getBtnAptoDoisDorm = document.querySelector('#btnAptoDoisDorm');
    
  //getBtnAptoDoisDorm.addEventListener('click', function(){
   // let getPrecoAptoDoisDorm = document.querySelector('#precoAptoDoisDorm');
    //getPrecoAptoDoisDorm.innerText = 'Preço do imóvel:R$ 500 MIL!!!';
   // })
//};
   // function mostraPrecoAptoTresDorm() {
       // let getBtnAptoTresDorm = document.querySelector('#btnAptoTresDorm');

  //getBtnAptoTresDorm.addEventListener('click', function(){
   // let getPrecoAptoTresDorm = document.querySelector('#precoAptoTresDorm');
        //getPrecoAptoTresDorm.innerText = 'Preço do imóvel:R$ 600 MIL!!!';
       // })
    //};

       // mostraPrecoAptoDoisDorm();
       // mostraPrecoAptoTresDorm();


       //EXERCICIO 02
       //let getSelecionaModalidade = document.getElementById('selecionaModalidade');
      // let getMostraMensagem = document.getElementById('mostraMensagem');
       
       
      // getSelecionaModalidade.addEventListener('change', function () {
           //let getModalidades = getSelecionaModalidade.value;
       
          // switch (getModalidades) {
             //  case "Danca":
                 //  getMostraMensagem.innerText = " Segundas e Quartas às 19h";
                ///  break;[]
              // case "Ioga":
                //   getMostraMensagem.innerText = "Todos os Dias às 20h";
                 //  break;
              // case "Natacao":
                  // getMostraMensagem.innerText = "Terças e Quintas às 20h";
                 //  break;
              // case "Boxe":
                 //  getMostraMensagem.innerText = "sextas às 21h";
                  // break;
              // default:
                 //  break;
         //  }
     //  });


       //exerciio de casa

       let getSelecioneEntregas = document.getElementById('selecioneEntregas');
       let getMostraMensagem = document.getElementById('mostraMensagem');
           getSelecioneEntregas.addEventListener('change', function () {
           let getEntregas = getSelecioneEntregas.value;
           let opcoescidades = function opcoescidades(){(['CXS', 'PTA', 'SPA']);}
       
           switch (getEntregas) {
               case "Brasil":
               getMostraMensagem.innerText = "Selecione a Cidade na lista Abaixo";   
               opcoescidades (); 
                   break;
               case "Australia":
                   getMostraMensagem.innerText = "Enviar uma Camiseta Verde";
                   break;
               case "Estados Unidos":
                   getMostraMensagem.innerText = "Enviar uma Camiseta Roxa";
                   break;
               case "Inglaterra":
                   getMostraMensagem.innerText = "Enviar uma Camiseta Preta";
                   break;
               default:        
                   break;
           }
       });
   
       let getopcoescidades = document.getElementById('opcoescidades');
       let getmostraAlerta = document.getElementById('mostraAlerta');
           getopcoescidades.addEventListener('change', function () {
           let opcoescidades = getopcoescidades.value;
   
       switch (opcoescidades){
           case 'CXS':
           getmostraAlerta.innerText = "Enviar uma Camiseta Branca";
           break;
           case 'PTA':
           getmostraAlerta.innerText = "Enviar uma Camiseta Azul";
           break;
           case 'SPA':
           getmostraAlerta.innerText = "Enviar uma Camiseta Amarela";
           break;
           default:
           break;
       }
   });
   