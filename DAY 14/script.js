// let myDiv=document.getElementById("main");

// myDiv.id="container";
// myDiv.className="head";
// // myDiv.style.width="200px";
// // myDiv.style.height="200px";
// // myDiv.style.backgroundColor="green";

// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("class"));
// console.log(myDiv.getAttribute("style"));

// myDiv.setAttribute("style","width:200px;height:200px;background-color:green"); //style is a object which replaces all the property


//ineerHTML,innerText,textContent

// console.log(myDiv.innerHTML);
// myDiv.innerHTML="<input type='password' placeholder='Enter password'><button>submit</button>"
// console.log(myDiv.innerText);
// console.log(myDiv.textContent);

// let myDiv=document.getElementsByClassName("head");

// let colorArr=["red","green","blue","yellow","pink","black","orange","brown"];

// for(let i=0;i<myDiv.length;i++){
//     myDiv[i].style.padding="20px";
//     myDiv[i].style.margin="10px";
//     myDiv[i].style.backgroundColor=colorArr[i];
//     // myDiv[i].style.borderRadius=`${i*10}px`;
// }

// let myDiv=document.querySelector("#main");
// console.log(myDiv);

// let myDiv=document.querySelectorAll(".head");
// console.log(myDiv);

// let newDiv=document.createElement("div");
// newDiv.innerHTML="Hello Techno";
// newDiv.style.backgroundClip="brown";

// document.body.appendChild(newDiv);

// let myDiv1=document.getElementById("main");
// myDiv1.appendChild(newDiv);
// let myDiv3=document.getElementById("container");

// let parentDiv=document.getElementById("heading");
// document.body.insertBefore(newDiv,myDiv3);

//evens
// document.getElementById("btn").onclick=function(){
//     let newDiv= document.createElement("div");
//     newDiv.style.width="200px";
//     newDiv.style.height="200px";
//     newDiv.style.backgroundColor="pink";
//     document.body.appendChild(newDiv);
// }

// document.getElementById("btn").addEventListener("dblclick",(()=>{
//     let newDiv= document.createElement("div");
//     newDiv.style.width="200px";
//     newDiv.style.height="200px";
//     newDiv.style.backgroundColor="pink";
//     document.body.appendChild(newDiv);
// }));

// document.getElementById("box").addEventListener("mouseenter",(()=>{
//     let myDiv=document.getElementById("box");
//     myDiv.style.backgroundColor="pink";
// }));

let obj={};

function getValue(a){
    obj[a.target.name]=a.target.value;
    console.log(obj);
}
document.getElementById("name").addEventListener("change",function(event){
    getValue(event);
});