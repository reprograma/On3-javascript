let getCountryName = document.getElementById('selectCountry');

getCountryName.addEventListener('change', function() {
  let getCountryValue = getCountryName.value;
  let getCountryBrazil = document.getElementById('selectCountryBrazil');
  let resultGift = document.getElementById('showMessage');
  let resultTshirt = document.getElementById('imageTshirt');

  let Tshirts = ['tshirt-black','tshirt-blue','tshirt-green','tshirt-purple','tshirt-white','tshirt-yellow'];

  switch (getCountryValue) {
    case 'br':
      resultGift.innerText = '';
      getCountryBrazil.classList.remove('hidden');

      getCountryBrazil.addEventListener('change', function() {
        let getCountryBrazilValue = getCountryBrazil.value;

        if (getCountryBrazilValue=== 'cxs') {
          resultGift.innerText = 'Essa pessoa vai ganhar uma camiseta branca.';
          resultTshirt.classList.remove('hidden');
          resultTshirt.src = `images/${Tshirts[4]}.jpg`;
        } else if (getCountryBrazilValue === 'poa') {
          resultGift.innerText = 'Essa pessoa vai ganhar uma camiseta azul.';
          resultTshirt.classList.remove('hidden');
          resultTshirt.src = `images/${Tshirts[1]}.jpg`;
        } else if (getCountryBrazilValue === 'sp') {
          resultGift.innerText = 'Essa pessoa vai ganhar uma camiseta amarela.'
          resultTshirt.classList.remove('hidden');
          resultTshirt.src = `images/${Tshirts[5]}.jpg`;
        } else {
          resultGift.innerText = '';
        }
      });
      break;
    case 'aus':
      getCountryBrazil.classList.add('hidden');
      resultGift.innerText = 'Essa pessoa vai ganhar uma camiseta verde.'
      resultTshirt.classList.remove('hidden');
      resultTshirt.src = `images/${Tshirts[2]}.jpg`;
      break;
    case 'usa':
      getCountryBrazil.classList.add('hidden');
      resultGift.innerText = 'Essa pessoa vai ganhar uma camiseta roxa.'
      resultTshirt.classList.remove('hidden');
      resultTshirt.src = `images/${Tshirts[3]}.jpg`;
      break;
    case 'uk':
      getCountryBrazil.classList.add('hidden');
      resultGift.innerText = 'Essa pessoa vai ganhar uma camiseta preta.'
      resultTshirt.classList.remove('hidden');
      resultTshirt.src = `images/${Tshirts[0]}.jpg`;
      break;
    default:
      getCountryBrazil.classList.add('hidden');
      resultTshirt.classList.add('hidden');
      resultGift.innerText = '';
  }
});