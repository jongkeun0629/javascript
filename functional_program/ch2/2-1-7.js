const point = { x: 1, y: 2 };

function movePoint(p, dx, dy) {
  return { x: p.x + dx, y: p.y + dy };
}

// 원본 값 참조하지만 새로운 객체 생성하여 반환. 원본 불변
const p2 = movePoint(point, 5, 5);
console.log(point); // 1, 2
console.log(p2); // 6, 7
