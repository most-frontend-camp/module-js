function keyboardMistakes(string) {
    let errors = {'4':'A', '5': 'S','0':'O', '1': 'I'};
    for (const char in string) {
        if(char in errors){
            string = string.replace(char, errors[char])
        }
    }
    return string;
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