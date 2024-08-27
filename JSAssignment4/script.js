//Q1
document.getElementById("para").addEventListener("click",()=>{
    para.textContent="My name is Gauri Suthar";
});


//Q2
document.getElementById("box").addEventListener("mouseover",()=>{
    box.style.backgroundColor="blue";
});


//Q3
let clickBtn=document.getElementById("btn");
let myList=document.getElementById("list");

clickBtn.addEventListener("click",()=>{
    let newList=document.createElement("li");
    newList.textContent="Study";
    myList.appendChild(newList);
})