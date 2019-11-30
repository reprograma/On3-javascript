let primeiraFruta = prompt('Digite um nome de fruta');
let segundaFruta = prompt('Digite outra nome de fruta');

(primeiraFruta === segundaFruta) ? alert(`${primeiraFruta} é igual a ${segundaFruta}`) : alert(`${primeiraFruta} é diferente de ${segundaFruta}`)

  // Código com uma função
  function frutas() {
    let primeiraFruta = prompt('Digite um nome de fruta');
    let segundaFruta = prompt('Digite outra nome de fruta');

    (primeiraFruta === segundaFruta) ? alert(`${primeiraFruta} é igual a ${segundaFruta}`) : alert(`${primeiraFruta} é diferente de ${segundaFruta}`)
  }

  frutas(); // O código acima só é executado se eu chamar essa função

  // Código com uma função com parâmetros
  function frutas(primeiraFruta, segundaFruta) {
    (primeiraFruta === segundaFruta) ? alert(`${primeiraFruta} é igual a ${segundaFruta}`) : alert(`${primeiraFruta} é diferente de ${segundaFruta}`)
  }

  // O código abaixo só é executado se eu chamar essa função
  frutas(primeiraFruta = prompt('Digite um nome de fruta'), segundaFruta = prompt('Digite outra nome de fruta'));

  // Como as posições no js começam em 0, para acessar a terceira posição eu preciso chamar a segunda posição dentro do arry
  let animais = ['Gato', 'Cachorro', 'Peixe', 'Girafa', 'Elefante'];
  let terceiroAnimal = animais[2];
  console.log(terceiroAnimal);
  //ou
  alert(terceiroAnimal);


  let animais = ['Gato', 'Cachorro', 'Peixe', 'Girafa', 'Elefante'];
  console.log(animais[2]);
  //ou
  alert(animais[2]);