// setInterval(function(){
//     console.log ("Função Anônima");
// },1000);

// setInterval(() => {
//     console.log ("Função Arrow");
// },5000);

const teste1 = function (){
    return this;
};

const teste2 = () => {
    return this;
};

const teste3 = function (){
    return this;
};

console.log ("Teste1: " , teste1 ());
console.log ("Teste2: " , teste2 ());
console.log ("Teste3: " , teste3 ());