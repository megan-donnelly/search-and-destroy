'use strict';

// Complete this algo
function minJumps(arr) {
    let jumpCount = 0
    let spaces = 0
    let max = 0
    for(let i = 0; i < arr.length; i++){
        if(spaces < i){
            jumpCount++
            spaces = max
        } else if (spaces > i) {
             return jumpCount  
        }
        max = Math.max(max, arr[i] + i)      
    }
    return jumpCount;   
}
  
module.exports = minJumps         