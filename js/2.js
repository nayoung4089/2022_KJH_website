var butone = document.getElementById("firstclickbutton");
var buttwo = document.getElementById("secondclickbutton");
var onewriting = document.getElementById("first__click");
var twowriting = document.getElementById("second__click");
var bback = document.querySelector('.back');
// 왜 한번에 back 지정이 안되지? queryselectorall해도 안되네 짜증 그래서 그냥 길게씀...
var bbback = document.querySelector('.bback');
// 큰따옴표나 작은따옴표 전혀 상관없고 id는 그냥 쓰면 되지만 class면 . 붙이는 것만 다름!!

// ()=>는 그냥 function() 이건데 편하게 쓰려고 한거.
butone.addEventListener('click', ()=> {
    butone.style.display = 'none';
    buttwo.style.display = 'none';
    onewriting.style.display = 'block';
    back.style.display = 'block';
});
buttwo.addEventListener('click', ()=>{
    butone.style.display = 'none';
    buttwo.style.display = 'none';
    twowriting.style.display = 'block';
    back.style.display = 'block';
});
bback.addEventListener('click', back);
bbback.addEventListener('click', back);

function back(){
    butone.style.display = 'block';
    buttwo.style.display = 'block';
    onewriting.style.display = 'none';
    twowriting.style.display = 'none';
    back.style.display = 'none';
};

var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var onew = document.querySelector('.writing__1');
var twow = document.querySelector('.writing__2');
var threew = document.querySelector('.writing__3');
var fourw = document.querySelector('.writing__4');

onew.style.display = "block";
one.style.backgroundColor = "#172978";
one.style.color="white";
function clickIt(one, onew){
    one.style.backgroundColor = "#172978";
    one.style.color="white";
    onew.style.display = "block";
}
function notClickIt(two, twow){
    two.style.backgroundColor = "white";
    two.style.color="#172978";
    twow.style.display = "none";
}

one.addEventListener('click', ()=>{
    clickIt(one, onew);
    notClickIt(two, twow);
    notClickIt(three, threew);
    notClickIt(four, fourw);
});
two.addEventListener('click', ()=>{
    clickIt(two, twow);
    notClickIt(one, onew);
    notClickIt(three, threew);
    notClickIt(four, fourw);
});
three.addEventListener('click', ()=>{
    clickIt(three, threew);
    notClickIt(two, twow);
    notClickIt(one, onew);
    notClickIt(four, fourw);
});
four.addEventListener('click', ()=>{
    clickIt(four, fourw);
    notClickIt(two, twow);
    notClickIt(three, threew);
    notClickIt(one, onew);
});
