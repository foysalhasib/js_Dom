//============================= Single Selector ===========================
//------------------------- getElementById -------------------------------

let val;

val = document.getElementById('main');

console.log(val);




//======= Changing style ======

let Name;

Name = document.getElementById("Rahul").style.color="red";
Name = document.getElementById("Rahul").style.textAlign="center";
Name = document.getElementById("Rahul").style.fontSize="40px";

 console.log(Name);


 //============= Changing Content ========

 let Name2;

Name = document.getElementById("Maliha").style.color="blue";
Name = document.getElementById("Maliha").style.textAlign="center";
Name = document.getElementById("Maliha").style.fontSize="30px";
// Name = document.getElementById("Maliha").textContent="MY name is Tania";
// Name = document.getElementById("Maliha").innerText="MY name is Tania";
Name = document.getElementById("Maliha").innerHTML="<i>MY name is Tania <i/>";

 console.log(Name2);




 //============================ Multi_Selector ====================================
//--------------------------- getElementsByClassName ------------------------------

let list = document.getElementsByClassName('skill');

list[0].style.color ="red";
list[1].style.color ="blue";
list[2].style.color ="#F72798";
list[3].style.color ="#9F70FD";
list[4].style.background ="red";

console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);
console.log(list[4]);



//------------------------ getElementsByTagName -------------------------

 let hasib = document.getElementsByTagName('h6')

console.log(hasib[0]);
console.log(hasib[1]);
console.log(hasib[2]);



// let foysal = document.querySelector('h1')
// let foysal = document.querySelector('#main')
let foysal = document.querySelector('.skill')

console.log(foysal);