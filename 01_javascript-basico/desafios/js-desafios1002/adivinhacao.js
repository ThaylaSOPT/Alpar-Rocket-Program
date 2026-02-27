let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numSec = Math.round(Math.random() * 100); // número secreto entre 0 e 100
let tentativas = 0;

function adivinhacao() {
  rl.question("Digite um número inteiro de 0 a 100: ", function(resposta) {
    let palpite = Number(resposta);
    tentativas = tentativas + 1;

    if (palpite == numSec) { //ação caso o valor digitado seja o correto
      console.log("Acertou!");
      console.log("Número de tentativas:", tentativas);
      rl.close();
    } else if (palpite > numSec) {
      console.log("O número secreto é MENOR que o valor digitado, tente novamente"); //
      adivinhacao(); // repete a função
    } else {
      console.log("O número secreto é MAIOR que o valor digitado, tente novamente");
      adivinhacao(); // repete a função
    }
  });
}

adivinhacao(); // inicia o jogo