let pais = document.getElementById("pais");
let presente = document.getElementById("presente");
let brCidades = document.getElementById("brCidades");
let camiseta = document.getElementById("imagemCamiseta");
let camisetas = [
  "camiseta-branca",
  "camiseta-azul",
  "camiseta-amarela",
  "camiseta-verde",
  "camiseta-roxa",
  "camiseta-preta"
];

pais.addEventListener("change", function(event) {
  let paisValue = this.value;

  switch (paisValue) {
    case "brasil":
      presente.innerHTML = "";
      brCidades.style.display = "inline-block";

      brCidades.addEventListener("change", function() {
        let cidadeValue = brCidades.value;

        if (cidadeValue == "caxiasDoSul") {
          presente.innerHTML = `<p> O presente será uma camiseta branca.</p>`;

          camiseta.classList.remove("escondido");
          camiseta.src = `img/${camisetas[0]}.jpg`;
        } else if (cidadeValue == "portoAlegre") {
          presente.innerHTML = `<p> O presente será uma camiseta azul.</p>`;

          camiseta.classList.remove("escondido");
          camiseta.src = `img/${camisetas[1]}.jpg`;
        } else if (cidadeValue == "saoPaulo") {
          presente.innerHTML = `<p> O presente será uma camiseta amarela.</p>`;

          camiseta.classList.remove("escondido");
          camiseta.src = `img/${camisetas[2]}.jpg`;
        } else if (cidadeValue == "default") presente.innerHTML = "";
        else {
          presente.innerHTML = "";
        }
      });
      break;
    case "australia":
      presente.innerHTML = `<p> O presente será uma camisa verde.</p>`;
      brCidades.style.display = "none";

      camiseta.classList.remove("escondido");
      camiseta.src = `img/${camisetas[3]}.jpg`;

      break;
    case "eua":
      presente.innerHTML = `<p> O presente será uma camisa roxa.</p>`;
      brCidades.style.display = "none";

      camiseta.classList.remove("escondido");
      camiseta.src = `img/${camisetas[4]}.jpg`;

      break;
    case "londres":
      presente.innerHTML = `<p> O presente será uma camisa preta.</p>`;
      brCidades.style.display = "none";

      camiseta.classList.remove("escondido");
      camiseta.src = `img/${camisetas[5]}.jpg`;

      break;
    case "default":
      presente.innerHTML = "";
      brCidades.style.display = "none";

      camiseta.style.display = "none";

      break;
    default:
      presente.innerHTML = "";
      brCidades.style.display = "none";
  }
});
