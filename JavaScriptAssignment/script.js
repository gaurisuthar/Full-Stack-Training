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

