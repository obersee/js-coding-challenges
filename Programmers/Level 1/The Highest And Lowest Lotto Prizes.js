function solution(lottos, win_nums) {
    let min = 0;
    let max = 0;
    
    const correct = win_nums.filter(num => lottos.includes(num)).length;
    const zeros = lottos.filter(num => num === 0).length;
    
    min = correct > 1 ? 7 - correct : 6;
    max = (correct + zeros) > 1 ? 7 - (correct + zeros) : 6;
    
    return [max, min];
}

function test() {
    const arr1 = [44, 1, 0, 0, 31, 25];
    const arr2 = [31, 10, 45, 1, 6, 19];
    console.log(solution(arr1, arr2)[0] === 3 && solution(arr1, arr2)[1] === 5);
}

test();
