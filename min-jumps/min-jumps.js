'use strict';

// Complete this algo
function minJumps(arr) {
  let jumpCount = 0;
  let spaces = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (spaces < i) {
      jumpCount++;
      spaces = max;
    } else if (spaces > i) {
      return jumpCount;
    }
    max = Math.max(max, arr[i] + i);
  }
  return jumpCount;
}

// const minJumps = arr => {
// 	let jumps = arr.map(el => Infinity)
// 	jumps[0] = 0;

// 	for(let i = 1; i < jumps.length; i++){
// 		for(let j = 0; j <= i; j++){
// 			if(j + arr[j] >= i) {
// 				jumps[i] = Math.min(jumps[i], jumps[j] + 1)
// 			}
// 		}
// 	}
// 	return jumps[arr.length - 1];
// };

module.exports = minJumps;
