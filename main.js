function sumar() {
    let resultado = 0
    for (let campo of campos) {
        resultado = resultado + Number(campo.value)
    }
    document.getElementById('resultado').value = resultado
}

function restar() {
    let resultado = 0
    for (let campo of campos) {
        resultado = resultado - Number(campo.value)
    }
    document.getElementById('resultado').value = resultado
}

function multiplicar() {
    let resultado = 1
    for (let campo of campos) {
        resultado = resultado * Number(campo.value)
    }
    document.getElementById('resultado').value = resultado
}

function dividir() {
    let resultado = 1
    for (let campo of campos) {
        resultado = resultado / Number(campo.value)
    }
    document.getElementById('resultado').value = resultado
}

function operacion(a, b) {
    let resultado = a
    let operador = b
    console.log(resultado)
    console.log(operador)


    for (let campo of campos) {

        if (operador = "sum") {
            resultado = resultado + Number(campo.value)
        }
        if (operador = "res") {
            resultado = resultado - Number(campo.value)
        }
        if (operador = "mul") {
            resultado = resultado * Number(campo.value)
        }
        if (operador = "div") {
            resultado = resultado / Number(campo.value)
        }

    }


    document.getElementById('resultado').value = resultado
}


let campos = document.getElementsByName('campo')

// document.getElementById('sumar').onclick = sumar
document.getElementById('restar').onclick = restar
document.getElementById('multiplicar').onclick = multiplicar
document.getElementById('dividir').onclick = dividir

document.getElementById('sumar').onclick = operacion(0, "div")




