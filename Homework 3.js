/* 1. Write a recursive function to determine whether all digits of the number are odd or not.*/

function dgtsRvw(n, i = 0) { 

	n = n.toString();
		
	if (n[i] % 2 == 0)  return false;
	
	return (i == n.length - 1
			? true 
			: dgtsRvw(n, i + 1));

}

console.log(dgtsRvw(4211133));
console.log(dgtsRvw(7791));
console.log(dgtsRvw(5)); 


/* 2. Given an array of numbers. Write a recursive function to find its minimal positive element. 
(if such element does not exist, return -1) */

function findMinPstv(arr, i = 0, min = Infinity) { 

	min = (arr[i] >= 0 && arr[i] < min) ? arr[i] : min;
	
	return ((i == arr.length - 1 && isFinite(min)) 
				? min 
				: ((i < arr.length - 1)			
					? findMinPstv(arr, i + 1, min)
					: -1));
		
}

console.log(findMinPstv([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(findMinPstv([45, -9, 15, 5, -78]));
console.log(findMinPstv([-5, -9, -111, -1000, -7]));


/* 3. Write a recursive function which receives  a number as arguments 
and returns the fibonacci sequence as array.*/

function getFibonacciSqnc(n, el = 1, i = 1,  arr) { 
	
	arr = arr ? arr : (n > 0 ? [1] : []);

	if(arr.length < n) {
		
		arr.push(el);
		
		getFibonacciSqnc(n, el + arr[i - 1], i + 1, arr);
	
	}
	
	return arr;

}

console.log(getFibonacciSqnc(0));
console.log(getFibonacciSqnc(1));
console.log(getFibonacciSqnc(2)); 
console.log(getFibonacciSqnc(3)); 
console.log(getFibonacciSqnc(10)); 


/* 4. Given an array of nested arrays. Write a recursive function that flattens it. 
(Hint create function that concats arrays).*/

Array.prototype.concatArr = function(itm) {
	
	if(Array.isArray(itm)){
		
		for (let i = 0; i < itm.length; i++){
			
			this.push(itm[i]);
			
		}

	}
	
	else this.push(itm);
	
	return this; //  ՀԱՐՑ՝ Իսկ ինչու՞ առանց այս տողի չի աշխատում։ Ոնց հասկացել էի, սա ավտոմատ պետք է լիներ, չէ՞
	
};

function getFlttndArr(arr) { 
	
 return arr.reduce(function (t, el) {
	 
    return t.concatArr(Array.isArray(el) 
						? getFlttndArr(el) 
						: el);
							
  }, []);

}

// ՀԱՐՑ՝ Բայց եթե Recursion-ով լուծելու պահանջ չլիներ, կարելի՞ էր ստորև ձևով լուծել։

function getFlttndArrWithoutRecursion(arr) { 
	
	return arr.join(',').split(',').map((v) => +v);

}

console.log(getFlttndArr([1, [3, 4, [1, 2]], 10]));
console.log(getFlttndArr([14, [1, [[[3, []]], 1]], 0]));

console.log(getFlttndArrWithoutRecursion([1, [3, 4, [1, 2]], 10]));
console.log(getFlttndArrWithoutRecursion([14, [1, [[[3, []]], 1]], 0]));


/* 5. Given a number. Write a function that calculates its sum of the digits 
and if that sum has more than 1 digit find the sum of digits of that number. 
Repeat that process if needed and return the result. */

function getSumOfDgts(n) { 
	
	let sum = n.toString().split('').reduce((t, el) => (+t + +el));

	return sum > 9 ? getSumOfDgts(sum) : sum;

}

console.log(getSumOfDgts(14));
console.log(getSumOfDgts(29));
console.log(getSumOfDgts(999999999999)); 



/* ------------ Additionally ------------  */


/*  BubbleSort */

function bubbleSortFF(arr){
	
	let cnt = 0;

	let mode = true;
	
	for (let i = 0;(mode  && i < arr.length - 1); i++){

		for (let j = 0; j < arr.length - 1; j++){
			
			mode = false;
			
			cnt++;
			
			if(arr[j] > arr[j + 1]) {
				
				let c = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = c;
				mode = true;

			}
		}
	}

return 'for-for looped '+cnt+' times. Sorted array ['+arr+']';
	
}

function bubbleSortWW(arr){
	
	let i = 0;
	
	let cnt = 0;
	
	let mode = true;
	
	while(mode  && i < arr.length - 1){
		let j = 0;
		while(j < arr.length - 1){
			
			mode = false;
			
			cnt++;
			
			if(arr[j] > arr[j + 1]) {
				
				let c = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = c;
				mode = true;
			}
			j++
		}
		
		i++;

	}

return 'while-while looped '+cnt+' times. Sorted array ['+arr+']';
	
}

function bubbleSortWF(arr){
	
	let i = 0;
	
	let cnt = 0;
	
	let mode = true;
	
	while(mode  && i < arr.length - 1){
		
		let j = 0;
		
		for (let j = 0; j < arr.length - 1; j++){
			
			mode = false;
			
			cnt++;
			
			if(arr[j] > arr[j + 1]) {
				
				let c = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = c;
				mode = true;

			}
		}
		
		i++;

	}

return 'while-for looped '+cnt+' times. Sorted array ['+arr+']';
	
}


function bubbleSortFW(arr){
	
	let cnt = 0;

	let mode = true;
	
	for (let i = 0;(mode  && i < arr.length - 1); i++){

	let j = 0;
	
		while(j < arr.length - 1){
			
			mode = false;
			
			cnt++;
			
			if(arr[j] > arr[j + 1]) {
				
				let c = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = c;
				mode = true;
			}
			j++
		}
	}

return 'for-while looped '+cnt+' times. Sorted array ['+arr+']';
	
}


console.log(bubbleSortFF([7,7,1,2,3,4,5,6]));
console.log(bubbleSortWW([7,7,1,2,3,4,5,6]));
console.log(bubbleSortWF([7,7,1,2,3,4,5,6]));
console.log(bubbleSortFW([7,7,1,2,3,4,5,6]));


/* random */

function randomBtwn (from, to){
	
	return Math.random() * (to - from) + from; 
	
}

console.log(randomBtwn(25,1000))


/* Symbol.iterator 

Print every 10 seconds in 30 seconds from now */

let o = {};

o[Symbol.iterator] = function () {
	
	let iterator = {
		
		now : Date.now(),
		next: function (){
			if (Date.now() <= this.now + 30000){

				return {
					done : false,
					value : ((this.now - Date.now()) % 10000 == 0 ? Date(Date.now()) : ''),
				}

			}
			else {
				return {
				done: true,
				}
			}
		},
	}
	return iterator;
}



for (let t of o) {
console.log(t);
}












 