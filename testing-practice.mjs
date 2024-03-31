function capitalize (string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

function reverseString (string) {
    return string.split('').reverse().join('');
}

// let sfs = reverseString('haverts');
// console.log(sfs)


export { 
    capitalize,
    reverseString
}