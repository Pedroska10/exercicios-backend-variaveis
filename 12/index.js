console.log('Taxa de juros')
let m = 90000
let c = 60000
let n = 24
const i = (((m / c) ** (1 / n)) - 1) * 100
console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i.toFixed(3)}%, pois após 24 mesesm você teve que pagar ${m} reais.`)