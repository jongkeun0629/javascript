const operations = [(x) => x + 1, (x) => x * 2, (x) => x ** 2];

const values = [1, 2, 3];

const results = operations.map((op) => {
  return values.map(op);
});

console.log(results);
