function capitalize (string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

function reverseString (string) {
    return string.split('').reverse().join('');
}

const calculator = {
    multiply: function(num1, num2) {
        return num1 * num2;
    },

    add: function(num1, num2) {
        return num1 + num2;
    },

    substract: function(num1, num2) {
        return num1 - num2;
    },

    divade: function(num1, num2) {
        return num1 / num2;
    },
}

function caesarCipher(string, key) {
    let result = '';
    let stringUpper = string.toUpperCase();
    for(let i = 0; i < stringUpper.length; i++) {
            if(stringUpper[i].match(/[A-Z]/)){
            let letterAscii = (stringUpper.charCodeAt([i])- 65 + key) %26 + 65;
            let newLetter = String.fromCharCode(letterAscii);
            result += newLetter;
        } else result+=stringUpper[i];
    }
    return result;
}

function getArrayAverage(array) {
    const sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    const average = Math.round(sum/array.length);

    return average;
}

function analyzeArray(array) {
    const sortedArray = array.sort();
    const average = getArrayAverage(array)
    return {
        average: average,
        min: sortedArray[0],
        max: sortedArray[sortedArray.length-1],
        length: sortedArray.length
    };
}


export { 
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}