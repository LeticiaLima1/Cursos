class Figura{
    
    id: number;
    nome: string;
    bio: string;
    listaFiguras: Array<Figura>;


    constructor( id: number, nome: string, bio: string) {// parametros
        this.nome = nome; // um construtor para criar o objeto
        this.id = id;
        this.bio = bio;
        this.listaFiguras = listaFiguras;
    }

    excluir(): string{
        return "idlistaFiltrada";
    }// funções, métodos das classes para implementar a apresentação
}

const ada: Figura = new Figura (1, 'Ada', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina' ); //declaração de objeto a partir da Classe
const alanTuring: Figura = new Figura (2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial');//declaração de objeto a partir da Classe
const nikolaTesla: Figura = new Figura (3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.');//declaração de objeto a partir da Classe
const nicolauCopernico: Figura = new Figura (4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.');//declaração de objeto a partir da Classe

let listaFiguras: Array<Figura> = [ada, alanTuring, nikolaTesla, nicolauCopernico]// declara a lista de pessoas 

function excluirFigura(id) {
    let idFigura = id.value; //declaração de constante do id escolhido
    //busca do valor da constante
    listaFiguras = listaFiguras.filter(function (figura) { return figura.id != idFigura; }); //comparar pessoa selecionada de acordo com o filtro do que é procurado
    document.getElementById("idlistaFiltrada").innerHTML = JSON.stringify(listaFiguras); //recebe o valor da pessoa filtrada já sem a pessoa excluída
}
document.getElementById("idLista").innerHTML = JSON.stringify(listaFiguras); //recebe valor do nome da pessoa excluída




