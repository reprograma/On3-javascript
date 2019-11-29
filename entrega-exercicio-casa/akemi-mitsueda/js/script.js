let getSelectCountry = document.getElementById('selectCountry')
let getSelectBrazilianCity = document.getElementById('selectBrazilianCity')
let getShowPresent = document.getElementById('showPresent')
let getShowTshirt = document.getElementById('showTshirt')
let tshirts = ['white-tshirt.jpg', 'yellow-tshirt.jpg', 'blue-tshirt.jpg', 'green-tshirt.jpg', 'purple-tshirt.jpg', 'black-tshirt.jpg']

selectCountry.addEventListener('change', function () {
  let getCountryOption = getSelectCountry.value
  let showSelectBrazilianCity = getSelectBrazilianCity.classList.remove('hide')
  let hideSelectBrazilianCity = getSelectBrazilianCity.classList.add('hide')
  let showShowTshirt = getShowTshirt.classList.remove('hide')
  let hideShowTshirt = getShowTshirt.classList.add('hide')
  let getShowPresent = document.getElementById('showPresent')
  let hideShowPresent = getShowPresent.innerHTML = ''

  switch (getCountryOption) {
    case 'brazil':
      getSelectBrazilianCity.classList.remove('hide')
      getShowTshirt.classList.add('hide')
      hideShowPresent

      selectBrazilianCity.addEventListener('change', function() {
        let getBrazilianCityOption = getSelectBrazilianCity.value

        switch (getBrazilianCityOption) {
          case 'caxias':
            getShowTshirt.classList.remove('hide')
            getShowPresent.innerHTML = '<p>Você vai ganhar uma camiseta branca!</p>'
            getShowTshirt.src = `../img/${tshirts[0]}`
            break
          case 'sp':
            getShowTshirt.classList.remove('hide')
            getShowPresent.innerHTML = '<p>Você vai ganhar uma camiseta amarela!</p>'
            getShowTshirt.src = `../img/${tshirts[1]}`
            break
          case 'poa':
            getShowTshirt.classList.remove('hide')
            getShowPresent.innerHTML = '<p>Você vai ganhar uma camiseta azul!</p>'
            getShowTshirt.src = `../img/${tshirts[2]}`
            break
          default:
            getShowTshirt.classList.add('hide')
            getShowPresent.innerHTML = ''
            hideSelectBrazilianCity
            break
        }
      })
      break

    case 'australia':
      hideSelectBrazilianCity
      getShowTshirt.classList.remove('hide')
      getShowPresent.innerHTML = '<p>Você vai ganhar uma camiseta verde!</p>'
      getShowTshirt.src = `../img/${tshirts[3]}`
      break
    case 'eua':
      hideSelectBrazilianCity
      getShowTshirt.classList.remove('hide')
      getShowPresent.innerHTML = '<p>Você vai ganhar uma camiseta roxa!</p>'
      getShowTshirt.src = `../img/${tshirts[4]}`
      break
    case 'uk':
      hideSelectBrazilianCity
      getShowTshirt.classList.remove('hide')
      getShowPresent.innerHTML = '<p>Você vai ganhar uma camiseta preta!</p>'
      getShowTshirt.src = `../img/${tshirts[5]}`
      break
    default:
      getShowTshirt.classList.add('hide')
      hideSelectBrazilianCity
      hideShowPresent
      break
  }
})