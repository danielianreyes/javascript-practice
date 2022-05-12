/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    let half = Math.floor(str.length/2);
    let new_string = '';
    for (var i = 0; i < half; i++) {
        new_string += str[i].toUpperCase();
    }
    for (var i = half; i < str.length; i++) {
        new_string += str[i].toLowerCase();
    }
    return new_string;

}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};