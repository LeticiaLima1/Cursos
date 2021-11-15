// class Cliente{
    
//     nome: string;
//     idade: number;

//     constructor(nome: string, idade: number) {// parametros
//         this.nome = nome; // um construtor para criar o objeto
//         this.idade = idade;
//     }

//     apresentar(){
//         return 'Olá, eu sou '+  this.nome+ ' e tenho ' + this.idade + ' anos ';
//     }// funções, métodos das classes para implementar a apresentação

//     getNome(){
//         return this.nome 
//     }
// }

// let  joao: Cliente = new Cliente ('João', 25);
// let apresentacao = joao.apresentar();// criação do objeto

// console.log(apresentacao)

class Figura{
    
    id: number;
    nome: string;
    bio: string;

    constructor(id: number, nome: string, bio:string) {// parametros
        this.id = id;
        this.nome = nome; // um construtor para criar o objeto
        this.bio = bio;
    }

    getBio():string {
        return  this.bio;
    }// função para retornar a bio

    getNome(): string{
        return this.nome; 
    }// função para retornar o nome

    alterarNome(nomeNovo: string): void {
        this.nome = nomeNovo;
    }//função para alterar o nome
}

const ada: Figura = new Figura (1, 'Ada', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina' ); //declaração de objeto a partir da Classe
const alanTuring: Figura = new Figura (2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial');//declaração de objeto a partir da Classe
const nikolaTesla: Figura = new Figura (3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.');//declaração de objeto a partir da Classe
const nicolauCopernico: Figura = new Figura (4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.');//declaração de objeto a partir da Classe

let listaFiguras: Array<Figura> = [ada, alanTuring, nikolaTesla, nicolauCopernico]// declara a lista de pessoas 

//Atividade 6a - retornar a bio
let apresentacao = listaFiguras[0].getBio();// criação do objeto
//será usado o index 0, eleito aqui, para ser o id passado
console.log(apresentacao);

//Atividade 6b - retornar o nome
let exibirNome = listaFiguras[2].getNome();
//será usado o index 2, eleito aqui, para ser o id passado
console.log(exibirNome);

//Atividade 6c - apagar item
listaFiguras.splice(2, 1);
//será usado o index 2, q será excluído
console.log(listaFiguras);

// //Atividade 6d - alterar a bio ou o nome
listaFiguras[0].alterarNome('João');
console.log(listaFiguras)

