var Pessoa = /** @class */ (function () {
    function Pessoa(id, nome, bio) {
        this.id = id;
        this.nome = nome;
        this.bio = bio;
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
document.getElementById("tituloId").innerHTML = "Atividade 4"; //exibe a lista atual de pessoas 
var corpoHTML = document.getElementById("bodyId"); // buscando id do corpo da pagina
var tabela = document.createElement("table"); // criando elemento tabela
var corpoTabela = document.createElement("tbody"); // criando elemento corpo da tabela
var linhaCabecalho = document.createElement("tr"); // criando elemento linha de cabeçalho da tabela
var celulaCabecalhoId = document.createElement("th"); // criando elemento celular Id
var cellTextTh = document.createTextNode("ID"); // criando texto Id
celulaCabecalhoId.appendChild(cellTextTh); // inserindo texto Id no elemento celular do cabeçalho Id
var celulaCabecalhoNome = document.createElement("th"); // criando elemento celular Nome
var cellTextTh1 = document.createTextNode("Nome"); // criando texto Nome
celulaCabecalhoNome.appendChild(cellTextTh1); // inserindo texto Id no elemento celular do cabeçalho Nome
var celulaCabecalhoBio = document.createElement("th"); // criando elemento celular Bio
var cellTextTh2 = document.createTextNode("Bio"); // criando texto Bio
celulaCabecalhoBio.appendChild(cellTextTh2); // inserindo texto Id no elemento celular do cabeçalho Bio
linhaCabecalho.appendChild(celulaCabecalhoId); // inserindo na linha do cabeçalho a celula Id
linhaCabecalho.appendChild(celulaCabecalhoNome); // inserindo na linha do cabeçalho a celula Nome
linhaCabecalho.appendChild(celulaCabecalhoBio); // inserindo na linha do cabeçalho a celula Bio
corpoTabela.appendChild(linhaCabecalho); // inserindo na tabela a linha do cabeçalho
pessoas.forEach(function (pessoa) {
    var linhaConteudo = document.createElement("tr"); // criando linha de conteudo
    linhaConteudo.setAttribute("id", "idLinhaConteudo" + pessoa.id);
    var celulaId = document.createElement("td"); // criando celula para colocar id da pessoa
    var id = document.createTextNode(String(pessoa.id)); // declarando constante id e dentro colocando um texto com o Id da pessoa
    celulaId.appendChild(id); // inserindo na celula id a constante Id
    linhaConteudo.appendChild(celulaId); // inserindo na linha a celula Id
    var celulaNome = document.createElement("td"); // criando celula para colocar nome da pessoa
    celulaNome.setAttribute("id", "idCelulaNome" + pessoa.id);
    var nome = document.createTextNode(pessoa.nome); // declarando constante id e dentro colocando um texto com o nome da pessoa
    celulaNome.appendChild(nome); // inserindo na celula nome a constante nome
    linhaConteudo.appendChild(celulaNome); // inserindo na linha a celula nome
    var celulaBio = document.createElement("td"); // criando celula para colocar bio da pessoa
    celulaBio.setAttribute("id", "idCelulaBio" + pessoa.id);
    var bio = document.createTextNode(pessoa.bio); // declarando constante bio e dentro colocando um texto com a bio da pessoa
    celulaBio.appendChild(bio); // inserindo na celula bio a constante bio
    linhaConteudo.appendChild(celulaBio); // inserindo na linha a celula bio
    corpoTabela.appendChild(linhaConteudo); // inserindo no corpo da tabela a linha de conteudo
});
tabela.appendChild(corpoTabela); // inserindo na tabela o corpo da tabela
corpoHTML.appendChild(tabela); // inserindo no corpo da pagina a tabela
tabela.setAttribute("border", "2"); // configurando a largura da borda da tabela como tamanho 2
function alterar(idPessoa, idNomePessoa, idBioPessoa) {
    var idPessoaEscolhida = Number(idPessoa.value); //declaração da constante do id escolhido
    //busca do valor da constante
    var nomeInformado = idNomePessoa.value; //compara nome informado com a pessoa escolhida
    var bioInformada = idBioPessoa.value; //compara bio informado com a bio escolhida
    pessoas.forEach(function (pessoa) {
        if (pessoa.id === idPessoaEscolhida) { //compara id escolhido com o id da pessoa escolhida
            if (nomeInformado != null && nomeInformado != '') {
                pessoa.nome = nomeInformado; //altera o nome escolhido
                document.getElementById("idCelulaNome" + pessoa.id).innerHTML = pessoa.nome; //recebe o novo nome
            }
            if (bioInformada != null && bioInformada != '') {
                pessoa.bio = bioInformada; //altera a bio escolhida
                document.getElementById("idCelulaBio" + pessoa.id).innerHTML = pessoa.bio; //recebe o novo bio
            }
        }
    });
}
function excluir(idPessoa) {
    var idPessoaEscolhida = Number(idPessoa.value); //declaração da constante do id escolhido
    //busca do valor da constante
    pessoas.forEach(function (pessoa, index) {
        if (pessoa.id === idPessoaEscolhida) { //compara id escolhido com o id da pessoa escolhida
            pessoas.splice(index, 1);
            var item = document.getElementById("idLinhaConteudo" + pessoa.id); //recebe o novo nome
            item.parentNode.removeChild(item);
        }
    });
}
