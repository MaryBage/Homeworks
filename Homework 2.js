/* 1. Write a function which receives an array and a number as arguments and returns a
new array from the elements of the given array which are larger than the given number. */

function getLargers(arr, n){

	let arrOfLargers = [];

	for(let i = 1; i < arr.length; i++){ 

		if (arr[i] > n) arrOfLargers.push(arr[i])

	}	
	
	if (arrOfLargers.length == 0) 
		
		return 'Such values do not exist.'

	return arrOfLargers;
	
}

console.log(getLargers([10, 25, 16, -5, 30, 15, 24] , 16));
console.log(getLargers([1, 1, 2, -3, 0, 8, 4, 0], 9));


/* 2. Write a function, which receives two numbers as arguments 
and finds all numbers between them such that each digit of the number is even. 
The numbers obtained should be printed in a comma-separated sequence on a single line.*/

function getEvnDgtsNum(n1, n2){
	
	let j = Math.min(n1, n2);
	
	let arr = [];
	
	while (j <= Math.max(n1, n2)) {
		
		if (j % 2 == 0) {
			
			let str = j.toString().split('');
			
			let sum = 0;
			
			for (let i = 0; i < str.length; i++){

				str.splice(i, 1, (str[i] % 2 == 0));
				
				sum += str[i];
				
			}
				
			if (sum == str.length) arr.push(j);
			
		}
		
		j++;

	}
	
	if (arr.length == 0) 
		
		return 'Such numbers does not exist.'

	return arr.join(','); 
	
}

console.log(getEvnDgtsNum(19, 42));
console.log(getEvnDgtsNum(99, 199));


/* 3.   Given an array of numbers which is almost sorted in ascending order. 
Find the index where sorting order is violated. */

function getIndx(arr){
	
	for (i = arr.length - 1; i > 0; i--){
		
		if(arr[i] < arr[i - 1]){
			
			return i;
		}
	
	}
	
	return -1;
}

console.log(getIndx([2, 12, 15, 48, 64]));
console.log(getIndx([-9, -4, -4, 3, 12, 4, 5]));


/* 4. Given an array of integers, find the pair of adjacent elements 
that has the largest product and return that product.*/

function getLrgstPrdct(arr){
	
	let prdct = 0;
	
	for (let i = 0; i < arr.length - 1; i++){
		
		prdct = arr[i] * arr[i + 1] > prdct 
				? arr[i] * arr[i + 1] 
				: prdct;
	}
	
	return prdct;
	
}

console.log(getLrgstPrdct([9, 21, 13, 8, 16]));
console.log(getLrgstPrdct([3, 12, 4, 5, 7, 16]));


/* 5. Given an array of integers. All numbers are unique. 
Find the count of missing numbers between minimum and maximum elements to make integers sequence.*/

function getMissedNumCnt(arr){
	
	let max = Math.max.apply(null, arr);
	
	let min = Math.min.apply(null, arr);
	
	return (max - min - arr.length + 1);
	
}

console.log(getMissedNumCnt([9, 21, 13, 8, 16]));
console.log(getMissedNumCnt([3, 12, 4, 5, 17, 19 ]));


/* 6. Given an array consisting from the arrays of numbers (like a two-dimensional array). 
Find sum of each row and print them as an array. */ 

function getArrOfSums(arr){
	
	let sumArr = [];
	
	for (let i = 0; i < arr.length; i++){
		
		let sum = 0;
	
		for (let j = 0; j < arr[i].length; j++){
			
			sum += arr[i][j];
			
		}
			
		sumArr.push(sum);
	
	}
	
	return sumArr;
}

console.log(getArrOfSums([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
console.log(getArrOfSums([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]));
console.log(getArrOfSums([[1], [2], [3], [4]]));


/* 7. Given an array of integers. Write a function that return new array from first array, 
where removed even numbers, and odd numbers was multiplied with new array length */

function getMltpldEvns(arr){
	
	let newArr = [];
	
	for (let i = 0; i < arr.length; i++){
		
		if(arr[i] % 2 != 0){
			
			newArr.push(arr[i]);
			
		}

	}
	
	for (let j = 0; j < newArr.length; j++){
		
		newArr[j] = newArr[j] * newArr.length ;
		
	}
	
	return newArr;
}

console.log(getMltpldEvns([5, 4, 78, 0, -3, 7]));
console.log(getMltpldEvns([2, 4, 6, 88]));
console.log(getMltpldEvns([]));



/* Object.assign()*/

function assignObjcts() {
	
	let obj = {};
	
	for (let i = 0; i < arguments.length; i++) {
		
		if (typeof(arguments[i]) === 'object' && !Array.isArray(arguments[i])){
			
			for (let key in arguments[i]){
				
				obj[key] = arguments[i][key];
				
			}
			
		}
	}
	
	return obj;
	
}

let o1 = {
	name : 'Mary',
	surname : 'Baghdasryan'
}

let o2 = {
	specialty : 'Economist',
	occupation : 'Analyst',
	wantToBe : 'JavaScript developer'
}

console.log(assignObjcts(o1, 2, 'string', ['a','r','r','a','y'], o2));
