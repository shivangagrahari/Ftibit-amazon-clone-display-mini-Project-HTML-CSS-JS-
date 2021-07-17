var r = document.getElementById('red')
var bl = document.getElementById('blue')
var p = document.getElementById('purple')
var b= document.getElementById('black')

var ird = document.getElementById('rd');
var iblck = document.getElementById('blck');
var iblu = document.getElementById('blu');
var ipur = document.getElementById('pur');


ird.style.display = "block";
iblck.style.display = "none";
iblu.style.display = "none";
ipur.style.display = "none";



b.addEventListener('mouseover', function() {

  iblck.style.display = "block";
  ird.style.display = "none";
  iblu.style.display = "none";
  ipur.style.display = "none";
})


r.addEventListener('mouseover', function() {
  ird.style.display = "block";

  iblck.style.display = "none";
  iblu.style.display = "none";
  ipur.style.display = "none";
})

bl.addEventListener('mouseover', function() {
  iblu.style.display = "block";
  ird.style.display = "none";
  iblck.style.display = "none";
  ipur.style.display = "none";
})

p.addEventListener('mouseover', function() {
  ipur.style.display = "block";
  ird.style.display = "none";
  iblck.style.display = "none";
  iblu.style.display = "none";
})
