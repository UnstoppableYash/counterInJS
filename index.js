let counter = document.getElementById("counter");
let btnAdd = document.getElementById("add");
let btnSubtract = document.getElementById("subtract");
let btnReset = document.getElementById("reset");

let integer = 0;

btnAdd.addEventListener("click", function(){
    integer += 1;
    counter.innerHTML = integer;
});

btnSubtract.addEventListener("click", function(){
    integer -= 1;
    counter.innerHTML = integer;
});

btnReset.addEventListener("click", function(){
    integer = 0;
    counter.innerHTML = integer;
});

