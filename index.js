"use strict";

const btn = document.querySelectorAll(".box-btn");

const person = {
  firstname: "imran",
  lastname: "khan",
};

let total = document.querySelector(".antal");

let added = document.querySelector(".right-box");

let total2 = 0;
console.log(btn);

for (let i = 0; btn.length > i; i++) {
  btn[i].addEventListener("click", function () {
    added.textContent = btn[i].innerHTML;

    if (btn[i].innerHTML == "iPhone(14)") {
      total.textContent = `${1} 
          Total`;
    } else if (btn[i].innerHTML == "iPhone(13)") {
      total.textContent = `${1} 
          Total`;
    }
  });
} 




let links = document.querySelector(".links")

const mynew = {
    firstname: "imran",
    lastname: "khan",
}

links = mynew; 

console.log(links.firstname)
 


 

const myfunction = function(element) {

    console.log(element)

     element2.insertAdjacentHTML("afterbegin", `<li>${person} </li>` )
}
  myfunction(person)

    myfunction(links)
