let selectCountry = document.getElementById('country');
let cityBox = document.getElementById('boxCity');
let selectCity = document.getElementById('city');

selectCountry.addEventListener('change', function () {
    let showOptionCountry = selectCountry.value;
    let msg = document.querySelector('#message');
    let img = document.createElement('img');
    img.setAttribute('id', 'photo');

    msg.innerHTML = ''

    switch (showOptionCountry) {
        case 'br':
            cityBox.style.display = 'block'

            selectCity.addEventListener('change', function () {
                let showOptionCity = selectCity.value;

                if (showOptionCity === 'cxs') {
                    msg.innerText = 'Vai ganhar uma camiseta branca.'
                    img.setAttribute('src', 'camiseta-branca.png')
                } else if (showOptionCity === 'poa') {
                    msg.innerText = 'Vai ganhar uma camiseta azul.'
                    img.setAttribute('src', 'camiseta-azul.png')
                } else if (showOptionCity === 'sp') {
                    msg.innerText = 'Vai ganhar uma camiseta amarela.'
                    img.setAttribute('src', 'camiseta-amarela.png')
                } else {
                    msg.innerText = '';
                }
                msg.appendChild(img)

            });
            break;
        case 'aus':
            cityBox.style.display = 'none'
            img.setAttribute('src', 'camiseta-verde.png')
            msg.innerHTML = 'Vai ganhar uma camiseta verde'
            break;
        case 'eua':
            cityBox.style.display = 'none'
            msg.innerHTML = 'Vai ganhar uma camiseta roxa'
            img.setAttribute('src', 'camiseta-roxa.png')
            break;
        case 'uk':
            cityBox.style.display = 'none'
            msg.innerHTML = 'Vai ganhar uma camiseta preta'
            img.setAttribute('src', 'camiseta-preta.png')
            break;
        default:
            cityBox.style.display = 'none'
            msg.innerHTML = 'Selecione uma opção para ver seu presente!'
    }

    msg.appendChild(img)
});

