// 문제
// 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

// 예제 입력 1 
// 5

// 예제 출력 1 
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
const input = require('fs').readFileSync("/dev/stdin").toString().trim()

const solution = (input) => {
    let result = []
    for(let i = 1; i<input; i++){
      let side = " ".repeat(input-i)
      let middle = '*'.repeat(i*2-1)
      result.push( side + middle )
    }
    for(let i = input; i>=1; i--){
      let side = " ".repeat(input-i)
      let middle = '*'.repeat(i*2-1)
      result.push( side + middle )
    }
    return result.join('\n')
  }
  
  console.log(solution(input))