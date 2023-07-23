function solution(answers) {
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const count = [0, 0, 0];
    let maxNum = 0;
    let answer = [];
     
    for (let i = 0; i < answers.length; i++) {
        if (person1[i % 5] === answers[i]) count[0] += 1;
        if (person2[i % 8] === answers[i]) count[1] += 1;
        if (person3[i % 10] === answers[i]) count[2] += 1;
    }
    
    maxNum = Math.max(...count);
    
    for (let i = 0; i < count.length; i++) {
        if (count[i] === maxNum) {
            answer.push(i + 1);
        }
    }
    
    answer.sort((a, b) => a - b);
    
    return answer;
}

function test() {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [1, 3, 2, 4, 2];

    const newArr1 = solution(arr1);
    const newArr2 = solution(arr2);
    console.log(newArr1[0] === 1);
    console.log(newArr2[0] === 1 && newArr2[1] == 2 && newArr2[2] === 3);
}

test();
