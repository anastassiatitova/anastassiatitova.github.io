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






