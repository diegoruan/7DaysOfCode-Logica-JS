let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let comida = "";
let categoria = "";
let remover = "";
let pergunta = "sim";

while (pergunta != "não") {
    if (frutas.length == 0 && laticinios.length == 0 && congelados.length == 0 && doces.length == 0) {
        pergunta = prompt("Você deseja adicionar um item a lista de compras? ditige 'sim' ou 'não'.");
    }
    else {
        pergunta = prompt("Você deseja adicionar um item a lista de compras? ditige 'sim', 'não' ou 'remover' para retirar um item da lista.");
    }

    while (pergunta != "sim" && pergunta != "não" && pergunta != "remover") {
        alert('Operação não reconhecida!');
        pergunta = prompt("Você deseja adicionar um item a lista de compras? ditige 'sim' ou 'não'.");
    }

    if (pergunta === "não") {
        break;
    }

    if (pergunta == "sim") {
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
            alert("categoria inválida!");
        }   
    }

    if (pergunta === "remover") {
        if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
            alert("A lista esta vazia!");
        }
        else {
            remover = prompt(`Escreva o item que deseja remover \nLista de compras:\n  Frutas: ${frutas} \n  Laticínios: ${laticinios} \n  Congelados: ${congelados} \n  Doces: ${doces}`);

            if (frutas.includes(remover) == true) {
                frutas.splice(frutas.indexOf, 1);
                alert(`O item ${remover} não esta mais na lista!`)
            }
            else if (laticinios.includes(remover) == true) {
                laticinios.splice(laticinios.indexOf, 1);
                alert(`O item ${remover} não esta mais na lista!`)
            }
            else if (congelados.includes(remover) == true) {
                congelados.splice(congelados.indexOf, 1);
                alert(`O item ${remover} não esta mais na lista!`)
            }
            else if (doces.includes(remover) == true) {
                doces.splice(doces.indexOf, 1);
                alert(`O item ${remover} não esta mais na lista!`)
            }
            else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
        }
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas} \n  Laticínios: ${laticinios} \n  Congelados: ${congelados} \n  Doces: ${doces}`);
