//conditional statements
//if else,switch,ternary operators

//functions
// array objects
//loops

// let count=30;

// if(count==20){
//     console.log("The count is 20");
// } else{
//     console.log("The count is not 20");
// }

// if(count==20){
//     console.log("The count is 20");
// } else if(count>20){
//     console.log("The count is greater than 20");
// }else{
//     console.log("The count is not 20");
// }

// let firstNum=prompt("Enter the first number");
// console.log(firstNum);


//task

/*let userName=prompt("Enter username");
let password=+prompt("Enter password");


if(userName==="admin" && password===123){
    console.log("Auth successful");
} else{
    console.log("Auth failed");
}*/

//ternary operator
// let count=30;
// count===20 ? console.log("The count is 20") :count>20 ? console.log("The count is greater than 20"):console.log("The count is not 20");

//functions

//function declarayion
//function ecpression
//arrow functions

// function sum(){
//     console.log("This is sum function");
// }

// sum();


// const sum=function(){
//     console.log("This is function expression");
// }
// sum();


//arrow functions
let sum=()=>{
    console.log("Arrow function");
}
sum();

let add=(a,b)=>{
    return a+b;
}

let result=add(2,5);
console.log(result);


//2nd difference between var let and const

//global scope/local scope
//Es6 - block scope

//var global scoppe variable but in case of fucntion it becomes local scope variable
//let and const block scope varible

/*{
    var a=20;
}

{
    let  a="Gauri";
    console.log(a);
}

console.log(a);*/

/*function sum(){
    var a=20;
    return a;
}
console.log(a);*/

//arrays and objects

let arr=[10,20,30,40,50];
console.log(arr[arr.length-1]);

let nestedArr=[10,20,30,[1,2,3,4],[20,30,40,["aaa","aab",[true,false]]]];
console.log(nestedArr[nestedArr.length-1]);

let newArr1=nestedArr[nestedArr.length-1];
let newArr2=newArr1[newArr1.length-1];
let newArr3=newArr2[newArr2.length-1];
console.log(newArr3[0]);


//objects

let obj={
    firstName:"gauri",
    lastName:"suthar"
};

obj.section="A";

let keyName="Address";
obj[keyName]="kelwara";

console.log(obj);