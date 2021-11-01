

const pessoas = [ // declaração de lista de pessoas 
    {
        id: 1, //declaração do id pessoa 1
        nome: 'Ada Lovelace', //declaração do nome da pessoa 1
        bio: 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina'//declaração da bio pessoa 1
    },
    {
        id: 2, //declaração do id pessoa 2
        nome: 'Alan Turing',//declaração do nome da pessoa 2
        bio: 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial'//declaração da bio pessoa 2
    },
    {
        id: 3,//declaração do id pessoa 3
        nome: 'Nikola Tesla',// declaração do nome da pessoa 3
        bio: 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.'//declaração da bio pessoa 3
    },
    {
        id: 4, //declaração do id pessoa 4
        nome: 'Nicolau Copérnico', //declaração do nome da pessoa 4
        bio: 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.'//declaração da bio pessoa 4
    }
];

const idPessoa = 1;

// Atividade 2A Funcional
function escolherBio(idPessoa){ //nome da função
    //busca do valor da variável
    let bioEscolhida = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/bio seja inexistente
    pessoas.forEach(pessoa => {//laço para percorrer a lista
        if (pessoa.id === idPessoa) {//comparar id escolhido com as pessoas que o laço está percorrendo
            bioEscolhida = pessoa.bio; //recebe na variável bio escolhida a pessoa selecionada
        }//fim do laço 
    }); //fim da função
    return bioEscolhida;
}
console.log("Funcional 2A escolherBio: "+escolherBio(idPessoa));//imprime a bio escolhida

//Atividade 2A paradigma
const pessoaEscolhida  = pessoas.find(pessoa => pessoa.id == idPessoa);//compara a pessoa escolhida com a pessoa a  ser buscada
const bioPessoaEscolhida = pessoaEscolhida.bio;//recebe a bio escolhida do id selecionado
console.log("Paradigma 2A escolherBio: "+bioPessoaEscolhida);// imprime a bio escolhida

//Atividade 2B Funcional
function escolherNome(idPessoa){ //nome da função
    //busca do valor da variável
    let nomeEscolhido = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/nome seja inexistente
    pessoas.forEach(pessoa => {//laço para percorrer a lista
        if (pessoa.id == idPessoa) {//comparar id escolhido com as pessoas que o laço está percorrendo
            nomeEscolhido = pessoa.nome; //recebe na variável nome escolhido a pessoa selecionada
        }//fim do laço 
    }); //fim da função
    return nomeEscolhido;
}
console.log("Paradigma 2B escolherNome: "+escolherNome(idPessoa));//imprime o nome escolhido

//Paradigma 2B Funcional
const nomePessoaEscolhida = pessoaEscolhida.nome;//recebe a pessoa escolhida 
console.log("Funcional 2B escolherNome: "+nomePessoaEscolhida);//imprime nome escolhido

//Atividade 2C Funcional
function excluirId(idPessoa){//nome da função
    //busca o valor da variável
    return pessoas.filter(pessoa => pessoa.id != idPessoa);//filtra dentre as pessoas pelo id repassado
}//id diferente é excluído
console.log("Funcional 2C excluirId:");//impressão
console.log(excluirId(idPessoa));//imprime as pessoas que restaram, sem a excluída

//Paradigma 2C Funcional
const pessoasFiltradas = pessoas.filter(pessoa => pessoa.id != idPessoa);//filtra dentre as pessoas pelo id repassado
//id diferente é excluído
console.log("Paradigma 2C excluirId:");//impressão
console.log(pessoasFiltradas);//imprime as pessoas que restaram, sem a excluída

//Atividade 2D Funcional
const nomePessoa = 'Letícia'//declara a constante
function alterarNome(idPessoa, nomePessoa){ //nome da função que busca pelo id que terá o nome alterado
    pessoas.forEach(pessoa =>{//laço que irá percorrer a lista 
        if(pessoa.id === idPessoa){//compara id escolhido com o id que terá o nome alterado
            pessoa.nome = nomePessoa;//recebe o nome alterado
        }
    })
    return pessoas;//retorna a lista de pessoas com o nome já alterado
}
console.log("Funcional 2D alterarNome:");
console.log(alterarNome(idPessoa, nomePessoa));//imprima a alteração

//Paradigma 2D imperativo
const pessoasAlteradas = pessoas.map(pessoa => {//declara a constante e retorna uma pessoa
    if(pessoa.id === idPessoa){ //compara se o id e o tipo são iguais ao id que será alterado
        pessoa.nome = nomePessoa; //recebe o nome alterado 
    }
    return pessoa;
})
console.log("Paradigma 2D alterarNome:");
console.log(pessoasAlteradas);//imprime a alteração