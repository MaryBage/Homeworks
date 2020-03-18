/* 1. Write a program to print X star pattern series using loop. */

function xShape(n){

let x  = '';

	for(let i = 1; i < 2*n; i++){ 

			for(let j = 1; j < 2*n; j++){   
			
				x += (i==j || j==2*n-i) ? '*' :	' ';
			}
		
		x += '\n';
	
	}	
	
	return x;
	
}

console.log(xShape(5));


/* 2. Given an array of numbers. Print frequency of each unique number. 
(Frequency is the count of particular element divided by the count of all elements) */

function getItmFrqncy(arr){

	let obj = {};

	for (let i = 0; i < arr.length; i++){
		
		obj[arr[i]] = Object.keys(obj).indexOf(String(arr[i])) == -1 
						? 1/arr.length 
						: obj[arr[i]] + 1/arr.length;
						
	}
	
	return obj;
	
}

console.log(getItmFrqncy([1, 1, 2, 2, 3]));
console.log(getItmFrqncy([4, 4]));
console.log(getItmFrqncy([1, 2, 3]));


/*3. Given an array of strings and numbers. 
Print the number of integers and the number of strings in the array.*/

function countItmTypeQty(arr){

	let obj = {
		'Numbers' : 0,
		'Strings' : 0
	}

	for (let i = 0; i < arr.length; i++){
		
		let str = typeof(arr[i]);
		str = str.charAt(0).toUpperCase() + str.slice(1) + 's';
		obj[str]++;
						
	}
	
	return obj;
	
}

console.log(countItmTypeQty([1, '10', 'hi', 2, 3]));
console.log(countItmTypeQty([1, 4, 'i am a string', '456']));


/* 4.	Write a function that accepts a string(a sentence) as a parameter and 
finds the longest word within the string. If there are several words which are the longest ones,
 print the 	last word(words can be separated by space, comma or hyphen). */

function getLngstWrd(str){
		
	for ( i = 0; i < str.length; i++){
			
			str = !str[i].match(/^[A-Za-z]+$/)
					? str.replace(str[i], '/')
					: str;
			
		}

	str = str.split("/");
	
	let lngstWrd = '';
	
	for ( j = 0; j < str.length; j++){
			
			lngstWrd = str[j].length > lngstWrd.length 
						? str[j] 
						: lngstWrd;
			
		}
		
	return lngstWrd;

}
	
console.log(getLngstWrd('A revolution without dancing is a revolution not worth having.'));
console.log(getLngstWrd('Which would be worse - to live as a monster, or to die as a good man?'));

  
 /* 5. Write a function to find longest substring in a given a string without repeating characters
except space character. If there are several, return the last one. Consider that all letters are lowercase. */

function getLngstSbstr(txt){
		
	let str = txt.toLowerCase();
	
	let lngstSbstr = '';

	for (let i = 0; i < str.length; i++){
		
		let arrSbstr = [];
		
		let j = i;
		
		while(arrSbstr.join('').replace(/ /g,'').indexOf(str[j]) == -1){

			if(j == str.length) break;
			arrSbstr.push(str[j]);
			j++;
		
		}
		
		lngstSbstr = arrSbstr.length >= lngstSbstr.length 
					? arrSbstr.join('') 
					: lngstSbstr;
		
	}
		
	return lngstSbstr;

}

console.log(getLngstSbstr('there are no two words in the english language more harmful than "good job".'));	
console.log(getLngstSbstr('parting your soup is not a miracle,bruce.'));


/* 6. Write a function to compute a new string from the given one by moving the first char to
come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end. */

function swapChars(str, n = 3){
		
	let arr = [];

	for (let i = 0; i < str.length; i=i+n){
		
		arr.push(str.slice(i,i+n));

	}
	
	for (let j = 0; j < arr.length; j++){
		
		if(arr[j].length==n){
		
			let shrtStr = arr[j].split('')
			shrtStr.push(arr[j][0]);
			shrtStr.shift();
			arr[j]=shrtStr.join('');
			
		}
	}

	return arr.join('');

}

console.log(swapChars('dfgjkloyp'));	
console.log(swapChars('aweyoolp'));


/* 7. Write a function, which receives an array as an argument which elements arrays of numbers. 
Find biggest negative number of each array. Return product of that numbers. 
If there is not any negative number in an array, ignore that one. 
Check that items of the given array are arrays.*/

function productOfNgtvNums(arr){

	let prdct = 1;
	
	let bggstNgtvNum; 
	
	for (let i = 0; i < arr.length; i++){
		
		bggstNgtvNum = 1/-0;

		if(Array.isArray(arr[i])){
			
			for (let j = 0; j < arr[i].length; j++){
	
				bggstNgtvNum = (arr[i][j] < 0 && bggstNgtvNum < arr[i][j] )
								? arr[i][j] 
								: bggstNgtvNum;
			
			}
			
		}
		
		else return 'Invalid Argument'

		prdct *= isFinite(bggstNgtvNum) ? bggstNgtvNum : 1;

	}
	
	if(!isFinite(bggstNgtvNum)) return 'No negatives';
	
	return prdct;
}

console.log(productOfNgtvNums([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));	
console.log(productOfNgtvNums([[3, 4], [11, 0], [5, 6, 7, 8]]));
console.log(productOfNgtvNums([1, 2, 3]));


/* 8.  Write a JavaScript function to get all possible subsets of length 3 of the given array. 	
Assume that all elements in the array are unique. */

function getSubsets(arr){
		
	let arrSubsets = [];
	
	let m = 0;

	if(arr.length >= 3){
		
		for( let i = 0; i <= arr.length - 3; i++){
			
			for( let j = i + 1; j < arr.length - 1; j++){
			
				for( let k = j + 1 ; k < arr.length; k++){
					
					arrSubsets[m] = [];
					arrSubsets[m].push(arr[i]);
					arrSubsets[m].push(arr[j]);
					arrSubsets[m].push(arr[k]);

					m++;
					
				}
				
			}
			
		}
	
	}	
	
	else arrSubsets=arr;

	return arrSubsets;

}

console.log(getSubsets([4]));	
console.log(getSubsets([19, 6]));
console.log(getSubsets([5, 9, 23, 0, -2, -1]));
