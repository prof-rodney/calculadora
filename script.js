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

function definirClasseBotao(botao, textoBotao) {
    if (!isNaN(textoBotao) || textoBotao === ".") {
        botao.classList.add("btn-numero");
    } else if (
        textoBotao === "+" ||
        textoBotao === "-" ||
        textoBotao === "*" ||
        textoBotao === "/"
    ) {
       botao.classList.add("btn-operador"); 
    } else if (
        textoBotao === "C" ||
        textoBotao === "DEL"
    ) {
        botao.classList.add("btn-limpar");
    } else if (textoBotao === "=") {
        botao.classList.add("btn-igual");
    } else {
        botao.classList.add("btn-funcao");
    }

    if (textoBotao === "0") {
        botao.classList.add("btn-zero");
    }
}

function processarBotao(valor) {
    if (valor === "C") {
        limparDisplay();
        return;
    }

    if (valor === "DEL") {
        apagarUltimoCaracter();
        return;
    }

    if (valor === "=") {
        calcularResultado();
        return;
    }

    adicionarTexto(valor);
}

function adicionarTexto(valor) {
    expressao += valor;
    atualizarDisplay();
}

function limparDisplay() {
    expressao = "";
    atualizarDisplay();
}

function apagarUltimoCaracter() {
    expressao = expressao.slice(0,-1);
    atualizarDisplay();
}

function atualizarDisplay() {
    display.value = expressao;
}

function calcularResultado() {
    try {
        const resultado = Function("return " + expressao)();
        expressao = String(resultado);
        atualizarDisplay()

    } catch (error) {
        display.value = "Deu ruim";
        expressao = "";
    }
}

iniciarCalculadora();