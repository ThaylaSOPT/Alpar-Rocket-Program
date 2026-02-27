class Pessoa {
    constructor (nome, email, idade, senha) {
        this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.senha = senha;
    this.maiorIdade = true;

    if (this.idade <= 12 ){
        throw new Error("Menor de 13 anos");
    }

    if (this.idade < 18) {
        this.maiorIdade = false;
    }
}

login (email, senha){
        if (this.email == email && this.senha == senha){
            console.log ("Seja bem vindo!");
        }else {
            console.log ("Senha incorreta.");
        }
    };
}

const pessoa = new Pessoa ("Thayla", "thayla123@abc.com.br", 25, "abc123");

pessoa.login ("thayla123@abc.com.br", "abc123");

pessoa.nome = "Thalia";

console.log (pessoa)



let i = 2;
let j = i;
i++

console.log (i,j);