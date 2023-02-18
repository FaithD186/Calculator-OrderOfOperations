const equal = document.getElementById("equal")
const num = document.querySelectorAll(".num")
const display = document.getElementById("display")
const clear = document.getElementById("clear")
const operator = document.querySelectorAll(".operator")
var num1 = 0
var num2 = 0
var operatorClick = false
var foundnum1 = false
var foundnum2 = false
var equaled = false
var sign = "0"

num.forEach(function(number){
    number.addEventListener("click", function(){
        if (!(operatorClick)){
            if (equaled === true){
                display.innerHTML = number.innerHTML
                equaled = false
            } else{
                display.innerHTML += number.innerHTML
            }
        }
        else if (operatorClick){
            display.innerHTML = number.innerHTML
            operatorClick = false
        }

        if (!(foundnum1)){
            num1 += number.innerHTML
        }
        else{
            num2 += number.innerHTML
        }
        console.log("num1", num1)
        console.log("num2", num2)
    })
})

operator.forEach(function(op){
    op.addEventListener("click", function(){
        if (!(display.innerHTML.trim() === "")){
            operatorClick = true
            if (!foundnum1){
                foundnum1 = true
                operatorClick = true
                sign = op.innerHTML
            }
            else if (foundnum1){
                console.log("found first two numbers")
                var rslt = calculate()
                foundnum1 = true
                foundnum2 = false
                num1 = rslt
                num2 = 0
                sign = op.innerHTML
            }
        }
        console.log(sign)

    })
})

equal.addEventListener("click", function(){
    calculate()
    equaled = true
    operatorClick = false
    foundnum1 = false
    foundnum2 = false
    num1 = 0
    num2 = 0
})

function calculate(){
    console.log("num1", num1)
    console.log("num2", num2)
    if (sign === "+"){
        console.log("calculating", num1, "+", num2)
        rslt = add(parseInt(num1), parseInt(num2))
        display.innerHTML = rslt
        return rslt
    }
    else if (sign === "-"){
        console.log("calculating", num1, "-", num2)
        rslt = subtract(parseInt(num1), parseInt(num2))
        display.innerHTML = rslt
        return rslt
    }
    else if (sign === "*"){
        console.log("calculating", num1, "*", num2)
        rslt = multiply(parseInt(num1), parseInt(num2))
        display.innerHTML = rslt
        return rslt
    }
    else if (sign === "/"){
        console.log("calculating", num1, "/", num2)
        rslt = divide(parseInt(num1), parseInt(num2))
        display.innerHTML = rslt
        return rslt
    }

}

clear.addEventListener("click", function(){
    display.innerHTML = ""
    foundnum1 = false
    foundnum2 = false
    operatorClick = false
    num1 = 0
    num2 = 0

})


function add (a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a*b
}

function divide(a, b){
    return a / b
}

function operate(operator, a, b){
    if (operator === "+"){
        return add(a, b)
    }
    else if (operator === "-"){
        return subtract(a, b)
    }
    else if (operator === "*"){
        return multiply(a, b)
    }
    else if (operator === "/"){
        return divide(a, b)
    }
}

//
//
// console.log(add(1, 2))
// console.log(subtract(3, 2))
// console.log(multiply(2, 4))
// console.log(divide(6, 2))