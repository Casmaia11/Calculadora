function adicionarnumero(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function deletarUltimo() {
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}

function limparDisplay() {
    const display = document.getElementById('display')
    display.value = ''
}

function calcular() {
    const display = document.getElementById('display')
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Erro';
    }
}
