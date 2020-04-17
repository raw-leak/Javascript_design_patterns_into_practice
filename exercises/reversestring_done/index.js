// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseForA(str) {
    let newString = ''
    for (let i = (str.length - 1); i > -1; i--) {
        newString = newString + str[i]
    }
    return newString
}

function reverseForB(str) {
    let newString = ''
    for (let i = (str.length - 1); i > -1; i--) {
        newString = newString + str[i]
    }
    return newString
}

function reverseOriginal(str) {
    return Array.from(str).reverse().join("")
}

module.exports = { reverseOriginal, reverseForB, reverseForA };
