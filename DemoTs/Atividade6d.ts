class Figura{
    
    id: number;
    nome: string;
    bio: string;


    constructor( id: number, nome: string, bio: string) {// parametros
        this.nome = nome; // um construtor para criar o objeto
        this.id = id;
        this.bio = bio;
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

function alterarFigura(idFigura, idNomeFigura, idBioFigura) {
    
        let idPessoaEscolhida = Number(idFigura.value); //declaração da constante do id escolhido
        //busca do valor da constante
        let nomeInformado = idNomeFigura.value; //compara nome informado com a pessoa escolhida
        let bioInformada = idBioFigura.value;
        
        listaFiguras.forEach(function (figura) {
            if (figura.id === idPessoaEscolhida) { //compara id escolhido com o id da pessoa escolhida
                figura.nome = nomeInformado; //altera o nome escolhido;
                figura.bio = bioInformada; //altera a bio escolhida
            }
            document.getElementById("idlistaFiltrada").innerHTML = JSON.stringify(listaFiguras); //recebe o valor da pessoa filtrada já sem a pessoa excluída

        });
        document.getElementById("idLista").innerHTML = JSON.stringify(listaFiguras); //recebe o novo nome
    }


