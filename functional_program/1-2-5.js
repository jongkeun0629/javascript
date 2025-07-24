function times(n, fn) {
  for (let i = 0; i < n; i++) fn(i);
}

times(10, (i) => console.log(`Hi #${i}`));
