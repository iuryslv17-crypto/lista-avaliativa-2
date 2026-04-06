const input = require('prompt-sync')();
let nota1 = Number(input('Digite a primeira nota: '));
let nota2 = Number(input('Digite a segunda nota: '));
let media = (nota1 + nota2) / 2;
if (media === 10) {
    console.log('Desempenho excelente, aprovado com distinção!');
} else if (media >= 7) {
    console.log('Aprovado');
} else if (media >= 5 && media < 7) {
    console.log('Em recuperação');
} else {
    console.log('Reprovado');
}
console.log(`A média das notas é: ${media.toFixed(2)}`);
