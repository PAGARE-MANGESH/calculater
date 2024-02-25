function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}


function evaluateExpression() {
    const expression = document.getElementById('result').value;
    const result = eval(expression);
    document.getElementById('result').value = result;
}


function removeLastValue() {
    let removeLastValue = document.getElementById('result').value += value;
    removeLastValue.pop()

}