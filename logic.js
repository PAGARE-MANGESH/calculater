
let userInput2

function appendValue(value) {
    userInput2 = document.getElementById('result').value += value;
}


let removeresult

function clearResult() {

    removeresult = document.getElementById('result').value = '';

}


function evaluateExpression() {

    const expression = document.getElementById('result').value;
    // const result = on = document.getElementById('result').value;
    const result = eval(expression);
    document.getElementById('result').value = result;

}



function popVlue() {

    let userInter = document.getElementById('result').value

    userInter.toString().split('')
    userInter = userInter.substring(0, userInter.length - 1);


    document.getElementById('result').value = userInter


    console.log(typeof userInter)
    console.log(userInter)

}

