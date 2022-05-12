/**
 * Problem 0: If statements
 * 
 * Given a percentage, return the letter grade for that percentage. 
 * (Don't worry about +/-).
 * 
 * A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
 * 
 * @example 92 -> "A", 75 -> "B"
*/
function problem(percentage) {
    if (90 <= percentage && percentage <= 100){
        return 'A';
    } else if (80 <= percentage && percentage <= 89){
        return 'B';
    } else if (70 <= percentage && percentage <= 79){
        return 'C';
    } else if (60 <= percentage && percentage <= 69){
        return 'D';
    } else {
        return 'F';
    }
}

const tests= [
    [100, "A"],
    [92, "A"],
    [90, "A"],
    [85, "B"],
    [70, "C"],
    [69, "D"],
    [0, "F"]
]

module.exports = {problem, tests};