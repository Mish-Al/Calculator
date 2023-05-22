//with reference Ania Kubow [https://youtu.be/8IxIyI3JomE]
const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let accumalativeCalculation

function calculate(button) {
    const value = button.textContent
    
    if ( value == "CE"){
        calculation = []
        screenDisplay.textContent = '0'
    } else if (value === "=") {
        console.log(accumalativeCalculation);
        screenDisplay.textContent = eval(accumalativeCalculation).toFixed(2);
    } else {
        calculation.push(value)
        accumalativeCalculation = calculation.join('')
        screenDisplay.textContent = accumalativeCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))