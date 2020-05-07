
/*1. Given an array. Determine whether it consists only from unique elements or not.*/

function isAllUnq(arr){
	
	return arr.every((el, i) => arr.lastIndexOf(el) == i); 

}

console.log(isAllUnq([1, 9, 7, 4, 5, 1, 3, 6])); 
console.log(isAllUnq([1, 2, 3, 4, 5])); 


/*2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.*/

function qdrtcSum(arr){
	
	return arr.reduce(function (t, el) { 
				return t += (Math.sqrt(el) % 2 == 0) * el
			}, 0);
	
}

console.log(qdrtcSum([1, 9, 49, 4, 25, 81, 16])); 


/*3. Check whether string is palindrome, or not. */

function isPalindrome(str){
	
	return str == Array.from(str).reverse().join('');
	
}

console.log(isPalindrome('string')); 
console.log(isPalindrome('level')); 

/* 4. Given a word and a list of possible anagrams, select the correct sublist. */

function getAngrmLst(word, list){
	
	return list.filter(el => Array.from(word).sort().join('') == Array.from(el).sort().join(''));
	
}

console.log(getAngrmLst("listen", ["enlists", "google", "inlets", "banana", "inllts",])); 
console.log(getAngrmLst("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])); 



/*Binary search-ը չի աշխատի մեկ փոփոխականով, քանի որ որոնման ընթացքում և ստորին, և վերին շեմը կարող են փոփոխվել,
բայց երեկվա դասից հետո մտքիս եկավ այս լուծման տարբերակը՝ առանց ֆունկցիային լրացուցիչ արգումենտներ տալու։
 */

function bnrySrch (arr, el) {

	if(!bnrySrch.len && !bnrySrch.i){
				bnrySrch.len = arr.length;
				bnrySrch.i = 0;
			}
			
	
	if(bnrySrch.len < bnrySrch.i){
		delete bnrySrch.len;
		delete bnrySrch.i;
		return -1;
	} 
	
	mid = bnrySrch.i + Math.round((bnrySrch.len - bnrySrch.i) / 2);
	
	if(el == arr[mid]) {
		delete bnrySrch.len;
		delete bnrySrch.i;
		return mid;
	}
	
	if(el < arr[mid]) bnrySrch.len = mid - 1;
	
	else bnrySrch.i = mid;
	
	return bnrySrch(arr, el);
	
}


console.log(bnrySrch([1, 12, 15, 19, 20, 23, 27, 31, 34, 42, 45, 53, 61, 66, 68, 71, 75, 77], 27)); 
console.log(bnrySrch([1, 12, 15, 19, 20, 23, 27, 31, 34, 42, 45, 53, 61, 66, 68, 71, 75, 77], 34)); 
console.log(bnrySrch([1, 12, 15, 19, 20, 23, 27, 31, 34, 42, 45, 53, 61, 66, 68, 71, 75, 77], 68)); 
