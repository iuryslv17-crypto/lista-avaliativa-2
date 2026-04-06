const input = require('prompt-sync')();
let nomeProduto = input('Digite o nome do produto: ');
let precoProduto = Number(input('Digite o preço do produto: '));
let quantidadeProduto = Number(input('Digite a quantidade do produto: '));
let descontoProduto = 0;
if (quantidadeProduto > 20) {
descontoProduto = precoProduto * 0.2;
} else if (quantidadeProduto > 10) {
    descontoProduto = precoProduto * 0.1;
} else {
    descontoProduto = 0;
}
let precoFinal = (precoProduto - descontoProduto) * quantidadeProduto;
console.log(`O valor total a ser pago pelo produto ${nomeProduto} é: R$ ${precoFinal.toFixed(2)}`);
console.log(`O desconto aplicado foi de: R$ ${descontoProduto.toFixed(2)}`);
console.log(`O preço do produto sem desconto é: R$ ${precoProduto.toFixed(2)}`);
console.log(`A quantidade do produto é: ${quantidadeProduto}`);
console.log(`O valor total é: R$ ${precoFinal.toFixed(2)}`);