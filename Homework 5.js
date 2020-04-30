
function bnrySrch (arr, el, i = 0, len = arr.length) {
	
	if(len - i < 1) return -1;
	
	mid = i + Math.round((len - i) / 2);
	
	if(el == arr[mid]) return mid;
	
	if(el < arr[mid]) len = mid - 1;
	
	else i = mid;
	
	return bnrySrch(arr, el, i, len);
	
}

console.log(bnrySrch([1, 12, 15, 19, 20, 23, 27, 31, 34, 42, 45, 53, 61, 66, 68, 71, 75, 77], 68)); 

