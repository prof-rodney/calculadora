const display = document.getElementById("display");
const areaBotoes = document.getElementById("area-botoes");

let expressao = "";

const botoesPadrao = [
    "C","DEL","/","*",
    "7","8","9","-",
    "4","5","6","+",
    "1","2","3","=",
    "0",".","(",")"
];

function iniciarCalculadora() {
    criarBotoes();
}

function criarBotoes() {
    areaBotoes.innerHTML =  "";

    botoesPadrao.forEach(function(textoBotao){
        const botao = document.createElement("button");
        botao.textContent = textoBotao;
        definirClasseBotao(botao, textoBotao);

        botao.addEventListener("click", function(){
            processarBotao(textoBotao);
        });

        areaBotoes.appendChild(botao);
    });
}