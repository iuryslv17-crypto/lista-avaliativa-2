const input = require('prompt-sync')();
let produto = input('Digite o nome do produto: ');
let preco = Number(input('Digite o preço do produto: '));
let estoque = Number(input('Digite a quantidade em estoque do produto: '));
let quantidadeSolicitada = Number(input('Digite a quantidade solicitada do produto: '));
if (quantidadeSolicitada > estoque) {
    console.log('Quantidade solicitada não disponível em estoque.');
} else {
    let valorTotal = preco * quantidadeSolicitada;
if (valorTotal > 500) {
        valorTotal = valorTotal * 0.95; // Aplica desconto de 5%
        console.log(`O valor do produto ${produto} é: R$ ${valorTotal.toFixed(2)}`);
    } else {
        console.log(`O valor total a ser pago pelo produto ${produto} é: R$ ${valorTotal.toFixed(2)}`);
    };
}