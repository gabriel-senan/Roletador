/*
let container = document.querySelector(".container");
let btn = document.getElementById("girar");
let pessoas = Math.ceil(Math.random() * 1000);

btn.onclick = function() {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
} */

let container = document.querySelector(".pessoa");
let btn = document.getElementById("girar");
let pessoas = 0;

btn.onclick = function() {
    pessoas += Math.ceil(Math.random() * 1000); 
    container.style.transform = "rotate(" + pessoas + "deg)"; 
}
