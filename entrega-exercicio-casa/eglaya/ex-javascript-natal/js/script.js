let pegarCountry = document.getElementById('country');

pegarCountry.addEventListener('change', function() {
	let pegarOpcao = pegarCountry.value;
	let Result = document.getElementById('result');
	
	switch (pegarOpcao) {
		case'aus':
			Result.innerText = 'Uma camiseta verde!';
			break;
		case'br':
			let pegarCidade = document.getElementById('city').value;
				if (pegarCidade === 'cxs') {
					Result.innerText = 'Uma camiseta branca!';
				} else if (pegarCidade === 'poa') {
					Result.innerText = 'Uma camiseta azul!';
				} else if (pegarCidade === 'sp') {
					Result.innerText = 'Uma camiseta amarela!';
				} else {
					Result.innerText = 'Selecione uma cidade.';
				}
			break;
		case'eua':
			Result.innerText = 'Uma camiseta roxa!';
			break;
		case'uk':
			Result.innerText = 'Uma camiseta preta!';
			break;
		default:
			Result.innerText = 'Selecione uma opção.';
	}
});



