const numeros = [1, 2, 3, 4, 5];

Array.prototype.meuMap = function (callback) {
    const resultado = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            resultado.push(callback(this[i], i, this));
        }
    }

    return resultado;
};

Array.prototype.meuFilter = function (callback) {
    const resultado = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (callback(this[i], i, this)) {
                resultado.push(this[i]);
            }
        }
    }

    return resultado;
};

Array.prototype.meuReduce = function (callback, valorInicial) {
    let acumulador = valorInicial;
    let i = 0;

    if (acumulador === undefined) {
        acumulador = this[0];
        i = 1;
    }

    for (; i < this.length; i++) {
        if (i in this) {
            acumulador = callback(acumulador, this[i], i, this);
        }
    }

    return acumulador;
};

const dobrados = numeros.meuMap(n => n * 2);
const pares = numeros.meuFilter(n => n % 2 === 0);
const soma = numeros.meuReduce((acc, n) => acc + n, 0);

console.log(dobrados);
console.log(pares);
console.log(soma);