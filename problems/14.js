/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let map = new Map();
    occur = Math.floor(numbers.length/2)
    numbers.forEach(function (item) {
        let count = 0;
        numbers.forEach(function (element) {
            if (element == item) {
                count ++;
            }
        map.set(element, count)
        });
    });
    
    let m = 0;
    let k;
    map.forEach(function (value, key) {
        if (value > m) {
            k = key;
            m = value;
        }
    });
    return k;

}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};