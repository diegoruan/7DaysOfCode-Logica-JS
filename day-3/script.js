let area = prompt("Qual área você quer seguir? digite 1 para 'Front-End' e 2 para 'Back-End':");
let linguagem = "";

if (area === "1") {
    linguagem = prompt("Você quer aprender 'React' ou 'Vue'?");
    area = "Front-End";
}
else if (area === "2") {
    linguagem = prompt("Você quer aprender 'C#' ou 'Java'?");
    area = "Back-end";
}
else {
    alert("Você inseriu um valor inválido.");
}

const especializacao = prompt("Você quer continuar se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? digite 1 para seguir se especializando ou 2 para se tornar Fullstack:");

if (especializacao === "1") {
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (especializacao === "2") {
    alert(`Está na hora de aprender outras linguagens além de ${linguagem} para se tornar Fullstack!`);
}
else {
    alert("Você inseriu um valor inválido.");
}

let mensagemTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de se especializar ou de conhecer? se sim digite 1");

while (mensagemTecnologia === "1") {
    let perguntaTecnologia = prompt("Qual?");
    alert(`A ${perguntaTecnologia} parece bem interessante!`);
    mensagemTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de se especializar ou de conhecer? se sim digite 1");
}
