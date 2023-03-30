let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let comida = "";
let categoria = "";
let pergunta = "sim";

while (pergunta = "sim") {
    pergunta = prompt("Você deseja adicionar um item a lista de compras? ditige 'sim' ou 'não'.");

    while (pergunta != "sim" && pergunta != "não") {
        alert('Operação não reconhecida!');
            pergunta = prompt("Você deseja adicionar um item a lista de compras? ditige 'sim' ou 'não'.");
    }

    if (pergunta === "não") {
        break;
    }

    comida = prompt("Qual item você deseja inserir?");
    categoria = prompt("Digite uma das categorias a seguir: 'frutas', 'laticínios', 'congelados' ou 'doces'.");

    if (categoria === "frutas") {
        frutas.push(comida);
    }
    else if (categoria === "laticínios") {
        laticinios.push(comida);
    }
    else if (categoria === "congelados") {
        congelados.push(comida);
    }
    else if (categoria === "doces") {
        doces.push(comida);
    }
    else {
        alert("categoria inválida!")
    }   
}

alert(`Lista de compras:\n  Frutas: ${frutas} \n  Laticínios: ${laticinios} \n  Congelados: ${congelados} \n  Doces: ${doces}`)
