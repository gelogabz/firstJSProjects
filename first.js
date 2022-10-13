const tempConverter = function () {
    let num1 = document.getElementById('inputOne').value;
    // let num2 = document.getElementById('inputTwo').value;
    let result = (Number(num1) - 32) * (5 / 9);
    let resultFinal = parseFloat(result).toFixed(2);
    return resultFinal;
}

const clearField = function () {
    document.getElementById("inputOne").value = "";
    document.getElementById("inputTwo").value = "";
}

const autoConvert = function () {
    let autoConv = document.getElementById('inputOne').value;

    if (autoConv != '') {
        document.getElementById('inputTwo').value = (tempConverter());
    } else {
        document.getElementById('inputTwo').value = ('');
    }
}

/*
// Making 2 input types add with each other 

const functionOne = function () {
    let num1 = document.getElementById('inputOne').value;
    let num2 = document.getElementById('inputTwo').value;
    let result = Number(num1) + Number(num2);
    return result;
}

// Temperature converter

//First Function attempt

function firstFunction() {
    let numOne = 12;
    let numTwo = 15;
    let result = numOne + numTwo;
    alert(result);
};

//Function with Parameters

function secondFunction(num1, num2) {
    let result = num1 + num2;
    alert(result);
    secondFunction(15, 15);
};

// Function with parameters and return

function thirdFunction(num1, num2, num3) {
    let result = num1 + num2 + num3;
    return result;
    alert(thirdFunction(20, 20, 20));
};

*/