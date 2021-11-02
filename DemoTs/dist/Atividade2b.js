"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./modelo/Pessoa"); //importa lista declarada no arquivo Pessoa.ts
function escolherNome(id) {
    const idEscolhido = id.value; //declaração da constante  do id escolhido
    //busca do valor da constante
    let nomeEscolhido = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/nome seja inexistente
    Pessoa_1.pessoas.forEach(pessoa => {
        if (pessoa.id === idEscolhido) { //comparar id escolhido com as pessoas que o laço está percorrendo
            nomeEscolhido = pessoa.nome; //recebe na variável nome escolhido a pessoa selecionada
        } //fim do laço 
    }); //fim da função
    document.getElementById("idNome").innerHTML = nomeEscolhido; //recebe valor do nome da pessoa selecionada dentro do id bio do parágrafo
}
//# sourceMappingURL=Atividade2b.js.map