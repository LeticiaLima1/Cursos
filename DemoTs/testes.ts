class Cliente{
    
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {// parametros
        this.nome = nome; // um construtor para criar o objeto
        this.idade = idade;
    }

    apresentar(){
        return 'Olá, eu sou '+  this.nome+ ' e tenho ' + this.idade + ' anos ';
    }// funções, métodos das classes para implementar a apresentação

    getNome(){
        return this.nome 
    }
}

let  joao: Cliente = new Cliente ('João', 25);
let apresentacao = joao.apresentar();// criação do objeto

console.log(apresentacao)

