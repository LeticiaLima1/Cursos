"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./modelo/Pessoa"); //importa lista declarada no arquivo Pessoa.ts
function excluirId(id) {
    const idPessoa = id.value; //declaração de constante do id escolhido
    //busca do valor da constante
    const pessoasFiltradas = Pessoa_1.pessoas.filter(pessoa => pessoa.id !== idPessoa); //comparar pessoa selecionada de acordo com o filtro do que é procurado
    document.getElementById("idlistaFiltrada").innerHTML = JSON.stringify(Pessoa_1.pessoas); //recebe o valor da pessoa filtrada já sem a pessoa excluída
}
document.getElementById("idLista").innerHTML = JSON.stringify(Pessoa_1.pessoas); //recebe valor do nome da pessoa excluída
//# sourceMappingURL=Atividade2c.js.map