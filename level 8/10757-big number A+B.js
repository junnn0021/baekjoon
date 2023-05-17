// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)

// 출력
// 첫째 줄에 A+B를 출력한다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const sum = A + B;
console.log(sum.toString());