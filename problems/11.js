/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let split_string = str.split("");
    for (let i = 0; i < split_string.length; i++) {
        if (split_string[i] == ' ') {
            split_string.splice(i,1)
        }
    }
    if (JSON.stringify(split_string).toLowerCase() === JSON.stringify(split_string.reverse()).toLowerCase()) {
        return true
    } else {
        return false
    }
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};