"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./modelo/Pessoa"); //importa lista declarada no arquivo Pessoa.ts
const idPessoa = 1; //exemplo a ser usado
// Atividade 2A Funcional
function escolherBio(idPessoa) {
    //busca do valor da variável
    let bioEscolhida = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/bio seja inexistente
    Pessoa_1.pessoas.forEach(pessoa => {
        if (pessoa.id === idPessoa) { //comparar id escolhido com as pessoas que o laço está percorrendo
            bioEscolhida = pessoa.bio; //recebe na variável bio escolhida a pessoa selecionada
        } //fim do laço 
    }); //fim da função
    return bioEscolhida;
}
console.log("Funcional 2A escolherBio: " + escolherBio(idPessoa)); //imprime a bio escolhida
//Atividade 2A paradigma
const pessoaEscolhida = Pessoa_1.pessoas.find(pessoa => pessoa.id == idPessoa); //compara a pessoa escolhida com a pessoa a  ser buscada
const bioPessoaEscolhida = pessoaEscolhida.bio; //recebe a bio escolhida do id selecionado
console.log("Paradigma 2A escolherBio: " + bioPessoaEscolhida); // imprime a bio escolhida
//Atividade 2B Funcional
function escolherNome(idPessoa) {
    //busca do valor da variável
    let nomeEscolhido = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/nome seja inexistente
    Pessoa_1.pessoas.forEach(pessoa => {
        if (pessoa.id == idPessoa) { //comparar id escolhido com as pessoas que o laço está percorrendo
            nomeEscolhido = pessoa.nome; //recebe na variável nome escolhido a pessoa selecionada
        } //fim do laço 
    }); //fim da função
    return nomeEscolhido;
}
console.log("Paradigma 2B escolherNome: " + escolherNome(idPessoa)); //imprime o nome escolhido
//Paradigma 2B Funcional
const nomePessoaEscolhida = pessoaEscolhida.nome; //recebe a pessoa escolhida 
console.log("Funcional 2B escolherNome: " + nomePessoaEscolhida); //imprime nome escolhido
//Atividade 2C Funcional
function excluirId(idPessoa) {
    //busca o valor da variável
    return Pessoa_1.pessoas.filter(pessoa => pessoa.id != idPessoa); //filtra dentre as pessoas pelo id repassado
} //id diferente é excluído
console.log("Funcional 2C excluirId:"); //impressão
console.log(excluirId(idPessoa)); //imprime as pessoas que restaram, sem a excluída
//Paradigma 2C Funcional
const pessoasFiltradas = Pessoa_1.pessoas.filter(pessoa => pessoa.id != idPessoa); //filtra dentre as pessoas pelo id repassado
//id diferente é excluído
console.log("Paradigma 2C excluirId:"); //impressão
console.log(pessoasFiltradas); //imprime as pessoas que restaram, sem a excluída
//Atividade 2D Funcional
const proximoNome = 'Letícia'; //declara a constante
function alterarNome(idPessoa, nomePessoa) {
    Pessoa_1.pessoas.forEach(pessoa => {
        if (pessoa.id === idPessoa) { //compara id escolhido com o id que terá o nome alterado
            pessoa.nome = nomePessoa; //recebe o nome alterado
        }
    });
}
console.log("Funcional 2D alterarNome:");
console.log('pessoasAtuais:');
console.log(Pessoa_1.pessoas);
alterarNome(idPessoa, proximoNome);
console.log('pessoasAlteradas: ');
console.log(Pessoa_1.pessoas);
//Paradigma 2D imperativo
const pessoasAlteradas = Pessoa_1.pessoas.map(pessoa => {
    if (pessoa.id === idPessoa) { //compara se o id e o tipo são iguais ao id que será alterado
        pessoa.nome = proximoNome; //recebe o nome alterado 
    }
    return pessoa;
});
console.log("Paradigma 2D alterarNome:");
console.log(pessoasAlteradas); //imprime a alteração
//# sourceMappingURL=Atividade2e.js.map