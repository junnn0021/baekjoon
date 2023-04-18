// 문제
// 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!

// 입력
// 첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.

// 출력
// A+B+C의 값을 출력한다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);
const c = BigInt(input[2]);

const sum = a + b + c;
console.log(sum.toString());

