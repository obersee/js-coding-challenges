function solution(participant, completion) {
    let answer = '';
    
    for (let i = participant.length - 1; i >= 0; i--) {
       for (let k = completion.length - 1; k >= 0; k--) {
           if (participant[i] === completion[k]) {
               participant.splice(i, 1);
               completion.splice(k, 1);
               break;
           }
       }
    }
    
    answer = participant[0];
    
    return answer;
}

function test() {
    console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]) === "leo");
    console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
                        ["josipa", "filipa", "marina", "nikola"]) === "vinko");
    console.log(solution(["mislav", "stanko", "mislav", "ana"], 
                        ["stanko", "ana", "mislav"]) === "mislav");
}

test();
