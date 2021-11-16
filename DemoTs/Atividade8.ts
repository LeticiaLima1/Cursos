abstract class Pessoa{ //criação de class abstrata, que não será instanciada, apenas modelo 
    protected id: Number; //atributo do objeto
    protected nome: String;//atributo do objeto
    protected bio: String;//atributo do objeto
    
    public getNome(){//função para retornoar o nome da pessoa
        return this.nome;
    }
    
    public getBio(){//função para retornar a bio
        return this.bio;
    }
}

class AdaLovelace extends Pessoa{//criação de classe como extensão da classe Pessoa
    constructor(){
        super();//chama os atributos da classe super (pessoa)
        this.nome = 'Ada Lovelace';//atribui o nome
        this.bio = 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina';
    }//atribui a bio
}

class AlanTuring extends Pessoa{//criação de classe como extensão da classe Pessoa
    constructor(){
        super();//chama os atributos da classe super (pessoa)
        this.nome = 'Alan Turing' //atribui o nome
        this.bio = 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia';
    }//atribui a bio
}

class NikolaTesla extends Pessoa{//criação de classe como extensão da classe Pessoa
    constructor(){
        super();//chama os atributos da classe super (pessoa)
        this.nome = 'Ada Lovelace';//atribui o nome
        this.bio = 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina';
    }
}

class NicolauCopernico extends Pessoa{//criação de classe como extensão da classe Pessoa
    constructor(){
        super();//chama os atributos da classe super (pessoa)
        this.nome = 'Nikola Tesla';//atribui o nome
        this.bio = 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada';
    }
}

class PessoaFactory {    //criação da classe factory de pessoa
    public static getPessoa(idPessoa: Number): Pessoa{ //função que a partir de um id retorna um objeto pessoa
        if( idPessoa == null ){
            return null;
        }
        else if( idPessoa == 1){
            return new AdaLovelace();
        } 
        else if( idPessoa == 2){
            return new AlanTuring();
        }  
        else if( idPessoa == 3){
            return new NikolaTesla();
        } 
        else if( idPessoa == 4){
            return new NicolauCopernico();
        } 
        else{
            return null;
        } 
    }   
} 

function buscarPessoa(idPessoa: Number): void{//função que busca a pessoa 
    let pessoa: Pessoa = PessoaFactory.getPessoa(idPessoa); //declara a variável do tipo pessoa e recebe a pessoa da classe factory
    if( pessoa != null ) {   //verificação se a pessoa não é nula
        console.log('Nome: '+pessoa.getNome());   //imprime o nome da pessoa
        console.log('Bio: '+pessoa.getBio()); //imprime a bio
    }   
} 

const idPessoa: Number = 2; //id a ser usado no exemplo
buscarPessoa(idPessoa);//chamando a função