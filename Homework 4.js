/* 1.  Given an array. Write a recursive function that removes the first element and returns the given array. 
(without using arr.unshift(),assign second element to first, third element to second...)*/

function rmvFrstItm (arr, i = 0) {
	
	if(arr.length < 2 || i == arr.length - 1) 
		
		return arr.slice(0,arr.length - 1);
	
	arr[i] =  arr[i + 1];

	return rmvFrstItm(arr, i + 1);
}


console.log(rmvFrstItm([6, 78, 'n', 0, 1]));
console.log(rmvFrstItm([5]));
console.log(rmvFrstItm([])); 


/* 2. 2. Given an object. Invert it (keys become values and values become keys). 
If there is more than key for that given value create an array. */

function invrtObj (obj) {
	
	for (let key in obj){
	
		if(Object.keys(obj).indexOf(obj[key]) != -1) {
			
			if(Array.isArray(obj[obj[key]])) {
				obj[obj[key]].push(key);
			}
			else {
				obj[obj[key]] = obj[obj[key]].split('');
				obj[obj[key]].push(key);
			}
			
		}
		
		else{
			obj[obj[key]] = key;
		}
		
		delete obj[key];
	}
	
	return obj;
}


console.log(invrtObj({ a: '1', b: '2' }));
console.log(invrtObj({ a: '1', b: '2', c: '2'  }));
console.log(invrtObj({ a: '1', b: '2', c: '2', d: '2' })); 

/* 3. Output the books sorted by the percent in descending order which readStatus is true. */

function sortBooks(arr) {
	
	arr.sort((a, b) => (b.readStatus * b.percent - a.readStatus * a.percent));
		
	return arr;
	
	
}

console.log(sortBooks([ 
{ book: "Catcher in the Rye", readStatus: true, percent: 40}, 
{ book: "Animal Farm", readStatus: true, percent: 20}, 
{ book: "Solaris", readStatus: false, percent: 90 }, 
{ book: "The Fall", readStatus: true, percent: 50 }, 
{ book: "White Nights", readStatus: false, percent: 60 } ,
{ book: "After Dark", readStatus: true, percent: 70 } 
 ]));


/* 4. Given an array and a number N.  
Write a recursive function that rotates an array N places to the left. 
(Hint: to add element to the beginning use arr.unshift()) */
 
 /************VERSION 1: using arr.unshift() and  arr.push()************/
 
 function rotateArr1 (arr, n) {
	
	if(n == 0) return arr;
	
	if(n > 0){
		 arr.push(arr.shift());
		 n--;
	}
	else {
		arr.unshift(arr.pop());
		n++;
	 }
	 
	return rotateArr1(arr, n);
}

 /************VERSION 2: using only arr.unshift()************/

 function rotateArr2 (arr, n) {
	
	if(n == 0) return arr;
	
	n = n > 0 ? n - arr.length : n;
	
	arr.unshift(arr.pop());
	 
	return rotateArr2(arr, n + 1);
	
}


/************VERSION 3: without recursion just a signle row of code ************/

 function rotateArr3 (arr, n) {
	 
	return arr.slice(n).concat(arr.slice(0,n));

}

console.log(rotateArr1(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(rotateArr1(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

console.log(rotateArr2(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(rotateArr2(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

console.log(rotateArr3(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(rotateArr3(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

 
/* 5. Create a function that builds a tree like object given an array with object
 which contains parent and id properties.  */
 
 function buildTree(arr) {
	  
	let findNestedObj = function (obj, parent, id) {

		if(Object.keys(obj).map(Number).indexOf(parent) != -1) {
			return obj[parent][id]={};
		}

		for (let i in obj) {
			
			if (Object.keys(obj[i]).length > 0) {
				 findNestedObj(obj[i], parent, id);
			}
			
		}	
	}
	
	let tree = arr.reduce(function (t, el){

					if(el.parent == null) t[el.id] = {};
					else  findNestedObj (t, el.parent, el.id);

				return t;
				
			},{});

	return tree;
	
}

console.log(buildTree([ 
{parent : null, id : 0}, 
{parent : 0, id : 1}, 
{parent : 0, id : 2}, 
{parent : 1, id : 3}, 
{parent : 1, id : 4}, 
{parent : 2, id : 5}, 
{parent : 4, id : 6}, 

 ]));
 
 
 /* 6.   Write a JavaScript function to get all possible subsets of given length of the given array. 
 Assume that all elements in the array are unique.  */
 
 function getSubsets(arr, n) {
	  
	let subsets = [];
	
	let gnrtSubsets = function(i, src, got, subsets) {

    if (i == 0) {
		
      if (got.length > 0) {
        subsets[subsets.length] = got;
      }
      return;
	  
    }
    for (let j = 0; j < src.length; j++) {

      gnrtSubsets(i - 1, src.slice(j + 1), got.concat([src[j]]), subsets);

    }
	
    return;
  } 
  
  gnrtSubsets(n, arr, [], subsets);

  return subsets;
 }
  
console.log(getSubsets([1, 2, 3, 4], 2));
console.log(getSubsets([1, 2, 3, 4], 3));
console.log(getSubsets([1, 2, 3, 4, 5], 3)); 

/*7. Create constructor function which instances would be objects with already implemented method "map" (like Array.map) .*/

function ObjectWithMap(){
	
	this.map = (func) => {
		
		for (let i in this){
			if(i != 'map') this[i] = func(this[i]);
		}
		
	}
}

let obj = new ObjectWithMap();
obj[1] = 21;
obj[2] = 22;
obj[3] = 23;
obj[4] = 24;
obj.map((el) => el * 5);
console.log(obj);

