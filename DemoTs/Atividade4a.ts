class PessoaAtividade {
    id: number;
    nome: string;
    bio: string;
  
    constructor(id: number, nome: string, bio: string) {
      this.id = id;
      this.nome = nome;
      this.bio = bio;
    }
  }; // criação de objeto, declarando atributos e criando construtor para forçar preenchimento de todos os dados
  
  const pessoas: Array<PessoaAtividade> = [
    {
      id: 1,
      nome: "Ada Lovelace",
      bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
      id: 2,
      nome: "Alan Turing",
      bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britâncio, ele é amplamente considerado o pai da ciência da computação teórica e a inteligência artificial",
    },
    {
      id: 3,
      nome: "Nikola Tesla",
      bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        nome: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
  ]; // Declaração de constante de lista com pessoas.
  
  document.getElementById("tituloId").innerHTML = "Atividade 4"; // Inserindo titulo do corpo da pagina
  
  let corpoHTML: HTMLElement = document.getElementById("bodyId"); // buscando id do corpo da pagina
  
  let tabela: HTMLElement = document.createElement("table"); // criando elemento tabela
  
  let corpoTabela: HTMLElement = document.createElement("tbody"); // criando elemento corpo da tabela
  
  let linhaCabecalho: HTMLElement = document.createElement("tr"); // criando elemento linha de cabeçalho da tabela
  
  let celulaCabecalhoId: HTMLElement = document.createElement("th"); // criando elemento celular Id
  const cellTextTh: Text = document.createTextNode("ID"); // criando texto Id
  celulaCabecalhoId.appendChild(cellTextTh); // inserindo texto Id no elemento celular do cabeçalho Id
  
  let celulaCabecalhoNome: HTMLElement = document.createElement("th"); // criando elemento celular Nome
  const cellTextTh1: Text = document.createTextNode("Nome"); // criando texto Nome
  celulaCabecalhoNome.appendChild(cellTextTh1); // inserindo texto Id no elemento celular do cabeçalho Nome
  
  let celulaCabecalhoBio: HTMLElement = document.createElement("th"); // criando elemento celular Bio
  const cellTextTh2: Text = document.createTextNode("Bio"); // criando texto Bio
  celulaCabecalhoBio.appendChild(cellTextTh2); // inserindo texto Id no elemento celular do cabeçalho Bio
  
  linhaCabecalho.appendChild(celulaCabecalhoId); // inserindo na linha do cabeçalho a celula Id
  linhaCabecalho.appendChild(celulaCabecalhoNome); // inserindo na linha do cabeçalho a celula Nome
  linhaCabecalho.appendChild(celulaCabecalhoBio); // inserindo na linha do cabeçalho a celula Bio
  
  corpoTabela.appendChild(linhaCabecalho); // inserindo na tabela a linha do cabeçalho
  
  pessoas.forEach(pessoa =>{ // percorrendo lista de pessoas
      let linhaConteudo: HTMLTableRowElement = document.createElement("tr"); // criando linha de conteudo
  
      let celulaId: HTMLTableCellElement = document.createElement("td"); // criando celula para colocar id da pessoa
      const Id: Text = document.createTextNode(String(pessoa.id)); // declarando constante id e dentro colocando um texto com o Id da pessoa
      celulaId.appendChild(Id); // inserindo na celula id a constante Id
      linhaConteudo.appendChild(celulaId); // inserindo na linha a celula Id
  
      let celulaNome: HTMLTableCellElement = document.createElement("td"); // criando celula para colocar nome da pessoa
      const nome: Text = document.createTextNode(pessoa.nome); // declarando constante id e dentro colocando um texto com o nome da pessoa
      celulaNome.appendChild(nome); // inserindo na celula nome a constante nome
      linhaConteudo.appendChild(celulaNome); // inserindo na linha a celula nome
  
      let celulaBio: HTMLTableCellElement = document.createElement("td"); // criando celula para colocar bio da pessoa
      const bio: Text = document.createTextNode(pessoa.bio); // declarando constante bio e dentro colocando um texto com a bio da pessoa
      celulaBio.appendChild(bio); // inserindo na celula bio a constante bio
      linhaConteudo.appendChild(celulaBio); // inserindo na linha a celula bio
  
      corpoTabela.appendChild(linhaConteudo); // inserindo no corpo da tabela a linha de conteudo
  })
  
  tabela.appendChild(corpoTabela); // inserindo na tabela o corpo da tabela
  corpoHTML.appendChild(tabela); // inserindo no corpo da pagina a tabela
  tabela.setAttribute("border", "2"); // configurando a largura da borda da tabela como tamanho 2