var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
var pessoas = [
    {
        id: 1,
        nome: 'Ada Lovelace',
        bio: 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina' //declaração da bio pessoa 1
    },
    {
        id: 2,
        nome: 'Alan Turing',
        bio: 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial' //declaração da bio pessoa 2
    },
    {
        id: 3,
        nome: 'Nikola Tesla',
        bio: 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.' //declaração da bio pessoa 3
    },
    {
        id: 4,
        nome: 'Nicolau Copérnico',
        bio: 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.' //declaração da bio pessoa 4
    }
];
var listaPessoas = pessoas;
document.getElementById("idLista").innerHTML = JSON.stringify(listaPessoas); //recebe valor do nome da pessoa excluída
function alterar(idPessoa, idNomePessoa, idBioPessoa) {
    var idPessoaEscolhida = Number(idPessoa.value); //declaração da constante do id escolhido
    //busca do valor da constante
    var nomeInformado = idNomePessoa.value; //compara nome informado com a pessoa escolhida
    var bioInformada = idBioPessoa.value; //compara bio informado com a bio escolhida
    listaPessoas.forEach(function (pessoa) {
        if (pessoa.id === idPessoaEscolhida) { //compara id escolhido com o id da pessoa escolhida
            pessoa.nome = nomeInformado; //altera o nome escolhido
            pessoa.bio = bioInformada; //altera a bio escolhida
        }
    });
    document.getElementById("idlistaAtualizada").innerHTML = JSON.stringify(listaPessoas); //recebe o novo nome
}
