let variavelGlobal = 2;
let variavelLocal = 3;

if (true) {
    variavelGlobal++;
    console.log("Global (if): " + variavelGlobal);

    let variavelLocal = 2;
    console.log("Local (if): " + variavelLocal);
}
console.log("Global: " + variavelGlobal);
console.log("Local: " + variavelLocal);