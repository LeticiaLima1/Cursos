function escolherBio(idPessoa) {
    var pessoas = [
        {
            id: 1,
            name: 'Ada Lovelace',
            bio: 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina' //declaração da bio pessoa 1
        },
        {
            id: 2,
            name: 'Alan Turing',
            bio: 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial' //declaração da bio pessoa 2
        },
        {
            id: 3,
            name: 'Nikola Tesla',
            bio: 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.' //declaração da bio pessoa 3
        },
        {
            id: 4,
            name: 'Nicolau Copérnico',
            bio: 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.' //declaração da bio pessoa 4
        }
    ];
    // let idEscolhido = (<HTMLInputElement>document.getElementById("idBio")).value; //declaração de variável do id escolhido
    //busca do valor da variável
    var bioEscolhida = 'pessoa não cadastrada'; //declaração de variável iniciando com mensagem caso id/bio seja inexistente
    pessoas.forEach(function (pessoa) {
        if (pessoa.id == idPessoa.value) { //comparar id escolhido com as pessoas que o laço está percorrendo
            bioEscolhida = pessoa.bio; //recebea na variável bio escolhida a pessoa selecionada
        } //fim do laço 
    }); //fim da função
    document.getElementById("Bio").innerHTML = bioEscolhida; //recebe valor da bio da pessoa selecionada dentro do id bio do parágrafo
}
