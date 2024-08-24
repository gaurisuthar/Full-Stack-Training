// 1. Write a JavaScript program that uses the `push()` method to add an element to an array.
// 2. Create a JavaScript program that removes the last element from an array using the `pop()`
// method.
// 3. Use the `shift()` method to remove the first element from an array.
// 4. Write a program that adds an element to the beginning of an array using the `unshift()` method.
// 5. Modify an array by removing and/or adding elements using the `splice()` method.
// 6. Use the `slice()` method to create a new array from a portion of an existing array.
// 7. Find the index of an element in an array using the `indexOf()` method.
// 8. Create a new array by transforming each element in an existing array using the `map()` method.
// 9. Filter elements from an array that meet a certain condition using the `filter()` method.
// 10. Write a program that calculates a single value from an array using the `reduce()` method.
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



