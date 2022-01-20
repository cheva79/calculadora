
let historia = ''
let signo = ''
let numero1 = 0
let numero2 = 0
let resultado = 0




button0.addEventListener('click', (e) => {
    e.preventDefault()
    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})
button1.addEventListener('click', (e) => {
    e.preventDefault()
    if(resultado != 0){
        historia = 0
    }

    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})
button2.addEventListener('click', (e) => {
    e.preventDefault()
    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})
button3.addEventListener('click', (e) => {
    e.preventDefault()
    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})
button4.addEventListener('click', (e) => {
    e.preventDefault()
    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})
button5.addEventListener('click', (e) => {
    e.preventDefault()
    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})
button6.addEventListener('click', (e) => {
    e.preventDefault()
    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})
button7.addEventListener('click', (e) => {
    e.preventDefault()
    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})
button8.addEventListener('click', (e) => {
    e.preventDefault()
    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})
button9.addEventListener('click', (e) => {
    e.preventDefault()
    historia = historia + e.target.value
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})

limpiar.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(historia)
    historia = 0
    document.querySelector('#valor').value = parseInt(historia)
    console.log(historia)
})

sumar.addEventListener('click', (e) => {
    console.log('Sumar', e.target.value)
    signo = 'sumar'
    numero1 = parseInt(historia)
    historia = 0
})

restar.addEventListener('click', (e) => {
    console.log('Restar', e.target.value)
    signo = 'restar'
    numero1 = parseInt(historia)
    historia = 0
})

multiplicar.addEventListener('click', (e) => {
    console.log('Multiplicar', e.target.value)
    signo = 'multiplicar'
    numero1 = parseInt(historia)
    historia = 0
})

dividir.addEventListener('click', (e) => {
    console.log('Dividir', e.target.value)
    signo = 'dividir'
    numero1 = parseInt(historia)
    historia = 0
})


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Calculadora')
    numero2 = parseInt(historia)

    switch (signo) {
        case 'sumar':
            resultado = numero1 + numero2
            document.querySelector('#valor').value = resultado
            historia = resultado
            break
        case 'restar':
            resultado = numero1 - numero2
            document.querySelector('#valor').value = resultado
            historia = resultado

            break
        case 'multiplicar':
            resultado = numero1 * numero2
            document.querySelector('#valor').value = resultado
            historia = resultado

            break
        case 'dividir':
            resultado = numero1 / numero2
            document.querySelector('#valor').value = resultado
            historia = resultado

            break

    }

})



