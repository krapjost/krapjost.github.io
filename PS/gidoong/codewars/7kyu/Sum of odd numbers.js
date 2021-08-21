function rowSumOddNumbers(n) {
      const s_num = (n * n)-n+1;
      let result = s_num;
      let a_num = 0;
      for (let i = 1; i < n; i++) {
          a_num += 2*i
      }
      result = (result*n)+a_num
      return result;
}

function rowSumOddNumbers(n) {
  return n*n*n
}
