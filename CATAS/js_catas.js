/*Link del ejercicio kata1: https://www.codewars.com/kata/55b42574ff091733d900002f*/

function friend(friends) {
    return friends.filter(name => name.length === 4);
}

/*Link del ejercicio kata2: https://www.codewars.com/kata/59cfc000aeb2844d16000075*/

function capitalize(s) {
    return s.split('').reduce((result, char, index) => {
        result[0] += index % 2 === 0 ? char.toUpperCase() : char;
        result[1] += index % 2 !== 0 ? char.toUpperCase() : char;
        return result;
    }, ['', '']);
}
/**
 * 
 * @param {*} string 
 * @returns 
 */


/*Link del ejercicio kata3: https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3*/

function calculate(string) {
    const [_, operand, num1, num2] = string.match(/(gains|loses) (\d+) (\d+)/);
    return operand === "gains" ? +num1 + +num2 : +num1 - +num2;
}


/*Link del ejercicio kata4: https://www.codewars.com/kata/586efc2dcf7be0f217000619*/

function reverseSlice(str) {
    return str.split('').reverse().map((_, index) => str.slice(index)).slice(0, str.length);
}


//Link del ejercicio kata5: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

function solve(arr) {
    return arr.map(str => str.split('').filter((char, index) => char.charCodeAt(0) - 96 === index + 1).length);
}



/*Link del ejercicio kata6: https://www.codewars.com/kata/59887207635904314100007b*/

function closest(arr) {
    const closestNum = arr.reduce((prev, curr) => (Math.abs(curr) < Math.abs(prev) ? curr : prev));
    return arr.filter(num => Math.abs(num) === Math.abs(closestNum)).length === 1 ? closestNum : null;
}


/*Link del ejercicio kata7: https://www.codewars.com/kata/589ebcb9926baae92e000001*/
function calculate(string) {
    const [_, operand, num1, num2] = string.match(/(gains|loses) (\d+) (\d+)/);
    return operand === "gains" ? +num1 + +num2 : +num1 - +num2;
}


/*Link del ejercicio kata8: https://www.codewars.com/kata/558ee8415872565824000007*/

function isDivisible(n, ...args) {
    return args.length === 0 || args.every(num => n % num === 0);
}

/*Link del ejercicio kata 9: https://www.codewars.com/kata/56f399b59821793533000683*/

function sortCards(array) {
    const order = {A: 1, T: 10, J: 11, Q: 12, K: 13};
    return array.sort((a, b) => (order[a] || +a) - (order[b] || +b));
}


/*Link del ejercicio kata10: https://www.codewars.com/kata/56f399b59821793533000683*/

function sortGrades(lst) {
    const order = {VB: 0, V17: 20};
    return lst.sort((a, b) => order[a] - order[b]);
}


/*Link del ejercicio kata11: https://www.codewars.com/kata/5a40c250c5e284a76400008c*/

function bouncingBall(initial, proportion) {
    let bounces = -1;
    while (initial > 1) {
        initial *= proportion;
        bounces++;
    }
    return bounces;
}


/*Link del ejercicio kata 12: https://www.codewars.com/kata/57a06b07cf1fa58b2b000252*/

function isItLetter(character) {
    return /^[a-zA-Z]$/.test(character);
}