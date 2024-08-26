//Events,timers function,call back hell,promises,async  await, constructor classes

// let a=20;
// let b=1000;

// function sum(){
//     let x=200;
//     let y=300;
//     return x+y;
// }

// let c=100;

// console.log(a,b,c);
// sum();

// Timers function
// let timeout=setTimeout(()=>{
//     console.log("Hello Techno");
// },5000);

// let interval=setInterval(()=>{
//     console.log(Math.random());
// },2000);

// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Stop button clicked");
//     clearInterval(interval);
// });

// document.getElementById("button").addEventListener("click",function(){
//     console.log("Stop timeout button clicked");
//     clearTimeout(timeout);
// });

//Async Js

// let a=10;
// let b=20;

// console.log(a+b);

// setTimeout(()=>{
//     console.log("Hello Techno");
// },2000);

// console.log(a);

// setTimeout(()=>{
//     console.log("Second timeout");
// },1000);

// console.log(b);

//promises,call backs

// function step1(callback){
//     setTimeout(()=>{
//         console.log("step 1 completed");
//         callback();
//     },1000)
// }
// function step2(callback){
//     setTimeout(()=>{
//         console.log("step 2 completed");
//         callback();
//     },1000)
// }
// function step3(callback){
//     setTimeout(()=>{
//         console.log("step 3 completed");
//         callback();
//     },1000)
// }


// //call back hell
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All steps completed");
//         })
//     })
// })

//promises
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             try {
//                 let data={
//                     firstName:"Gauri",
//                     lastName:"Suthar"
//                 };
//                 return resolve(data);
//             } catch (error) {
//                 return reject(error);
//             }
//         },2000);
//     })
// }


// let fetchedData=fetchData();
// console.log(fetchData);

// //promise states--pending,fulfilled,rejected
// //pending--fulfilled
// //pending-reject

// fetchedData
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// https://fakestoreapi.com/products

// function fetchData(){
//     let data=fetch("https://fakestoreapi.com/products");
//     // console.log("next step after fetching");
//     return data;
// }

// let fetchedData=fetchData(); 
// console.log(fetchedData);

// fetchedData
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//     console.log(e);
// })

document.getElementById("product-button").addEventListener("click",function(){
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
        res.json();
    })
    .then((data)=>{
        data.forEach((item)=>{
            let newDiv=document.createElement("div");
            newDiv.innerHTML=`<img src=${item.image} alt='Product-Image'>
            <h3>${item.title}</h3><p>${item.price}</p>`;
            let myDiv=document.getElementById("products");
            myDiv.appendChild(newDiv);
        })
    })
    .catch((error)=>{
        console.log(error);
    })
});