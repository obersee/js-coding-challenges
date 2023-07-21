function solution(array, commands) {
    let answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        let arr = array.slice(commands[i][0] - 1, commands[i][1])
                        .sort((a, b) => a - b);
        answer[i] = arr[commands[i][2] - 1];
    }
    
    return answer;
}

function test() {
    const array = [1, 5, 2, 6, 3, 7, 4];
    const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
    const answer = solution(array, commands);
    console.log(console.log(answer[0] === 5 && answer[1] === 6 && answer[2] === 3));
}

test();
