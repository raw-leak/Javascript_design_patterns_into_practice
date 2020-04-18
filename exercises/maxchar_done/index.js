// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let characters = {}

    let tempMax = {
        letter: undefined,
        count: undefined
    }

    for (let character of str) {
        characters[character.toLowerCase()] = (characters[character.toLowerCase()] || 0) + 1
    }

    for (let character in characters) {
        if (!tempMax.letter) {
            tempMax = {
                letter: character,
                count: characters[character]
            }
        }

        if (characters[character] > tempMax.count) {
            tempMax = {
                letter: character,
                count: characters[character]
            }
        }
    }

    return tempMax.letter
}

module.exports = maxChar;
