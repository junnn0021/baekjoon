const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  // 입력값을 공백을 기준으로 분리하여 A와 B에 저장합니다.
  const [A, B] = input.split(' ').map(Number);
  
  // A와 B의 합을 출력합니다.
  console.log(A + B);

  rl.close(); // 입력 종료
});
