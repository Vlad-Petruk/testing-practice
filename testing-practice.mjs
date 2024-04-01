function capitalize (string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

function reverseString (string) {
    return string.split('').reverse().join('');
}

const calculator = {
    multiply: function(num1, num2) {
        return num1 * num2;
    }
}

export { 
    capitalize,
    reverseString,
    calculator
}