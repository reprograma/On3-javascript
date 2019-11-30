function somaValores() {
    let valorUm = parseInt(prompt('Digite um número'));
    let valorDois = parseInt(prompt('Digite outro número'));
    //console.log(valorUm, valorDois);
  
    isNaN(4) // false
    isNaN('t') // true
  
    if (isNaN(valorUm, valorDois) === true) {
      alert('Por favor digite um número');
    } else {
      let soma = (valorUm + valorDois);
      alert(soma);
    }
  
  }