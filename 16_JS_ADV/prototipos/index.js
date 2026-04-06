// let obj = { name: "Thayla" };
// console.log(obj.toString());

// function Pessoa(nome) {
//     this.nome = nome;
// }

// Pessoa.prototype.falar = function () {
//     console.log(`Meu nome é ${this.nome}`);
// }

// const pessoa = new Pessoa("Thayla");
// pessoa.falar();

// let proto = {
//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     },
// };

// let pessoa = Object.create(proto);
// pessoa.nome = "Thayla";
// pessoa.falar();


const frase = "ola Mundo e desENvolvedores de qualquer lugar";

String.prototype.toCapitalize = function () {
    const parts = this.split(" ");
    return parts.map((part) => {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
        .join(" ");
};

// console.log(frase.toUpperCase());

console.log(frase.toCapitalize());

console.log("eae pessoal".toCapitalize());