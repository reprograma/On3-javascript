/* Entrega dos presentes de natal. Nesse natal eu gostaria de enviar presentes para meus amigos. 
O único problema é a logística, pois tenho amigos que moram em outras cidades e países.
A relação dos lugares/presentes é:

-Brasil
    Caxias do Sul: Uma camiseta branca
    Porto Alegre: Uma camiseta azul
    São Paulo: Uma camiseta amarela
-Austrália: Uma camiseta verde
-Estados Unidos: Uma camiseta roxa
-Londres: Uma camiseta preta

O que deve ser feito?
-Desenhar o fluxograma do projeto no papel
-HTML
-Javascript
-O CSS não é necessário, só se você quiser
-Bônus: Utilizar arrays, função e switch case
-Bônus: Adicionar imagens dos presentes */

function addGiftPicture(src, containerId) {
    let picture = document.createElement('img');
    picture.src = src;

    let container = document.getElementById(containerId);
    container.innerHTML = '';
    container.appendChild(picture);
}

let selectCity = document.getElementById('city');
let hiddenCity = document.getElementById('cityContainer');
hiddenCity.style.display = 'none';
let selectCountry = document.getElementById('country');
let imgContainer = document.getElementById('giftImage');

selectCountry.addEventListener('change', function() {
    let getCountryOption = selectCountry.value;
    let showCountryMgs = document.getElementById('message');

    // if (getCountryOption === 'brasil') {
    //     hiddenCity.style.display = 'block';
    // } else {
    //     hiddenCity.style.display = 'none';
    // }

    hiddenCity.style.display = getCountryOption === 'brasil' ? 'block' : 'none';

    switch (getCountryOption) {
        case 'brasil':
            showCountryMgs.innerHTML = '';
            imgContainer.innerHTML = '';
            break;

        case 'australia':
            showCountryMgs.innerText = 'Essa pessoa vai ganhar uma camiseta verde';
            addGiftPicture('images/green.png', 'giftImage');
            break;

        case 'eua':
            showCountryMgs.innerText = 'Essa pessoa vai ganhar uma camiseta roxa';
            addGiftPicture('images/purple.jpg', 'giftImage');
            break;

        case 'londres':
            showCountryMgs.innerText = 'Essa pessoa vai ganhar uma camiseta preta';
            addGiftPicture('images/black.jpg', 'giftImage');
            break;

        default:
            showCountryMgs.innerText = '';
            imgContainer.innerHTML = '';
    }
})

selectCity.addEventListener('change', function() {
    let getCityOption = selectCity.value;
    let showCityMsg = document.getElementById('message');

    switch (getCityOption) {
        case 'caxias':
            showCityMsg.innerText = 'Essa pessoa vai ganhar uma camiseta branca';
            addGiftPicture('images/white.jpg', 'giftImage');
            break;
        
        case 'portoAlegre':
            showCityMsg.innerText = 'Essa pessoa vai ganhar uma camiseta azul';
            addGiftPicture('images/blue.jpg', 'giftImage');
            break;

        case 'spaulo':
            showCityMsg.innerText = 'Essa pessoa vai ganhar uma camiseta amarela';
            addGiftPicture('images/yellow.jpg', 'giftImage');
            break;
        
        default:
            showCityMsg.innerText = '';
            imgContainer.innerHTML = '';
    }
})