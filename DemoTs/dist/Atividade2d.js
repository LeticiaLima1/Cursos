"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./modelo/Pessoa"); //importa lista declarada no arquivo Pessoa.ts
document.getElementById("idLista").innerHTML = JSON.stringify(Pessoa_1.pessoas); //recebe valor do nome da pessoa excluída
function alterarNome(idPessoa, idNomePessoa) {
    const idPessoaEscolhida = idPessoa.value; //declaração da constante do id escolhido
    //busca do valor da constante
    const nomeInformado = idNomePessoa.value; //compara nome informado com a pessoa escolhida
    Pessoa_1.pessoas.forEach(pessoa => {
        if (pessoa.id === idPessoaEscolhida) { //compara id escolhido com o id da pessoa escolhida
            pessoa.nome = nomeInformado; //altera o nome escolhido
        }
    });
    document.getElementById("idlistaAtualizada").innerHTML = JSON.stringify(Pessoa_1.pessoas); //recebe o novo nome
}
//# sourceMappingURL=Atividade2d.js.map