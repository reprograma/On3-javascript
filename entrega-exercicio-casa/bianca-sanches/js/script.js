let pegaNomePais = document.getElementById ('selecionaPais');

pegaNomePais.addEventListener('change', function() {
    let pegaValuePais = pegaNomePais.value;
    let pegaBrasil = document.getElementById('selecionaBrasil');
    let qualPresente = document.getElementById('mostraPresente');

    if (pegaValuePais==='brasil'){
        pegaNomePais.classList.add('escondido');
    }
    else if (pegaValuePais==='australia'){
        pegaBrasil.classList.add('escondido');
    }
    else if (pegaValuePais==='eua'){
        pegaBrasil.classList.add('escondido');
    }
    else if (pegaValuePais==='inglaterra'){
        pegaBrasil.classList.add('escondido');
    }
    else (pegaValuePais==='default')
        pegaBrasil.classList.add('escondido');

    switch (pegaValuePais) {
        case 'brasil':
            qualPresente.innerText = '';
            pegaBrasil.classList.remove('escondido');

            pegaBrasil.addEventListener('change', function(){
                let pegaValueBrasil = pegaBrasil.value;

                switch (pegaValueBrasil) {
                    case 'default':
                        qualPresente.innerText = '';
                        break;
                    
                    case 'caxias':
                        qualPresente.innerHTML = '<p class="msg_resposta">Essa pessoa ganhará uma camiseta branca!</p>';
                        break;
                    case 'poa':
                        qualPresente.innerHTML = '<p class="msg_resposta">Essa pessoa ganhará uma camiseta azul!</p>';
                        break;
                    case 'sp':
                        qualPresente.innerHTML = '<p class="msg_resposta">Essa pessoa ganhará uma camiseta amarela!</p>';
                        break;
                }
            });
            break;

        case 'australia':
            qualPresente.innerHTML = '<p class="msg_resposta">Essa pessoa vai ganhar uma camiseta verde!</p>';
            break;
        case 'eua':
            //   pegaPaisBrasil.classList.add('escondido');
            qualPresente.innerHTML = '<p class="msg_resposta">Essa pessoa vai ganhar uma camiseta roxa!</p>';
        break;
        case 'inglaterra':
            //   pegaPaisBrasil.classList.add('escondido');
            qualPresente.innerHTML = '<p class="msg_resposta">Essa pessoa vai ganhar uma camiseta preta!</p>';
        break;
        default:
            //   pegaPaisBrasil.classList.add('escondido');
            qualPresente.innerText = '';
  }
});

