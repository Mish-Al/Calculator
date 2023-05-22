const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let accumalativeCalculation

function calculate(button) {
    const value = button.textContent
    
    if ( value == "CE"){
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === "=") {
        console.log(accumalativeCalculation);
        screenDisplay.textContent = eval(accumalativeCalculation)
    } else {
        calculation.push(value)
        accumalativeCalculation = calculation.join('')
        screenDisplay.textContent = accumalativeCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))