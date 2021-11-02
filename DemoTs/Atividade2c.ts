import { Pessoa, pessoas } from "./modelo/Pessoa";//importa lista declarada no arquivo Pessoa.ts

function excluirId(id : any) : void{//nome da função
   
    const idPessoa: number = id.value;//declaração de constante do id escolhido
    //busca do valor da constante

    const pessoasFiltradas: Array<Pessoa> = pessoas.filter(pessoa => pessoa.id !== idPessoa);//comparar pessoa selecionada de acordo com o filtro do que é procurado
    document.getElementById("idlistaFiltrada").innerHTML = JSON.stringify(pessoas);//recebe o valor da pessoa filtrada já sem a pessoa excluída
}
document.getElementById("idLista").innerHTML = JSON.stringify(pessoas); //recebe valor do nome da pessoa excluída