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
