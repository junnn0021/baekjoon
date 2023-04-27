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

// 먼저 입력값을 받아서 input 변수에 저장합니다.
// 그리고 solution 함수를 정의합니다. 이 함수는 input 값을 인자로 받습니다.
// 함수 안에서는 먼저 출력할 결과를 담을 빈 배열 result를 선언합니다.
// 그리고 첫 번째 반복문에서는 1부터 input - 1까지 반복하면서 삼각형의 윗 부분을 출력합니다.
// 이를 위해서 우선 공백을 만들기 위한 side 변수를 선언하고, input에서 현재 반복 횟수를 뺀 값을 공백으로 채웁니다.
// 그리고 중앙에는 현재 반복 횟수에 해당하는 별의 개수를 구한 다음 middle 변수에 저장합니다.
// 이후 side와 middle을 이어붙여서 result 배열에 추가합니다.
// 두 번째 반복문에서는 input부터 1까지 역순으로 반복하면서 삼각형의 아랫 부분을 출력합니다.
// 이를 위해서 첫 번째 반복문과 마찬가지로 공백을 만들기 위한 side 변수와 별을 만들기 위한 middle 변수를 선언하고, 이를 이어붙여서 result 배열에 추가합니다.
// 마지막으로 result 배열을 개행 문자(\n)를 기준으로 문자열로 이어붙여서 출력합니다.