import { Pessoa, pessoas } from "./modelo/Pessoa";//importa lista declarada no arquivo Pessoa.ts

const idPessoa : number= 1;//exemplo a ser usado

// Atividade 2A Funcional
function escolherBio(idPessoa): string{ //nome da função
    //busca do valor da variável
    let bioEscolhida: string = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/bio seja inexistente
    pessoas.forEach(pessoa => {//laço para percorrer a lista
        if (pessoa.id === idPessoa) {//comparar id escolhido com as pessoas que o laço está percorrendo
            bioEscolhida = pessoa.bio; //recebe na variável bio escolhida a pessoa selecionada
        }//fim do laço 
    }); //fim da função
    return bioEscolhida;
}
console.log("Funcional 2A escolherBio: "+escolherBio(idPessoa));//imprime a bio escolhida

//Atividade 2A paradigma
const pessoaEscolhida: Pessoa = pessoas.find(pessoa => pessoa.id == idPessoa);//compara a pessoa escolhida com a pessoa a  ser buscada
const bioPessoaEscolhida: string = pessoaEscolhida.bio;//recebe a bio escolhida do id selecionado
console.log("Paradigma 2A escolherBio: "+bioPessoaEscolhida);// imprime a bio escolhida

//Atividade 2B Funcional
function escolherNome(idPessoa: number): string { //nome da função
    //busca do valor da variável
    let nomeEscolhido: string = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/nome seja inexistente
    pessoas.forEach(pessoa => {//laço para percorrer a lista
        if (pessoa.id == idPessoa) {//comparar id escolhido com as pessoas que o laço está percorrendo
            nomeEscolhido = pessoa.nome; //recebe na variável nome escolhido a pessoa selecionada
        }//fim do laço 
    }); //fim da função
    return nomeEscolhido;
}
console.log("Paradigma 2B escolherNome: "+escolherNome(idPessoa));//imprime o nome escolhido

//Paradigma 2B Funcional
const nomePessoaEscolhida: string = pessoaEscolhida.nome;//recebe a pessoa escolhida 
console.log("Funcional 2B escolherNome: "+nomePessoaEscolhida);//imprime nome escolhido

//Atividade 2C Funcional
function excluirId(idPessoa: number): Array<Pessoa>{//nome da função
    //busca o valor da variável
    return pessoas.filter(pessoa => pessoa.id != idPessoa);//filtra dentre as pessoas pelo id repassado
}//id diferente é excluído
console.log("Funcional 2C excluirId:");//impressão
console.log(excluirId(idPessoa));//imprime as pessoas que restaram, sem a excluída

//Paradigma 2C Funcional
const pessoasFiltradas: Array<Pessoa> = pessoas.filter(pessoa => pessoa.id != idPessoa);//filtra dentre as pessoas pelo id repassado
//id diferente é excluído
console.log("Paradigma 2C excluirId:");//impressão
console.log(pessoasFiltradas);//imprime as pessoas que restaram, sem a excluída

//Atividade 2D Funcional
const proximoNome: string = 'Letícia'//declara a constante
function alterarNome(idPessoa: number, nomePessoa: string): void{ //nome da função que busca pelo id que terá o nome alterado
    pessoas.forEach(pessoa =>{//laço que irá percorrer a lista 
        if(pessoa.id === idPessoa){//compara id escolhido com o id que terá o nome alterado
            pessoa.nome = nomePessoa;//recebe o nome alterado
        }
    })
}
console.log("Funcional 2D alterarNome:");
console.log('pessoasAtuais:');
console.log(pessoas);
alterarNome(idPessoa, proximoNome);
console.log('pessoasAlteradas: ');
console.log(pessoas);


//Paradigma 2D imperativo
const pessoasAlteradas: Array<Pessoa> = pessoas.map(pessoa => {//declara a constante e retorna uma pessoa
    if(pessoa.id === idPessoa){ //compara se o id e o tipo são iguais ao id que será alterado
        pessoa.nome = proximoNome; //recebe o nome alterado 
    }
    return pessoa;
})
console.log("Paradigma 2D alterarNome:");
console.log(pessoasAlteradas);//imprime a alteração