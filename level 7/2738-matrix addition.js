// 문제
// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 행렬의 크기 N 과 M이 주어진다. 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.

// 출력
// 첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 행렬의 각 원소는 공백으로 구분한다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const matrixA = [];
const matrixB = [];

for (let i = 1; i <= N; i++) {
  matrixA.push(input[i].split(' ').map(Number));
}

for (let i = N + 1; i <= 2 * N; i++) {
  matrixB.push(input[i].split(' ').map(Number));
}

const resultMatrix = [];
for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(matrixA[i][j] + matrixB[i][j]);
  }
  resultMatrix.push(row);
}

for (let i = 0; i < N; i++) {
  console.log(resultMatrix[i].join(' '));
}
