const calculatorContainer = document.querySelector("#calculator")

function add(n1, n2) { return n1 + n2 }
function substract(n1, n2) { return n1 - n2 }
function multiply(n1, n2) { return n1 * n2 }
function divide(n1, n2) { return n1 / n2 }

let n1 = 0
let n2 = 0
let result = 0
let operator = ""

function operate(operator, n1, n2) {
    n1 = Number(n1)
    n2 = Number(n2)

    if (operator == "+") {
        return add(n1, n2)
    }
    if (operator == "-") {
        return substract(n1, n2)
    } if (operator == "*") {
        return multiply(n1, n2)
    } if (operator == "/") {
        return divide(n1, n2)
    }
}

function updateDisplay() {
    operationDisplay.innerHTML = `<p>${n1} <em>${operator}</em> ${n2}</p>`;
}

function clearDisplay() {
    n1 = 0
    n2 = 0
    operator = ""
    updateDisplay()

}

const addBtn = document.createElement("button");
const subtractBtn = document.createElement("button");
const multiplyBtn = document.createElement("button");
const divideBtn = document.createElement("button");
const clearBtn = document.createElement("button");

addBtn.textContent = "+";
subtractBtn.textContent = "-";
multiplyBtn.textContent = "x";
divideBtn.textContent = "/";
clearBtn.textContent = "C";

const equalsBtn = document.createElement("button");
equalsBtn.textContent = "=";

const operationDisplay = document.createElement("div");

const createNumberButton = (displayNumber) => {
    const number = document.createElement("button");
    number.textContent = displayNumber;
    number.addEventListener("click", () => {
        if (n1 == 0) {
            n1 = displayNumber
            console.log({ n1 })
        } if (operator != "") {
            n2 = displayNumber
            console.log({ n2 })
        }
        updateDisplay()
    })
    return number;
};

clearBtn.onclick = clearDisplay

addBtn.addEventListener("click", () => {
    if (n1 != 0) {
        operator = "+"
        updateDisplay()
    }
})

equalsBtn.addEventListener("click", () => {
    //do the operations here after n1, n2 and operator have been selected
    operationDisplay.innerHTML = `<em>${result}</em>`;
})

calculatorContainer.append(
    operationDisplay,
    createNumberButton("1"),
    createNumberButton("2"),
    createNumberButton("3"),
    addBtn,
    createNumberButton("4"),
    createNumberButton("5"),
    createNumberButton("6"),
    subtractBtn,
    createNumberButton("7"),
    createNumberButton("8"),
    createNumberButton("9"),
    multiplyBtn,
    clearBtn,
    createNumberButton("0"),
    equalsBtn,
    divideBtn
);