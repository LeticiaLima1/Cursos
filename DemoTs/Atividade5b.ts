import { Palavra } from "./Atividade5a";//importa a classe da atividade 5a 

let palavra2: Palavra = new Palavra ();//declara variável, tipa variável e cria nova palavra
const letras: string = (<HTMLInputElement>document.getElementById('idTexto')).value;//busca o valor digitado
let numeroVogais: number = palavra2.nrVogais(letras);//declara o tipo da variável e conta o número de vogais
const element: HTMLElement = document.getElementById('IdQuantidaDeVogais') as HTMLElement//declara constante,
//tipa como HTML // e recebe o componente 
element.innerHTML =  numeroVogais.toString(); //imprime a quantidade de vogais na tela 

