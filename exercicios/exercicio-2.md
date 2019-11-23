### Exercícios de manipulação do DOM


- Crie um HTML com a seguintes sentenças:
  - Título: Venda de apartamentos
  - Apartamento de 2 dormitórios, clique [aqui] e veja o preço
    - Ao clicar, mostre a seguinte mensagem: Preço do imóvel: R$ 500.000,00
  - Apartamento de 3 dormitórios, clique [aqui] e veja o preço
    - Ao clicar, mostre a seguinte mensagem: Preço do imóvel: R$ 600.000,00



```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1>Venda de apartamentos</h1>
    <div>Apartamento de dois dormitórios, clique e veja o preço:</div>
    <button id="btnAptoDoisDorm">Clique aqui</button>
    <div id="precoAptoDoisDorm"></div>
    <br>
    <hr>
    <br>
    <div>Apartamento de três dormitórios, clique e veja o preço:</div>
    <button id="btnAptoTresDorm">Cliqui aqui</button>
    <div id="precoAptoTresDorm"></div>
    <script src="js/script.js"></script>
  </body>
</html>
```

```js
function mostraPrecoAptoDoisDorm() {
  let getBtnAptoDoisDorm = document.querySelector('#btnAptoDoisDorm'); // variavel do botao

  getBtnAptoDoisDorm.addEventListener('click', function(){
    let getPrecoAptoDoisDorm = document.querySelector('#precoAptoDoisDorm');
    getPrecoAptoDoisDorm.innerText = 'Preço do imóvel: R$ 500.000,00';
  })
};

function mostraPrecoAptoTresDorm() {
  let getBtnAptoTresDorm = document.querySelector('#btnAptoTresDorm');

  getBtnAptoTresDorm.addEventListener('click', function(){
    let getPrecoAptoTresDorm = document.querySelector('#precoAptoTresDorm');
    getPrecoAptoTresDorm.innerText = 'Preço do imóvel: R$ 600.000,00';
  })
};

mostraPrecoAptoDoisDorm();
mostraPrecoAptoTresDorm();
```

***

- Crie um HTML com a seguintes opções, dentro de um dropdown (select):
  - Título: Horário das atividades
  - Dança
  - Ioga
  - Natação
  - Boxe

  - Quando o usuário trocar de opção(change), mostre as seguintes frases no HTML:
    - Dança
      - Segundas e quartas, 19h
    - Ioga
      - Todos os dias, 8h
    - Natação
      - Terças e quintas, 20h
    - Boxe
      - Sextas, 21h

***

- Crie um HTML com um botão Salvar pedindo para o usuário digitar o seu nome. Ao clicar no botão verifique se ele preencheu o nome dele (se ele escreveu algum valor no campo). Se tiver escrito, mostre a seguinte mensagem no HTML: '[Nomedousuario], dados salvos com sucesso.'. Se ele não tiver escrito nada, mostre a seguinte mensagem no HTML: 'Por favor digite seu nome.'. Se você quiser, estilize a mensagem de erro ou sucesso com CSS.

***

- Refatore o exercício do cálculo da média do aluno. Ao invés de prompt() para coletar a nota, vocês vão utilizar um formulário, e ao invés de um alerta na tela vocês vão mostrar as mensagens no HTML (pode ser feito sem a parte bônus, somente mostrando se o aluno foi aprovado ou reprovado).
