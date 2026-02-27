function calculadoraImpostos() {

    let precoProduto = 110.80;  // preço do produto
    let temDesconto = true;     // desconto de 10%
    let icms = 19.5;            // ICMS em porcentagem para Curitiba

    let valorOriginal = precoProduto; // valor original

    let valorComDesconto = precoProduto; 

    if (temDesconto) {
        valorComDesconto = precoProduto - (precoProduto * 0.10); // aplica desconto se tiver
    }

    let valorICMS = valorComDesconto * icms / 100; // calcula o valor do ICMS

    let valorFinal = valorComDesconto + valorICMS; // valor final com imposto

    // retorno dos resultados
    return "Valor original: R$ " + valorOriginal +
           "\nTeve desconto: " + temDesconto +
           "\nValor com desconto: R$ " + valorComDesconto +
           "\nICMS aplicado: " + icms + "%" +
           "\nValor do ICMS: R$ " + valorICMS +
           "\nValor final com imposto: R$ " + valorFinal;
}

console.log(calculadoraImpostos());