// Primeiro Desafio

const form1 = document.getElementById('form1')

form1.addEventListener('submit', (event) => {

    event.preventDefault()

    const num = Number((document.getElementById('num')).value)
    const res1 = document.getElementById('res1')

    let fibonacci = [0, 1]
    
    while (fibonacci[fibonacci.length - 1] < num) {
        const nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextNumber);
        }
    
        if (fibonacci.includes(num)) {
        res1.innerText = `O número ${num} pertence à sequência de Fibonacci.`
        } else {
        res1.innerText = `O número ${num} não pertence à sequência de Fibonacci.`
        }
})

// Segundo Desafio

const form2 = document.getElementById('form2')

form2.addEventListener('submit', (event) => {

    event.preventDefault()

    const str = (document.getElementById('text')).value
    const letras = [...str]
    const res2 = document.getElementById('res2')
    const letrasA = letras.filter(i => i == 'a' || i == 'A')

    if(letrasA.length == 0){
        res2.innerText =`A letra "A" não aparece no texto.`
    } else {
        res2.innerText = `A letra "A" aparece ${letrasA.length} vezes no texto.`
    }
})