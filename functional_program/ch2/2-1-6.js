const point = { x: 1, y: 2 };

function movePoint(p, dx, dy) {
  p.x += dx;
  p.y += dy;

  return p;
}

// 원본 값 참조하여 연산. 원본 값 변경
const p2 = movePoint(point, 5, 5);
console.log(point); // 6, 7
console.log(p2); // 6, 7
