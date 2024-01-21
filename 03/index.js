let valorProd = 110;
let dinheiro = 50;
const desconto = valorProd - dinheiro
const pctDesconto = desconto * 100 / valorProd;
console.log(`a porcentagem necessaria de desconto sera de ${pctDesconto.toFixed(2)}`)