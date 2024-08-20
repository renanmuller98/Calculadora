// variables

const btnClear = document.querySelector('#btn-clear')
const btnResult = document.querySelector('#btn-result')
const btnFraction = document.querySelector('#btn-dot')
const calc = document.querySelector('#calc')
const result = document.querySelector('#result')

// Get number value

function getNumberValue (value) {
    let result = document.querySelector('#result').innerText = value
    let calc = document.querySelector('#calc').innerText += value
}

// Get operator value

function mathOperator (value) {
    const operatorsExp = new RegExp(/[\+\-\*\/]$/)
    const lastOperator = operatorsExp.test(calc.innerText)

    if (!lastOperator) {
        calc.innerText += value
    }
}

// Get button result

function resultCalc () {
        if (calc.innerText === '') {
            result.innerText = 'Insira um valor'
        } else {
            try {
                document.querySelector('#result').innerText = eval(calc.innerText)
                document.querySelector('#calc').innerText += ' ='
            } catch {
                document.querySelector('#result').innerText = "Operação Inválida"
                document.querySelector('#calc').innerText = ''
            }   
        }
}

// Get clean button

function clear () {
    let input = document.querySelector("#result").innerText = ''
    let input2 = document.querySelector("#calc").innerText = ''
}

// Get dot button 

function getDotBtn (value) {
    const operatorsExp = new RegExp(/[\.]$/)
    const lastOperator = operatorsExp.test(calc.innerText)

    if (!lastOperator) {
        calc.innerText += value
    }
}

btnResult.addEventListener('click', resultCalc)
btnClear.addEventListener('click', clear)