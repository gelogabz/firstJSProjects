//Practice for JS to use other HTML elements

const arithmeticSelection = function () {
    let select = document.getElementById('selection');
    let value = select.options[select.selectedIndex].value;
    if (value == '+') {
        document.getElementById('answerParagraph').innerHTML = (addSum());
    } else if (value == '-') {
        document.getElementById('answerParagraph').innerHTML = (subDiff());
    } else if (value == 'x') {
        document.getElementById('answerParagraph').innerHTML = (multiProd());
    } else if (value == "/") {
        document.getElementById('answerParagraph').innerHTML = (divQuot());
    }
}

const addSum = function () {
    let num1 = document.getElementById("inputOne").value;
    let num2 = document.getElementById("inputTwo").value;
    let result = Number(num1) + Number(num2);
    let resultFinal = parseFloat(result).toFixed(2);
    return resultFinal;
}

const subDiff = function () {
    let num1 = document.getElementById("inputOne").value;
    let num2 = document.getElementById("inputTwo").value;
    let result = Number(num1) - Number(num2);
    let resultFinal = parseFloat(result).toFixed(2);
    return resultFinal;
}

const multiProd = function () {
    let num1 = document.getElementById("inputOne").value;
    let num2 = document.getElementById("inputTwo").value;
    let result = Number(num1) * Number(num2);
    let resultFinal = parseFloat(result).toFixed(2);
    return resultFinal;
}

const divQuot = function () {
    let num1 = document.getElementById("inputOne").value;
    let num2 = document.getElementById("inputTwo").value;
    let result = Number(num1) / Number(num2);
    let resultFinal = parseFloat(result).toFixed(2);
    return resultFinal;
}




