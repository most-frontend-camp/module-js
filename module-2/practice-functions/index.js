function keyboardMistakes(string) {
    let string2 = '';
    for (const char of string) {
        if(char === '5') {
            string2 += 'S'
        } else if (char === '4') {
            string2 += 'A'
        } else if (char === '0') {
            string2 += 'O'
        } else if (char === '1') {
            string2 += 'I'
        } else {
            string2 += char;
        }
    }
    return string2;
}
/*
    A is misinterpreted as 4
    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1
*/
console.log(keyboardMistakes("MUB45H1R")) // "MUBASHIR"

console.log(keyboardMistakes("DUBL1N")) // "DUBLIN"

console.log(keyboardMistakes("51NG4P0RE")) // "SINGAPORE"