// 문제
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

// 입력
// 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

// 출력
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  // 입력값을 공백을 기준으로 분리하여 A와 B에 저장합니다.
  const [A, B] = input.split(' ').map(Number);

  // A+B, A-B, A*B, A/B(몫), A%B(나머지)를 각각 출력합니다.
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(Math.floor(A / B)); // 몫은 Math.floor를 사용하여 내림합니다.
  console.log(A % B);

  rl.close(); // 입력 종료
});