// 문제
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

// 입력
// 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

// 출력
// 주어진 수들 중 소수의 개수를 출력한다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let count = 0;
for (let i = 0; i < N; i++) {
  if (isPrime(numbers[i])) {
    count++;
  }
}

console.log(count);
