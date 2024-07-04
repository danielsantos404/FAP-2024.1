let n1 = Number(prompt(`Digite o primeiro número: `))
let n2 = Number(prompt(`Digite o segundo número: `))
let n3 = Number(prompt(`Digite o terceiro número: `))

if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
        alert(`- O primeiro número: ${n1} \n é maior do que \n - O segundo número: ${n2} \n - O terceiro número: ${n3} \n "Ok" para ver a média desses números.`)
    } else {
        alert(`- O primeiro número: ${n1} \n é maior do que \n - O terceiro número: ${n3} \n - O segundo número: ${n2} \n "Ok" para ver a média desses números.`)
    }
    
} else if (n2 > n1 && n2 > n3) {
    if (n1 > n3) {
        alert(`- O segundo número: ${n2} \n é maior do que \n - O primeiro número: ${n1} \n - O terceiro número: ${n3} \n "Ok" para ver a média desses números.`)
    } else {
        alert(`- O segundo número: ${n2} \n é maior do que \n - O terceiro número: ${n3} \n - O primeiro número: ${n1} \n "Ok" para ver a média desses números.`)
    }

} else {
    if (n2 > n1) {
        alert(`- O terceiro número: ${n3} \n é maior do que \n - O segundo número: ${n2} \n - O primeiro número: ${n1} \n "Ok" para ver a média desses números.`)
    } else {
        alert(`- O terceiro número: ${n3} \n é maior do que \n - O primeiro número: ${n1} \n - O segundo número: ${n2} \n "Ok" para ver a média desses números.`)
    }
}

let media = (n1+n2+n3) / 3
alert(`A média é: ${media.toFixed(2)}`)
