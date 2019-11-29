let getPresente = document.getElementById('presente');
let getimgPresente = document.getElementById('imgPresente');

let getSelectPaises = document.getElementById('paises');
getSelectPaises.addEventListener('change', function () {
    let getOpcaoP = getSelectPaises.value;
    
    switch (getOpcaoP) {
        case 'defaultP':
            getPresente.innerText = 'Não fique sem presente, selecione seu país!';
            break;
        case 'opcaoP1':
            document.getElementById('cid').style.display = 'block';
            break;
        case 'opcaoP2':
            getPresente.innerText = 'Feliz Natal! Você ganhou uma camiseta verde!';
            getimgPresente.src= "img/verde.png";
            break;
        case 'opcaoP3':
            getPresente.innerText = 'Feliz Natal! Você ganhou uma camiseta roxa!';
            getimgPresente.src= "img/roxo.png";
            break;
        case 'opcaoP4':
            getPresente.innerText = 'Feliz Natal! Você ganhou uma camiseta preta!';
            getimgPresente.src= "img/preta.png";
        break;
    }
});


let getSelectCidade = document.getElementById('cidade');
getSelectCidade.addEventListener('change', function () {
    let getOpcao = getSelectCidade.value;
    switch (getOpcao) {
        case 'default':
            getPresente.innerText = 'Não fique sem presente, selecione sua cidade!';
            break;
        case 'cs':
            getPresente.innerText = 'Feliz Natal! Você ganhou uma camiseta branca!';
            getimgPresente.src= "img/branca.png";
            break;
        case 'pa':
            getPresente.innerText = 'Feliz Natal! Você ganhou uma camiseta azul!';
            getimgPresente.src= "img/azul.png";
            break;
        case 'sp':
            getPresente.innerText = 'Feliz Natal! Você ganhou uma camiseta amarela!';
            getimgPresente.src= "img/amarela.png";
            break;
    }
});

