// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, "")
    stringB = stringB.replace(/[^\w]/g, "")

    let counter = {}

    for (let character of stringA) {
        let letter = character.toLowerCase()
        counter[letter] = counter[letter] + 1 || 1
    }

    for (let character of stringB) {
        let letter = character.toLowerCase()
        if (!counter[letter] || counter[letter] < 1)
            return false
        counter[letter]--;
    }

    return true

}

module.exports = anagrams;
