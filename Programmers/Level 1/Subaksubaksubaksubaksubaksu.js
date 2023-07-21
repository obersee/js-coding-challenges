function solution(n) {
    return "수박".repeat(n).substring(0, n);
}

function test() {
    console.log(solution(3) === "수박수" && solution(4) === "수박수박");
    console.log(solution(1) === "수");
}

test();
