let pessoas = [ // declaração de lista de pessoas 
    {
        id: 1, //declaração do id pessoa 1
        name: 'Ada Lovelace', //declaração do nome da pessoa 1
        bio: 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina'//declaração da bio pessoa 1
    },
    {
        id: 2, //declaração do id pessoa 2
        name: 'Alan Turing',//declaração do nome da pessoa 2
        bio: 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial'//declaração da bio pessoa 2
    },
    {
        id: 3,//declaração do id pessoa 3
        name: 'Nikola Tesla',// declaração do nome da pessoa 3
        bio: 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.'//declaração da bio pessoa 3
    },
    {
        id: 4, //declaração do id pessoa 4
        name: 'Nicolau Copérnico', //declaração do nome da pessoa 4
        bio: 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.'//declaração da bio pessoa 4
    }
];

document.getElementById("idLista").innerHTML = JSON.stringify(pessoas); //recebe valor do nome da pessoa excluída

function excluirId(id : any) : void{//nome da função
    const idPessoa = id.value;//declaração de constante do id escolhido
    //busca do valor da constante
    pessoas = pessoas.filter(pessoa => pessoa.id != idPessoa);//comparar pessoa selecionada de acordo com o filtro do que é procurado
    document.getElementById("idlistaFiltrada").innerHTML = JSON.stringify(pessoas);//recebe o valor da pessoa filtrada já sem a pessoa excluída
}
