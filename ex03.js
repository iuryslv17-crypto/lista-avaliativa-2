const input = require('prompt-sync')();
let senhacorreta = 5589;
let tentativas = 3;
// 1ª tentaviva
let senha = Number(input('Digite a senha: '));
if (senha === senhacorreta) {
    console.log('Acesso permitido');
} else {
    console.log('Senha incorreta. Tente novamente. Você tem mais 2 tentativas.');
    // 2ª tentativa
    senha = Number(input('Digite a senha: '));
    if (senha === senhacorreta) {
        console.log('Acesso permitido');
    } else {
        console.log('Senha incorreta. Tente novamente. Você tem mais 1 tentativa.');
        // 3ª tentativa
        senha = Number(input('Digite a senha: '));
        if (senha === senhacorreta) {
            console.log('Acesso permitido');
        } else {
            console.log('Senha incorreta. Acesso negado.');
        }
    }
}