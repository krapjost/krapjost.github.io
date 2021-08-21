const flip = (d, a) => {
   return a.sort((x, y) => d === 'R'? x-y : y-x)
}

console.log(flip('R', [3, 2, 1, 12]));
console.log(flip('L', [1, 4, 5, 3, 5]));
