

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
console.log("Funcional 2A escolherBio: "+escolherBio(idPessoa));

//Atividade 2A paradigma
const pessoaEscolhida  = pessoas.find(pessoa => pessoa.id == idPessoa);
const bioPessoaEscolhida = pessoaEscolhida.bio;
console.log("Paradigma 2A escolherBio: "+bioPessoaEscolhida);

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
console.log("Paradigma 2B escolherNome: "+escolherNome(idPessoa));

//Paradigma 2B Funcional
const nomePessoaEscolhida = pessoaEscolhida.nome;
console.log("Funcional 2B escolherNome: "+nomePessoaEscolhida);

//Atividade 2C Funcional
function excluirId(idPessoa){
    return pessoas.filter(pessoa => pessoa.id != idPessoa);
}
console.log("Funcional 2C excluirId:");
console.log(excluirId(idPessoa));

//Paradigma 2C Funcional
const pessoasFiltradas = pessoas.filter(pessoa => pessoa.id != idPessoa);
console.log("Paradigma 2C excluirId:");
console.log(pessoasFiltradas);

//Atividade 2D Funcional
const nomePessoa = 'Letícia'
function alterarNome(idPessoa, nomePessoa){
    pessoas.forEach(pessoa =>{
        if(pessoa.id == idPessoa){
            pessoa.nome = nomePessoa;
        }
    })
    return pessoas;
}
console.log("Funcional 2D alterarNome:");
console.log(alterarNome(idPessoa, nomePessoa));

//Paradigma 2D Funcional
const pessoasAlteradas = pessoas.map(pessoa => {
    if(pessoa.id === idPessoa){
        pessoa.nome = nomePessoa;
    }
    return pessoa;
})
console.log("Paradigma 2D alterarNome:");
console.log(pessoasAlteradas);