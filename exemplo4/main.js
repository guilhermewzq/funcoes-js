function raizQuadrada(numero) {
    return Math.sqrt(numero);
  }
  
  function potenciacao(valor1, valor2) {
    return Math.pow(valor1, valor2);
  }
  
  function multiplicacao(valor1, valor2) {
    return valor1 * valor2;
  }
  
  let numero1 = Number(prompt("Digite o número 1:"));
  let numero2 = Number(prompt("Digite o número 2:"));
  
  let raiz1 = raizQuadrada(numero1);
  let raiz2 = raizQuadrada(numero2);

  console.log(raiz1, raiz2)