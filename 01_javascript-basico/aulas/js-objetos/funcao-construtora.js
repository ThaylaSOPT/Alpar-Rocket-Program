function Pessoa (nome, email, idade, senha) {
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

    this.login = function (email, senha){
        if (this.email == email && this.senha == senha){
            console.log ("Seja bem vindo!");
        }else {
            console.log ("Senha incorreta.");
        }
    };
}

const pessoa1 = new Pessoa ("Thayla", "thayla123@abc.com.br", 25, "abc123");

console.log (pessoa1);

pessoa1.login ("thayla123@abc.com.br", "abc123")