//Q1
let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);

//Q2
let arr1=[1,2,3,4,5];
arr1.pop();
console.log(arr1);

//Q3
let arr2=[1,2,3,4,5];
arr2.shift();
console.log(arr2);

//Q4
let arr3=[6,7,8,9,10];
arr3.unshift(5);
console.log(arr3);

//Q5
//removing elements
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(2, 2); 
console.log(arr4); 

//adding elements
let arr5 = [1, 2, 5];
arr5.splice(2, 0, 3, 4);  
console.log(arr5);

//Q6
let array = [1, 2, 3, 4, 5];
let newArr = array.slice(1, 4); 
console.log(newArr);

//Q7
let nums = [1, 2, 3, 4, 5];
let index = nums.indexOf(3);
console.log(index); 

//Q8
let number = [1, 2, 3, 4, 5];
let squaredArr = number.map(x => x * x);
console.log(squaredArr);

//Q9
let digits = [1, 2, 3, 4, 5];
let evenArr = digits.filter(x => x % 2 === 0);
console.log(evenArr); 

//Q10
let digit = [1, 2, 3, 4, 5];
let sum = digit.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 



