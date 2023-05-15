// 문제
// B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.

// 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.

// A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35

// 입력
// 첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36)

// B진법 수 N을 10진법으로 바꾸면, 항상 10억보다 작거나 같다.

// 출력
// 첫째 줄에 B진법 수 N을 10진법으로 출력한다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N = input[0];
const B = parseInt(input[1]);

function convertToDecimal(N, B) {
  const digits = N.split('');
  let result = 0;

  for (let i = 0; i < digits.length; i++) {
    let digitValue = 0;

    if (digits[i] >= 'A' && digits[i] <= 'Z') {
      digitValue = digits[i].charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    } else {
      digitValue = parseInt(digits[i]);
    }

    result = result * B + digitValue;
  }

  return result;
}

const decimalNumber = convertToDecimal(N, B);
console.log(decimalNumber);
