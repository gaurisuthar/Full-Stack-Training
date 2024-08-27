//This

// let user={
//     username:"Gauri",
//     age:"21",
//     getUserDetails:function(){
//         console.log(`Hello My username is ${this.username} and my age is ${this.age}`);
//     }
// }

// user.getUserDetails();

// function Person(name,age){
//     const personObj={
//         username:name,
//         age:age,
//         greet:function(){
//             console.log(`Hello, my name is ${this.username} and my age is ${this.age}`);
//         }
//     }
//     return personObj;
// }

// const person1=Person("Gauri","21");

// person1.greet();

// function Person(name,age){
//     this.username=name;
//     this.age=age;
//     // this.greet=function(){
//     //     console.log(`Hello, my name is ${this.username} and my age is ${this.age}`);
//     // }
// }

// Person.prototype.greet=function(){
//     console.log(`Hello, my name is ${this.username} and my age is ${this.age}`);
// }   //we use this because it does not repeat function with every object that we call and no memory loss will happpen

// const person1= new Person("Gauri","21");
// const person2= new Person("Akshat","21");
// console.log(person1);
// console.log(person2);
// person1.greet();

//classes

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     greet(){
//         console.log(`Hello, my name is ${this.name} and my age is ${this.age}`)
//     }
// }

// const person1=new Person("Gauri","21");
// console.log(person1);

// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} makes a noise`);
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }
//     speak(){
//         console.log(`${this.name} makes a noise`);
//     }
// }

class BankAccount{
    #balance=0; //private property use constructor k baad

    constructor(owner){
        this.owner=owner;
    }

    deposit(amount){
        this.#balance+=amount;
        console.log(`${this.owner} deposited ${amount} current balance : ${this.#balance}`);
    }
}