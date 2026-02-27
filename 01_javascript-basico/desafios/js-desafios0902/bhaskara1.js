function bhaskara (a, b, c){
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "Não existem raízes reais.";
    }

    let x1 = (- b + Math.sqrt(delta)) / (2 * a);
    let x2 = (- b - Math.sqrt(delta)) / (2 * a);

    return { x1, x2 };
}

console.log (bhaskara(1, -6, 9));
