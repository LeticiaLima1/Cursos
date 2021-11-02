import { Pessoa, pessoas } from "./modelo/Pessoa";//importa lista declarada no arquivo Pessoa.ts

document.getElementById("idLista").innerHTML = JSON.stringify(pessoas); //recebe valor do nome da pessoa excluída

function alterarNome(idPessoa : any, idNomePessoa : any) : void{//nome da função 

    const idPessoaEscolhida: number = idPessoa.value; //declaração da constante do id escolhido
    //busca do valor da constante
    const nomeInformado: string = idNomePessoa.value; //compara nome informado com a pessoa escolhida

    pessoas.forEach(pessoa =>{//laço para percorrer a lista
        if(pessoa.id === idPessoaEscolhida){//compara id escolhido com o id da pessoa escolhida
            pessoa.nome = nomeInformado; //altera o nome escolhido
        }
    })
    document.getElementById("idlistaAtualizada").innerHTML = JSON.stringify(pessoas);//recebe o novo nome
}
