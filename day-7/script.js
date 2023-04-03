let num1;
let num2;
let pergunta = "";

function soma(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtracao(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiplicacao(num1, num2) {
    return Number(num1) * Number(num2);
}

function divisao(num1, num2) {
    return Number(num1) / Number(num2);
}

do {
    pergunta = prompt("Escreva uma das operações a seguir: 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.");
    while (pergunta != 'soma' && pergunta != 'subtração' && pergunta != 'multiplicação' && pergunta != 'divisão' && pergunta != 'sair') {
        alert("Operação inválida!");
        pergunta = prompt("Escreva uma das operações a seguir: 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.");
    }

    if (pergunta === "sair") {
        break;
    }

    num1 = prompt("Insira o primeiro valor:")
    num2 = prompt("Insira o segundo valor:")
    switch (pergunta) {
        case "soma":
            alert(`O resultado da ${pergunta} é ${soma(num1, num2)}`);
            break;
        case "subtração":
            alert(`O resultado da ${pergunta} é ${subtracao(num1, num2)}`);
            break;
        case "multiplicação":
            alert(`O resultado da ${pergunta} é ${multiplicacao(num1, num2)}`);
            break;
        case "divisão":
            alert(`O resultado da ${pergunta} é ${divisao(num1, num2)}`);
            break;  
    }
    
}
while (pergunta === 'soma' || pergunta === 'subtração' || pergunta === 'multiplicação' || pergunta === 'divisão');

alert("Até a próxima");