function solution(s) {
    const pivot = s.length / 2;
    
    return s.length % 2 === 0 ? 
        s[pivot - 1] + s[pivot] : s[Math.floor(pivot)];
}

function test() {
    console.log(solution("Mozambique") === "mb" && solution("Nicaragua") === "r");
}

test();
