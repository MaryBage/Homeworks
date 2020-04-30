
function bnrySrchRec (arr, el, i = 0, len = arr.length) {
	
	if(len - i < 0) return -1;
	
	mid = i + Math.round((len - i) / 2);
	
	if(el == arr[mid]) return mid;
	
	if(el < arr[mid]) len = mid - 1;
	
	else i = mid;
	
	return bnrySrchRec(arr, el, i, len);
	
}

console.log(bnrySrchRec([1, 12, 15, 19, 20, 23, 27, 31, 34, 42, 45, 53, 61, 66, 68, 71, 75, 77], 53)); 


function bnrySrch (arr, el) {
	
	let i = 0;
	
	let len = arr.length;
	
	let mid = -1;
		
	while(len - i > 0){

		mid = i + Math.round((len - i) / 2);
		
		if(el == arr[mid]) return mid;

		if(el < arr[mid]) len = mid - 1;
		
		else i = mid;
		
	}
	
	return mid;

	
}

console.log(bnrySrch([1, 12, 15, 19, 20, 23, 27, 31, 34, 42, 45, 53, 61, 66, 68, 71, 75, 77], 27)); 