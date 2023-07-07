// 문제
// 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

// 입력
// 세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

// 출력
// 직사각형의 네 번째 점의 좌표를 출력한다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const points = input.map(line => line.split(' ').map(Number));

const xCoordinates = {};
const yCoordinates = {};

for (const [x, y] of points) {
  if (x in xCoordinates) {
    xCoordinates[x]++;
  } else {
    xCoordinates[x] = 1;
  }
  
  if (y in yCoordinates) {
    yCoordinates[y]++;
  } else {
    yCoordinates[y] = 1;
  }
}

let fourthX, fourthY;

for (const x in xCoordinates) {
  if (xCoordinates[x] === 1) {
    fourthX = parseInt(x);
    break;
  }
}

for (const y in yCoordinates) {
  if (yCoordinates[y] === 1) {
    fourthY = parseInt(y);
    break;
  }
}

console.log(fourthX, fourthY);
