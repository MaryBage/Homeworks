/* 1.	Given a number. Print “odd” if the number is odd and “even” if it’s even. */

function checkNumber(n){

	return n%2 == 0 ? 'even' : 'odd';
	
}

console.log(checkNumber(123));
console.log(checkNumber(35));
console.log(checkNumber(70));


/* 2.	Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0. */

function checkDvsbl(n,m){
	
	return (n%m == 0 || m%n == 0) ? 1 : 0;
 	
}

console.log(checkDvsbl(3,14));
console.log(checkDvsbl(18,2));
console.log(checkDvsbl(7,21));


/* 3.	Given two variables, which are the angles of a triangle. 
Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).*/

function findAngle(n,m){
	
	return (180 - n - m);
	
}

console.log(findAngle(45,90));
console.log(findAngle(30,30));
console.log(findAngle(75,25));


/* 4.	Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).*/

function concateRes(n){
	
	return (String(n)+String(2*n)+String(3*n));
	
}

console.log(concateRes(3));
console.log(concateRes(17));
console.log(concateRes(100));


/*5.	Given a positive integer. Bring the last digit of the number to the beginning.
 Print the new number. If the last digit of the inserted number is 0, number remains the same.*/
 
function getLstDgt(n){
	
	let arr = n.toString().split('');

	if(arr.length>1 && arr[arr.length-1] != 0){

		arr.unshift(arr[arr.length-1])
		arr.pop();
	}
	
	return arr.join('');
			
}
 
 
console.log(getLstDgt(367));
console.log(getLstDgt(1002));
console.log(getLstDgt(250));
console.log(getLstDgt(8));


/*6.	Given five numbers as input. Calculate and print the average of the numbers(without using arrays).*/

function calcAvrg(n1, n2, n3, n4, n5){
	
	return (n1+n2+n3+n4+n5)/5;
	
	
}

console.log(calcAvrg(45, -12, 0, 3, -15));
console.log(calcAvrg(7, 52, -23, 9, -81));

/*7.	Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.*/

function isMultiple(n){
	
	let msg = n;
	
	let ofThree = n%3 == 0;
	let ofFive = n%5 == 0;
	let ofSeven = n%7 == 0;
		
	if(ofThree + ofFive + ofSeven == 3){
		
		msg +=` is a multiple of 3, 5 and 7.`;
	}
	else if(ofThree + ofFive + ofSeven == 2){
		
		msg +=` is a multiple of ${ofThree ? 3 : 5} and ${ofSeven ? 7 : 5}.`;
	}
	
	else if(ofThree + ofFive + ofSeven == 1){
		
		msg +=` is a multiple of ${ofThree ? 3 : ofFive ? 5 : 7}.`;
	}
	
	else{
		
		msg +=` is not a multiple of 3, 5 or 7.`;
	}
	
	return msg;
	
}

console.log(isMultiple(21));
console.log(isMultiple(35));
console.log(isMultiple(13));
console.log(isMultiple(420));
console.log(isMultiple(24));

/*8.	Given an age, figure out whether someone is a baby(1 months - 12 months), 
toddler (1 year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) 
or adult(18 years and more ). Also check that age in months is between 1 and 12. */

function checkAge(age, prop){
	
	let msg = '';
	
	if(prop == 'years') {
		
		msg = age >= 18 ? 'adult' 
				: age >= 13 ? 'teenager' 
				: age >= 3 ? 'child' 
				: 'toddler';
			
	}
	else msg = 'baby'
	
	
	return msg;
}

console.log(checkAge(8, 'months'));
console.log(checkAge(45, 'years'));
console.log(checkAge(3, 'years'));


/* 9.	Given three numbers. Sort them by the ascending order.*/

function sortNumbers(n1, n2, n3){
	
	let arr = [n1, n2, n3];
	
	let sortedArr = [n1];
		
		for (let i = 0; i < arr.length; i++){
			
			if(arr[i] > sortedArr[sortedArr.length-1])
				sortedArr.push(arr[i]);
			if(arr[i] < sortedArr[sortedArr.length-1])
				sortedArr.unshift(arr[i]);
	
		}
	
	return sortedArr;
	
}


console.log(sortNumbers(45 , 26, 78));
console.log(sortNumbers(-23, -456, 0));


/*10.	Percentage marks obtained by a student in three exams are to be entered to a computer. 
An indication of Pass or Fail is given out after the three marks are entered. The criteria for passing are as follows:
a.	A student passes if all three examinations are passed. 
b.	Additionally a student may pass if only one subject is failed but the overall average is greater than or equal to 50. 
The pass mark for an individual subject is 40.
*/

function checkIfPassed(n1, n2, n3){

	let msg = (((n1 < 41) + (n2 < 41) + (n3 < 41)) <= 1 
				&& (n1 + n2 + n3)/3 >= 50)
				? 'Passed'
				: 'Not passed';

	return msg;
}

console.log(checkIfPassed(65, 70, 60));
console.log(checkIfPassed(10, 85, 75));
console.log(checkIfPassed(35, 25, 40));
console.log(checkIfPassed(20, 40, 40));


/* 11.	Find the sign of product of three numbers without multiplication operator. Display the specified sign.*/

function getSgnOfMltplctn(n1, n2, n3){
	
	let sgn = (n1 == 0 || n2 == 0 || n3 == 0) ? 'unsigned' 
				:((n1 < 0) + (n2 < 0) + (n3 < 0)) % 2 == 0 ? '+' : '-';
	
	return sgn;
}


console.log(getSgnOfMltplctn(-14, 5, 0));
console.log(getSgnOfMltplctn(-8, 9, -6));
console.log(getSgnOfMltplctn(4, 19, -2 ));


/* 	Input three numbers a, b, c respectively, 
where a is a non zero number and write a program to solve quadratic equations: 
〖ax〗^2+ bx+c=0. (Hint: use Math.pow or Math.sqrt).*/

function solveQdrtcEqtn(a, b, c){
	
	let msg = 'Enter valid constans';
	
	if(a != 0){
		
		if(c != 0) {
		
			let d = Math.pow(b, 2) - 4 * a * c;
			
			if(d < 0){
				
				msg = 'Solution does not exists';
			}
			else if(d == 0){
				
				let res1 = Math.sqrt(c) * (b < 0 ? 1 : -1);
				
				msg = `Solution is ${res1}.`;
				
			}
			else{
			
				let res1 = (-b + Math.sqrt(d))/ (2 * a);
				
				let res2 = (-b - Math.sqrt(d))/ (2 * a);
				
				msg = `Solutions are ${res1} and ${res2}.`;
			
			}
		
		}
		else {
			
			let res1 = 0;
			
			let res2 = -b / a;
			
			msg = `Solutions are ${res1} and ${res2}.`;
		}

	}

	return msg;
	
}

console.log(solveQdrtcEqtn(1, 2, 1));
console.log(solveQdrtcEqtn(0, 4, -5));
console.log(solveQdrtcEqtn(3, -8, 12));
console.log(solveQdrtcEqtn(5, -13, 6));
console.log(solveQdrtcEqtn(5, -13, 0));

/*13.	Given the following code rewrite it using only two if operators. (Hint: use logical operators).*/

//var n = +prompt();

function foo(n){
var i = 0;
var j = 0;

console.log((n % 2) +'---'+Math.floor(n / 10));
console.log((n % 3) +'---'+(n % 10));

if(n % 2 == 0) {
	console.log((n % 2) );
	if (!Math.floor(n / 10)) {
		console.log(Math.floor(n / 10));
		i++;
	}
}

if(n % 3 == 0) {
	console.log((n % 3));
	if (n % 10 == 1) {
		console.log((n % 10));
		j++;
	}
}

return i;

}

console.log(foo(20));
//console.log(foo(305));


/*14.	Insert a digit and a number. Check whether the digits contains in the number or not.*/

function chkDgt(d,num){
	
	let numArr = num.toString().split('');
	
	let msg = (numArr.indexOf(d.toString()) == -1 ? 'No' : 'Yes');
	
	return msg;
	
}


console.log(chkDgt(5, 2463));
console.log(chkDgt(4, 6));
console.log(chkDgt(8, 45689));


/*15.	Enter a number. Reverse its first and last digits. Print the new number.*/

function rvrsDgts(num){
	
	let numArr = num.toString().split('');
	
	let frstDgt = numArr[0];
	
	let lastDgt = numArr[numArr.length - 1];
	
	if(numArr.length > 1) {
		
		numArr = numArr.slice(1, numArr.length - 1);

		numArr.unshift(lastDgt);
		
		numArr.push(frstDgt);
	
	}
	
	return numArr.join('');
	
}

console.log(rvrsDgts(2));
console.log(rvrsDgts(13));
console.log(rvrsDgts(895796));


/* 16.	Write a program which will compute the area of a rectangular 
or a triangle after prompting the user to type the name of the figure name. 
Also check that entered numbers are positive. 
For the triangle entered numbers are height and and base.
*/

function getArea(type, s1, s2) {
	
	let msg = (s1 <= 0 || s2 <= 0) 
				? 'Please enter only positives'
				: `Square of the ${type} is ${(s1 * (type == 'triangle' ? 0.5 : 1) * s2)}.`;

	return msg;
	
}

console.log(getArea('triangle', 6, 7));
console.log(getArea('rectangle', 8, 5));
console.log(getArea('triangle', 0, 5));


/*17.	(***) Enter a number. Find the difference between its biggest and smallest digits.*/

function getDif(num){
	
	let numArr = num.toString().split('');
	
	let bgstNum = numArr[0];
	
	let smllstNum = numArr[0];
	
	for ( let i = 0; i < numArr.length; i++){
		
		bgstNum = bgstNum < numArr[i] ? numArr[i] : bgstNum;
	
		smllstNum = smllstNum > numArr[i] ? numArr[i] : smllstNum;
		
	}
	
	return (bgstNum-smllstNum);
}

console.log(getDif(5));
console.log(getDif(152));
console.log(getDif(4593653));


/* 17.	Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise. */

function isPrime(num) {
	
	let i = num - 1;
	
	let msg = 'Yes';
	
	do{
		
		if (num % i == 0) {
			
			msg = 'No';
			
			break;
		}
		
		i--;
		
	}
	while( i > 1)
	
	return msg;
}

console.log(isPrime(401));
console.log(isPrime(63));



/*Given a number n ( n>= 0 ). Print nth Fibonacci number.  
(Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)*/

function getFibonacciNum(n){
	
	let sqnc = [0, 1];
	
	let i = 2;
	
	if (n >= 2) {
		do {
			sqnc.push(sqnc[i - 1] + sqnc[i - 2]);
			i++;
		}
		while ( i < n + 1)
	}
		
	return sqnc[n];
	
}


console.log(getFibonacciNum(0));
console.log(getFibonacciNum(2));
console.log(getFibonacciNum(10));
console.log(getFibonacciNum(20));


/*19.	Given a number n( n> 0 ). Print Fibonacci series up to n.*/

function getFibonacciSqnc(n){
	
	let sqnc = [0, 1];
	
	let i = 2;
	

		do {
			
			sqnc.push(sqnc[i - 1] + sqnc[i - 2]);
			i++;
			
		}
		while (sqnc[i - 1] <= n)
	
		if(sqnc[sqnc.length-1] > n) {

			sqnc.pop();

		}
		
	return sqnc.join();
	
}


console.log(getFibonacciSqnc(7));
console.log(getFibonacciSqnc(45));


/*20.	Insert a number. Calculate product and sum of the digits of the number. 
If product is divisible by the sum, print the quotient, otherwise print the remainder.*/

function divPrdctToSum(num){
	
	let msg = 'Cannot calculate.';
	
	if(num > 0){
		
		let numArr = num.toString().split('');
		
		let sum = 0;
		
		let prdct = 1;
		
		for (let i = 0; i < numArr.length; i++){
			
			sum += +numArr[i];
			
			prdct *= numArr[i];
			
		}
		
		msg = (prdct % sum == 0) 
				? `Quotient is ${prdct / sum}.`
				: `Remainder is ${prdct % sum}.`
	
	}
	
	return msg;
}


console.log(divPrdctToSum(1233));
console.log(divPrdctToSum(5));
console.log(divPrdctToSum(0));
console.log(divPrdctToSum(455));


/* 9.	Given three numbers a, b (a ≤ b) and num. 
Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b). */

function createArr(str){
	
	let arr = str.split(' ');
	
	let res = [+arr[0]];
	
	if (arr[2] > 1) {
	
		let stp = (arr[1] - arr[0]) / (arr[2] - 1);

		while(res[res.length-1] < arr[1]){
			
			res.push(+res[res.length-1]+stp);

		}
	
	}
	
	return res;
}


console.log(createArr('1 5 1'));
console.log(createArr('10 100 3'));
console.log(createArr('1 5 6'));

/* 10.	Given an array of numbers. Find the index of the second maximum element.*/

function getScndMaxIndx(arr){
	
	let sortedArr = [];

	for (let i = 0 ; i < arr.length; i++) {
		
		sortedArr.push(arr[i]);
	}
	
	sortedArr.sort(function(a, b){return b-a});
	
	let ScndMaxIndx = arr.indexOf(sortedArr[1]);
	
	return ScndMaxIndx;
	
}

console.log(getScndMaxIndx([23,  -98, 0, -456, 12, 8]));
console.log(getScndMaxIndx([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]));


/*11.	Given an array of numbers, padding amount and repeat count. 
Pad the array in the following way: the padding amount specifies 
how many elements should be taken from the array edges, 
the repeat amount specifies how many times the pad should be repeated. 
Also, you should check that  padding amount <= length of array.*/

function createNewArr(arr, padAmount, repeat){
	
	if (arr.length >= padAmount) {
		
		let i = 1;
		
		do{
			
			arr.unshift(...arr.slice(0,padAmount));
			
			arr.push(...arr.slice(arr.length-padAmount));
			
			i++;
			
		}
		while(i <= repeat)

		return arr;
	
	}
	
	else return 'Invalid padding amount';
	
}

console.log(createNewArr([1, 2, 3, 4], 1, 3));
console.log(createNewArr([1, 2, 3, 4], 2, 1));
console.log(createNewArr([1], 1, 3));
console.log(createNewArr([1], 2, 3));
