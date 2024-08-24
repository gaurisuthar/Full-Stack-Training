// 1. Basic Function:
//  Write a function named `sayHello` that takes no parameters and returns the string "Hello, World!".
// 2. Function with Parameters:
//  Create a function `doubleNumber` that takes a number as an argument and returns the number
// multiplied by 2.
// 3. Simple Return Function:
//  Write a function `addTwoNumbers` that accepts two numbers as arguments and returns their sum.
// 4. Arrow Function:
//  Convert the `doubleNumber` function from question 2 into an arrow function.
// 5. Arithmetic Operator:
//  Create a function `subtractTen` that takes a number as an argument and returns the result of
// subtracting 10 from it.
// 6. Comparison Operator:
//  Write a function `isGreaterThanFive` that takes a number as an argument and returns `true` if the
// number is greater than 5, otherwise `false`.
// 7. Logical Operator:
//  Write a function `isBetweenOneAndTen` that takes a number as an argument and returns `true` if
// the number is between 1 and 10 (inclusive), otherwise `false`.
// 8. If-Else Statement:
//  Write a function `isEven` that takes a number as an argument and returns "Even" if the number is
// even, and "Odd" if the number is odd.
// 9. Ternary Operator:
//  Write a function `checkAge` that takes an age as an argument and returns "Adult" if the age is 18
// or above, and "Minor" if the age is below 18. Implement this using the ternary operator.
// 10. Switch Statement:
//  Create a function `getDayType` that takes a number (1-7) as an argument and returns:
//  - "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
//  - "Weekday" if the number is between 1 and 5.
//  Use a `switch` statement to implement this logic.
//Q1
function sayHello(){
    return "Hello, World!";
}

console.log(sayHello());

//Q2
// function doubleNumber(num){
//     return num*2;
// }

// console.log(doubleNumber(5));

//Q3
function addTwoNumbers(a,b){
    return a+b;
}

console.log(addTwoNumbers(5,10));

//Q4
let doubleNum=((num)=>{
    return num*2;
});

let dblNum=doubleNum(4);
console.log(dblNum);

//Q5
let subtractTen=((num)=>{
    return num-10;
});

let sub=subtractTen(5);
console.log(sub);

//Q6
let isGreaterThanFive=((num)=>{
    if(num>5){
        return true;
    } else{
        return false;
    }
});

let greaterNum=isGreaterThanFive(5);
console.log(greaterNum);

//Q7
let isBetweenOneAndTen=((num)=>{
    if(num>=1 && num<=10){
        return true;
    } else{
        return false;
    }
});
let number=isBetweenOneAndTen(1);
console.log(number);

//Q8
let isEven=((num)=>{
    if(num%2===0){
        console.log("Even");
    } else{
        console.log("Odd");
    }
});

let evenOdd=isEven(5);

//Q9
let checkAge = (age) => age >= 18 ? "Adult" : "Minor";
console.log(checkAge(20)); 
console.log(checkAge(16)); 

//Q10
function getDayType(dayNumber) {
    switch(dayNumber) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        case 6:
        case 7:
            return "Weekend";
        default:
            return "Invalid day number";
    }
}

console.log(getDayType(1));
console.log(getDayType(7));
console.log(getDayType(8));

