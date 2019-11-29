let getPais = document.getElementById('pais');

getPais.addEventListener('change', function () {
    //veriável do valor dos países
    let getOpcaoPais = getPais.value;
    //variável das cidades do Brasil
    let getCidade = document.getElementById('cidade');
    //variável da mensagem do presente
    let getPresente = document.getElementById('presente');
    //variável camisetas
    let qualCamiseta = document.getElementById('imagemCamiseta')

    let camisetas = ['branca','azul','amarela','verde','roxa','preta'];

    switch (getOpcaoPais) {
        case 'brasil':
            getPresente.innerText = '';
            getCidade.classList.remove('cidadesBrasil');
            

            getCidade.addEventListener('change', function () {
                let getOpcaoCidade = getCidade.value;

                if (getOpcaoCidade === 'caxias') {
                    getPresente.innerText = 'Uma camiseta branca';
                    qualCamiseta.src = `src/${camisetas[0]}.jpg`;
                } else if (getOpcaoCidade === 'poa') {
                    getPresente.innerText = 'Uma camiseta azul';
                    qualCamiseta.src = `src/${camisetas[1]}.jpg`;
                } else if (getOpcaoCidade === 'saoPaulo') {
                    getPresente.innerText = 'Uma camiseta amarela';
                    qualCamiseta.src = `src/${camisetas[2]}.jpg`;
                } else {
                    getPresente.innerText = '';
                }
            });

            break;
        case 'australia':
            getCidade.classList.add('cidadesBrasil')
            getPresente.innerText = 'Uma camiseta verde';
            qualCamiseta.classList.remove('cidadesBrasil');
            qualCamiseta.src = `src/${camisetas[3]}.jpg`;
            break;

        case 'eua':
            getCidade.classList.add('cidadesBrasil')
            getPresente.innerText = 'Uma camiseta roxa';
            qualCamiseta.classList.remove('cidadesBrasil');
            qualCamiseta.src = `src/${camisetas[4]}.jpg`;
            break;

        case 'londres':
            getCidade.classList.add('cidadesBrasil')
            getPresente.innerText = 'Uma camiseta preta';
            qualCamiseta.classList.remove('cidadesBrasil');
            qualCamiseta.src = `src/${camisetas[5]}.jpg`;
            break;

        default:
            getCidade.classList.add('cidadesBrasil')
            getPresente.innerText = 'Selecione onde você mora para ver seu presente.';
    }
});
