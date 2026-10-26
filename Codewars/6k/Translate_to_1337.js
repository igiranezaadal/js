let obj = {
    a:['4', '@'],
    b : ['|3', '8'],
    d : ['|)', 'o|'],
    e : ['3'],
    f : ['|='],
    g : ['9', '6'],
    h : ['|-|', ']-[', '}-{', '(-)', ')-(', '#'],
    i : ['1', '!', ']['],
    j : ['_|'],
    k : ['|<', '|{'],
    l : ['|_'],
    n : ['|\|'],
    o : ['0'],
    p : ['|2', '|D'],
    q : ['(,)'],
    r : ['|Z', '|?'],
    s : ['5', '$'],
    t : ['+', '7'],
    v : ['|/', '\/'],
    w : ['\^/', '//'],
    x : ['><', '}{'],
    y : ['`/'],
    z : ['(\)'],
};
function toLeet(str){
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (obj[char]) {
            result += obj[char][0]; // Use the first leet representation
        } else {
            result += str[i];
        }
    }    
    return result;
}

console.log(toLeet('surprise')) // '5u|Z|2|?1$3'
console.log(toLeet('hello world')) // '|-|3|_|_0 \\^/0|Z|_|)'
console.log(toLeet('aaaa')) // '4@4@'
console.log(toLeet('pancakes')) // '|24|\\|c@|<35'
console.log(toLeet('meth')) // 'm3+|-|'
console.log(toLeet('no no no no no')) // '|\\|0 |\\|0 |\\|0 |\\|0 |\\|0'
console.log(toLeet('no')) // '|\\|0'
console.log(toLeet('what is this')) // '\\^/|-|4+ 15 7]-[!$'
console.log(toLeet('stupid')) // '5+u|21|)'


// const leetDict = {
    //     'A': '4',
    //     'E': '3',
    //     'I': '1',
    //     'O': '0',
    //     'T': '7'
    // };
    // let result = '';
    // for (let i = 0; i < str.length; i++) {
    //     const char = str[i].toUpperCase();
    //     result += leetDict[char] || str[i];
    // }
    // return result;

// console.log(toLeet("leet")); // Output: "l337"
