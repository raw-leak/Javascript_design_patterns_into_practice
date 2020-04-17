// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const sign = n < 0 ? -1 : 1
//  const sign = Math.sign(n)
    n = n < 0 ? (n * (-1)).toString() : n.toString()
    n = Number(Array.from(n).reverse().join(''))

    return (n * sign)
}

module.exports = reverseInt;
