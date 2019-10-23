'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let newArr = array   
	while (newArr.length > 1) {
		let midpoint = Math.floor(newArr.length / 2)
		if (newArr[midpoint] === target) {
			return true
		} else if (target < newArr[midpoint]) {
			newArr = newArr.slice(0, midpoint)
		} else{
		newArr = newArr.slice(midpoint)			
		}
	}
	return newArr[0] === target
};
               
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch