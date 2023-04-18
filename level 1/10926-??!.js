// 문제
// 준하는 사이트에 회원가입을 하다가 joonas라는 아이디가 이미 존재하는 것을 보고 놀랐다. 준하는 놀람을 ??!로 표현한다. 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어졌을 때, 놀람을 표현하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어진다. 아이디는 알파벳 소문자로만 이루어져 있으며, 길이는 50자를 넘지 않는다.

// 출력
// 첫째 줄에 준하의 놀람을 출력한다. 놀람은 아이디 뒤에 ??!를 붙여서 나타낸다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const username = input.trim(); // 입력값에서 공백을 제거한 후 username 변수에 저장합니다.
  const exclamation = '??!'; // 놀람을 표현하는 문자열을 상수로 선언합니다.
  const result = `${username}${exclamation}`; // 아이디 뒤에 놀람을 표현하는 문자열을 붙입니다.

  console.log(result); // 결과값을 출력합니다.

  rl.close(); // 입력 종료
});
