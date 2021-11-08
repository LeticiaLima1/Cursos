"use strict";
exports.__esModule = true;
var Atividade5a_1 = require("./Atividade5a");
var palavra2 = new Atividade5a_1.Palavra();
var letras = document.getElementById('idTexto').value; //busca o valor digitado
var numeroVogais = palavra2.nrVogais(letras);
var element = document.getElementById('IdQuantidaDeVogais');
element.innerHTML = numeroVogais.toString(); //imprime a quantidade de vogais na tela 
