let getNomePais = document.getElementById('selecionaPais');

getNomePais.addEventListener('change', function () {
    let getOpcao = getNomePais.value;
    let selecionaBrasil = document.getElementById('selecionaBrasil');
    let getMostraPresente = document.getElementById('mostraPresente');
    let qualCamiseta = document.getElementById('imagemCamiseta');

    let camisetas = ['branca', 'azul', 'amarela', 'verde', 'roxa', 'preta'];

    switch (getOpcao) {
        case 'brasil':
            selecionaBrasil.classList.remove('escondido');
            getMostraPresente.innerText = '';

            selecionaBrasil.addEventListener('change', function () {
                getValueCidades = selecionaBrasil.value;

                if (getValueCidades === 'caxiasDoSul') {
                    getMostraPresente.innerText = 'Uma camiseta branca.'
                    qualCamiseta.src = `img/${camisetas[0]}.png`;
                } else if (getValueCidades === 'portoAlegre') {
                    getMostraPresente.innerText = 'Uma camiseta azul.'
                    qualCamiseta.src = `img/${camisetas[1]}.png`;
                } else if (getValueCidades === 'saoPaulo') {
                    getMostraPresente.innerText = 'Uma camiseta amarela.'
                    qualCamiseta.src = `img/${camisetas[2]}.png`;
                } else {
                    getMostraPresente.innerText = '';
                }
            });
            break;
        case 'australia':
            selecionaBrasil.classList.add('escondido');
            getMostraPresente.innerText = 'Uma camiseta verde.';
            qualCamiseta.classList.remove('escondido');
            qualCamiseta.src = `img/${camisetas[3]}.png`;
            break;
        case 'estadosUnidos':
            selecionaBrasil.classList.add('escondido');
            getMostraPresente.innerText = 'Uma camiseta roxa.';
            qualCamiseta.classList.remove('escondido');
            qualCamiseta.src = `img/${camisetas[4]}.png`;
            break;
        case 'londres':
            selecionaBrasil.classList.add('escondido');
            getMostraPresente.innerText = 'Uma camiseta preta.';
            qualCamiseta.classList.remove('escondido');
            qualCamiseta.src = `img/${camisetas[5]}.png`;
            break;
        default:
            selecionaBrasil.classList.add('escondido');
            getMostraPresente.innerText = '';
    }
});