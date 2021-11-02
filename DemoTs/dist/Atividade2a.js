"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./modelo/Pessoa"); //importa lista declarada no arquivo Pessoa.ts
function escolherBio(idBio) {
    let bioEscolhida = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/bio seja inexistente
    Pessoa_1.pessoas.forEach(pessoa => {
        if (pessoa.id == idBio.value) { //comparar id escolhido com as pessoas que o laço está percorrendo
            bioEscolhida = pessoa.bio; //recebea na variável bio escolhida a pessoa selecionada
        } //fim do laço 
    }); //fim da função
    document.getElementById("Bio").innerHTML = bioEscolhida; //recebe valor da bio da pessoa selecionada dentro do id bio do parágrafo
}
//# sourceMappingURL=Atividade2a.js.map