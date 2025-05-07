// 1️ Imprimindo Números Pares
// Crie uma função que receba um número inteiro N e imprima todos os números pares de 0 até N.
function imprimePares(n) {
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  console.log("1️⃣ Imprimindo Números Pares:");
  imprimePares(10);
  
  // 2️ Soma dos Números de um Array
  // Crie uma função que receba um array de números e retorne a soma dos elementos.
  function somaArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  }
  console.log("2️⃣ Soma do Array:", somaArray([1, 2, 3, 4, 5]));
  
  // 3️ Identificar Número Primo
  // Crie uma função que retorne true se um número for primo e false se não for.
  function ePrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  console.log("3️⃣ Número Primo:", ePrimo(7), ePrimo(10));
  
  // 4️ FizzBuzz
  // Imprima números de 1 a 50 com substituições: Fizz (múltiplos de 3), Buzz (múltiplos de 5), FizzBuzz (ambos).
  function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
      else if (i % 3 === 0) console.log("Fizz");
      else if (i % 5 === 0) console.log("Buzz");
      else console.log(i);
    }
  }
  console.log("4️⃣ FizzBuzz:");
  fizzBuzz();
  
  // 5️ Contador de Vogais
  // Crie uma função que conte a quantidade de vogais em uma string.
  function contaVogais(str) {
    const vogais = str.match(/[aeiouáéíóúâêîôûãõà]/gi);
    return vogais ? vogais.length : 0;
  }
  console.log("5️⃣ Contador de Vogais:", contaVogais("Node.js é incrível"));
  
  // 6️ Tabuada de um Número
  // Crie uma função que imprima a tabuada de um número de 1 a 10.
  function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  console.log("6️⃣ Tabuada:");
  tabuada(5);
  
  // 7️ Inverter String
  // Crie uma função que inverta uma string.
  function inverteString(str) {
    return str.split("").reverse().join("");
  }
  console.log("7️⃣ String Invertida:", inverteString("hello"));
  
  // 8️ Encontre o Maior Número
  // Crie uma função que retorne o maior número de um array.
  function maiorNumero(arr) {
    return Math.max(...arr);
  }
  console.log("8️⃣ Maior Número:", maiorNumero([3, 10, 6, 2]));
  
  // 9️ Palíndromo
  // Crie uma função que retorne true se a string for um palíndromo, false se não for.
  function ePalindromo(str) {
    const limpa = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
    return limpa === limpa.split("").reverse().join("");
  }
  console.log("9️⃣ Palíndromo:", ePalindromo("Ame a ema"), ePalindromo("Olá mundo"));
  
  // 10 Média de Notas
  // Crie uma função que calcule a média de um array de notas e diga se está Aprovado (>=7) ou Reprovado (<7).
  function calculaMedia(notas) {
    const media = notas.reduce((acc, val) => acc + val, 0) / notas.length;
    return media >= 7
      ? `Aprovado - Média: ${media.toFixed(1)}`
      : `Reprovado - Média: ${media.toFixed(1)}`;
  }
  console.log("🔟 Média de Notas:", calculaMedia([8, 7, 6]), calculaMedia([5, 6, 4]));
// Desafio enviado por Sucelly Bruna Oliveira - atualização final
