import { pessoas } from "./modelo/Pessoa";//importa lista declarada no arquivo Pessoa.ts

function escolherNome(id : any) : void{ //nome da função
    
    const idEscolhido: number = id.value; //declaração da constante  do id escolhido
    //busca do valor da constante
    
    let nomeEscolhido: string = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/nome seja inexistente
    
    pessoas.forEach(pessoa => {//laço para percorrer a lista
        if (pessoa.id === idEscolhido) {//comparar id escolhido com as pessoas que o laço está percorrendo
            nomeEscolhido = pessoa.nome; //recebe na variável nome escolhido a pessoa selecionada
        }//fim do laço 
    }); //fim da função
    document.getElementById("idNome").innerHTML = nomeEscolhido; //recebe valor do nome da pessoa selecionada dentro do id bio do parágrafo
}
