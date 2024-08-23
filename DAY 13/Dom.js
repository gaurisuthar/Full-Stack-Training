let myDiv=document.getElementById("main");
console.log(myDiv);
console.log(myDiv.id);

myDiv.id="container";
console.log(myDiv.id);

myDiv.className="heading";
console.log(myDiv.className);

myDiv.style.width="200px";
myDiv.style.height="200px";

myDiv.style.backgroundColor="red";
myDiv.style.borderRadius="50%";
myDiv.style.border="2px solid black";

console.log(myDiv.getAttribute("id"));
console.log(myDiv.getAttribute("style"));

myDiv.setAttribute("id","main");
console.log(myDiv);