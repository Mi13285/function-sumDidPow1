function sumDidPow(a, b) {
  const arr = Array.apply(null, Array(b - a)).map((_, i) => i + a);
  function calc(num) {
    const n_arr = String(num)
      .split("")
      .map(Number)
      .map((n, i) => Math.pow(n, i + 1));
    return n_arr.reduce((acc, n) => acc + n);
  }
  return arr.filter((n) => (calc(n) === n ? true : false));
}
console.log(sumDidPow(1, 10));
