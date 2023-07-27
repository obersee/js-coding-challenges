function solutionA(s) {
    return Number(s.replace(/zero/gi,"0")
        .replace(/one/gi,"1")
        .replace(/two/gi,"2")
        .replace(/three/gi,"3")
        .replace(/four/gi,"4")
        .replace(/five/gi,"5")
        .replace(/six/gi,"6")
        .replace(/seven/gi,"7")
        .replace(/eight/gi,"8")
        .replace(/nine/gi,"9"));
}

function solutionB(s) {
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for (let i = 0; i < nums.length; i++) {
        let arr = answer.split(nums[i]);
        answer = arr.join(i);
    }

    answer = Number(answer);

    return answer;
}

function test() {
    console.log("- Solution A Test -");
    console.log(solutionA("one4seveneight") === 1478);
    console.log(solutionA("23four5six7") === 234567);
    console.log(solutionA("1zerotwozero3") === 10203);

    console.log();
    
    console.log("- Solution B Test -");
    console.log(solutionB("one4seveneight") === 1478);
    console.log(solutionB("23four5six7") === 234567);
    console.log(solutionB("1zerotwozero3") === 10203);
}

test();
