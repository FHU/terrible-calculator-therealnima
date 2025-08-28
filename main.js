
// step 1 - find all the elements to interact with
const num1input= document.getElementById('number1')
const num2input = document.getElementById('number2')
const calculateButton = document.getElementById('calculateButton')
const operatorselect = document.getElementById('operator')
const resultSpan= document.getElementById('result')

calculateButton.addEventListener('click', calculate)

function calculate() {
    const num1 = parseFloat(num1input.value )
    const num2 = parseFloat(num2input.value )
    const operator=operatorselect.value

    if (isNaN(num1)|| isNaN(num2)){
        resultSpan.innerText='one or both numbers are missing'
        return
    }
    let result;

        if(operator==='+'){
            result = num1+num2
        }
        if (operator==='-'){
            result =num1-num2
        }

        if(operator==="*"){
            result = num1*num2
        }

        if(operator==="/"){
            if (num2===0){
                resultSpan.innerText='YO! you can not do that'
                return
            }
        result = num1 / num2
        }
    resultSpan.innerText=result
    }