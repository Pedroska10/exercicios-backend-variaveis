console.log('Calculadora Juros compostos')
let c = 1000
let i = 0.125
let t = 5
const M = c * (1 + i) ** t
console.log(`O montante sera de ${M.toFixed(2)}`)