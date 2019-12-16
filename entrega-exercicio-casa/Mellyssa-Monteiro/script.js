/* 
escolher país:
se austrália, mostrar msg: camisa verde
se brasil, abrir opção de cidades:
    se caxias, mostrar msg: camisa branca;
    se porto alegre, mostrar msg: camisa azul;
    se sp, mostrar msg: camisa amarela
se eua, mostrar msg: camisa roxa 
se inglaterra, mostrar mensagem: camisa preta
*/

let qualCamiseta = document.getElementById('face-cidade');

// let camisetas = ['jackblack', 'jackblue', 'jackyellow','jackpurple', 'jackwhite', 'jackgreen' ];

/* qualCamiseta.classList.remove('escondido');
qualCamiseta.src = `img/${camisetas[2]}.png`;*/


let getselecionaPais = document.getElementById('escolhaPais');

getselecionaPais.addEventListener('change', function (){
    let getOpcaoPais = getselecionaPais.value;
    let getmostraMensagemPais = document.getElementById('mostraMensagemPais');
    if (getselecionaPais.value === 'br'){
        getmostraMensagemPais.innerText = "";
        document.getElementById('face-pais').style.display = "none";
        document.getElementById('mostrar').style.display = 'inline';
        
        //SELECIONA CIDADE
        let getselecionaCidade = document.getElementById('escolhaCidade');

        getselecionaCidade.addEventListener('change', function (){
            let getOpcao = getselecionaCidade.value;
            let getmostraMensagem = document.getElementById('mostraMensagem');
        
            switch (getOpcao){
                case 'caxias':
                    getmostraMensagem.innerText = "Enzo vai ganhar uma camisa branca";
                    document.getElementById("face-cidade").src = 'img/jackwhite.png';
                    break;
                case 'poa':
                    getmostraMensagem.innerText = "Julia vai ganhar uma camisa azul";
                    document.getElementById("face-cidade").src = 'img/jackblue.png';
                    break;
                case 'sp':
                    getmostraMensagem.innerText = "Caio vai ganhar uma camisa amarela";
                    document.getElementById("face-cidade").src = 'img/jackyellow.png';
                    break;
                default:
                    getmostraMensagem.innerText = "";
                    document.getElementById("face-cidade").src = "";
            }
        
        });
        //SELECIONA CIDADE FIM
    }else {
        document.getElementById('mostrar').style.display = 'none';
        document.getElementById("face-cidade").src = "";
        document.getElementById('face-pais').style.display = "inline";
        
        switch(getOpcaoPais){
            case 'aus':
                getmostraMensagemPais.innerText = "Mary vai ganhar uma camisa verde";
                document.getElementById("face-pais").src = 'img/jackgreen.png';
                break;
            case 'eua':
                getmostraMensagemPais.innerText = "John vai ganhar uma camisa roxa";
                document.getElementById("face-pais").src = 'img/jackpurple.png';                
                break;
            case 'eng':
                getmostraMensagemPais.innerText = "James vai ganhar uma camisa preta";
                document.getElementById("face-pais").src = 'img/jackblack.png';
                break;
            default:
                getmostraMensagemPais.innerText = "";
                document.getElementById("face-pais").src = "";
        }
    }
})



