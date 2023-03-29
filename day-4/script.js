const minimo = 0;
const maximo = 10;
const numero = Math.floor(Math.random()*(maximo-minimo+1)+minimo);

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


