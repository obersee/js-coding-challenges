function solution(arr) {
    return arr.filter((v, i) => v !== arr[i + 1]);
}

function test() {
    const arr = [1, 1, 0, 1, 1];
    console.log(solution(arr)[0] === 1 && solution(arr)[1] === 0 && solution(arr)[2] === 1);
}

test();
