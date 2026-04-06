class Data {
    static instance;

    constructor(data) {
        if (Data.instance) {
            // return Data.instance;
        }
        Data.instance = this;
        this.data = data;
    }
}

const instance1 = new Data("Eu sou único")
const instance2 = new Data("Eu também sou único")


console.log(instance1.data);
console.log(Data.instance.data);

console.log(instance1 === instance2);