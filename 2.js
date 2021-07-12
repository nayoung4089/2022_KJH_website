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
one.addEventListener('click', ()=>{
    onew.style.display = "block";
    twow.style.display = "none";
    threew.style.display = "none";
    fourw.style.display = "none";
});
two.addEventListener('click', ()=>{
    onew.style.display = "none";
    twow.style.display = "block";
    threew.style.display = "none";
    fourw.style.display = "none";
});
three.addEventListener('click', ()=>{
    onew.style.display = "none";
    twow.style.display = "none";
    threew.style.display = "block";
    fourw.style.display = "none";
});
four.addEventListener('click', ()=>{
    onew.style.display = "none";
    twow.style.display = "none";
    threew.style.display = "none";
    fourw.style.display = "block";
});

