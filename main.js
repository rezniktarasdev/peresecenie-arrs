
function getInt(...arrs) {
	let result = [];
	let arr0 = arrs.shift();
	for (const elem of arr0) {
		if (inArrays(elem, arrs)) {
			result.push(elem);
		}

	}
	return result;
}

function inArrays(elem, arrs) {
	for (const arr of arrs) {
		if (!inArray(elem, arr)) {
			return false;
		} else {
			return true;
		}
	}
}

function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}

let result = getInt([1, 2, 3], [2, 3,
	4], [4, 3, 2]);
	
console.log(result);
