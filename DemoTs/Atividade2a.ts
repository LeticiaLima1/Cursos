import { pessoas } from "./modelo/Pessoa";//importa lista declarada no arquivo Pessoa.ts

function escolherBio(idBio: any) : void{ //nome da função

    let bioEscolhida: string = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/bio seja inexistente

    pessoas.forEach(pessoa => {//laço para percorrer a lista
        if (pessoa.id == idBio.value) {//comparar id escolhido com as pessoas que o laço está percorrendo

            bioEscolhida = pessoa.bio; //recebea na variável bio escolhida a pessoa selecionada
        
        }//fim do laço 
    }); //fim da função

    document.getElementById("Bio").innerHTML = bioEscolhida; //recebe valor da bio da pessoa selecionada dentro do id bio do parágrafo
}