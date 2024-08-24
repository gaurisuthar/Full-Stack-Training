// Question 1: String Concatenation
// Task: Write a JavaScript program that takes a first name and a last name as input, concatenates them to form a full
// name, and then prints the full name.
// Question 2: If-Else Statements
// Task: Write a JavaScript program that checks if a number is positive, negative, or zero. Print 'Positive', 'Negative', or
// 'Zero' accordingly.
// Question 3: Loops
// Task: Write a JavaScript program that uses a `for` loop to print the numbers from 1 to 10.
// Question 4: Functions
// Task: Write a JavaScript function called `greet` that takes a name as an argument and prints 'Hello, [name]!' to the
// console. Then, call the function with a sample name.
// Question 5: Arrays
// Task: Write a JavaScript program that creates an array of 5 numbers, calculates the sum of all the numbers in the array,
// and prints the result.
//Q1
let concatenateName=((firstName,lastName)=>{
    let fullName=firstName+" "+lastName;
    return fullName;
});

let fullName=concatenateName("Gauri","Suthar");
console.log(fullName);

//Q2
let checkNum=((num)=>{
    if(num>0){
        console.log("Positive");
    } else if(num<0){
        console.log("Negative");
    } else{
        console.log("Zero");
    }
});
checkNum(0);

//Q3
for(let i=1;i<=10;i++){
    console.log(i);
}

//Q4
let greet=((name)=>{
    console.log("Hello,"+name+"!");
});

greet("Gauri");

//Q5
let array=[1,2,3,4,5];
let sum=0;
for(let i=0;i<array.length;i++){
    sum=sum+array[i];
}
console.log(sum);
