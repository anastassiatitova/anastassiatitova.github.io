// Code to open modal window

window.onload=function(){

const modal = document.getElementById("myModal");
const btn = document.getElementById("java");
const span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", function(){
  modal.style.display = "block";
})

span.onclick = function () {
  modal.style.display = "none";
  window.open("hello.html", "_self");
}
}

const p1 = document.getElementById("profile1");
const p2 = document.getElementById("profile2");
const p3 = document.getElementById("profile3");
const p6 = document.getElementById("profile6");
const p7 = document.getElementById("profile7");
const p8 = document.getElementById("profile8");

const d1 = document.getElementById("display1");
const d2 = document.getElementById("display2");
const d3 = document.getElementById("display3");
const d6 = document.getElementById("display6");
const d7 = document.getElementById("display7");
const d8 = document.getElementById("display8");

const txt1 = document.getElementById("text1");
const txt2 = document.getElementById("text2");
const txt3 = document.getElementById("text3");
const txt6 = document.getElementById("text6");
const txt7 = document.getElementById("text7");
const txt8 = document.getElementById("text8");

let csstxt = "padding: 20px; font-size: large; background-color: #d6e8f5; border: 3px solid #2f357d;";

d1.onmouseover = function () {mouseOver1()};
d1.onmouseout = function() {mouseOut1()};
function mouseOver1() {
  d1.innerHTML = txt1.innerHTML;
  d1.style.cssText = csstxt;
}
function mouseOut1() {
  d1.textContent = ""; 
  d1.style.cssText = "" ;
  d1.appendChild(p1);
}

d2.onmouseover = function () {mouseOver2()};
d2.onmouseout = function() {mouseOut2()};
function mouseOver2() {
  d2.innerHTML = txt2.innerHTML;
  d2.style.cssText = csstxt;
}
function mouseOut2() {
  d2.textContent = ""; 
  d2.style.cssText = "" ;
  d2.appendChild(p2);
}

d3.onmouseover = function () {mouseOver3()};
d3.onmouseout = function() {mouseOut3()};
function mouseOver3() {
  d3.innerHTML = txt3.innerHTML;
  d3.style.cssText = csstxt;
}
function mouseOut3() {
  d3.textContent = ""; 
  d3.style.cssText = "" ;
  d3.appendChild(p3);
}

d6.onmouseover = function () {mouseOver6()};
d6.onmouseout = function() {mouseOut6()};
function mouseOver6() {
  d6.innerHTML = txt6.innerHTML;
  d6.style.cssText = csstxt;
}
function mouseOut6() {
  d6.textContent = ""; 
  d6.style.cssText = "" ;
  d6.appendChild(p6);
}

d7.onmouseover = function () {mouseOver7()};
d7.onmouseout = function() {mouseOut7()};
function mouseOver7() {
  d7.innerHTML = txt7.innerHTML;
  d7.style.cssText = csstxt;
}
function mouseOut7() {
  d7.textContent = ""; 
  d7.style.cssText = "" ;
  d7.appendChild(p7);
}

d8.onmouseover = function () {mouseOver8()};
d8.onmouseout = function() {mouseOut8()};
function mouseOver8() {
  d8.innerHTML = txt8.innerHTML;
  d8.style.cssText = csstxt;
}
function mouseOut8() {
  d8.textContent = ""; 
  d8.style.cssText = "" ;
  d8.appendChild(p8);
}






