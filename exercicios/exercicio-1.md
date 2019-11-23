### Os exercícios abaixo devem ser feitos com operador ternário, arrays, funções e/ou switch case

- Refatore o exercício abaixo utilizando operador ternário (vocês fizeram esse exercício com if/else na aula passada)
  - Peça para o usuário digitar dois nomes de frutas e depois compare uma com a outra
  - Se elas forem iguais, mostre um alerta na tela avisando que elas são iguais
  - Se não forem, mostre um alerta na tela avisando que são frutas diferentes


  ```js
    let primeiraFruta = prompt('Digite um nome de fruta');
    let segundaFruta = prompt('Digite outra nome de fruta');

    (primeiraFruta === segundaFruta) ? alert(`${primeiraFruta} é igual a ${segundaFruta}`) : alert(`${primeiraFruta} é diferente de ${segundaFruta}`)
  ```

  ```js
    // Código com uma função
    function frutas() {
      let primeiraFruta = prompt('Digite um nome de fruta');
      let segundaFruta = prompt('Digite outra nome de fruta');

      (primeiraFruta === segundaFruta) ? alert(`${primeiraFruta} é igual a ${segundaFruta}`) : alert(`${primeiraFruta} é diferente de ${segundaFruta}`)
    }

    frutas(); // O código acima só é executado se eu chamar essa função
  ```

  ```js
    // Código com uma função com parâmetros
    function frutas(primeiraFruta, segundaFruta) {
      (primeiraFruta === segundaFruta) ? alert(`${primeiraFruta} é igual a ${segundaFruta}`) : alert(`${primeiraFruta} é diferente de ${segundaFruta}`)
    }

    // O código abaixo só é executado se eu chamar essa função
    frutas(primeiraFruta = prompt('Digite um nome de fruta'), segundaFruta = prompt('Digite outra nome de fruta'));
  ```

***

- Crie um array com 5 espécies de animais e mostre um alerta (ou no console) na tela o animal que está na posição 3

- Peça para o usuário digitar dois valores. Como vamos usar o prompt() precisamos converter esses valores para números (com o parseInt()). Depois da conversão, faça a soma dos dois números e mostre um alerta com o  resultado.

- Receba um número, verifique se ele é positivo, negativo ou zero e mostre o resultado na tela. Se o valor não for numérico OU o usuário não digitar nenhum valor, mostre um alerta na tela solicitando que o usuário digite um número.

- Peça para o usuário digitar 3 números e mostre na tela qual deles é o maior. Primeiro verifique se os valores são números. Senão forem, mostre um alerta avisando que não são números.

- Crie uma função para verificar se um banco está aberto ou não
  - O horário de atendimento do banco é de segunda a sexta, das 10h até às 16h.
  - *Bônus:* Utilizar a função Date() para pegar o dia/hora atual
