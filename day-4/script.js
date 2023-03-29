const numero = Math.floor(Math.random()*(10-0+1)+0);

let tentativas = 0;

while (tentativas < 3) {
    const pergunta = prompt("Digite um número de 0 a 10:");

    if (pergunta == numero) {
        alert("Parabéns você acertou!");
        tentativas = 3;
    }
    else if (tentativas < 2) {
        tentativas ++;
        alert(`Você tem mais ${3 - tentativas} tentativa!`);
    }
    else {
        alert(`Você perdeu, o número correto era ${numero}!`);
        tentativas ++;
    }
}


