// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?
//"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

const nome = prompt("Qual o seu nome?");
const age = prompt("Quantos anos voce tem?");
const language = prompt("Qual linguagem de programação voce esta estudando?");


alert(`Olá ${nome}, voce tem ${age} anos e está aprendendo ${language}`);
let question = prompt(`Voce gosta de estudar ${language}? 1 para sim e 2 para não`)
if (question == 1) {
    alert("Muito bom! Continue estudando e voce tera muito sucesso")
}else if (question == 2){
    alert("Ahh que pena... Ja tentou aprender outras linguagens?")
}