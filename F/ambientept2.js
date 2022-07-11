
let valores = [8, 3, 2, 9, 2]
console.log(valores)
/*

for ( let pos=0; pos<valores.length; pos++) {
    console.log (` aposiçãp ${pos} tem valor ${valores[pos]} `)
}
*/
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
