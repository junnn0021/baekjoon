// 문제
// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

// 출력
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {

    const [a, b, c] = input.split(' ').map(Number);
    
    const result1 = (a + b) % c;
    const result2 = ((a % c) + (b % c)) % c;
    const result3 = (a * b) % c;
    const result4 = ((a % c) * (b % c)) % c;
    
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);

});