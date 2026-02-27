function bhaskara (a, b, c){

    if (a === 0){ //validação de a
        return "A variável 'a' não pode ser 0, digite outro valor";
    }

    let delta = b * b - 4 * a * c; //fórmula de delta

    if (delta < 0) { //raízes reais
        return "Não existem raízes reais.";
    }

    if (delta === 0){ //com 1 raiz real
        let x = - b / (2 * a);
        return "Existe apenas uma raiz real: x = " + x;
    }
    //com 2 reaízes reais
    let x1 = (- b + Math.sqrt(delta)) / (2 * a);
    let x2 = (- b - Math.sqrt(delta)) / (2 * a);

    return { x1, x2 };
}

console.log (bhaskara(1, -6, 9));