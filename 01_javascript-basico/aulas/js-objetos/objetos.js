const pessoa = {};

pessoa.nome = "Thayla";
pessoa.email = "thayla123@abc.com.br";
pessoa.senha = "abc123";
pessoa.andar = function() {
    console.log (`${this.nome} está andando`);
}

pessoa.andar();


const carro = {
    modelo: "Argo",
    marca: "Fiat",
    portas: 4,
    economico: true,
    andar (){
        console.log (`${this.marca} ${this.modelo} está andando`);
    },
    frear: function (){
        console.log (`${this.marca} ${this.modelo} está freando`);
    }
}

carro.andar()
carro.frear()

console.log (carro.modelo);