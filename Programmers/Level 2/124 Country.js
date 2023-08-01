function solution(n) {
    /*
    1 1
    2 2
    3 4
    4 11
    5 12
    6 14
    7 21
    8 22
    9 24
    10 41
    11 42
    12 44
    13 111
    14 112
    15 114
    16 121
    ...
    */
    let answer = '';
    const number124 = [4, 1, 2];
    
    while (n) {
        answer = number124[n % 3] + answer;
        n = (n % 3 === 0) ? n / 3 - 1 : Math.floor(n / 3);
    }
    
    return answer;
}

function test() {
    const arr = [1, 2, 3, 4];
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = solution(arr[i]);
    }

    console.log(newArr[0] === "1" && newArr[1] === "2" && newArr[2] === "4" && newArr[3] === "11");
}

test();
